/** @jsx h */
import { h } from 'preact';
import {
  ProductSelectContainer,
  ProductSelectContainerProps,
} from '../containers/ProductSelectContainer';
import { productSelectMock } from '../mock-data/productSelect';

const title = 'Product Select Root';
export default {
  title,
  component: ProductSelectContainer,
};

export const ProductSelectRootStory = () => {
  const storyProps: ProductSelectContainerProps = {
    product: productSelectMock.product,
    jetpackCategory: productSelectMock.jetpackCategory,
  };
  return <ProductSelectContainer {...storyProps} />;
};

ProductSelectRootStory.storyName = title;
