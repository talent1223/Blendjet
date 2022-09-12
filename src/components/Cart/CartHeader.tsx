/** @jsx h */
import { h, Fragment } from 'preact';
import { CloseButton } from './CloseButton';

export function CartHeader({ onClose }: { onClose: () => void }) {
  return (
    <Fragment>
      <div class="flyout-cart-header">
        <div class="flyout-cart-header-title">Your Cart</div>
        <CloseButton onClick={onClose} />
        <hr class="item-divider" />
      </div>
    </Fragment>
  );
}
