import {
  CrossSellProduct,
  RelatedProductsProps,
} from '../components/RelatedProducts/RelatedProducts';
import api from '../../outsmartly/content-sources/api.json';

export const crossSellProductMock: CrossSellProduct =
  api['blendjet-2'].relatedProducts.relatedProducts;

export const relatedProductsMock: RelatedProductsProps = {
  relatedProducts: crossSellProductMock,
  currency: {
    code: 'USD',
    symbol: '$',
    language: 'en-US',
  },
  addToCart: (item: any) => {},
};
