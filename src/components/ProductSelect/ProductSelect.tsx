/** @jsx h */
import { h } from 'preact';
import { ProductRating } from './ProductRating';
import './style.scss';
import { Product } from '../../hooks/useSharedState';
import { AfterpayContainer } from '../../containers/AfterpayContainer';

export type ProductSelectProps = {
  product: Pick<
    Product,
    'title' | 'pimSyncSourceProductId' | 'rating' | 'raters'
  >;
  jetpackCategory: string;
  variant: {
    price: string;
    displayPrice: string;
    displayCompareAtPrice?: string;
  };
};

export function ProductSelect({
  product,
  jetpackCategory,
  variant,
}: ProductSelectProps) {
  return (
    <div class="product-select">
      <div class="product-select__controls__mobile-title-container">
        <div class="product-select__controls__title">
          {product.title}
          <br />
          <span class="product-select__controls__title__subtitle">
            {jetpackCategory}
          </span>
          <span class="hidden">{product.pimSyncSourceProductId}</span>
        </div>
        <div class="product-select__controls__rating">
          <ProductRating rating={product.rating} raters={product.raters} />
        </div>
        {/* afterpayIsLoaded comes from /src/Afterpay/style.scss and is conditional on it loading */}
        <div class="product-select__controls__price">
          <span class="productPrice" aria-hidden={true}>
            {variant.displayPrice}
          </span>{' '}
          {variant.displayCompareAtPrice && (
            <span class="productPrice strikethrough-price" aria-hidden={true}>
              {variant.displayCompareAtPrice}
            </span>
          )}
          {variant.displayCompareAtPrice ? (
            <p class="is-sr-only">
              Price: {variant.displayPrice}. Was {variant.displayCompareAtPrice}
              .
            </p>
          ) : (
            <p class="is-sr-only">Price: {variant.displayPrice}.</p>
          )}
          <AfterpayContainer />
        </div>
      </div>
    </div>
  );
}
