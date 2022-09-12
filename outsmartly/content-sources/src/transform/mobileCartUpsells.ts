import { NacelleProduct } from '@nacelle/client-js-sdk';
import {
  UpsellItem,
  UpsellItemProduct,
} from '../../../../src/components/MobileCartUpsells/CartUpsellsItem';
import {
  UpsellBundle,
  UpsellMultiProduct,
  UpsellProduct,
  UpsellsPackage,
} from '../sources/get-upsells';
import {
  getValue,
  getSubscriptionMetafields,
  calculateDiscountPrice,
  getDiscountPercentage,
} from './utils';

export function mobileCartUpsells(upsellsPackage: UpsellsPackage) {
  const transformedUpsells: UpsellItem[] = upsellsPackage.upsells.map(
    (item) => {
      // Common to all upsell types
      const { title, subtitle, upsellType } = item;

      // An undefined title or subtitle can be handled by the UI. Log an error
      // if these are missing, but don't shut everything down.
      if (!title || !subtitle) {
        const name =
          upsellType === 'bundle' ? item.bundleName : item.shopifyProductHandle;
        console.error(
          `mobileCartUpsells: Upsell item '${name}' is missing a title or subtitle.`,
        );
      }

      // Extract and transform depending on the upsell type
      if (upsellType === 'bundle') {
        return transformUpsellBundle(item);
      } else if (upsellType === 'multiple') {
        return transformUpsellMultipleProduct(item);
      }
      return transformUpsellProduct(item);
    },
  );
  return {
    title: upsellsPackage.title,
    items: transformedUpsells,
  };
}

function transformUpsellBundle(item: UpsellBundle): UpsellItem {
  const { title, subtitle, upsellType, bundle } = item;
  const transformed: UpsellItem = {
    title,
    subtitle,
    upsellType,
    products: bundle.map((product) => transformNacelleProduct(product)),
  };
  return transformed;
}

function transformUpsellMultipleProduct(item: UpsellMultiProduct): UpsellItem {
  const { title, subtitle, upsellType, withVarietyPack, selectorLabel } = item;
  // Combine base product and any additional products
  const merged = [item.product, ...item.additionalProducts];
  const transformed: UpsellItem = {
    title,
    subtitle,
    upsellType,
    ...(typeof withVarietyPack !== 'undefined' && { withVarietyPack }),
    ...(selectorLabel && { selectorLabel }),
    products: merged.map((product) => transformNacelleProduct(product)),
  };
  return transformed;
}

function transformUpsellProduct(item: UpsellProduct): UpsellItem {
  const { title, subtitle, upsellType, withVarietyPack, selectorLabel } = item;
  const product = transformNacelleProduct(item.product);
  const transformed: UpsellItem = {
    title,
    subtitle,
    upsellType,
    ...(typeof withVarietyPack !== 'undefined' && { withVarietyPack }),
    ...(selectorLabel && { selectorLabel }),
    product: transformNacelleProduct(item.product),
  };
  return transformed;
}

function transformNacelleProduct(product: NacelleProduct): UpsellItemProduct {
  // First, some checks for missing data
  if (!product) {
    throw Error('mobileCartUpsells: No product was found.');
  }
  if (!product.variants) {
    throw Error('mobileCartUpsells: No product.variants was found.');
  }
  if (
    !product.pimSyncSourceProductId ||
    !product.title ||
    !product.metafields ||
    !product.vendor
  ) {
    throw Error('mobileCartUpsells: item.product is missing properties.');
  }

  // Now, calculate and cobble stuff together
  const discountPercentage = getDiscountPercentage(product.metafields);

  const variantArray = product.variants
    .filter((variant) => variant.availableForSale)
    .map((variant) => {
      if (
        !variant.title ||
        !variant.price ||
        !variant.featuredMedia ||
        !variant.selectedOptions ||
        !variant.sku
      ) {
        throw Error(
          'mobileCartUpsells: Variant was missing either title, price, featuredMedia, sku, or selectedOptions.',
        );
      }
      const { id, title, price, selectedOptions, sku } = variant;
      return {
        id,
        title,
        price,
        selectedOptions,
        featuredMedia: {
          src: variant.featuredMedia?.src,
          alt: variant.featuredMedia?.altText ?? '',
        },
        sku,
      };
    });

  const { id, title, handle, vendor } = product;
  const transformed: UpsellItemProduct = {
    id,
    title,
    handle,
    subscriptionMetafields: getSubscriptionMetafields(product.metafields),
    usaOnly:
      getValue(product.metafields, {
        namespace: 'shipping',
        key: 'eligible_countries',
      }) === 'US',
    discountPercentage,
    pimSyncSourceProductId: product.pimSyncSourceProductId,
    variants: variantArray.map((variant) => {
      return {
        ...variant,
        discountPrice: calculateDiscountPrice(
          variant.price,
          discountPercentage,
        ),
      };
    }),
    vendor,
  };
  return transformed;
}
