import { NacelleProduct } from '@nacelle/types';
import { ProductPageProps } from '../../../../src/types';
import { Product } from '../../../../src/hooks/useSharedState';

export type ProductSelectSourceOutput = {
  product: Product;
  jetpackCategory: ProductPageProps['productSelect']['jetpackCategory'];
};

export function productSelect(blendjet2: NacelleProduct) {
  if (!blendjet2.title) {
    throw Error('productSelect: No shopify.title was found.');
  }
  if (!blendjet2.productType) {
    throw Error('productSelect: No shopify.productType was found.');
  }
  if (!blendjet2.pimSyncSourceProductId) {
    throw Error('productSelect: No shopify.pimSyncSourceProductId was found.');
  }

  const looxRating = Number(
    blendjet2.metafields?.find((item) => item.key === 'avg_rating')?.value,
  );

  if (!looxRating) {
    throw Error('productSelect: No looxRating was found.');
  }

  const looxRaters = Number(
    blendjet2.metafields?.find((item) => item.key === 'num_reviews')?.value,
  );

  if (!looxRaters) {
    throw Error('productSelect: No looxRaters was found.');
  }

  if (
    !blendjet2.metafields ||
    !blendjet2.vendor ||
    !blendjet2.priceRange?.currencyCode
  ) {
    throw Error('productSelect: No looxRaters was found.');
  }

  const productSelect: ProductSelectSourceOutput = {
    product: {
      id: blendjet2.id,
      title: blendjet2.title,
      metafields: [], //blendjet2.metafields,
      handle: blendjet2.handle,
      vendor: blendjet2.vendor,
      productType: blendjet2.productType,
      priceRange: { currencyCode: blendjet2.priceRange?.currencyCode },
      pimSyncSourceProductId: blendjet2.pimSyncSourceProductId,
      type: blendjet2.productType,
      rating: looxRating,
      raters: looxRaters,
    },
    jetpackCategory: 'Portable Blender', // Hardcode this value for BlendJet product
  };

  return productSelect;
}
