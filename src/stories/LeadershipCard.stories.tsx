/** @jsx h */
import { h } from 'preact';

import {
  LeadershipCard,
  LeadershipCardProps,
} from '../components/LeadershipCard/LeadershipCard';

import { leadersMock } from '../mock-data/leaders';

export default {
  title: 'Leadership Card',
  component: LeadershipCard,
};

export const LeadershipCardStory = () => {
  const leader: LeadershipCardProps = {
    ...leadersMock[0],
  };
  return <LeadershipCard {...leader} />;
};

LeadershipCardStory.storyName = 'Leadership Card';
