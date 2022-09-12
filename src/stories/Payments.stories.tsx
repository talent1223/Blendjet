/** @jsx h */
import { h } from 'preact';
import { Payments, PaymentsProps } from '../components/Payments/Payments';

export default {
  title: 'Payments',
  component: Payments,
};

export const PaymentsStory = () => {
  const storyProps: PaymentsProps = {
    image: {
      src: 'https://blendjet-dev.outsmartly.app/static-489c224a/public/paypal.png',
      alt: 'Paypal logo',
    },
  };
  return <Payments {...storyProps} />;
};

PaymentsStory.storyName = 'Payments';
