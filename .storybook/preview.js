import '../src/styles/global.scss';
import { h, Fragment } from 'preact';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

// Get the basic viewports as well as the iPhone X. See:
// https://github.com/storybookjs/storybook/blob/master/addons/viewport/src/defaults.ts
const { iphonex } = INITIAL_VIEWPORTS;
const customViewports = { iphonex };

export const parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
    defaultViewport: 'iphonex',
  },
  options: {
    storySort: {
      order: [
        'Product Page',
        'Header',
        'Top Bar',
        'Main Nav',
        'Promotion',
        'Product Select Root',
        'Product Select',
        'Afterpay',
        'Hero Carousel',
        'Color Selector Container',
        'Color Selector',
        'Product Purchase',
        'JetPack Purchase',
        'Product Warranty',
        'Product Bundle',
        'Shipping Notification',
        'Payments',
        'Guarantee Notice',
        'Value Props',
        'Add To Cart Float',
        'Banner',
        'Media Content Carousel',
        'Product Features',
        'Product Details',
        'Product Reviews',
        'Related Products',
        'Footer',
        'Mobile Menu',
        'Cart',
        'Add To Cart Float',
        'Mobile Cart Upsells',
        'Our Story',
        'Leadership Grid',
        'Leadership Card',
        'Image Grid',
        'Image Grid Section',
        'Replacement Parts',
        'Text Ribbon',
        'Link Tile',
        'Link Tile Grid',
        'Product Card',
        'Product Grid',
      ],
    },
  },
};

// Wrap this "decorator" around all stories
export const decorators = [
  (Story) => (
    <Fragment>
      <div class="app">
        <Story />
      </div>
      <div id="portal" />
    </Fragment>
  ),
];
