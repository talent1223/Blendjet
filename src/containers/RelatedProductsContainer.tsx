/** @jsx h */
import { h } from 'preact';
import {
  RelatedProducts,
  RelatedProductsProps,
} from '../components/RelatedProducts/RelatedProducts';
import { useSharedState } from '../hooks/useSharedState';

export type RelatedProductsContainerProps = Omit<
  RelatedProductsProps,
  'currency' | 'addToCart'
>;

export function RelatedProductsContainer({
  relatedProducts,
}: RelatedProductsContainerProps) {
  const useSharedStateStore = useSharedState();

  const { currency, addToCart } = useSharedStateStore((state) => ({
    currency: state.context.currency,
    addToCart: state.addToCart,
  }));

  return (
    <RelatedProducts
      relatedProducts={relatedProducts}
      currency={currency}
      addToCart={addToCart}
    />
  );
}
