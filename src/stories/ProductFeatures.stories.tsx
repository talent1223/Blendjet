/** @jsx h */
import { h } from 'preact';
import {
  ProductFeatures,
  ProductFeaturesProps,
} from '../components/ProductFeatures/ProductFeatures';
import { productFeaturesMock } from '../mock-data/productFeatures';

const title = 'Product Features';
export default {
  title,
  component: ProductFeatures,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const ProductFeaturesTemplate: Story<ProductFeaturesProps> = (args) => (
const ProductFeaturesTemplate: any = (args: any) => {
  return args.isLisaFrank ? (
    <div class="lisa-frank">
      <ProductFeatures {...args} />
    </div>
  ) : (
    <ProductFeatures {...args} />
  );
};

// Each variation story reuses that template, then mocks different input data
export const ProductFeaturesStory = ProductFeaturesTemplate.bind({});

// See the Controls tab in Storybook to toggle `isLisaFrank`
ProductFeaturesStory.args = {
  isLisaFrank: false,
  ...productFeaturesMock,
};

ProductFeaturesStory.storyName = title;
