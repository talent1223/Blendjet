/** @jsx h */
import { h } from 'preact';
import '../styles/global.scss';
import { initializeSharedStateStore, Product } from '../hooks/useSharedState';
import { Banner } from '../components/Banner/Banner';
import { ProductStickySelectContainer } from '../containers/ProductStickySelectContainer';
import { HeroCarouselContainer } from '../containers/HeroCarouselContainer';
import { MediaContentCarouselContainer } from '../containers/MediaContentCarouselContainer';
import { ProductDetails } from '../components/ProductDetails/ProductDetails';
import { ProductFeatures } from '../components/ProductFeatures/ProductFeatures';
import { ProductSelectContainer } from '../containers/ProductSelectContainer';
import { ProductPurchaseContainer } from '../containers/ProductPurchaseContainer';
import { ProductPageProps } from '../types';
import { TransformedData } from '../../outsmartly/content-sources/src/transform/transform-data';
import api from '../../outsmartly/content-sources/api.json';
import { calculateShippingDay } from '../../outsmartly/content-sources/src/runtime/calculateShippingDay';
import { currency } from '../mock-data/currency';
import { staticData } from '../static-data';
import ProductPageContainer from '../containers/ProductPageContainer';

import { JetPackPageContainer } from '../containers/JetPackPageContainer';

export default {
  title: 'Product Page',
};

// TODO: clean up this type
export type ProductSelectSourceOutput = {
  product: Product;
  jetpackCategory: ProductPageProps['productSelect']['jetpackCategory'];
};

const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];

const locale = {
  country: 'US',
};

// data hardcoded in app
const { valueProps } = {
  valueProps: staticData.valueProps,
};

// data from content api
const {
  banner,
  productFeatures,
  productDetails,
  productSelect,
  productWarranty,
} = {
  banner: blendjet2Api.banner,
  productFeatures: blendjet2Api.productFeatures,
  productDetails: blendjet2Api.productDetails,
  productSelect: blendjet2Api.productSelect,
  productWarranty: blendjet2Api.productWarranty,
};

// Data required for state
const initializationData = {
  // From Edge API
  colorOrder: blendjet2Api.colorOrder,
  productBundle: blendjet2Api.productBundle,
  variants: blendjet2Api.variants.map((variant) => ({
    ...variant,
    // in production this happens at the edge
    shippingDate: calculateShippingDay(
      variant.shippingDate,
      variant.shippingOffset,
    ),
  })),
  product: blendjet2Api.productSelect.product,
  productWarranty: blendjet2Api.productWarranty,

  // From Edge at Runtime
  context: {
    pimSyncSourceProductId: 'asdf',
    initialSelectedVariantId: '32478639390786',
    cartQuantity: 3,
    routeName: '/products/blendjet-2',
    country: locale.country,
    shippingMessage: 'Order now and it ships by ',
    shippingDay: 'Tuesday, January 18',
    currency: currency['USD'],
  },
};

// This should only happen in a single story or it will overwrite other initializations

export const ProductBlendJet = () => {
  initializeSharedStateStore(initializationData);

  return (
    <ProductPageContainer>
      <ProductSelectContainer {...productSelect} />
      <ProductStickySelectContainer />
      <div class="product-select flex-nowrap-desktop">
        <HeroCarouselContainer />
        <ProductPurchaseContainer
          productWarranty={productWarranty}
          valueProps={valueProps}
        />
      </div>
      <Banner {...banner} />
      <MediaContentCarouselContainer />
      <div class="flex flex-row flex-wrap media-content__main">
        <ProductFeatures {...productFeatures} />
        <ProductDetails {...productDetails} />
      </div>
    </ProductPageContainer>
  );
};

export const ProductJetPack = () => {
  // Data required for state
  initializeSharedStateStore(initializationData);
  return (
    <ProductPageContainer page="jetpack">
      <JetPackPageContainer />
    </ProductPageContainer>
  );
};
