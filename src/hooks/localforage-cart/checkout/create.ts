import { getCheckoutLineItems } from '../lineItems';
import { getOutsmartlyMetafields } from '../getOutsmartlyMetafields';
import { getRecartMetafieldsForCheckout } from '../recart';
import { Checkout, ShopifyCheckout } from '@nacelle/types';
import { nacelleClient, shopifyClient } from './initialize';
import {
  getCheckoutId,
  getHasSubscriptionProduct,
  setCheckout,
} from './helpers';
import { sendAnalytics } from '../../../data-layer/data-layer';

export async function checkoutCreate() {
  const cartItems = await getCheckoutLineItems();

  if (cartItems.length < 1) return;

  const recartMetafields = getRecartMetafieldsForCheckout();
  const outsmartlyMetafields = getOutsmartlyMetafields();
  const checkoutId = await getCheckoutId();
  let checkoutStatus = '';
  let checkout: Checkout | ShopifyCheckout | void = undefined;
  let hasSubscriptionProduct = await getHasSubscriptionProduct();

  try {
    if (hasSubscriptionProduct) {
      sendAnalytics('STARTING_NACELLE_SUBSCRIPTION_CHECKOUT');
      // if we have a subscription we'll try Nacelle first (it will go to recharge)
      checkout = await nacelleClient.checkout.process({
        cartItems,
        checkoutId,
        metafields: [...recartMetafields, ...outsmartlyMetafields],
      });

      // if checkout.completed, we already completed for this ID so we
      // try again with a blank ID
      if (checkout && checkout.completed) {
        checkout = await nacelleClient.checkout.process({
          cartItems,
          checkoutId: '',
          metafields: [...recartMetafields, ...outsmartlyMetafields],
        });
      }

      if (!checkout || !checkout.id || !checkout.url) {
        checkoutStatus = 'failed';
      }
      sendAnalytics('FINISH_NACELLE_SUBSCRIPTION_CHECKOUT', {
        checkout,
        checkoutStatus,
      });
    } else {
      sendAnalytics('STARTING_SHOPIFY_NON_SUBSCRIPTION_CHECKOUT');
      // if it doesn't have any subscriptions, then we use Shopify first
      checkout = await shopifyClient.process({
        cartItems,
        // if this is a recharge id it will fail
        id: '',
        metafields: [...recartMetafields, ...outsmartlyMetafields],
      });

      if (!checkout || !checkout.id || !checkout.url) {
        checkoutStatus = 'failed';
      }
      sendAnalytics('COMPLETED_SHOPIFY_NON_SUBSCRIPTION_CHECKOUT', {
        checkout,
        checkoutStatus,
      });
    }
  } catch (err) {
    sendAnalytics('FAILED_FIRST_CHECKOUT_ATTEMPT', { err });
    checkoutStatus = 'failed';
  }

  if (checkoutStatus === 'failed') {
    try {
      if (hasSubscriptionProduct) {
        sendAnalytics('CHECKOUT_2ND_ATTEMPT_SUBSCRIPTION_SHOPIFY_START');
        // if it has subscriptions, but failed we try Shopify
        // this doesn't actually process the subscription and charges the wrong price
        checkout = await shopifyClient.process({
          cartItems,
          id: checkoutId,
          metafields: [...recartMetafields, ...outsmartlyMetafields],
        });

        if (checkout && checkout.completed) {
          checkout = await shopifyClient.process({
            cartItems,
            id: '',
            metafields: [...recartMetafields, ...outsmartlyMetafields],
          });
        }

        if (!checkout || !checkout.id || !checkout.url) {
          console.log('Checkout Failed at Nacelle/Shopify');
          sendAnalytics('CHECKOUT_2ND_ATTEMPT_SUBSCRIPTION_SHOPIFY_FAILED', {
            checkout,
          });
          throw new Error('Checkout Failure');
        }
        sendAnalytics('COMPLETED_2ND_ATTEMPT_SUBSCRIPTION_SHOPIFY_CHECKOUT', {
          checkout,
        });
      } else {
        sendAnalytics('CHECKOUT_2ND_ATTEMPT_NON_SUBSCRIPTION_NACELLE_START');
        // Nacelle Shopify checkout failed, Shopify might be down
        // Try recharge checkout instead
        const cartItemsModified = cartItems.map((item) => {
          const hasOrderIntervalUnit = item.metafields.find(
            (item) => item.key === 'order_interval_unit',
          );
          if (hasOrderIntervalUnit) return item;
          return {
            ...item,
            metafields: [
              ...item.metafields,
              {
                key: 'order_interval_unit',
              },
            ],
          };
        });

        checkout = await nacelleClient.checkout.process({
          cartItems: cartItemsModified,
          checkoutId,
          metafields: [...recartMetafields, ...outsmartlyMetafields],
        });

        // if checkout.completed, we already completed for this ID so we
        // try again with a blank ID
        if (checkout && checkout.completed) {
          checkout = await nacelleClient.checkout.process({
            cartItems: cartItemsModified,
            checkoutId: '',
            metafields: [...recartMetafields, ...outsmartlyMetafields],
          });
        }

        if (!checkout || !checkout.id || !checkout.url) {
          sendAnalytics(
            'CHECKOUT_2ND_ATTEMPT_NON_SUBSCRIPTION_NACELLE_FAILED',
            { checkout },
          );
          console.log('Checkout Failed at Nacelle/Recharge');
          throw new Error('Checkout Failure, please try again.');
        }
        sendAnalytics(
          'COMPLETED_2ND_ATTEMPT_NON_SUBSCRIPTION_NACELLE_CHECKOUT',
          {
            checkout,
          },
        );
      }
    } catch (error) {
      sendAnalytics('CHECKOUT_2ND_ATTEMPT_FAILED', { error });
      throw new Error('Checkout Failure, please try again.');
    }
  }

  if (!checkout) {
    sendAnalytics('CHECKOUT_2ND_ATTEMPT_FAILED_NO_CHECKOUT_THROWING_ERROR');
    throw new Error('Checkout Failure, please try again.');
  }

  setCheckout(checkout);
}
