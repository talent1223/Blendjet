/** @jsx h */
import { h } from 'preact';
import {
  AddToCartFloat,
  AddToCartFloatProps,
} from '../components/AddToCartFloat/AddToCartFloat';
import { pageData } from '../mock-data/fullPageData';
import { shippingNotificationMock } from '../mock-data/shippingNotification';

const title = 'Add To Cart Float';
export default {
  title,
  component: AddToCartFloat,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const AddToCartFloatTemplate: Story<AddToCartFloatProps> = (args) => (
const AddToCartFloatTemplate: any = (args: any) => {
  return args.isLisaFrank ? (
    <div class="lisa-frank">
      <AddToCartFloat {...args} />
    </div>
  ) : (
    <AddToCartFloat {...args} />
  );
};

// Each variation story reuses that template, then mocks different input data
export const AddToCartFloatStory = AddToCartFloatTemplate.bind({});

// See the Controls tab in Storybook to toggle `isLisaFrank`
AddToCartFloatStory.args = {
  isLisaFrank: false,
  // For regular props, pull down any props that pageData provides. For props
  // that are retrieved from state, inject fake data or otherwise simulate them
  // here.
  initialShow: true,
  price: pageData.variants[0].price,
  quantity: 2,
  increment: () => {},
  decrement: () => {},
  variant: pageData.variants[0],
  colorOrder: pageData.colorOrder.map((item) => ({
    ...item,
    swatchClicked: () => {
      console.log('swatch clicked');
    },
  })),
  shippingDay: shippingNotificationMock.shippingDay,
  shippingMessage: shippingNotificationMock.message,
  onClick: () => {},
};

AddToCartFloatStory.storyName = title;
