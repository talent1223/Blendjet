/** @jsx h */
import { h } from 'preact';
import {
  MarketplaceNavigation,
  MarketplaceNavigationProps,
} from '../components/MarkeplaceNavigation/MarketplaceNavigation';
import { marketplaceNavigationMock } from '../mock-data/marketplaceNavigation';

export default {
  title: 'Marketplace Navigation',
  component: MarketplaceNavigation,
};

export const MarketplaceNavigationStory = () => {
  const storyProps: MarketplaceNavigationProps = marketplaceNavigationMock;
  return <MarketplaceNavigation {...storyProps} />;
};

MarketplaceNavigationStory.storyName = 'Marketplace Navigation';
