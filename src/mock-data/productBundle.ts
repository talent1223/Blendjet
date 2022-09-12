import { ProductBundleProps } from '../components/ProductBundle/ProductBundle';
import api from '../../outsmartly/content-sources/api.json';

export const productBundleMock: ProductBundleProps = {
  bundleTitle: 'BLENDJET 2 + SLEEVE + 6 JETPACKS',
  bundlePrice: '83.60',
  currentVariant: {
    image: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
      alt: 'BlendJet 2 Mint',
    },
  },
  bundleProducts: api['blendjet-2'].productBundle.bundleProducts,
  varietyPacks: api['blendjet-2'].productBundle.varietyPacks,
  addBundleToCart() {},
};
