/** @jsx h */
import { h } from 'preact';
import {
  HomeInstagram,
  HomeInstagramProps,
} from '../components/HomeInstagram/HomeInstagram';
import { homeInstagramMock } from '../mock-data/homeInstagramMock';

const title = 'Home Instagram';
export default {
  title,
  component: HomeInstagram,
};

export const HomeInstagramStory = () => {
  const storyProps: HomeInstagramProps = homeInstagramMock;
  return <HomeInstagram {...storyProps} />;
};

HomeInstagramStory.storyName = title;
