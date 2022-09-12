/** @jsx h */
import { h } from 'preact';
import {
  MobileCartUpsells,
  MobileCartUpsellsProps,
} from '../components/MobileCartUpsells/MobileCartUpsells';
import { colorOrderData } from '../data/colorOrder';
import { upsellsMock } from '../mock-data/upsell';

const title = 'Mobile Cart Upsells';
export default {
  title,
  component: MobileCartUpsells,
};

// We create a "template" of how args map to rendering.
// TODO: Storybook types are causing type errors. Change to any for now.
// const MobileCartUpsellsTemplate: Story<MobileCartUpsellsProps> = (args) => (
const MobileCartUpsellsTemplate: any = (args: any) => {
  const initiateCheckout = {
    checkout: console.log,
    isLoading: false,
  };

  const storyProps: MobileCartUpsellsProps = {
    ...upsellsMock,
    items: args.items,
    addToCart: console.log,
    initiateCheckout,
    setShowUpsells: console.log,
    colorOrder: colorOrderData,
    currency: {
      code: 'USD',
      symbol: '$',
      language: 'en-US',
    },
  };
  return <MobileCartUpsells {...storyProps} />;
};

// Each variation story reuses that template, then mocks different input data
export const AllUpsells = MobileCartUpsellsTemplate.bind({});
AllUpsells.args = {
  items: upsellsMock.items,
};

export const Orgain = MobileCartUpsellsTemplate.bind({});
Orgain.args = {
  items: upsellsMock.items.filter((item) => item.title?.includes('Orgain')),
};

export const Bundle = MobileCartUpsellsTemplate.bind({});
Bundle.args = {
  items: upsellsMock.items.filter((item) => item.products),
};

export const Tote = MobileCartUpsellsTemplate.bind({});
Tote.args = {
  items: upsellsMock.items.filter((item) =>
    item.title?.toLowerCase().includes('tote'),
  ),
};

MobileCartUpsellsTemplate.storyName = title;
