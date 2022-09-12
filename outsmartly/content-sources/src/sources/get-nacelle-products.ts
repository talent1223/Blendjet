import { getProductFromNacelle } from '../utils/fetch-nacelle';
import { NacelleProduct } from '@nacelle/client-js-sdk';

/**
 * Returns a Promise, which resolves to an array of Nacelle products.
 */
export async function getNacelleProducts(): Promise<
  (NacelleProduct | undefined)[]
> {
  // An array of product handles.
  const blendJetNacelleProducts = [
    'blendjet-2',
    'jetsetter-insulated-sleeve',
    'jetpack-smoothies',
    'jetpack-protein-smoothie',
    'jetpack-latte',
  ];

  return Promise.all(
    blendJetNacelleProducts.map((handle) => {
      return getProductFromNacelle(handle);
    }),
  );
}
