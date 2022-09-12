import { ProductPageProps } from '../../../../src/types';
import { IProduct } from '../types/generated/contentful';
import { UpsellsPackage } from '../sources/get-upsells';
import { NacelleProduct } from '@nacelle/client-js-sdk';
import { banner } from './banner';
import { getColorOrderData } from './colorOrder';
import { mobileCartUpsells } from './mobileCartUpsells';
import { productBundle } from './productBundle';
import { productDetails } from './productDetails';
import { productFeatures } from './productFeatures';
import { productSelect, ProductSelectSourceOutput } from './productSelect';
import { productWarranty } from './productWarranty';
import { relatedProducts } from './relatedProducts';
import { variants } from './variants';
import { LookupPrice } from '../runtime/getCurrencyPrices';
import { pricesForLocalization } from './pricesForLocalization';

// During development, incrementally pick out the pieces we have so far.
export type OutputProps = Pick<
  ProductPageProps,
  | 'banner'
  | 'colorOrder'
  | 'mobileCartUpsells'
  | 'productBundle'
  | 'productDetails'
  | 'productFeatures'
  | 'productWarranty'
  | 'relatedProducts'
  | 'variants'
> & {
  productSelect: ProductSelectSourceOutput;
};

// Note: Transforming is only for stuff that needs to be fetched. I.e., don't
// provide `cart` and `context` in the API, because they will come from the
// user's shopping session and runtime context. And the stuff that is hardcoded
// in the application, i.e., not anywhere in Contentful or Nacelle, should not
// be provided here. The worker can pull it in from mock data for now.

// A subset of the stuff on a Contentful IProduct
export type ContentfulInput = Pick<IProduct, 'fields'>;

export interface TransformedData {
  'blendjet-2': OutputProps & { pricesForLocalization: LookupPrice[] };
}

/**
 * Takes fetched data and transforms it into an API with the shape that the UI
 * needs.
 */
export async function transformData(
  contentful: ContentfulInput,
  blendjet2: NacelleProduct,
  sleeve: NacelleProduct,
  smoothies: NacelleProduct,
  smoothiesProtein: NacelleProduct,
  smoothiesLatte: NacelleProduct,
  warranty: NacelleProduct[],
  cartUpsells: UpsellsPackage,
): Promise<TransformedData> {
  const transformedColorOrder = getColorOrderData(blendjet2);
  const output: OutputProps = {
    banner: banner(contentful),
    colorOrder: transformedColorOrder,
    mobileCartUpsells: {
      ...mobileCartUpsells(cartUpsells),
      colorOrder: transformedColorOrder,
    },
    productBundle: productBundle(
      contentful,
      smoothies,
      sleeve,
      smoothiesProtein,
      smoothiesLatte,
    ),
    productDetails: productDetails(contentful),
    productFeatures: productFeatures(contentful),
    productSelect: productSelect(blendjet2),
    productWarranty: productWarranty(warranty),
    relatedProducts: relatedProducts(smoothies),
    variants: variants(contentful, blendjet2),
  };

  return {
    'blendjet-2': {
      ...output,
      pricesForLocalization: pricesForLocalization(output),
    },
  };
}
