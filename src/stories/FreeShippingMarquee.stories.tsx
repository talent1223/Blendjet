/** @jsx h */
import { h } from 'preact';
import {
  FreeShippingMarquee,
  FreeShippingMarqueeProps,
} from '../components/FreeShippingMarquee/FreeShippingMarquee';
import { FreeShippingMarqueeMock } from '../mock-data/FreeShippingMarqueeMock';

const title = 'Free Shipping Marquee';
export default {
  title,
  component: FreeShippingMarquee,
};

export const FreeShippingMarqueeStory = () => {
  const storyProps: FreeShippingMarqueeProps = FreeShippingMarqueeMock;
  return <FreeShippingMarquee {...storyProps} />;
};

FreeShippingMarqueeStory.storyName = title;
