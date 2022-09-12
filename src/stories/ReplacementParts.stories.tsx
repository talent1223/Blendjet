/** @jsx h */
import { h } from 'preact';

import { ReplacementParts } from '../components/ReplacementParts';
import {
  replacementPartsRibbonMock,
  blendjetTwoRibbonMock,
  blendjetOneRibbonMock,
} from '../mock-data/textRibbon';

import { replacementSliderMock } from '../mock-data/linkTiles';
import {
  productGridBlendjetTwoReplacementMock,
  productGridBlendjetOneReplacementMock,
} from '../mock-data/productGrid';

export default {
  title: 'Replacement Parts',
  component: ReplacementParts,
};

const products_v1 = {
  ...productGridBlendjetTwoReplacementMock,
  addToCart: console.log,
};
const products_v2 = {
  ...productGridBlendjetOneReplacementMock,
  addToCart: console.log,
};

export const ReplacementPartsStory = () => {
  return (
    <ReplacementParts
      ribbons={[
        replacementPartsRibbonMock,
        blendjetTwoRibbonMock,
        blendjetOneRibbonMock,
      ]}
      tiles={replacementSliderMock}
      products_v1={products_v1}
      products_v2={products_v2}
    />
  );
};

ReplacementPartsStory.storyName = 'Replacement Parts';
