/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
  JetPackPurchase,
  JetPackPurchaseProps,
} from '../components/JetPackPurchase';

import { categoryTabData } from '../mock-data/jetpackPurchaseTab';
import { summary, variants, subscribeData } from '../mock-data/jetpackPurchase';

export const JetPackPurchaseStory = () => {
  const [categoryTabNdx, setCategoryTabNdx] = useState(0);
  const categoryTab = {
    ...categoryTabData,
    activeIndex: categoryTabNdx,
    onChange: (ndx: number) => {
      setCategoryTabNdx(ndx);
    },
  };

  const [subscribe, setSubscribe] = useState(false);
  const subscribeSetting = {
    ...subscribeData,
    active: subscribe,
    onClick: (value: boolean) => setSubscribe(value),
    onHelper: () => console.log('show helper modal'),
  };
  const addCartData = {
    className: 'mb-20',
    price: '$19',
    quantity: 0,
    increment: () => console.log('increase amount'),
    decrement: () => console.log('decrease amount'),
    addCart: () => console.log('add to cart'),
  };

  const jetPackPurchseProps = {
    summary,
    variants,
    subscribeSetting,
    addCartData,
  };
  return (
    <JetPackPurchase {...jetPackPurchseProps} categoryTabData={categoryTab} />
  );
};

JetPackPurchaseStory.storyName = 'JetPack Purchase';

export default {
  title: 'JetPack Purchase',
  component: JetPackPurchase,
};
