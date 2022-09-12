/** @jsx h */
import { h } from 'preact';
import {
  ProductSelect,
  ProductSelectProps,
} from '../components/ProductSelect/ProductSelect';
import { useSharedState } from '../hooks/useSharedState';
import { getDisplayPrice } from '../lib/utils';

export type ProductSelectContainerProps = Omit<
  ProductSelectProps,
  'variant' | 'country'
>;

export function ProductSelectContainer({
  product,
  jetpackCategory,
}: ProductSelectContainerProps) {
  const useSharedStateStore = useSharedState();

  const { currency, currentVariant } = useSharedStateStore(
    ({ context, currentVariant }) => ({
      currency: context.currency,
      currentVariant,
    }),
  );

  const displayPrice = getDisplayPrice(currentVariant.price, currency);
  const displayCompareAtPrice =
    currentVariant.compareAtPrice &&
    getDisplayPrice(currentVariant.compareAtPrice, currency);
  const variant = {
    ...currentVariant,
    displayPrice,
    displayCompareAtPrice,
  };

  return (
    <ProductSelect
      product={product}
      jetpackCategory={jetpackCategory}
      variant={variant}
    />
  );
}
