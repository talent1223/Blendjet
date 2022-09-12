/** @jsx h */
import { h } from 'preact';
import { Afterpay } from '../components/Afterpay/Afterpay';

export default {
  title: 'Afterpay',
  component: Afterpay,
};

export const AfterpayStory = () => {
  return <Afterpay installmentPrice="9.95" />;
};

AfterpayStory.storyName = 'Afterpay';
