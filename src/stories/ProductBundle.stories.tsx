/** @jsx h */
import { h } from 'preact';
// TODO: Make this Storybook type work
// import { Story } from '@storybook/preact/types-6-0';
import {
  ProductBundle,
  // ProductBundleProps,
} from '../components/ProductBundle/ProductBundle';
import { productBundleMock } from '../mock-data/productBundle';

const title = 'Product Bundle';
export default {
  title,
  component: ProductBundle,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const ProductBundleTemplate: Story<ProductBundleProps> = (args) => (
const ProductBundleTemplate: any = (args: any) => (
  <div style="padding-top: 500px;" class={args.isLisaFrank ? 'lisa-frank' : ''}>
    <ProductBundle {...args} />
  </div>
);

// Each variation story reuses that template, then mocks different input data
export const AllVariants = ProductBundleTemplate.bind({});
AllVariants.args = { isLisaFrank: false, ...productBundleMock };

export const SingleVariant = ProductBundleTemplate.bind({});
// Redefine `bundleProducts` to be a product object with only the first variant
SingleVariant.args = {
  isLisaFrank: false,
  ...productBundleMock,
  bundleProducts: [
    {
      ...productBundleMock.bundleProducts[0],
      variants: [productBundleMock.bundleProducts[0].variants[0]],
    },
  ],
};

// Note: turns out these two variations are the same because transform-data now
// filters out the unavailable sleeve variants. Leaving this as an example for
// other stories. TODO: remove when this pattern is well-established.

ProductBundleTemplate.storyName = title;
