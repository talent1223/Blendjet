/** @jsx h */
import { h } from 'preact';

import { LeadershipGrid } from '../components/LeadershipGrid/LeadershipGrid';

import { leadersMock } from '../mock-data/leaders';

export default {
  title: 'Leadership Grid',
  component: LeadershipGrid,
};

export const LeadershipGridStory = () => {
  return <LeadershipGrid leaders={leadersMock} />;
};

LeadershipGridStory.storyName = 'Leadership Grid';
