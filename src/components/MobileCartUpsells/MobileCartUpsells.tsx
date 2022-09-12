/** @jsx h */
import { h, createRef } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { CloseButton } from './CloseButton';
import { UpsellItem, CartUpsellsItem } from './CartUpsellsItem';
import { cx, filterColors } from '../../lib/utils';
import { BiChevron } from '../Icons/Navigation';
import './style.scss';
import styles from './mobile.module.scss';
import { ApplicationState, ColorOrderData } from '../../hooks/useSharedState';

export interface MobileCartUpsellsProps {
  title: string;
  items: UpsellItem[];
  colorOrder: ColorOrderData;
  initiateCheckout: ApplicationState['initiateCheckout'];
  setShowUpsells: (show: boolean) => void;
  addToCart: (payload: any) => void;
  currency: ApplicationState['context']['currency'];
}

export function MobileCartUpsells({
  title,
  items,
  colorOrder,
  initiateCheckout,
  setShowUpsells,
  addToCart,
  currency,
}: MobileCartUpsellsProps) {
  const [hideScrollIndicator, setHideScrollIndicator] = useState<boolean>(true);
  const lastItem = createRef();

  const observer = new IntersectionObserver(([entry]) => {
    setHideScrollIndicator(entry.isIntersecting);
  });

  useEffect(() => {
    observer.observe(lastItem.current);
    return () => {
      observer.disconnect();
    };
  });

  return (
    <div class="cart-upsells cart-upsells--mobile">
      <div class="cart-upsells__header">
        {title} <CloseButton onClick={() => setShowUpsells(false)} />
      </div>
      <div class="cart-upsells__items">
        {items.map((item, i, array) => {
          const filteredColors = item.product
            ? filterColors(colorOrder, item.product)
            : colorOrder;
          return (
            <div
              class="cart-upsells-item"
              ref={array.length == i + 1 ? lastItem : undefined}>
              <CartUpsellsItem
                key={i}
                item={item}
                addToCart={addToCart}
                currency={currency}
                colorOrder={filteredColors}
              />
            </div>
          );
        })}
      </div>
      <div class="cart-upsells__footer">
        <div
          class={`cart-upsells__scroll-indicator ${
            hideScrollIndicator ? 'cart-upsells__footer--scroll-complete' : ''
          }`}>
          <BiChevron /> SCROLL FOR MORE <BiChevron />
        </div>
        <button
          class={cx(
            'checkout-button',
            'checkout-button-cart-upsells',
            initiateCheckout.isLoading && 'is-loading',
          )}
          onClick={() => {
            initiateCheckout.checkout();
          }}>
          {initiateCheckout.isLoading && <div class="loader"></div>}
          <span
            class={cx('checkout-text', initiateCheckout.isLoading && 'hidden')}>
            Continue to checkout
          </span>
        </button>
      </div>
    </div>
  );
}
