/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import {
  ColorSelector,
  ColorSelectorProps,
} from '../components/ColorSelector/ColorSelector';
import { pageData } from '../mock-data/fullPageData';

export default {
  title: 'Color Selector',
  component: ColorSelector,
};

// This story fakes application state by using useState. ColorSelectorContainer,
// on the other hand, actually pulls from useSharedStateStore.

export const ColorSelectorStory = () => {
  const [color, setColor] = useState({
    id: 'winter-camo',
    title: 'Winter Camo',
  });

  const storyProps: ColorSelectorProps = {
    selectedColor: color,
    colorOrder: pageData.colorOrder.map((item) => ({
      ...item,
      swatchClicked: () => {
        console.log(`swatch clicked: ${item.swatch}`);
        setColor({
          id: item.swatch,
          title: item.swatch.replace('-', ' '),
        });
      },
    })),
  };
  return <ColorSelector {...storyProps} />;
};

ColorSelectorStory.storyName = 'Color Selector';
