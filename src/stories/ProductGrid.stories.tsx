/** @jsx h */
import { h } from 'preact';
import {
  ProductGrid,
  ProductGridProps,
} from '../components/ProductGrid/ProductGrid';
import {
  productGridJetpacksMock,
  productGridAccessoriesMock,
  productGridSuperfoodsMock,
} from '../mock-data/productGrid';

export default {
  title: 'Product Grid',
  component: ProductGrid,
};

export const JetpackProductGrid = () => {
  const storyProps: ProductGridProps = {
    ...productGridJetpacksMock,
    addToCart: console.log,
  };
  return <ProductGrid {...storyProps} />;
};

export const AccessoriesProductGrid = () => {
  const storyProps: ProductGridProps = {
    ...productGridAccessoriesMock,
    addToCart: console.log,
  };
  return <ProductGrid {...storyProps} />;
};

export const SuperfoodsProductGrid = () => {
  const storyProps: ProductGridProps = {
    ...productGridSuperfoodsMock,
    addToCart: console.log,
  };
  return <ProductGrid {...storyProps} />;
};
