/** @jsx h */
import { h } from 'preact';
import {
  ValueProps,
  ValuePropsProps,
} from '../components/ValueProps/ValueProps';
import { pageData } from '../mock-data/fullPageData';

export default {
  title: 'Value Props',
  component: ValueProps,
};

export const ValuePropsStory = () => {
  const storyProps: ValuePropsProps = pageData.valueProps;
  return <ValueProps {...storyProps} />;
};

ValuePropsStory.storyName = 'Value Props';
