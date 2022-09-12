/** @jsx h */
import { h } from 'preact';
import {
  IntroducingBlendjet,
  IntroducingBlendjetProps,
} from '../components/IntroducingBlendjet/IntroducingBlendjet';
import { introducingBlendjetMock } from '../mock-data/introducingBlendjetMock';

const title = 'Introducing Blendjet';
export default {
  title,
  component: IntroducingBlendjet,
};

export const IntroducingBlendjetStory = () => {
  const storyProps: IntroducingBlendjetProps = introducingBlendjetMock;
  return <IntroducingBlendjet {...storyProps} />;
};

IntroducingBlendjetStory.storyName = title;
