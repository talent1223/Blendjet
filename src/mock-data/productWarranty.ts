import { WarrantyRawData } from '../containers/ProductPurchaseContainer';
import { ProductWarrantyProps } from '../components/ProductWarranty/ProductWarranty';
import { extend1yr, extend2yr, extend3yr } from './warranty-singles';
import api from '../../outsmartly/content-sources/api.json';

export const warrantyRawDataMock: WarrantyRawData =
  api['blendjet-2'].productWarranty;

export const productWarrantyMock: ProductWarrantyProps = {
  productType: 'Blendjet',
  image: {
    src: 'https://blendjet-dev.outsmartly.app/static-489c224a/public/extend.png',
    alt: 'Extend',
  },
  items: [
    {
      label: '1 yr',
      displayPrice: '4.99',
      handle: extend1yr.handle,
    },
    {
      label: '2 yr',
      displayPrice: '7.99',
      handle: extend2yr.handle,
    },
    {
      label: '3 yr',
      displayPrice: '9.99',
      handle: extend3yr.handle,
    },
  ],
  country: 'US',
  selectedWarrantyHandle: 'Blendjet',
  setSelectedWarrantyHandle: () => {},
};
