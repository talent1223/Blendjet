/** @jsx h */
import { h } from 'preact';
import {
  MediaContentCarousel,
  MediaContentCarouselProps,
} from '../components/MediaContentCarousel/MediaContentCarousel';
import { mediaContentCarouselMock } from '../mock-data/mediaContentCarousel';

export default {
  title: 'Media Content Carousel',
  component: MediaContentCarousel,
};

export const MediaContentCarouselStory = () => {
  const storyProps: MediaContentCarouselProps = mediaContentCarouselMock;
  return <MediaContentCarousel {...storyProps} />;
};

MediaContentCarouselStory.storyName = 'Media Content Carousel';
