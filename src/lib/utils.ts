import { ColorOrderData, Context } from '../hooks/useSharedState';
import { titleToKebabCase } from '../../outsmartly/content-sources/src/transform/utils';
import { UpsellItemProduct } from '../components/MobileCartUpsells/CartUpsellsItem';

/**
 * Tiny utility function to replace clsx npm package. Returns a concatenated
 * string based on input conditions. Does not support objects as inputs, only
 * strings. Inputs resulting in boolean, null, or undefined are skipped.
 * Reference: https://bit.ly/3E8eaa6
 */
type Cx = (...args: Array<string | boolean | null | undefined>) => string;
export const cx: Cx = (...args) => {
  return args
    .flat()
    .filter(
      (x: string | boolean | null | undefined) =>
        x !== null && x !== undefined && typeof x !== 'boolean',
    )
    .join(' ');
};

/**
 * Utility debounce method. Debounce so the given function doesn't trigger on
 * every keypress, scroll event, or whatever. Instead it only triggers after the
 * user stops typing/scrolling for a certain period of time, say, 500ms.
 * Reference: https://gist.github.com/ca0v/73a31f57b397606c9813472f7493a940
 */
export function debounce(func: any, wait = 500) {
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
  return function debouncedFunc() {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => func(), wait);
  };
}

/**
 * Returns a string with a formatted display price for a given currency symbol
 * and/or currency code.
 */
export function getDisplayPrice(
  price: string,
  currency: Context['currency'],
  quantity: number = 1,
): string {
  const { code, rates } = currency;
  if (!price) {
    return '';
  } else if (code && rates) {
    return calculateLocalPrice(price, currency, quantity);
  }
  return `$${(parseFloat(price) * quantity).toFixed(2)}`;
}

export function lookupLocalPrice(
  price: string,
  currency: Context['currency'],
): number | undefined {
  if (!currency.rates) return;
  return parseFloat(currency.rates[price.toString()]);
}

function calculateLocalPrice(
  price: string,
  currency: Context['currency'],
  quantity: number,
): string {
  const fxPrice = lookupLocalPrice(price, currency);
  if (!fxPrice) {
    return `$${(parseFloat(price) * quantity).toFixed(2)}`;
  }

  const totalPrice = fxPrice * quantity;
  return priceToLocalString(totalPrice, currency);
}

export function priceToLocalString(
  price: number,
  currency: Context['currency'],
): string {
  // this returns prices formatted locally using the default
  // browser language, such as '12.345,36 €' for German 'de'
  return price.toLocaleString(currency.language, {
    style: 'currency',
    currency: currency.code,
    maximumFractionDigits: 2,
  });
}

/**
 * Generates an array of consecutive integers. Give it a length and an optional
 * starting number (default is 1).
 */
export function generateConsecutive(
  length: number,
  start: number = 1,
): number[] {
  return Array.from(Array(length).keys()).map((el) => el + start);
}

/**
 * Filters the colorOrder array down to only those colors that are available for
 * the given product.
 */
export function filterColors(
  colorOrder: ColorOrderData,
  product: UpsellItemProduct,
) {
  return colorOrder.filter((item) => {
    return product.variants.find(
      (variant) => titleToKebabCase(variant.title) === item.swatch,
    );
  });
}
