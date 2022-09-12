/** @jsx h */
import { h } from 'preact';
import {
  HomeOurStory,
  HomeOurStoryProps,
} from '../components/HomeOurStory/HomeOurStory';
import { homeOurStoryMock } from '../mock-data/homeOurStoryMock';

const title = 'Home Our Story';
export default {
  title,
  component: HomeOurStory,
};

export const HomeOurStoryS = () => {
  const storyProps: HomeOurStoryProps = homeOurStoryMock;
  return <HomeOurStory {...storyProps} />;
};

HomeOurStoryS.storyName = title;
