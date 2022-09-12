/** @jsx h */
import { h } from 'preact';

import { ImageGrid } from '../components/ImageGrid';

import { gridsMock } from '../mock-data/imageGrids';

export default {
  title: 'Image Grid',
  component: ImageGrid,
};

export const ImageGridStory = () => {
  const data = gridsMock;
  return <ImageGrid prefix="what-drives-us" data={data} />;
};

ImageGridStory.storyName = 'Image Grid';
