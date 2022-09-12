/** @jsx h */
import { Fragment, h } from 'preact';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';

import './style.scss';
export interface AddToCartGroupProps {
  price?: string;
  className?: string;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  addCart: () => void;
}

export function AddToCartGroup({
  price,
  quantity,
  increment,
  decrement,
  addCart,
  className = '',
}: AddToCartGroupProps) {
  return (
    <div class={`add-to-cart ${className}`}>
      <div class="button-group">
        <div class="quantity-select-container">
          <QuantitySelector
            quantity={quantity}
            decrementQuantity={decrement}
            incrementQuantity={increment}
          />
        </div>
        <AddToCartButton
          price={price}
          small={true}
          autoWidth={true}
          onClick={addCart}
        />
      </div>
    </div>
  );
}
