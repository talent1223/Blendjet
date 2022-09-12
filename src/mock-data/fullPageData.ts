import { cartMock } from './cart';
import { headerMock } from './header';
import { bannerMock } from './banner';
import { footerMock } from './footer';
import { colorOrderMock } from './colorOrder';
import { upsellItemsMock } from './upsell';
import { productBundleMock } from './productBundle';
import { productDetailsMock } from './productDetails';
import { productFeaturesMock } from './productFeatures';
import { productReviewsMock } from './productReviews';
import { productSelectMock } from './productSelect';
import { warrantyRawDataMock } from './productWarranty';
import { promotionMock } from './promotion';
import { relatedProductsMock } from './relatedProducts';
import { valuePropsMock } from './valueProps';
import { ProductPageProps } from '../types';
import api from '../../outsmartly/content-sources/api.json';

export const pageData: ProductPageProps = {
  banner: bannerMock,
  cart: cartMock,
  colorOrder: colorOrderMock,
  context: {
    pimSyncSourceProductId: 'asdf',
    initialSelectedVariantId: 'lemon',
    cartQuantity: 5,
    routeName: 'some-route',
    country: 'US',
    shippingDay: 'November 27th',
    shippingMessage: 'Order now and it ships by ',
    currency: {
      code: 'USD',
      symbol: '$',
      language: 'en-US',
    },
  },
  footer: footerMock,
  header: headerMock,
  mobileCartUpsells: {
    title: 'Black Friday Specials',
    items: upsellItemsMock,
    colorOrder: colorOrderMock,
  },
  productBundle: productBundleMock,
  productDetails: productDetailsMock,
  productFeatures: productFeaturesMock,
  productSelect: productSelectMock,
  productReviews: productReviewsMock,
  productWarranty: warrantyRawDataMock,
  promotion: promotionMock,
  relatedProducts: relatedProductsMock,
  valueProps: valuePropsMock,
  variants: api['blendjet-2'].variants,
};
