/** @jsx h */
import { h } from 'preact';
import { JetpackCrossSell, JetpackCrossSellProps } from './JetpackCrossSell';
import { Image } from '../../types/image';
import './style.scss';
import { ApplicationState } from '../../hooks/useSharedState';

export interface CrossSellVariant {
  id: string;
  sku: string;
  discountPrice: string;
  title: string;
  formattedId: string;
  price: string;
  image: Image;
}

export interface CrossSellProduct {
  id: string;
  title: string;
  subscriptionMetafields: { key: string; value: string }[];
  pimSyncSourceProductId: string;
  vendor: string;
  discountPercentage: number;
  category: string;
  handle: string;
  heading?: string;
  productType: string;
  raters: number;
  rating: number;
  variants: CrossSellVariant[];
}

export type RelatedProductsProps = {
  relatedProducts: CrossSellProduct;
  currency: ApplicationState['context']['currency'];
  addToCart: JetpackCrossSellProps['addToCart'];
};

export function RelatedProducts({
  relatedProducts,
  currency,
  addToCart,
}: RelatedProductsProps) {
  const { productType, heading, handle, category, rating, raters, variants } =
    relatedProducts;
  // We can pass a custom component here for other product types in the future
  switch (productType) {
    case 'BlendJet':
      return (
        <JetpackCrossSell
          item={relatedProducts}
          heading={heading}
          handle={handle}
          category={category}
          rating={rating}
          raters={raters}
          variants={variants}
          currency={currency}
          addToCart={addToCart}
        />
      );
    default:
      return null;
  }
}
