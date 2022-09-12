/** @jsx h */
import { h } from 'preact';
import {
  HomeBanner,
  HomeBannerProps,
} from '../components/HomeBanner/HomeBanner';
import { homeBannerMock } from '../mock-data/homeBannerMock';

const title = 'Home Banner';
export default {
  title,
  component: HomeBanner,
};

export const HomeBannerStory = () => {
  const storyProps: HomeBannerProps = homeBannerMock;
  return <HomeBanner {...storyProps} />;
};

HomeBannerStory.storyName = title;
