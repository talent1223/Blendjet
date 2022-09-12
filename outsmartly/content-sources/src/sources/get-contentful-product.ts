import { fetchFromContentful } from '../utils/fetch-from-contentful';
import { IProductFields } from '../types/generated/contentful';
import { EntryCollection } from 'contentful';

/**
 * Returns a Promise that resolves to a collection of Entries with fields
 * defined in ProductFields
 */
export async function getContentfulProduct(
  handle: string,
): Promise<EntryCollection<IProductFields>> {
  const contentfulResponse = fetchFromContentful<IProductFields>({
    contentType: 'product',
    handle,
  });

  return contentfulResponse;
}
