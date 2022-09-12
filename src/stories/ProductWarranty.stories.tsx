/** @jsx h */
import { h } from 'preact';
import {
  ProductWarranty,
  ProductWarrantyProps,
} from '../components/ProductWarranty/ProductWarranty';
import { productWarrantyMock } from '../mock-data/productWarranty';

export default {
  title: 'Product Warranty',
  component: ProductWarranty,
};

export const ProductWarrantyStory = () => {
  const storyProps: ProductWarrantyProps = productWarrantyMock;
  return <ProductWarranty {...storyProps} />;
};

ProductWarrantyStory.storyName = 'Product Warranty';
