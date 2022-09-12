/** @jsx h */
import { Fragment, h } from 'preact';
import { CartHeader } from './CartHeader';
import { CartItemProps, CartItems } from './CartItems';
import { CartMessage } from './CartMessage';
import { FreeShipping } from './FreeShipping';
import { CartCheckout } from './CartCheckout';
import { ValueProps, ValuePropsProps } from '../ValueProps/ValueProps';
import './style.scss';
import {
  MobileCartUpsells,
  MobileCartUpsellsProps,
} from '../MobileCartUpsells/MobileCartUpsells';
import { useEffect, useState } from 'preact/hooks';
import { CartUpsellsItemProps } from '../MobileCartUpsells/CartUpsellsItem';
import { ApplicationState } from '../../hooks/useSharedState';
import { sendAnalytics } from '../../data-layer/data-layer';

export type ParentMobileCartUpsellsProps = Omit<
  MobileCartUpsellsProps,
  'initiateCheckout' | 'setShowUpsells' | 'addToCart' | 'currency'
>;

export type CartProps = {
  freeShippingMessage: string;
  initiateCheckout: ApplicationState['initiateCheckout'];
  items: CartItemProps[];
  message: string;
  onClose: () => void;
  subtotal: number;
  valueProps: ValuePropsProps;
  addToCart: CartUpsellsItemProps['addToCart'];
  mobileCartUpsells: ParentMobileCartUpsellsProps;
  currency: ApplicationState['context']['currency'];
};

export function Cart({
  freeShippingMessage,
  initiateCheckout,
  items,
  message,
  onClose,
  subtotal,
  valueProps,
  addToCart,
  mobileCartUpsells,
  currency,
}: CartProps) {
  const [showUpsells, setShowUpsells] = useState(false);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 800);
  useEffect(() => {
    const onResize = () => {
      setIsDesktop(window.innerWidth > 800);
    };
    // clean up code
    window.removeEventListener('resize', onResize);
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return (
    <div class="flyout">
      <div class="flex flex-row">
        <div class="flex flex-col cart-upsells-wrapper">
          {showUpsells || isDesktop ? (
            <MobileCartUpsells
              {...mobileCartUpsells}
              initiateCheckout={initiateCheckout}
              setShowUpsells={setShowUpsells}
              addToCart={addToCart}
              currency={currency}
            />
          ) : null}
        </div>
        <div class="flex flex-col h-screen overflow-scroll-y cart-wrapper">
          <CartHeader onClose={onClose} />
          <CartItems items={items} currency={currency} />
          <CartMessage message={message} />
          <FreeShipping text={freeShippingMessage} />
          <CartCheckout
            subtotal={subtotal}
            initiateCheckout={() => {
              setShowUpsells(true);
              sendAnalytics('SHOW_UPSELLS');
            }}
            isDisabled={subtotal === 0 || message !== ''}
            currency={currency}
          />
          <ValueProps {...valueProps} spaceX="lg" spaceB="none" />
        </div>
      </div>
    </div>
  );
}
