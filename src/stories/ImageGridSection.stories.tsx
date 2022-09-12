/** @jsx h */
import { h } from 'preact';

import { ImageGridSection } from '../components/ImageGridSection';

import { gridsMock } from '../mock-data/imageGrids';

export default {
  title: 'Image Grid Section',
  component: ImageGridSection,
};

export const ImageGridStory = () => {
  const data = gridsMock[0];
  return (
    <div className="what-drives-us">
      <ImageGridSection {...data} key={`what-drives-us-grid-index`} />
    </div>
  );
};

ImageGridStory.storyName = 'Image Grid Section';
