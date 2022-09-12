import { EntryCollection, createClient } from 'contentful';
import { getEnvConfig } from '../env-config';

type Props = {
  contentType: string;
  handle: string;
};

/**
 * Given a FieldsType, this creates a Contentful client, connects to it, and
 * returns a promise that resolves to a collection of Entries with the given
 * type.
 */
export async function fetchFromContentful<FieldsType>({
  contentType,
  handle,
}: Props): Promise<EntryCollection<FieldsType>> {
  const config = getEnvConfig();

  const client = createClient({
    space: config.CTF_SPACE_ID,
    accessToken: config.CTF_CDA_ACCESS_TOKEN,
  });

  // Link level: By default, a response includes the first level of linked
  // content. This is equivalent to the request parameter include=1. Use the
  // `include` parameter in the request to set the number of levels you want to
  // return. In most cases you'll want to use the maximum include depth, which
  // is include=10. Link resolution works regardless of how many results are
  // returned in items. See
  // https://www.contentful.com/developers/docs/concepts/links/
  const data = await client.getEntries<FieldsType>({
    content_type: contentType,
    'fields.handle': handle,
    include: 10,
  });

  return data;
}
