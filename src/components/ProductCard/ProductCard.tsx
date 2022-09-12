/** @jsx h */
import { h, Fragment } from 'preact';
import './style.scss';
import { useState } from 'preact/hooks';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { SubscriptionToggle } from '../SubscriptionToggle/SubscriptionToggle';
import { ProductRating } from '../ProductSelect/ProductRating';
import { ApplicationState } from '../../hooks/useSharedState';
import { getDisplayPrice } from '../../lib/utils';

export type ProductCardProps = {
  vendorLogo: {
    src: string;
    alt: string;
  };
  productUrl: string;
  image: {
    src: string;
    alt: string;
  };
  product: {
    id: string;
    title: string;
    metafields: { key: string; value: string }[];
    handle: string;
    vendor: string;
    productType?: string;
    pimSyncSourceProductId: string;
    priceRange: {
      currencyCode: string;
    };
    rating?: number;
    raters?: number;
    type?: string;
    discountPercentage?: number;
    subscriptionMetafields: { key: string; value: string }[];
  };
  isRolledUp: Boolean;
  variant: {
    title: string;
    price: string;
    discountPrice?: string;
    discountPercentage?: number;
    id: string;
    image: { src: string; alt: string };
    sku: string;
  };
  country: string;
  displayCountries?: string[];
  currency: ApplicationState['context']['currency'];
  addToCart: ApplicationState['addToCart'];
};

export function ProductCard({
  product,
  vendorLogo,
  productUrl,
  image,
  isRolledUp,
  variant,
  country,
  displayCountries,
  currency,
  addToCart,
}: ProductCardProps) {
  const [quantity, setQuantity] = useState<number>(1);
  const decrementQuantity = () => setQuantity(quantity - 1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const [isSubscription, setIsSubscription] = useState(false);

  const price = (
    parseFloat(
      isSubscription ? variant.discountPrice || variant.price : variant.price,
    ) * quantity
  ).toString();

  const addVariantToCart = () => {
    addToCart({
      product,
      variant,
      quantity,
      isSubscription,
    });
  };
  const displayPrice = getDisplayPrice(price, currency);

  const showSubcribeToggle = (product.discountPercentage || 0) > 0;

  if (!displayCountries?.length || displayCountries?.includes(country)) {
    return (
      <div class="product-card">
        <a href={productUrl}>
          <figure class="product-card__picture">
            <img class="product-card__image" src={image.src} alt={image.alt} />
          </figure>
        </a>
        <div class="product-card__info">
          {vendorLogo?.src && (
            <div class="product-card__vendor">
              <img src={vendorLogo.src} alt={vendorLogo.alt} />
            </div>
          )}
          <a href={productUrl}>
            <h3 class="product-card__title">
              {product.title}

              {!isRolledUp && variant && variant.title && (
                <span class="product-card__variant-title">{variant.title}</span>
              )}
            </h3>
          </a>
          {!product.title.includes('Replacement') && product.raters ? (
            <div class="product-card__rating">
              <ProductRating
                rating={product.rating || 0}
                raters={product.raters || 0}
                size="md"
              />
            </div>
          ) : (
            ''
          )}
          {!isRolledUp && showSubcribeToggle ? (
            <div class="product-card__subscription">
              <SubscriptionToggle
                active={isSubscription}
                onClick={(val) => {
                  setIsSubscription(val);
                }}
                discountPercentage={product.discountPercentage || 0}
              />
            </div>
          ) : (
            ''
          )}
          <div class="product-card__buy">
            {isRolledUp && (
              <a href={productUrl} class="product-card__browse">
                View All
              </a>
            )}
            {!isRolledUp && (
              <Fragment>
                <QuantitySelector
                  quantity={quantity}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                />
                <AddToCartButton
                  onClick={addVariantToCart}
                  price={displayPrice}
                  small={true}
                />
                {/* <SubscriptionAddToCartButton
              :product="product"
              :variant="variant || product.variants[0]"
              :is-subscription-on="isSubscriptionActive"
              :all-options-selected="true"
              :only-one-option="true"
              :quantity="quantity"
              :showPrice="true"
            /> */}
              </Fragment>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
