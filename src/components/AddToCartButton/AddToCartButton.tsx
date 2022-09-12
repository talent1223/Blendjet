/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

type AddToCartButtonProps = {
  // TODO: This interface is TBD. Pass a no-op for now.
  onClick: (cartItem: any) => void;
  cartMessage?: string;
  price?: string;
  disabled?: boolean;
  autoWidth?: boolean;
  small?: boolean;
  height?: 'large' | 'medium' | 'small';
  bundle?: boolean;
  upsell?: boolean;
};

export function AddToCartButton({
  cartMessage = 'Add to cart',
  price = '',
  disabled = false,
  onClick,
  autoWidth = false,
  small = false,
  height = 'large',
  bundle = false,
  upsell = false,
}: AddToCartButtonProps) {
  return (
    <button
      class={cx(
        'add-to-cart-button',
        autoWidth && 'add-to-cart-button-auto',
        small && 'add-to-cart-button-small',
        `add-to-cart-button-height-${height}`,
        bundle && 'add-to-cart-button-bundle',
        upsell && 'add-to-cart-button-upsell',
      )}
      disabled={disabled}
      onClick={onClick}>
      {cartMessage} {price && `– ${price}`}
    </button>
  );
}
