/** @jsx h */
import { h } from 'preact';
import {
  HomeJetpacks,
  HomeJetpacksProps,
} from '../components/HomeJetpacks/HomeJetpacks';
import { homeJetpacksMock } from '../mock-data/homeJetpacks';

const title = 'Home Jetpacks';
export default {
  title,
  component: HomeJetpacks,
};

export const HomeJetpacksStory = () => {
  const storyProps: HomeJetpacksProps = homeJetpacksMock;
  return <HomeJetpacks {...storyProps} />;
};

HomeJetpacksStory.storyName = title;
