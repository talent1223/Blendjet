import { GraphQLClient } from 'graphql-request';
import { NacelleProduct } from '@nacelle/client-js-sdk';
import { getEnvConfig } from '../env-config';

const url = 'https://hailfrequency.com/v2/graphql';

type getProductFromNacelleProps = {
  handle: string;
};

/**
 * This function uses graphQL directly. Meaning it will eventually fall
 * out-of-date (if we don't keep the query up-to-date). Instead, use the
 * NacelleClient (see `fetch-nacelle.ts`)
 */
export async function getProductFromNacelleGraphQl({
  handle,
}: getProductFromNacelleProps): Promise<NacelleProduct> {
  const config = getEnvConfig();

  const client = new GraphQLClient(url, {
    headers: {
      'Content-Type': 'application/json',
      'x-nacelle-space-id': config.NACELLE_SPACE_ID,
      'x-nacelle-space-token': config.NACELLE_GRAPHQL_TOKEN,
    },
  });

  const { getProductByHandle } = await client.request(
    singleProductQuery(handle),
  );

  return getProductByHandle;
}

function singleProductQuery(handle: string) {
  return `
    {  
        getProductByHandle(handle: "${handle}") {
          id
          handle
          locale
          globalHandle
          pimSyncSourceDomain
          title
          description
          priceRange { 
            min 
            max
            currencyCode
          }
          availableForSale
          tags
          media {
            id
            thumbnailSrc
            src
            type
            altText
          }
          metafields {
            key
            value
          }
          variants {
              id
              title
              price
              priceCurrency
              compareAtPrice
              compareAtPriceCurrency
              swatchSrc
              selectedOptions { 
                name
                value 
              }
              featuredMedia {
                id
                thumbnailSrc 
                src
                type
                altText
              }
              sku
              availableForSale
              metafields {
                key
                value
              }
              weight
              weightUnit 
            }
          indexedAt
          pimSyncSource
          pimSyncSourceProductId
          productType
          featuredMedia {
            id
            thumbnailSrc
            src:
            type
            altText
          }
          vendor
          createdAt
        }
    }
  `;
}
