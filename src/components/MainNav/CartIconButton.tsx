/** @jsx h */
import { h } from 'preact';
import { cx } from '../../lib/utils';

interface CartIconButtonProps {
  routeName: string;
  quantityTotal: number;
  onClick: () => void;
}

export function CartIconButton({
  routeName,
  quantityTotal,
  onClick,
}: CartIconButtonProps) {
  return (
    <button class="cart-icon-button" onClick={onClick}>
      <div class={cx(routeName === 'index' && 'home')}>
        <span class="is-sr-only">{quantityTotal} items in cart</span>
        <span aria-hidden="true">{quantityTotal}</span>
      </div>
    </button>
  );
}
