/** @jsx h */
import { h } from 'preact';
import { LinkTiles, LinkTilesProps } from '../components/LinkTiles/LinkTiles';
import { marketplaceSliderMock } from '../mock-data/linkTiles';

export default {
  title: 'Link Tiles',
  component: LinkTiles,
};

export const LinkTilesStory = () => {
  const storyProps: LinkTilesProps = marketplaceSliderMock;

  return <LinkTiles {...storyProps} />;
};

LinkTilesStory.storyName = 'Marketplace Slider';
