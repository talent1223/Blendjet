import { GraphQLClient } from 'graphql-request';

type ShopifyConfig = {
  shopName: string;
  apiVersion?: string;
  accessToken: string;
};

type ShopifyProductsResponse = {
  products: {
    edges: Array<{
      node: {
        handle: string;
      };
      cursor: string;
    }>;
  };
};

export type ShopifyProduct = {
  id: string;
  vendor: string;
  title: string;
  description: string;
  descriptionHtml: string;
  productType: string;
  handle: string;
  priceRange: {
    minVariantPrice: {
      amount: string;
    };
  };
  metafields: {
    edges: Array<{
      node: {
        key: string;
        value: string;
      };
    }>;
  };
  options: Array<{
    name: string;
    values: string[];
  }>;
  tags: string[];
  images: {
    edges: Array<{
      node: {
        id: string;
        src: string;
        altText?: any;
      };
    }>;
  };
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        sku: string;
        quantityAvailable: number;
        availableForSale: boolean;
        compareAtPrice?: any;
        selectedOptions: Array<{
          name: string;
          value: string;
        }>;
        image: {
          altText?: any;
        };
        price: string;
      };
    }>;
  };
};

async function initGetProducts(shopifyClient: GraphQLClient) {
  async function getProductByHandle(handle: string): Promise<ShopifyProduct> {
    const { productByHandle } = await shopifyClient.request(
      singleProductQuery(handle),
    );
    return productByHandle;
  }

  async function getProducts(
    cursor: string,
    products: any[],
  ): Promise<ShopifyProduct[] | void> {
    const data: ShopifyProductsResponse = await shopifyClient.request(
      productsQuery(cursor),
    );

    const edges = data.products.edges;
    // Do them concurrently
    const nextProducts = await Promise.all(
      data.products.edges.map(async ({ node }) => {
        return await getProductByHandle(node.handle);
      }),
    );

    if (edges[edges.length - 1]) {
      const nextCursor = edges[edges.length - 1].cursor;
      return await getProducts(nextCursor, [...products, ...nextProducts]);
    } else {
      return [...products, ...nextProducts];
    }
  }

  const startingCursor = '';
  return await getProducts(startingCursor, []);
}

export async function getShopifyProducts({
  shopName,
  apiVersion = '2020-04',
  accessToken,
}: ShopifyConfig) {
  const url = `https://${shopName}.myshopify.com/api/${apiVersion}/graphql.json`;

  const shopifyClient = new GraphQLClient(url, {
    headers: {
      'X-Shopify-Storefront-Access-Token': accessToken,
    },
  });

  const products = await initGetProducts(shopifyClient);

  return products;
}

function productsQuery(cursor: string) {
  return `
     {
      products(first: 250${cursor !== '' ? `, after: "${cursor}"` : ''}){
        edges {
          cursor
          node {
            handle
          }
        }
      }
    }
  `;
}

function singleProductQuery(handle: string) {
  return `
    {
      productByHandle(handle: "${handle}"){
        id
        vendor
        title
        description
        descriptionHtml
        productType
        handle
        priceRange {
          minVariantPrice {
            amount
          }
        }
        metafields(first:50) {
          edges {
            node {
              key
              value
            }
          }
        }
        options {
          name
          values
        }
        tags
        images(first: 250) {
          edges {
            node {
              id
              src
              altText
            }
          }
        }
        variants(first:250) {
          edges {
            node {
              id              
              title
              sku
              quantityAvailable
              availableForSale
              compareAtPrice              
              selectedOptions {
                name
                value
              }
              image {
                altText
              }
              price
            }
          }
        }
      }
    }
  `;
}
