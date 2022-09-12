import localforage from 'localforage';
import {
  CHECKOUT_ID_KEY,
  CHECKOUT_URL_KEY,
  resetCheckout,
  setCheckout,
} from './helpers';
import NacelleClient from '@nacelle/client-js-sdk';
import createShopifyCheckoutClient from '@nacelle/shopify-checkout';

const config = {
  myshopifyDomain: 'blendjet.myshopify.com',
  shopifyStorefrontApiVersion: '2021-07',
  shopifyCheckoutGraphQLEndpoint:
    'https://shop.blendjet.com/api/2021-07/graphql',
  shopifyStorefrontCheckoutToken: '2f31dbbc53a5980d12a52342e970074e',
};

export const shopifyClient = createShopifyCheckoutClient({
  customEndpoint: config.shopifyCheckoutGraphQLEndpoint,
  storefrontCheckoutToken: config.shopifyStorefrontCheckoutToken,
});

// Todo: Add to a config, these are client-side variables so not private
const NACELLE_GRAPHQL_TOKEN = 'cfed92ee-2545-447c-9333-781552e0e921';
const NACELLE_SPACE_ID = 'dangerous-cat-iZoMKYLYSF';

const settings = {
  id: NACELLE_SPACE_ID,
  token: NACELLE_GRAPHQL_TOKEN,
  nacelleEndpoint: 'https://hailfrequency.com/v3/graphql',
  useStatic: false,
};
export const nacelleClient = new NacelleClient(settings);

// reset the checkout if it's already been completed
export async function initializeCheckout() {
  const id: string | null = await localforage.getItem(CHECKOUT_ID_KEY);
  const url: string | null = await localforage.getItem(CHECKOUT_URL_KEY);
  if (id && url) {
    try {
      // this seems to fail if we have a Shopify id, but not with recart
      const { completed } = await nacelleClient.checkout.get({ id, url });
      if (completed) {
        await resetCheckout();
      } else {
        setCheckout({ id, url, completed: false });
      }
    } catch (err) {
      // nacelle checkout failed, try shopify checkout instead
      console.log('nacelle checkout failed at initializeCheckout');
      try {
        // this will fail with a recart ID
        const { completed } = (await shopifyClient.get({ id })) || {};
        if (completed) {
          await resetCheckout();
        } else {
          setCheckout({ id, url, completed: false });
        }
      } catch (err) {
        // if we get to here and everything has failed we reset the checkout
        await resetCheckout();
      }
    }
  }
}
