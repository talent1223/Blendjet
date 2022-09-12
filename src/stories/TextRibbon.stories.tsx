/** @jsx h */
import { h } from 'preact';
import { TextRibbon, TextRibbonProps } from '../components/TextRibbon';
import {
  marketplaceHeroRibbonMock,
  jetpackRibbonMock,
  proteinPowderRibbonMock,
  mealReplacementRibbonMock,
  frozenFruitRibbonMock,
  nutButtersRibbonMock,
  superFoodsRibbonMock,
  accessoriesRibbonMock,
  replacementPartsRibbonMock,
  blendjetOneRibbonMock,
  blendjetTwoRibbonMock,
  jetpackBannerMock,
} from '../mock-data/textRibbon';

export default {
  title: 'Text Ribbon',
  component: TextRibbon,
};

export const MarketplaceHeroRibbon = () => {
  const storyProps: TextRibbonProps = marketplaceHeroRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const JetpackRibbon = () => {
  const storyProps: TextRibbonProps = jetpackRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const proteinPowderRibbon = () => {
  const storyProps: TextRibbonProps = proteinPowderRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const mealReplacementRibbon = () => {
  const storyProps: TextRibbonProps = mealReplacementRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const frozenFruitRibbon = () => {
  const storyProps: TextRibbonProps = frozenFruitRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const nutButtersRibbon = () => {
  const storyProps: TextRibbonProps = nutButtersRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const superFoodsRibbon = () => {
  const storyProps: TextRibbonProps = superFoodsRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const accessoriesRibbon = () => {
  const storyProps: TextRibbonProps = accessoriesRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const replacementPartsRibbon = () => {
  const storyProps: TextRibbonProps = replacementPartsRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const blendjetOneRibbon = () => {
  const storyProps: TextRibbonProps = blendjetOneRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const blendjetTwoRibbon = () => {
  const storyProps: TextRibbonProps = blendjetTwoRibbonMock;
  return <TextRibbon {...storyProps} />;
};

export const jetpackBanner = () => {
  const storyProps: TextRibbonProps = jetpackBannerMock;
  return <TextRibbon {...storyProps} />;
};
