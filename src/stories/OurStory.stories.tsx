/** @jsx h */
import { h } from 'preact';

import { OurStory } from '../components/OurStory/OurStory';

import { leadersMock } from '../mock-data/leaders';

export default {
  title: 'Our Story',
  component: OurStory,
};

export const OurStoryStory = () => {
  return <OurStory leaders={leadersMock} />;
};

OurStoryStory.storyName = 'Our Story';
