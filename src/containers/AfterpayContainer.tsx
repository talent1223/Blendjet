/** @jsx h */
import { h } from 'preact';
import { Afterpay } from '../components/Afterpay/Afterpay';
import { useSharedState } from '../hooks/useSharedState';
import { useEffect } from 'preact/hooks';
import {
  getDisplayPrice,
  lookupLocalPrice,
  priceToLocalString,
} from '../lib/utils';
import { loadAfterpay } from '../third-party-scripts/afterpay';

export type AfterpayContainerProps = {};

export function AfterpayContainer({}: AfterpayContainerProps) {
  const useSharedStateStore = useSharedState();

  useEffect(() => {
    loadAfterpay();
  }, []);

  const { currentVariant, currency } = useSharedStateStore((state) => ({
    currentVariant: state.currentVariant,
    currency: state.context.currency,
  }));

  const localPrice =
    lookupLocalPrice(currentVariant.price, currency) || currentVariant.price;
  const installmentPrice = priceToLocalString(
    (typeof localPrice === 'number' ? localPrice : parseFloat(localPrice)) / 4,
    currency,
  );

  return <Afterpay installmentPrice={installmentPrice} />;
}
