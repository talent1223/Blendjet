import { NacelleProduct, ProductVariant } from '@nacelle/types';
import { VariantsData } from '../../../../src/hooks/useSharedState';
import { IProductVariant } from '../types/generated/contentful';
import { ContentfulInput } from './transform-data';
import { camelToKebabCase, decodeId, titleToKebabCase } from './utils';

export function variants(
  contentful: ContentfulInput,
  blendjet2: NacelleProduct,
) {
  if (!blendjet2.variants) {
    throw Error('variants(): No variants were found.');
  }

  const variants: VariantsData = blendjet2.variants
    // Filter variants so we only work with those that are available
    .filter((variant: ProductVariant) => {
      return variant.availableForSale;
    })
    .map((variant: ProductVariant) => {
      const { id, title, price, featuredMedia, sku, priceCurrency } = variant;
      if (!title || !price || !featuredMedia || !sku || !priceCurrency) {
        throw Error(
          `variants: No title, price, featuredMedia, sku, or priceCurrency was found. ${JSON.stringify(
            variant,
          )}`,
        );
      }

      // Convert the base64 id to a regular variantId,
      const variantId = decodeId(id);

      // Generate a color id from the title: "Black Marble" to 'black-marble'
      const colorId = titleToKebabCase(title);

      // Use the color id to find the corresponding Contentful variant. Must
      // convert the Contentful variant title to kebab-case for comparison.
      if (!contentful.fields.variants) {
        throw Error('variants: No Contentful variants were found.');
      }

      const contentfulVariant = contentful.fields.variants.find(
        (ctfVariant: IProductVariant) => {
          if (!ctfVariant.fields.title) {
            throw Error('variants: No Contentful variant title was found.');
          }
          const id = camelToKebabCase(ctfVariant.fields.title);
          return id === colorId;
        },
      );
      if (!contentfulVariant) {
        throw Error(
          `variants: No corresponding Contentful variant for ${JSON.stringify(
            variant,
            null,
            2,
          )} was found.`,
        );
      }

      const {
        title: ctfTitle,
        productImage,
        heroImages,
        shippingDate,
        shippingOffset,
        specialEdition,
      } = contentfulVariant.fields;

      if (!ctfTitle || !productImage || !heroImages) {
        throw Error(
          'variants: No Contentful variant title, productImage, or heroImages were found.',
        );
      }

      return {
        id,
        variantId,
        colorId,
        price,
        ...(variant.compareAtPrice && {
          compareAtPrice: variant.compareAtPrice,
        }),
        title,
        image: {
          src: productImage.fields.file.url,
          alt: ctfTitle,
        },
        cartImage: {
          src: featuredMedia.thumbnailSrc,
          alt: featuredMedia.altText || '',
        },
        mediaContentCarousel: {
          images: heroImages.map((hero, i) => {
            return {
              src: hero.fields.file.url,
              // These `title` fields don't have good alt text, e.g. 'heromint4'.
              // alt: hero.fields.title,
              // So generate better alt text using the index
              alt: `BlendJet hero ${ctfTitle} ${i + 1}`,
            };
          }),
        },
        sku,
        priceCurrency,
        shippingDate: shippingDate || '',
        shippingOffset: shippingOffset || 0,
        ...(specialEdition && { specialEdition }),
      };
    });

  return variants;
}
