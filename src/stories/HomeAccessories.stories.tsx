/** @jsx h */
import { h } from 'preact';
import {
  HomeAccessories,
  HomeAccessoriesProps,
} from '../components/HomeAccessories/HomeAccessories';
import { homeAccessoriesMock } from '../mock-data/homeAccessories';

const title = 'Home Accessories';
export default {
  title,
  component: HomeAccessories,
};

export const HomeAccessoriesStory = () => {
  const storyProps: HomeAccessoriesProps = homeAccessoriesMock;
  return <HomeAccessories {...storyProps} />;
};

HomeAccessoriesStory.storyName = title;
