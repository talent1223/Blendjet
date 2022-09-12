/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

const minusIcon = (
  <svg width="10px" height="10px" viewBox="0 0 10 2">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-1191.000000, -138.000000)" fill="currentColor">
        <g transform="translate(1046.000000, 0.000000)">
          <g transform="translate(17.000000, 54.000000)">
            <g transform="translate(22.000000, 19.000000)">
              <g transform="translate(96.000000, 54.000000)">
                <rect x="10" y="11" width="10" height="2"></rect>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

const plusIcon = (
  <svg width="10px" height="11px" viewBox="0 0 10 11">
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-1253.000000, -272.000000)" fill="currentColor">
        <g transform="translate(1046.000000, 0.000000)">
          <g transform="translate(17.000000, 54.000000)">
            <g transform="translate(0.000000, 145.000000)">
              <g transform="translate(118.000000, 67.000000)">
                <path d="M78,6.5 L78,10.5 L82,10.5 L82,12.5 L78,12.5 L78,16.5 L76,16.5 L76,12.5 L72,12.5 L72,10.5 L76,10.5 L76,6.5 L78,6.5 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
  </svg>
);

interface QuantitySelectorProps {
  quantity: number;
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  short?: boolean;
  height?: 'large' | 'medium' | 'small';
}

export function QuantitySelector({
  quantity = 1,
  decrementQuantity,
  incrementQuantity,
  height = 'large',
}: QuantitySelectorProps) {
  return (
    <div class={cx('quantity-selector', `quantity-selector-height-${height}`)}>
      <div class="decrement switch" onClick={decrementQuantity}>
        {minusIcon}
      </div>
      <input class="quantity-input" value={quantity} readOnly />
      <div class="increment switch" onClick={incrementQuantity}>
        {plusIcon}
      </div>
    </div>
  );
}
