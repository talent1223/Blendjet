/** @jsx h */
import { h } from 'preact';
import { ProductPurchase } from '../components/ProductPurchase/ProductPurchase';
import { pageData } from '../mock-data/fullPageData';
import { productBundleMock } from '../mock-data/productBundle';
import { productWarrantyMock } from '../mock-data/productWarranty';

const title = 'Product Purchase';
export default {
  title,
  component: ProductPurchase,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const ProductPurchaseTemplate: Story<ProductPurchaseProps> = (args) => (
const ProductPurchaseTemplate: any = (args: any) => {
  return args.isLisaFrank ? (
    <div class="lisa-frank">
      <ProductPurchase {...args} />
    </div>
  ) : (
    <ProductPurchase {...args} />
  );
};

// Each variation story reuses that template, then mocks different input data
export const ProductPurchaseStory = ProductPurchaseTemplate.bind({});

// See the Controls tab in Storybook to toggle `isLisaFrank`
ProductPurchaseStory.args = {
  isLisaFrank: false,
  addItemToCart: () => {},
  colorOrder: pageData.colorOrder.map((item) => ({
    ...item,
    swatchClicked: () => {
      console.log('swatch clicked');
    },
  })),
  currency: pageData.context.currency,
  decrementQuantity: () => {},
  incrementQuantity: () => {},
  productBundle: productBundleMock,
  productWarranty: productWarrantyMock,
  quantity: 2,
  setCurrentVariantById: () => {},
  shippingDay: pageData.context.shippingDay,
  shippingMessage: pageData.context.shippingMessage,
  valueProps: pageData.valueProps,
  variant: pageData.variants[0],
};

ProductPurchaseStory.storyName = title;
