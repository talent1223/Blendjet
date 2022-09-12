/** @jsx h */
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { QuantityDropdown } from './QuantityDropdown';
import { Image } from '../../types/image';
import {
  filterColors,
  generateConsecutive,
  lookupLocalPrice,
  priceToLocalString,
} from '../../lib/utils';
import { CartDropdownColor } from './CartDropdownColor';
import { ApplicationState, ColorOrderData } from '../../hooks/useSharedState';
import { UpsellItem, UpsellItemVariant } from './CartUpsellsItem';
import { sendAnalytics } from '../../data-layer/data-layer';

export interface BundleUpsellProps {
  item: UpsellItem;
  colorOrder: ColorOrderData;
  addToCart: ApplicationState['addToCart'];
  currency: ApplicationState['context']['currency'];
}

export function BundleUpsell({
  item,
  colorOrder,
  addToCart,
  currency,
}: BundleUpsellProps) {
  if (!item.products) {
    return null;
  }
  // Get the four products. If one is missing, return null. TODO: this is highly
  // coupled to the data...refactor to make more flexible.
  const products = item.products;
  const blendjetProduct = products.find((x) => x.handle === 'blendjet-2');
  const sleeveProduct = products.find(
    (x) => x.handle === 'jetsetter-insulated-sleeve',
  );
  const recipeProduct = products.find((x) => x.handle === 'recipe-book');
  const smoothiesProduct = products.find(
    (x) => x.handle === 'jetpack-smoothies',
  );
  if (
    !blendjetProduct ||
    !sleeveProduct ||
    !recipeProduct ||
    !smoothiesProduct
  ) {
    return null;
  }

  const defaultButtonText = 'Add bundle to cart';
  const [addToCartText, setAddToCartText] = useState<string>(defaultButtonText);
  const [blendjetVariant, setBlendjetVariant] = useState<UpsellItemVariant>(
    blendjetProduct.variants[0],
  );
  const [sleeveVariant, setSleeveVariant] = useState<UpsellItemVariant>(
    sleeveProduct.variants[0],
  );
  const [quantity, setQuantity] = useState(1);
  const [imageIndex, setImageIndex] = useState<number>(0);

  // Set up to rotate the smoothie product images
  let smoothieImage: Image;
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex + 1) % smoothiesProduct.variants.length);
    }, 1000);
    return () => clearInterval(interval);
  });
  smoothieImage = smoothiesProduct.variants[imageIndex].featuredMedia;

  function getLocalPrice(price: string): number {
    // If we're international, currency.rates will be defined, so do the lookup.
    // Otherwise just convert to number
    return (
      (currency.rates && lookupLocalPrice(price, currency)) || Number(price)
    );
  }

  // Get the local prices before adding them together
  const blendjetPrice = getLocalPrice(blendjetVariant.price);
  const sleevePrice = getLocalPrice(sleeveVariant.price);
  const recipePrice = getLocalPrice(recipeProduct.variants[0].price);
  const sixJetpacksPrice =
    getLocalPrice(smoothiesProduct.variants[0].price) * 6;
  const price =
    (blendjetPrice + sleevePrice + recipePrice + sixJetpacksPrice) * quantity;
  const displayPrice = priceToLocalString(price, currency);

  // An array of images to display in the upsell item
  const displayImages = [
    blendjetVariant.featuredMedia,
    sleeveVariant.featuredMedia,
    recipeProduct.variants[0].featuredMedia,
    smoothieImage,
  ];

  const choices = generateConsecutive(10).map((x) => ({
    label: x,
    value: x,
  }));

  return (
    <Fragment>
      <div class="header">
        {item.title && <p class="upsell-title">{item.title}</p>}
        {item.subtitle && <p class="upsell-subtitle">{item.subtitle}</p>}
      </div>

      <div class="image multiple">
        {displayImages.map((img) => (
          <img key={img.src} src={img.src} alt={img.alt} width="150" />
        ))}
      </div>

      <div class={`add-to-cart ${item.upsellType}`}>
        {/* Any options, e.g., Color, Flavor, Size */}

        {/* Color selector popup */}
        {blendjetProduct.variants.length > 1 &&
          blendjetVariant.selectedOptions.map((optionField, i) => (
            <CartDropdownColor
              key={i}
              fieldLabel="BlendJet 2 Color"
              colorOrder={colorOrder}
              onChange={(value) => {
                const variant = blendjetProduct.variants.find((item) => {
                  return item.title === value;
                });
                variant && setBlendjetVariant(variant);
                sendAnalytics('UPSELL_BLENDJET_COLOR_CHANGE', { value });
              }}
              currentChoice={{
                label: optionField.value,
                value: optionField.value,
              }}
            />
          ))}

        {/* A second color selector popup, for the sleeve */}
        {sleeveProduct.variants.length > 1 &&
          sleeveVariant.selectedOptions.map((optionField, i) => (
            <CartDropdownColor
              key={i}
              fieldLabel="Sleeve Color"
              colorOrder={filterColors(colorOrder, sleeveProduct)}
              onChange={(value) => {
                const variant = sleeveProduct.variants.find((item) => {
                  return item.title === value;
                });
                variant && setSleeveVariant(variant);
                sendAnalytics('UPSELL_SLEEVE_COLOR_CHANGE', { value });
              }}
              currentChoice={{
                label: optionField.value,
                value: optionField.value,
              }}
            />
          ))}

        {/* Quantity */}
        <div class="quantity">
          <QuantityDropdown
            fieldLabel="Quantity"
            currentChoice={{
              label: quantity,
              value: quantity,
            }}
            choices={choices}
            onChange={(value) => {
              setQuantity(value);
              sendAnalytics('UPSELL_QUANTITY_CHANGE', { value });
            }}
          />
        </div>
      </div>

      <AddToCartButton
        cartMessage={addToCartText}
        price={addToCartText !== defaultButtonText ? undefined : displayPrice}
        upsell={true}
        small={true}
        height="medium"
        onClick={() => {
          const baseProducts = [
            blendjetProduct,
            sleeveProduct,
            recipeProduct,
          ].map((product) => {
            const variant =
              product.handle === 'blendjet-2'
                ? blendjetVariant
                : product.handle === 'jetsetter-insulated-sleeve'
                ? sleeveVariant
                : product.variants[0];
            return {
              product: product,
              variant: {
                ...variant,
                image: {
                  src: variant.featuredMedia.src,
                  alt: variant.featuredMedia.alt,
                },
              },
              quantity,
            };
          });
          const smoothies = smoothiesProduct.variants.map((variant) => {
            return {
              product: smoothiesProduct,
              variant: {
                ...variant,
                image: {
                  src: variant.featuredMedia.src,
                  alt: variant.featuredMedia.alt,
                },
              },
              quantity,
            };
          });
          const productsToAdd = [...baseProducts, ...smoothies];
          addToCart(productsToAdd);
          setAddToCartText('Added!');
          setTimeout(() => {
            setAddToCartText(defaultButtonText);
          }, 3000);
        }}
      />
    </Fragment>
  );
}
