import NacelleClient, { NacelleProduct } from '@nacelle/client-js-sdk';
import { getEnvConfig } from '../env-config';

/**
 * Uses the Nacelle Client JS SDK to fetch product data. Types also fetched from
 * the SDK package. Nacelle doc:
 * https://docs.getnacelle.com/api-reference/client-js-sdk.html
 */
export async function getProductFromNacelle(
  handle: string,
): Promise<NacelleProduct | undefined> {
  const config = getEnvConfig();

  const settings = {
    id: config.NACELLE_SPACE_ID,
    token: config.NACELLE_GRAPHQL_TOKEN,
    nacelleEndpoint: 'https://hailfrequency.com/v3/graphql',
    useStatic: false,
  };

  const client = new NacelleClient(settings);

  try {
    const product = await client.data.product({ handle });
    return product;
  } catch (err) {
    console.log(
      `getProductFromNacelle(): There was a problem fetching product ${handle}.`,
    );
    console.error(err);
    return undefined;
  }
}
