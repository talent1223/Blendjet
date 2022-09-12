/** @jsx h */
import { h } from 'preact';
import {
  ProductDetails,
  ProductDetailsProps,
} from '../components/ProductDetails/ProductDetails';
import { productDetailsMock } from '../mock-data/productDetails';

export default {
  title: 'Product Details',
  component: ProductDetails,
};

export const ProductDetailsStory = () => {
  const storyProps: ProductDetailsProps = productDetailsMock;
  return <ProductDetails {...storyProps} />;
};

ProductDetailsStory.storyName = 'Product Details';
