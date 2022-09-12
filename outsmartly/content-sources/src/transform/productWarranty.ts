import { NacelleProduct } from '@nacelle/types';
import { ProductPageProps } from '../../../../src/types';

export function productWarranty(warranty: NacelleProduct[]) {
  if (!warranty[0]?.title) {
    throw Error(`warranty: Title is missing.`);
  }

  const productWarranty: ProductPageProps['productWarranty'] = {
    productType: 'Blendjet',
    title: warranty[0].title,
    image: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/extend_icon_2b146e4b-71a8-4b12-9149-dfcafea0de99.png?format=jpg&v=1609342940&width=100',
      alt: 'Extend Protection Plan with Accident Coverage - BlendJet',
    },
    items: warranty.map((product) => {
      if (!product.variants) {
        throw Error(
          `warranty: The property "variants" in undefined for Warranty with id "${product.id}".`,
        );
      }

      const variant = product.variants[0];

      if (
        !variant.sku ||
        !variant.price ||
        !variant.title ||
        !variant.priceCurrency ||
        !product.pimSyncSourceProductId
      ) {
        throw Error(
          `warranty: The first variant of Warranty with id "${product.id}" has an undefined sku or price.`,
        );
      }
      return {
        id: variant.id,
        title: variant.title,
        label: getLabel(variant.sku),
        price: variant.price,
        handle: product.handle,
        sku: variant.sku,
        priceCurrency: variant.priceCurrency,
        pimSyncSourceProductId: product.pimSyncSourceProductId,
      };
    }),
  };
  return productWarranty;
}

function getLabel(sku: string) {
  if (sku.includes('1y')) return '1 yr';
  if (sku.includes('2y')) return '2 yr';
  if (sku.includes('3y')) return '3 yr';
  return '';
}
