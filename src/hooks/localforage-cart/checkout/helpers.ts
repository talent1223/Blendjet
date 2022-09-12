import localforage from 'localforage';
import { getLineItems } from '../lineItems';
import { saveCartToRecart } from '../recart';
import { checkoutCreate } from './create';
import { Checkout } from '@nacelle/types';
import { sendAnalytics } from '../../../data-layer/data-layer';

export const CHECKOUT_ID_KEY = 'checkout-id';
export const CHECKOUT_URL_KEY = 'checkout-url';

export async function processCheckout() {
  await checkoutCreate();
  await addCheckoutParams();
  await checkoutRedirect();
}

export async function resetCheckout() {
  await Promise.all([
    localforage.setItem('line-items', []),
    localforage.setItem(CHECKOUT_ID_KEY, ''),
    localforage.setItem(CHECKOUT_URL_KEY, ''),
  ]);
  saveCartToRecart();
}

export async function setCheckout(checkout: Checkout) {
  const { id, url } = checkout;
  await Promise.all([
    localforage.setItem(CHECKOUT_ID_KEY, id),
    localforage.setItem(CHECKOUT_URL_KEY, url),
    window._recart?.setShopifyCheckoutId(id),
  ]);
}

export async function checkoutRedirect() {
  const discountCode = await localforage.getItem('discount');
  let urlString: string | null = await localforage.getItem(CHECKOUT_URL_KEY);

  if (!urlString) {
    sendAnalytics('REDIRECT_CHECKOUT_NO_URL', { error: 'No URL STRING' });
    return;
  } // TODO: log this, it shouldn't hapen

  if (urlString.includes('rechargeapps.com')) {
    urlString = urlString.replace(
      'checkout.rechargeapps.com',
      'checkout.blendjet.com',
    );
  }

  const url = new URL(urlString);
  if (url.host.includes('rechargeapps.com')) {
    url.host = 'checkout.blendjet.com';
  }
  sendAnalytics('REDIRECT_CHECKOUT', { url });

  window.location.href = discountCode
    ? url.href + '&discount=' + discountCode
    : url.href;
}

export async function getCheckoutId() {
  const id: string = (await localforage.getItem(CHECKOUT_ID_KEY)) || '';
  return id;
}

// pass Google Analytics ID to another domain
export async function addCheckoutParams() {
  const url: string | null = await localforage.getItem(CHECKOUT_URL_KEY);
  if (!url) return;
  // TODO: this should use native browser functionality
  const queryOperator = url.includes('?') ? '&' : '?';
  const linkerParam = await getLinkerParam();
  await localforage.setItem(
    CHECKOUT_URL_KEY,
    `${url}${queryOperator}${linkerParam}`,
  );
}

export async function getLinkerParam() {
  return new Promise((resolve, reject) => {
    const gaClient = typeof window !== 'undefined' ? window.ga : undefined;

    if (typeof gaClient !== 'undefined') {
      gaClient((tracker: any) => resolve(tracker.get('linkerParam')));
    }

    // if no ga resolve with empty string
    resolve('');
  });
}

export async function getHasSubscriptionProduct() {
  let hasSubscriptionProduct = false;
  const cartItems = await getLineItems();
  cartItems.forEach((item) => {
    item.metafields.forEach((metaField) => {
      if (
        metaField.key === 'order_interval_unit' ||
        metaField.key === 'order_interval_frequency' ||
        metaField.key === 'charge_interval_frequency'
      ) {
        hasSubscriptionProduct = true;
      }
    });
  });

  return hasSubscriptionProduct;
}
