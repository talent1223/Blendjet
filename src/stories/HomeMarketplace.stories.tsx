/** @jsx h */
import { h } from 'preact';
import {
  HomeMarketplace,
  HomeMarketplaceProps,
} from '../components/HomeMarketplace/HomeMarketplace';
import { homeMarketplaceMock } from '../mock-data/homeMarketplace';

const title = 'Home Marketplace';
export default {
  title,
  component: HomeMarketplace,
};

export const HomeMarketplaceStory = () => {
  const storyProps: HomeMarketplaceProps = homeMarketplaceMock;
  return <HomeMarketplace {...storyProps} />;
};

HomeMarketplaceStory.storyName = title;
