/** @jsx h */
import { h } from 'preact';
import { Promotion, PromotionProps } from '../components/Promotion/Promotion';
// import { promotionMock } from '../mock-data/promotion';
import { pageData } from '../mock-data/fullPageData';

export default {
  title: 'Promotion',
  component: Promotion,
};

export const PromotionStory = () => {
  const storyProps: PromotionProps = pageData.promotion;
  return <Promotion {...storyProps} />;
};

PromotionStory.storyName = 'Promotion';
