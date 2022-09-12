import { NacelleProduct } from '@nacelle/types';
import { ProductPageProps } from '../../../../src/types';
import {
  calculateDiscountPrice,
  decodeId,
  getDiscountPercentage,
  getNumberFromMetafields,
  getSubscriptionMetafields,
} from './utils';

export function relatedProducts(smoothies: NacelleProduct) {
  const relatedLooxRating = getNumberFromMetafields(
    'avg_rating',
    smoothies.metafields || [],
  );

  if (!relatedLooxRating) {
    throw Error('relatedProducts: No relatedLooxRating was found.');
  }

  const relatedLooxRaters = getNumberFromMetafields(
    'num_reviews',
    smoothies.metafields || [],
  );

  if (!relatedLooxRaters) {
    throw Error('relatedProducts: No relatedLooxRaters was found.');
  }

  if (!relatedLooxRaters) {
    throw Error('relatedProducts: No relatedLooxRaters was found.');
  }

  if (!smoothies.variants) {
    throw Error(`relatedProducts: variants is undefined`);
  }
  if (!smoothies.vendor) {
    throw Error(`relatedProducts: vendor is undefined`);
  }
  if (
    !smoothies.title ||
    !smoothies.pimSyncSourceProductId ||
    !smoothies.metafields
  ) {
    throw Error(
      `relatedProducts: title, pimSyncSourceProductId, metafields are undefined`,
    );
  }

  const discountPercentage = getDiscountPercentage(smoothies.metafields);
  const relatedProducts: ProductPageProps['relatedProducts'] = {
    relatedProducts: {
      id: smoothies.id,
      title: smoothies.title,
      subscriptionMetafields: getSubscriptionMetafields(smoothies.metafields),
      pimSyncSourceProductId: smoothies.pimSyncSourceProductId,
      vendor: smoothies.vendor,
      discountPercentage,
      category: smoothies.title || '',
      handle: smoothies.handle,
      heading: 'Power up with Jetpacks',
      productType: smoothies.vendor,
      raters: relatedLooxRaters,
      rating: relatedLooxRating,
      variants: smoothies.variants.map((item) => {
        if (
          !item.price ||
          !item.title ||
          !item.featuredMedia?.src ||
          !item.sku
        ) {
          throw Error(
            `relatedProducts: A variant id "${item.id}" has undefined properties.`,
          );
        }
        return {
          id: item.id,
          sku: item.sku,
          title: item.title,
          formattedId: decodeId(item.id),
          price: item.price,
          discountPrice: calculateDiscountPrice(item.price, discountPercentage),
          image: {
            src: item.featuredMedia?.src,
            alt: item.featuredMedia?.altText || '',
          },
        };
      }),
    },
  };

  return relatedProducts;
}
