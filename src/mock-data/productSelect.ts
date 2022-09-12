import { ProductSelectProps } from '../components/ProductSelect/ProductSelect';
import { data as product } from '../mock-data/outsmartlyApi';
import { variants } from '../mock-data/productVariants';
import api from '../../outsmartly/content-sources/api.json';

const currentVariant = variants[2];

export const productSelectMock: ProductSelectProps = {
  product: api['blendjet-2'].productSelect.product,
  variant: {
    price: currentVariant.price,
    displayPrice: '$' + currentVariant.price,
    displayCompareAtPrice: currentVariant.compareAtPrice,
  },
  jetpackCategory: 'Portable Blender',
};
