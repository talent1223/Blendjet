/** @jsx h */
import { Fragment, h } from 'preact';
import { useState } from 'preact/hooks';
import { Header, HeaderProps } from '../components/Header/Header';
import { cartMock } from '../mock-data/cart';
import { headerMock } from '../mock-data/header';
import { upsellsMock } from '../mock-data/upsell';

// Header takes its props from its parent, Header. And it never exists on its
// own. So we don't need to import pageData, just headerMock.

export default {
  title: 'Header',
  component: Header,
};

export const HeaderStory = () => {
  const [showCart, setShowCart] = useState(false);
  const storyProps: HeaderProps = {
    ...headerMock,
    showCart,
    setShowCart,
    mobileCartUpsells: upsellsMock,
    cart: { ...cartMock, addToCart: console.log },
  };
  return (
    <Fragment>
      <style>{`.thing {height: 10rem; border: 1px solid green}`}</style>
      <div id="header">
        <Header {...storyProps} />
      </div>
      <div class="thing">Promotion</div>
      <div class="thing">Product select</div>
      <div class="thing">Product select image carousel</div>
      <div class="thing">Color selector</div>
      <div class="thing">Product Purchase</div>
      <div class="thing">Value props</div>
      <div class="thing">Banner</div>
      <div class="thing">Product features</div>
      <div class="thing">Product details</div>
      <div class="thing">Product reviews</div>
      <div class="thing">Related products</div>
      <div class="thing">Footer</div>
    </Fragment>
  );
};

HeaderStory.storyName = 'Header';
