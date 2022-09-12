/** @jsx h */
import { h } from 'preact';
import { Cart, CartProps } from '../components/Cart/Cart';
import { pageData } from '../mock-data/fullPageData';
import { upsellsMock } from '../mock-data/upsell';

export default {
  title: 'Cart',
  component: Cart,
};

export const CartStory = () => {
  const storyProps: CartProps = {
    ...pageData.cart,
    mobileCartUpsells: upsellsMock,
    initiateCheckout: { isLoading: false, checkout: console.log },
    addToCart: console.log,
  };

  return <Cart {...storyProps} />;
};

CartStory.storyName = 'Cart';
