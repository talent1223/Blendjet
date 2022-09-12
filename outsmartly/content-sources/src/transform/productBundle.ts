import { NacelleProduct, ProductVariant } from '@nacelle/types';
import { ProductPageProps } from '../../../../src/types';
import { ContentfulInput } from './transform-data';
import { kebabToTitleCase, titleToKebabCase } from './utils';

export function productBundle(
  contentful: ContentfulInput,
  smoothies: NacelleProduct,
  sleeve: NacelleProduct,
  smoothiesProtein: NacelleProduct,
  smoothiesLatte: NacelleProduct,
) {
  if (!contentful.fields.bundles) {
    throw Error('productBundle: No bundles were found.');
  }
  if (!contentful.fields.bundles.fields.bundleGroup) {
    throw Error('productBundle: No bundleGroup was found.');
  }
  if (!contentful.fields.bundles.fields.bundleGroup[0].fields.media) {
    throw Error('productBundle: No bundleGroup media was found.');
  }
  if (!contentful.fields.bundles.fields.bundleCollection) {
    throw Error('productBundle: No bundleCollection was found.');
  }
  if (!contentful.fields.bundles.fields.bundleCollectionMedia) {
    throw Error('productBundle: No bundleCollectionMedia was found.');
  }
  if (!sleeve.variants) {
    throw Error('productBundle: No sleeve variants were found.');
  }
  const sleeveVariants = sleeve.variants
    .filter((variant) => variant.availableForSale)
    .map((variant) => {
      if (!variant.featuredMedia) {
        throw Error(
          'productBundle: No sleeve.variant.featuredMedia was found.',
        );
      }
      if (!variant.title) {
        throw Error('productBundle: No sleeve.variant.title was found.');
      }
      if (!variant.sku) {
        throw Error('productBundle: No sleeve.variant.sku was found.');
      }
      if (!variant.price) {
        throw Error('productBundle: No sleeve.variant.price was found.');
      }
      return {
        id: variant.id,
        title: variant.title,
        price: variant.price,
        sku: variant.sku,
        priceCurrency: variant.priceCurrency || 'USD',
        image: {
          src: setImageWidth(variant.featuredMedia.thumbnailSrc),
          // Some altText is null in Nacelle, which is an a11y bug.
          // alt: variant.featuredMedia.altText || '',
          // So instead, parse the sku, e.g., 'lavender-sleeve' to 'Lavender Sleeve':
          alt: kebabToTitleCase(variant.sku),
        },
        colorId: titleToKebabCase(variant.title),
      };
    });

  // Here we get the handles from Contentful bundleCollection and use them to
  // look up the corresponding Nacelle products. However, we'll hardcode these
  // for now. Leave commented out for future use.
  // const varietyPackHandles =
  //   contentful.fields.bundles.fields.bundleCollection?.map(
  //     (product: IProduct) => {
  //       return product.fields.handle;
  //     },
  //   );
  // const varietyPackProducts = varietyPackHandles.map((handle: string) =>
  //   nacelleProducts.find(
  //     (product: NacelleProduct) => product.handle === handle,
  //   ),
  // );
  // const smoothies = varietyPackProducts[0];
  // const smoothiesProtein = varietyPackProducts[1];

  if (!smoothies.variants) {
    throw Error('productBundle: No smoothies variants were found.');
  }
  if (!smoothiesProtein.variants) {
    throw Error('productBundle: No smoothiesProtein variants were found.');
  }
  if (!smoothiesLatte.variants) {
    throw Error('productBundle: No smoothiesLatte variants were found.');
  }

  const bcmVideos = contentful.fields.bundles.fields.bundleCollectionMedia.map(
    (item) => {
      return {
        src: item.fields.file.url,
      };
    },
  );

  if (
    !sleeve.pimSyncSourceProductId ||
    !sleeve.title ||
    !sleeve.vendor ||
    !sleeve.metafields
  ) {
    throw Error('productBundle: smoothiesProtein has missing properties');
  }

  const bundleProducts: ProductPageProps['productBundle']['bundleProducts'] = [
    {
      id: sleeve.id,
      pimSyncSourceProductId: sleeve.pimSyncSourceProductId,
      title: sleeve.title,
      vendor: sleeve.vendor,
      metafields: [], //sleeve.metafields,
      handle: sleeve.handle,
      video: {
        src: contentful.fields.bundles.fields.bundleGroup[0].fields.media.fields
          .file.url,
      },
      variants: sleeveVariants,
    },
  ];

  if (
    !smoothies.metafields ||
    !smoothiesProtein.metafields ||
    !smoothiesLatte.metafields ||
    !smoothies.pimSyncSourceProductId ||
    !smoothiesProtein.pimSyncSourceProductId ||
    !smoothiesLatte.pimSyncSourceProductId ||
    !smoothies.title ||
    !smoothiesProtein.title ||
    !smoothiesLatte.title ||
    !smoothies.vendor ||
    !smoothiesProtein.vendor ||
    !smoothiesLatte.vendor
  ) {
    throw Error(
      'productBundle: smoothies or smoothiesProtein has missing properties.',
    );
  }

  const varietyPackArray = [
    {
      name: `${smoothies.variants.length} JETPACK SMOOTHIES`,
      id: smoothies.id,
      pimSyncSourceProductId: smoothies.pimSyncSourceProductId,
      title: smoothies.title,
      vendor: smoothies.vendor,
      metafields: [], //smoothies.metafields,
      handle: smoothies.handle,
      variants: smoothies.variants.map((variant: ProductVariant) => {
        if (!variant.featuredMedia) {
          throw Error(
            'productBundle: No smoothies.variant.featuredMedia were found.',
          );
        }
        if (
          !variant.price ||
          !variant.title ||
          !variant.sku ||
          !variant.priceCurrency
        ) {
          throw Error('varietyPackArray: missing properties.');
        }
        return {
          id: variant.id,
          title: variant.title,
          price: variant.price,
          sku: variant.sku,
          priceCurrency: variant.priceCurrency,
          image: {
            src: setImageWidth(variant.featuredMedia.src),
            // altText is null in Nacelle, which is an a11y bug.
            // alt: variant.featuredMedia.altText || '',
            // So instead, generate alt text from the title, e.g., 'Tropical
            // Blue Jetpack':
            alt: `${variant.title} Jetpack`,
          },
        };
      }),
      video: bcmVideos[0],
    },
    {
      name: `${smoothiesLatte.variants.length} JETPACK LATTES`,
      id: smoothiesLatte.id,
      pimSyncSourceProductId: smoothiesLatte.pimSyncSourceProductId,
      title: smoothiesLatte.title,
      vendor: smoothiesLatte.vendor,
      metafields: [], //smoothiesProtein.metafields,
      handle: smoothiesLatte.handle,
      variants: smoothiesLatte.variants.map((variant: ProductVariant) => {
        if (!variant.featuredMedia) {
          throw Error(
            'productBundle: No smoothiesProtein.variant.featuredMedia were found.',
          );
        }
        if (
          !variant.price ||
          !variant.title ||
          !variant.sku ||
          !variant.priceCurrency
        ) {
          throw Error('smoothiesProtein: missing properties.');
        }
        return {
          id: variant.id,
          title: variant.title,
          price: variant.price,
          sku: variant.sku,
          priceCurrency: variant.priceCurrency,
          image: {
            src: setImageWidth(variant.featuredMedia.src),
            // As above, generate alt text from the title, e.g., 'Peanut Butter
            // Power Breakfast Protein Smoothie Jetpack':
            alt: `${variant.title} Latte Smoothie Jetpack`,
          },
        };
      }),
      video: bcmVideos[1],
    },
    {
      name: `${smoothiesProtein.variants.length} JETPACK PROTEIN SMOOTHIES`,
      id: smoothiesProtein.id,
      pimSyncSourceProductId: smoothiesProtein.pimSyncSourceProductId,
      title: smoothiesProtein.title,
      vendor: smoothiesProtein.vendor,
      metafields: [], //smoothiesProtein.metafields,
      handle: smoothiesProtein.handle,
      variants: smoothiesProtein.variants.map((variant: ProductVariant) => {
        if (!variant.featuredMedia) {
          throw Error(
            'productBundle: No smoothiesProtein.variant.featuredMedia were found.',
          );
        }
        if (
          !variant.price ||
          !variant.title ||
          !variant.sku ||
          !variant.priceCurrency
        ) {
          throw Error('smoothiesProtein: missing properties.');
        }
        return {
          id: variant.id,
          title: variant.title,
          price: variant.price,
          sku: variant.sku,
          priceCurrency: variant.priceCurrency,
          image: {
            src: setImageWidth(variant.featuredMedia.src),
            // As above, generate alt text from the title, e.g., 'Peanut Butter
            // Power Breakfast Protein Smoothie Jetpack':
            alt: `${variant.title} Protein Smoothie Jetpack`,
          },
        };
      }),
      video: bcmVideos[2],
    },
  ];

  const productBundle: ProductPageProps['productBundle'] = {
    bundleTitle: contentful.fields.bundles.fields.title,
    bundleProducts,
    varietyPacks: varietyPackArray,
  };

  return productBundle;
}

function setImageWidth(src: string, width = 100) {
  if (src.includes('?')) {
    return `${src}&width=100`;
  } else {
    return `${src}?width=100`;
  }
}
