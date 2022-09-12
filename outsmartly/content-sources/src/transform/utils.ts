import { Metafield } from '@nacelle/types';

/**
 * Get the discount percentage from metafields
 */
export function getDiscountPercentage(metafields: Metafield[]) {
  return parseInt(
    getValue(metafields, {
      namespace: 'subscriptions',
      key: 'discount_percentage',
    }) || '0',
  );
}

/**
 * Calculate the discount price
 */
export function calculateDiscountPrice(
  price: string,
  discountPercentage: number,
) {
  return (
    parseFloat(price) -
    (parseFloat(price) * discountPercentage) / 100
  ).toFixed(2);
}

/**
 * Finds and returns a value from a metafield
 */
export function getValue(
  metafields: Metafield[],
  { namespace, key }: { namespace: string; key: string },
) {
  const metafield = metafields.find((metafield) => {
    return metafield.namespace === namespace && metafield.key === key;
  });
  return metafield?.value;
}

/**
 * Creates metafields needed for a subscription item
 */
export function getSubscriptionMetafields(metafields: Metafield[]) {
  const subscriptionMetafields = [
    {
      key: 'charge_interval_frequency',
      value: getValue(metafields, {
        namespace: 'subscriptions',
        key: 'shipping_interval_frequency',
      }),
    },
    {
      key: 'order_interval_frequency',
      value: getValue(metafields, {
        namespace: 'subscriptions',
        key: 'shipping_interval_frequency',
      }),
    },
    {
      key: 'order_interval_unit',
      value:
        getValue(metafields, {
          namespace: 'subscriptions',
          key: 'shipping_interval_unit_type',
        }) || 'day',
    },
  ].filter((item): item is { key: string; value: string } =>
    Boolean(item.value),
  );
  return subscriptionMetafields.length === 3 ? subscriptionMetafields : [];
}

/**
 * Calculates the bundle price for a variant
 */
export function getDisplayBundlePrice(variant: any): string | undefined {
  if (!variant || !variant.id) {
    return undefined;
  }
  const priceInit = variant.price;
  const decodedId = decodeId(variant.id);
  const priceEncoded = encodeURIComponent(
    JSON.stringify([
      {
        Price: priceInit,
        Tag: decodedId,
      },
    ]),
  );
  const config = getAxiosConfig(priceEncoded);
  // return price
  // TODO: make it return the calculated value
  return '83.60';
}

interface AxiosConfig {
  method: string;
  url: string;
}

/**
 * Returns an Axios config object with an appropriate URL for requesting a localized
 * price string
 */
function getAxiosConfig(priceEncoded: string): AxiosConfig {
  const urlBase = 'https://checkout.gointerpay.net/v2.21/localize';
  const merchantId = '?MerchantId=3af65681-4f06-46e4-805a-f2cb8bdaf1d4';
  let rest = `&MerchantPrices=${priceEncoded}`;
  if (document.cookie && document.cookie.includes('_rchcur')) {
    const currencyCookie = document.cookie.match(
      '(^|;)\\s*' + '_rchcur' + '\\s*=\\s*([^;]+)',
    );
    if (currencyCookie !== null) {
      const cookieValue = currencyCookie.pop();
      if (cookieValue) {
        rest = `&Currency=${cookieValue}&MerchantPrices=${priceEncoded}`;
      }
    }
  }
  return {
    method: 'get',
    url: `${urlBase}${merchantId}${rest}`,
  };
}

/**
 * Decodes a base64 variant id into a regular variant id
 */
export function decodeId(rawId: string): string {
  const variantId = Buffer.from(rawId, 'base64')
    .toString('binary')
    .split('/')
    .pop();
  return variantId ?? '';
}

/**
 * Converts 'black-marble' to 'Black Marble'
 */
export function kebabToTitleCase(str: string): string {
  if (str === 'lisa-frank-tie-dye') return 'Lisa Frank Tie-Dye';
  return str
    .split('-')
    .map((elem: string) => elem.charAt(0).toUpperCase() + elem.slice(1))
    .join(' ');
}

/**
 * Converts 'Black Marble' or 'Black marble' to 'black-marble'
 */
export function titleToKebabCase(str: string): string {
  return str.replace(/\s+/g, '-').toLowerCase();
}

/**
 * Converts 'blackMarble' to 'black-marble'
 */
export function camelToKebabCase(str: string): string {
  return str
    .replace(/[A-Z]/g, (letter: string) => `-${letter.toLowerCase()}`)
    .replace('--', '-'); // if the title has a dash already in it then we get two
}

/**
 * Finds a particular metafield by key and returns value as a number
 */
export function getNumberFromMetafields(
  key: string,
  metafields: { key: string; value: string }[],
) {
  const value = metafields?.find((item) => item.key === key)?.value;
  if (value) return Number(value);
  return undefined;
}
