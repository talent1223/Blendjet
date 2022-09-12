/** @jsx h */
import { h } from 'preact';
import {
  ProductReviews,
  ProductReviewsProps,
} from '../components/ProductReviews/ProductReviews';
import { productReviewsMock } from '../mock-data/productReviews';

export default {
  title: 'Product Reviews',
  component: ProductReviews,
};

export const ProductReviewsStory = () => {
  const storyProps: ProductReviewsProps = productReviewsMock;
  return <ProductReviews {...storyProps} />;
};

ProductReviewsStory.storyName = 'Product Reviews';
