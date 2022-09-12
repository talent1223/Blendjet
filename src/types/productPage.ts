import { Context, VariantsData } from '../hooks/useSharedState';
import { ColorOrderData } from '../hooks/useSharedState';
import { ProductBundleData } from '../hooks/useSharedState';
import { BannerProps } from '../components/Banner/Banner';
import {
  CartProps,
  ParentMobileCartUpsellsProps,
} from '../components/Cart/Cart';
import { FooterProps } from '../components/Footer/Footer';
import { ProductDetailsProps } from '../components/ProductDetails/ProductDetails';
import { ProductFeaturesProps } from '../components/ProductFeatures/ProductFeatures';
import { ProductReviewsProps } from '../components/ProductReviews/ProductReviews';
import { PromotionProps } from '../components/Promotion/Promotion';
import { ValuePropsProps } from '../components/ValueProps/ValueProps';
import { HeaderContainerProps } from '../containers/HeaderContainer';
import { ProductSelectContainerProps } from '../containers/ProductSelectContainer';
import { RelatedProductsContainerProps } from '../containers/RelatedProductsContainer';
import { WarrantyRawData } from '../containers/ProductPurchaseContainer';

// TODO: rename this type to indicate that it is the shape of the data that it
// needs from the API.
export type ProductPageProps = {
  banner: BannerProps;
  cart: Omit<CartProps, 'initiateCheckout' | 'mobileCartUpsells' | 'addToCart'>;
  colorOrder: ColorOrderData;
  context: Context;
  footer: FooterProps;
  header: Omit<HeaderContainerProps, 'mobileCartUpsells'>;
  mobileCartUpsells: ParentMobileCartUpsellsProps;
  productBundle: ProductBundleData;
  productDetails: ProductDetailsProps;
  productFeatures: ProductFeaturesProps;
  // TODO Move productSelect.product.pimSyncSourceProductId into productReviews.
  productReviews: ProductReviewsProps;
  productSelect: ProductSelectContainerProps;
  productWarranty: WarrantyRawData;
  promotion: PromotionProps;
  relatedProducts: RelatedProductsContainerProps;
  valueProps: ValuePropsProps;
  variants: VariantsData;
};
