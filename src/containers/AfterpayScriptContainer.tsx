/** @jsx h */
import { h } from 'preact';
import { AfterpayScript } from '../components/Afterpay/AfterpayScript';
import { useSharedState } from '../hooks/useSharedState';
import { getDisplayPrice } from '../lib/utils';

export type AfterpayScriptContainerProps = {};

export function AfterpayScriptContainer({}: AfterpayScriptContainerProps) {
  const useSharedStateStore = useSharedState();

  const { currentVariant, currency } = useSharedStateStore((state) => ({
    currentVariant: state.currentVariant,
    currency: state.context.currency,
  }));

  const price = getDisplayPrice(currentVariant.price, currency);

  return <AfterpayScript price={price} currency={currency.code} />;
}
