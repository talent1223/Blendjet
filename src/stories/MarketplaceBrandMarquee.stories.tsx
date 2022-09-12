/** @jsx h */
import { h } from 'preact';
import {
  MarketplaceBrandMarquee,
  MarketplaceBrandMarqueeProps,
} from '../components/MarketplaceBrandMarquee/MarketplaceBrandMarquee';
import { marketplaceBrandMarqueeMock } from '../mock-data/marketplaceBrandMarquee';

export default {
  title: 'Marketplace Brand Marquee',
  component: MarketplaceBrandMarquee,
};

export const MarketplaceBrandMarqueeStory = () => {
  const storyProps: MarketplaceBrandMarqueeProps = marketplaceBrandMarqueeMock;
  return <MarketplaceBrandMarquee {...storyProps} />;
};

MarketplaceBrandMarqueeStory.storyName = 'Marketplace Brand Marquee';
