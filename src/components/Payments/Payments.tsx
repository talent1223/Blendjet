/** @jsx h */
import { h } from 'preact';
import { Image } from '../../types/image';
import './style.scss';

export interface PaymentsProps {
  image: Image;
}

export function Payments({ image }: PaymentsProps) {
  return (
    <div class="product-select__controls__payments">
      <div role="button" class="product-select__controls__payments__paypal">
        Pay with
        <img
          class="product-select__controls__payments__paypal__logo"
          src={image.src}
          alt={image.alt}
        />
      </div>
      <div
        role="button"
        class="product-select__controls__payments__more-options">
        More payment options
      </div>
    </div>
  );
}
