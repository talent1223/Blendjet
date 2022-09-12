import { getProductFromNacelle } from '../utils/fetch-nacelle';
import { NacelleProduct } from '@nacelle/client-js-sdk';

/**
 * Returns a Promise which resolves to a Nacelle product.
 */
export async function getNacelleBlendJet2(): Promise<
  NacelleProduct | undefined
> {
  return getProductFromNacelle('blendjet-2');
}
