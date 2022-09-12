/** @jsx h */
import { h } from 'preact';
import {
  RelatedProducts,
  RelatedProductsProps,
} from '../components/RelatedProducts/RelatedProducts';
import { relatedProductsMock } from '../mock-data/relatedProducts';

export default {
  title: 'Related Products',
  component: RelatedProducts,
};

export const RelatedProductsStory = () => {
  const storyProps: RelatedProductsProps = relatedProductsMock;
  return <RelatedProducts {...storyProps} />;
};

RelatedProductsStory.storyName = 'Related Products';
