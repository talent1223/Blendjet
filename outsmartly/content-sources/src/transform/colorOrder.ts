import { NacelleProduct, ProductVariant } from '@nacelle/types';
import { ProductPageProps } from '../../../../src/types';
import { decodeId, titleToKebabCase } from './utils';

export function getColorOrderData(blendjet2: NacelleProduct) {
  if (!blendjet2.variants) {
    throw Error('colorOrder: No variants were found.');
  }
  const colorOrder: ProductPageProps['colorOrder'] = blendjet2.variants
    .filter((variant: ProductVariant) => variant.availableForSale)
    .map((variant: ProductVariant) => {
      if (!variant.title) {
        throw Error('colorOrder: No variant title was found.');
      }
      // Generate a lowercase color ID and a kebab-case swatch ID from the
      // title: "Black Marble" to 'blackmarble' and 'black-marble'
      const swatch = titleToKebabCase(variant.title);
      const id = swatch.replace(/-+/g, '');
      return {
        id,
        swatch,
        variantId: decodeId(variant.id),
      };
    });
  return colorOrder;
}
