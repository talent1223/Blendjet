/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ProductRating } from '../ProductSelect/ProductRating';
import { CrossSellProduct, CrossSellVariant } from './RelatedProducts';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { getDisplayPrice } from '../../lib/utils';
import { ApplicationState } from '../../hooks/useSharedState';

export interface JetpackCrossSellItemProps {
  item: CrossSellProduct;
  handle: string;
  category?: string;
  rating: number;
  raters: number;
  variant: CrossSellVariant;
  currency: ApplicationState['context']['currency'];
  addToCart: ApplicationState['addToCart'];
}

export function JetpackCrossSellItem({
  item,
  handle,
  category = 'Smoothie',
  rating,
  raters,
  variant,
  currency,
  addToCart,
}: JetpackCrossSellItemProps) {
  const [checked, setChecked] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);

  const toggleChecked = () => setChecked(!checked);
  const decrementQuantity = () => setQuantity(quantity - 1);
  const incrementQuantity = () => setQuantity(quantity + 1);
  const addVariantToCart = () =>
    addToCart({
      product: item,
      variant,
      quantity,
      isSubscription: true,
    });

  const displayPrice = getDisplayPrice(
    variant.discountPrice,
    currency,
    quantity,
  );
  const itemLink = `/${handle}?variant=${variant.formattedId}`;

  return (
    <div class="card">
      <div class="card-image">
        <a href={itemLink}>
          <img
            src={variant.image.src}
            alt={variant.image.alt}
            class="jetpack-image"
            width="400"
          />
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <div class="jetpack-purchase">
            <a class="jetpack-title" href={itemLink}>
              {variant.title}
            </a>
            <div class="rating">
              <ProductRating rating={rating} raters={raters} size="md" />
            </div>
            {/* <div class="category">
              <div class="category__tag">{category}</div>
            </div> */}
            <div class="add-to-cart">
              <div class="add-to-cart__quantity">
                <QuantitySelector
                  quantity={quantity}
                  decrementQuantity={decrementQuantity}
                  incrementQuantity={incrementQuantity}
                  height="medium"
                />
              </div>
              <div>
                <AddToCartButton
                  price={displayPrice}
                  onClick={addVariantToCart}
                  height="medium"
                />
              </div>
            </div>
            {/* @TODO: Where does the percentage come from? */}
            {/* This seems to have been removed from blendjet.com */}
            {/* <SubscribeSelect
              discountPercentage={25}
              checked={checked}
              toggleChecked={toggleChecked}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
