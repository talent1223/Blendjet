import { fetchFromContentful } from '../utils/fetch-from-contentful';
import {
  IArticle,
  IBlog,
  IBundles,
  IBundlesFields,
  IProduct,
  IProductReference,
  IProductReferenceFields,
  IQueueFields,
  IRecipe,
  IRecipeCategory,
} from '../types/generated/contentful';
import { getProductFromNacelle } from '../utils/fetch-nacelle';
import { NacelleProduct } from '@nacelle/client-js-sdk';

// Create a new type that starts with the properties from Contentful's
// IProductReferenceFields, but replaces the `product` property (with `sys`,
// `metadata`, `fields`, etc.) with a new `product` property that is a Nacelle
// product
export interface UpsellProduct
  extends Omit<IProductReferenceFields, 'product'> {
  product: NacelleProduct;
  upsellType: 'single';
}

// Same as above, but in addition to replacing `product`, also replace
// `additionalProducts` with an array of Nacelle products
export interface UpsellMultiProduct
  extends Omit<IProductReferenceFields, 'product' | 'additionalProducts'> {
  product: NacelleProduct;
  additionalProducts: NacelleProduct[];
  upsellType: 'multiple';
}

// Start with Contentful's IBundlesFields and add a `bundle` property
export interface UpsellBundle extends IBundlesFields {
  bundle: NacelleProduct[];
  upsellType: 'bundle';
}

// Add `upsellType` to the types defined above to create a "discriminated union"
export type Upsell = UpsellProduct | UpsellMultiProduct | UpsellBundle;

// An "UpsellsPackage" is a `title` along with an array of Contentful upsells
export type UpsellsPackage = {
  title: string;
  upsells: Upsell[];
};

// The above types are the finalized types, ready for transforming. But we need
// to define types for handling the possibility that the product does not exist
// when fetched from Nacelle.
type MaybeNacelleProduct = NacelleProduct | undefined;

type UpsellProductRaw = Omit<UpsellProduct, 'product'> & {
  product: MaybeNacelleProduct;
};
type UpsellMultiProductRaw = Omit<
  UpsellMultiProduct,
  'product' | 'additionalProducts'
> & {
  product: MaybeNacelleProduct;
  additionalProducts: MaybeNacelleProduct[];
};
type UpsellBundleRaw = Omit<UpsellBundle, 'bundle'> & {
  bundle: MaybeNacelleProduct[];
};
type UpsellRaw = UpsellProductRaw | UpsellMultiProductRaw | UpsellBundleRaw;

/**
 * Fetches upsell data from Contentful, retrieves corresponding product data
 * from Shopify, and returns an upsell package ready for transformation.
 */
export async function getUpsells(): Promise<UpsellsPackage> {
  const contentfulResponse = await fetchFromContentful<IQueueFields>({
    contentType: 'queue',
    handle: 'cart-upsells-bundle',
  });

  if (contentfulResponse.items.length === 0) {
    return {
      title: 'No items for that handle',
      upsells: [],
    };
  }

  // For the matching queue, grab the fields object (title, handle, items)
  const upsellQueue = contentfulResponse.items[0].fields;

  // Fetch the corresponding Nacelle product for each item in the upsell queue
  const products = await getProductsForUpsells(upsellQueue.items);

  // Bundle these together as an "upsells package"
  return {
    title: upsellQueue.title,
    upsells: filterProducts(products),
  };
}

/**
 * For each item in the upsell queue, use the shopifyProductHandle defined in
 * the Contentful data to fetch the corresponding Nacelle product.
 */
async function getProductsForUpsells(
  ctfUpsells: (
    | IArticle
    | IBlog
    | IBundles
    | IProductReference
    | IRecipe
    | IRecipeCategory
  )[],
): Promise<UpsellRaw[]> {
  return await Promise.all(
    ctfUpsells.map(async (item) => {
      // If this upsell item has multiple products, get the corresponding
      // Nacelle product for each additional product. Then combine those with
      // the base Nacelle product
      if ((item.fields as IProductReferenceFields).hasMultipleProducts) {
        const fields = item.fields as IProductReferenceFields;
        const additionalProducts = await Promise.all(
          fields.additionalProducts?.map(async (ctfProduct: IProduct) => {
            const product = await getProductFromNacelle(
              ctfProduct.fields.handle,
            );
            return product;
          }) ?? [],
        );
        if (!fields.shopifyProductHandle) {
          throw Error(
            'getProductsForUpsells: fields.shopifyProductHandle is undefined.',
          );
        }
        const product = await getProductFromNacelle(
          fields.shopifyProductHandle,
        );
        const output: UpsellMultiProductRaw = {
          ...item.fields,
          product,
          additionalProducts,
          upsellType: 'multiple',
        };
        return output;
      }

      // If this upsell item doesn't have multiple products but it does have
      // a shopifyProductHandle...fetch the corresponding Nacelle product
      else if ((item.fields as IProductReferenceFields).shopifyProductHandle) {
        const fields = item.fields as IProductReferenceFields;
        const product = await getProductFromNacelle(
          // If handle is undefined, it will be filtered out above. Hence, the !
          fields.shopifyProductHandle!,
        );
        const output: UpsellProductRaw = {
          ...item.fields,
          product,
          upsellType: 'single',
        };
        return output;
      }

      // If this item has a `bundleName`, then it's a bundle. Use the handles in
      // the `bundle` array to retrieve the corresponding Nacelle products.
      else if ((item.fields as IBundlesFields).bundleName) {
        const fields = item.fields as IBundlesFields;
        if (fields.bundleGroup && fields.bundleCollection) {
          const { bundleGroup, bundleCollection, ...rest } = fields;
          const handles = [
            ...fields.bundleGroup?.map(
              (item) => item.fields.product?.fields.handle,
            ),
            ...fields.bundleCollection?.map((item) => item.fields.handle),
          ];
          const bundle = await Promise.all(
            handles
              .filter((handle): handle is string => !!handle)
              .map(async (handle) => {
                const product = await getProductFromNacelle(handle);
                return product;
              }),
          );
          const output: UpsellBundleRaw = {
            ...rest,
            bundle,
            upsellType: 'bundle',
          };
          return output;
        }
      }

      // If we haven't returned yet with one of the expected types then there
      // was a new upsell type that we don't know about yet.
      throw Error(`Unknown upsell type: ${JSON.stringify(item)}`);
    }),
  );
}

/**
 *
 * A user-defined type-guard. Returns a type predicate, which lets you narrow a
 * type down to a specific type. See:
 * https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
 */
function isProductReference(
  item:
    | IArticle
    | IBlog
    | IBundles
    | IProductReference
    | IRecipe
    | IRecipeCategory,
): item is IProductReference {
  return 'shopifyProductHandle' in item.fields;
}

/**
 * Filters out upsells with products that don't exist or are not available for
 * sale.
 */
function filterProducts(upsells: UpsellRaw[]): Upsell[] {
  const filteredProducts = upsells.filter((item): item is Upsell => {
    // Filter out a bundle upsell if any of the products are unavailable
    if (item.upsellType === 'bundle') {
      const products = item.bundle.filter(isDefined).filter(isAvailable);
      return products.length === item.bundle.length;
    }
    // Filter out a multi-product upsell if any of the products are unavailable
    else if (item.upsellType === 'multiple') {
      const products = item.additionalProducts
        .filter(isDefined)
        .filter(isAvailable);
      return products.length === item.additionalProducts.length;
    }
    // At this point we know it is upsellType = 'single'
    if (!item.product) {
      return false;
    }
    // Filter out a single product upsell if the product is unavailable
    return isAvailable(item.product);
  });

  return filteredProducts;
}

/**
 * Generic user-defined type guard function. Given a thing with (ExampleType |
 * undefined), it asserts that the thing is of type ExampleType if it is not
 * null or undefined. Works great for filtering (NacelleProduct | undefined)
 * down to just NacelleProduct.
 */
function isDefined<T>(thing: T | null | undefined): thing is T {
  return Boolean(thing);
}

/**
 * Filter helper function; returns true if product exists and is available
 */
function isAvailable(product: NacelleProduct): boolean {
  return !!(
    product.id && // product id isn't null (aka empty nacelle object)
    product.availableForSale
  );
}
