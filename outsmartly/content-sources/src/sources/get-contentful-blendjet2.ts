import { getContentfulProduct } from './get-contentful-product';
import { IProductFields } from '../types/generated/contentful';
import { Entry } from 'contentful';

/**
 * Returns a Promise that resolves to an Entry with fields for the
 * "BlendJet2" product.
 */
export async function getContentfulBlendJet2(): Promise<Entry<IProductFields>> {
  const fullBlendJet2 = await getContentfulProduct('blendjet-2');
  return fullBlendJet2.items[0];
}
