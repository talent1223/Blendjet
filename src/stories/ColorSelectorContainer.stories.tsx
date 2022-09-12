/** @jsx h */
import { h } from 'preact';
import {
  ColorSelectorContainer,
  ColorSelectorContainerProps,
} from '../containers/ColorSelectorContainer';

const title = 'Color Selector Container';
export default {
  title: title,
  component: ColorSelectorContainer,
};

export const ColorSelectorContainerStory = () => {
  const storyProps: ColorSelectorContainerProps = {};
  return <ColorSelectorContainer {...storyProps} />;
};

ColorSelectorContainerStory.storyName = title;
