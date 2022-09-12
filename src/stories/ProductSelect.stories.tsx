/** @jsx h */
import { h } from 'preact';
import {
  ProductSelect,
  ProductSelectProps,
} from '../components/ProductSelect/ProductSelect';
import { productSelectMock } from '../mock-data/productSelect';

export default {
  title: 'Product Select',
  component: ProductSelect,
};

export const ProductSelectStory = () => {
  const storyProps: ProductSelectProps = productSelectMock;
  return <ProductSelect {...storyProps} />;
};

ProductSelectStory.storyName = 'Product Select';
