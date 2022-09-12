/** @jsx h */
import { Fragment, h } from 'preact';
import { Banner } from '../../../src/components/Banner/Banner';
import { Footer } from '../../../src/components/Footer/Footer';
import { HeaderContainer } from '../../../src/containers/HeaderContainer';
import { HeroCarouselContainer } from '../../../src/containers/HeroCarouselContainer';
import { MediaContentCarouselContainer } from '../../../src/containers/MediaContentCarouselContainer';
import { Promotion } from '../../../src/components/Promotion/Promotion';
import { ProductDetails } from '../../../src/components/ProductDetails/ProductDetails';
import { ProductFeatures } from '../../../src/components/ProductFeatures/ProductFeatures';
import { ProductReviews } from '../../../src/components/ProductReviews/ProductReviews';
import { ProductSelectContainer } from '../../../src/containers/ProductSelectContainer';
import { ProductPurchaseContainer } from '../../../src/containers/ProductPurchaseContainer';
import { RelatedProductsContainer } from '../../../src/containers/RelatedProductsContainer';
import { createFeature } from '../../utils/createFeature';

export type ProductPageRootProps = any;
export const featureId = 'full-product-page';

export const ProductPageRoot = ({
  // these are hardcoded
  header,
  footer,
  payments,
  promotion,
  productReviews,
  valueProps,

  // from api
  banner,
  productFeatures,
  productDetails,
  productSelect,
  productWarranty,
  relatedProducts,
  mobileCartUpsells,
}: any) => {
  return createFeature(
    <Fragment>
      <HeaderContainer {...header} mobileCartUpsells={mobileCartUpsells} />
      <Promotion {...promotion} />
      <ProductSelectContainer {...productSelect} />
      <HeroCarouselContainer />
      <ProductPurchaseContainer
        payments={payments}
        productWarranty={productWarranty}
        valueProps={valueProps}
      />
      <Banner {...banner} />
      <MediaContentCarouselContainer />
      <ProductFeatures {...productFeatures} />
      <ProductDetails {...productDetails} />
      <ProductReviews {...productReviews} />
      <RelatedProductsContainer {...relatedProducts} />
      <Footer {...footer} />
    </Fragment>,
    featureId,
  );
};
