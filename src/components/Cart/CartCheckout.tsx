/** @jsx h */
import { h } from 'preact';
import { ApplicationState } from '../../hooks/useSharedState';
import { cx, priceToLocalString } from '../../lib/utils';

type CheckoutProps = {
  isDisabled: boolean;
  subtotal: number;
  initiateCheckout: () => void;
  currency: ApplicationState['context']['currency'];
};

export function CartCheckout({
  subtotal,
  initiateCheckout,
  isDisabled,
  currency,
}: CheckoutProps) {
  const displayPrice = priceToLocalString(subtotal, currency);
  return (
    <div class={cx('cart-checkout', isDisabled && 'checkout-disabled')}>
      <div
        class="checkout-button checkout-button"
        role="button"
        onClick={initiateCheckout}>
        Checkout{subtotal > 0 && ` — ${displayPrice}`}
      </div>
    </div>
  );
}
