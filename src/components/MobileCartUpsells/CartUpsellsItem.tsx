/** @jsx h */
import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
import { BundleUpsell } from './BundleUpsell';
import { MultipleUpsell } from './MultipleUpsell';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { SubscribeSelect } from '../RelatedProducts/SubscribeSelect';
import { CartDropdown } from './CartDropdown';
import { QuantityDropdown } from './QuantityDropdown';
import { RecommendedQuantity } from './RecommendedQuantity';
import { Image } from '../../types/image';
import { ApplicationState, ColorOrderData } from '../../hooks/useSharedState';
import { CartDropdownColor } from './CartDropdownColor';
import {
  findCurrent,
  matchesSelectedVariant,
  showSizes,
  variantToChoice,
} from './processOptionFields';
import { getDisplayPrice, generateConsecutive } from '../../lib/utils';
import { RotatingImage } from './RotatingImage';

export type UpsellItemVariant = {
  discountPrice: string;
  featuredMedia: Image;
  id: string;
  price: string;
  selectedOptions: { name: string; value: string }[];
  sku: string;
  title: string;
};

export type UpsellItemProduct = {
  discountPercentage: number;
  handle: string;
  id: string;
  pimSyncSourceProductId: string;
  subscriptionMetafields: { key: string; value: string }[];
  title: string;
  usaOnly: boolean;
  variants: UpsellItemVariant[];
  vendor: string;
};

export interface UpsellItem {
  product?: UpsellItemProduct;
  products?: UpsellItemProduct[];
  selectorLabel?: string;
  subtitle?: string;
  title?: string;
  upsellType: 'single' | 'multiple' | 'bundle';
  withVarietyPack?: boolean;
}

export interface CartUpsellsItemProps {
  colorOrder: ColorOrderData;
  item: UpsellItem;
  addToCart: ApplicationState['addToCart'];
  currency: ApplicationState['context']['currency'];
}

export interface OptionField {
  name: string;
  value: string;
}

export interface ExpandedChoice {
  label: string;
  value: string;
  selectedOptions: OptionField[];
}

export function CartUpsellsItem({
  colorOrder,
  item,
  addToCart,
  currency,
}: CartUpsellsItemProps) {
  if (item.upsellType === 'bundle') {
    return (
      <BundleUpsell
        item={item}
        colorOrder={colorOrder}
        addToCart={addToCart}
        currency={currency}
      />
    );
  }

  if (item.upsellType === 'multiple') {
    return (
      <MultipleUpsell
        item={item}
        colorOrder={colorOrder}
        addToCart={addToCart}
        currency={currency}
      />
    );
  }

  const product = item.product as UpsellItemProduct;

  const [addToCartText, setAddToCartText] = useState<string | undefined>();
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const [isSubscription, setIsSubscription] = useState(false);
  const withVarietyPack = item.withVarietyPack;
  const [varietyPackSelected, setVarietyPackSelected] = useState(
    withVarietyPack ? true : false,
  );

  const [quantity, setQuantity] = useState<number>(1);
  const [activeIndexRecQuantity, setActiveIndexRecQuantity] = useState<
    number | undefined
  >(undefined);

  // Calculate the upsell item price
  const price = (
    parseFloat(
      isSubscription ? selectedVariant.discountPrice : selectedVariant.price,
    ) *
    quantity *
    // if we have a variety pack selected then we should multiply
    // the price by the number of variants we have
    (varietyPackSelected ? product.variants.length : 1)
  ).toString();

  const displayPrice = getDisplayPrice(price, currency);

  const showSubcribeToggle = withVarietyPack || product.discountPercentage > 0;

  const varietyPack = {
    label: `Variety Pack (${product.variants.length})`,
    value: 'varietyPack',
    quantities: [1, 3, 5],
    selectedOptions: [{ name: 'Flavor', value: 'Variety Pack' }],
  };

  // Get quantityOption data from Contentful. It seems that right now they are
  // all the same.
  const quantityOptionData = {
    name: 'Recommended Quantity (6,12,30)',
    title: 'Recommended Quantity',
    quantity: '6,12,30',
  };
  // A little transform. This could come from the API, but we can just split it here
  const quantityOption = {
    title: quantityOptionData.title,
    quantities: quantityOptionData.quantity.split(',').map((q) => Number(q)),
  };

  // Array of consecutive numbers from 1 to 10, or from 1 to 30
  const quantityArr = withVarietyPack
    ? generateConsecutive(30)
    : generateConsecutive(10);

  const quantities = quantityArr.map((x) => ({
    label: x,
    value: x,
  }));

  // Array of recommended quantities (e.g. [6, 12, 30])
  const recommendedQuantities = varietyPackSelected
    ? varietyPack.quantities
    : quantityOption.quantities;

  // Find the index of the chosen quantity, if present
  setActiveIndexRecQuantity(
    recommendedQuantities.indexOf(quantity) > -1
      ? recommendedQuantities.indexOf(quantity)
      : undefined,
  );

  return (
    <Fragment>
      <div class="header">
        {item.title && (
          <a href={`/products/${product.handle}`} class="upsell-title">
            {item.title}
          </a>
        )}
        {item.subtitle && <p class="upsell-subtitle">{item.subtitle}</p>}
      </div>

      <div class="image single">
        {varietyPackSelected ? (
          <RotatingImage
            imagesToRotate={product.variants.map(
              (variant) => variant.featuredMedia,
            )}
          />
        ) : (
          <img
            src={selectedVariant.featuredMedia.src}
            alt={selectedVariant.featuredMedia.alt}
            width="200"
            height="200"
          />
        )}
      </div>

      <div class={`add-to-cart ${item.upsellType}`}>
        {/* Any options, e.g., Color, Flavor, Size */}

        {product.variants.length > 1 &&
          selectedVariant.selectedOptions.map((optionField: OptionField, i) => {
            const hasFlavor = selectedVariant.selectedOptions.find(
              (item: OptionField) => item.name.toLowerCase() === 'flavor',
            );
            // For each variant of this product, return an expanded "choice"
            // object that pulls `value` out of selectedOptions and makes it
            // `label` at the first level; this will be the *displayed text for
            // each <option> in the <select>*. Use variant id for the value
            // attribute in <option>. Also carry the original optionField array.
            const choices = product.variants
              .map(variantToChoice(i))
              .filter(matchesSelectedVariant(hasFlavor, i, selectedVariant))
              .filter(findCurrent)
              .filter(showSizes(hasFlavor, optionField, i, product));

            // If optionField.name contains 'color' then show a color selector
            // dropdown, else show a regular option dropdown.
            return optionField.name.toLowerCase() === 'color' ? (
              <CartDropdownColor
                key={i}
                fieldLabel={optionField.name}
                colorOrder={colorOrder}
                onChange={(value) => {
                  const variant = product.variants.find((item) => {
                    // Black Marble === Black Marble
                    return item.title === value;
                  });
                  variant && setSelectedVariant(variant);
                }}
                currentChoice={{
                  label: optionField.value,
                  value: optionField.value,
                }}
              />
            ) : (
              <CartDropdown
                key={i}
                fieldLabel={optionField.name}
                onChange={(value) => {
                  if (value === varietyPack.value) {
                    setVarietyPackSelected(true);
                    return;
                  } else if (varietyPackSelected) {
                    setVarietyPackSelected(false);
                  }
                  const variant = product.variants.find((item) => {
                    return item.id === value;
                  });
                  variant && setSelectedVariant(variant);
                }}
                currentChoice={
                  varietyPackSelected
                    ? varietyPack
                    : {
                        label: optionField.value,
                        value: selectedVariant.id,
                      }
                }
                choices={withVarietyPack ? [varietyPack, ...choices] : choices}
              />
            );
          })}

        {/* Quantity */}

        <div class="quantity">
          <QuantityDropdown
            fieldLabel="Quantity"
            currentChoice={{
              label: quantity,
              value: quantity,
            }}
            choices={quantities}
            onChange={(value) => setQuantity(value)}
          />
        </div>

        {/* Recommended Quantity, if appropriate */}

        {item.withVarietyPack && (
          <RecommendedQuantity
            activeIndex={activeIndexRecQuantity}
            onChange={(value) => setQuantity(value)}
            quantities={recommendedQuantities}
            title={quantityOption.title}
          />
        )}

        <div class="add-to-cart-button-upsell-wrapper">
          <AddToCartButton
            cartMessage={addToCartText}
            price={addToCartText ? undefined : displayPrice}
            upsell={true}
            height="medium"
            onClick={() => {
              if (varietyPackSelected) {
                const varietyPackToAdd = product.variants.map((variant) => {
                  return {
                    product,
                    variant: {
                      ...variant,
                      image: {
                        src: variant.featuredMedia.src,
                        alt: variant.featuredMedia.alt,
                      },
                    },
                    quantity,
                    isSubscription,
                  };
                });
                addToCart(varietyPackToAdd);
              } else {
                addToCart({
                  product: product,
                  variant: {
                    ...selectedVariant,
                    image: {
                      src: selectedVariant.featuredMedia.src,
                      alt: selectedVariant.featuredMedia.alt,
                    },
                  },
                  quantity,
                  isSubscription,
                });
              }
              setAddToCartText('Added!');
              setTimeout(() => {
                setAddToCartText(undefined);
              }, 3000);
            }}
          />
        </div>

        {showSubcribeToggle && (
          <SubscribeSelect
            discountPercentage={product.discountPercentage}
            showInfo={false}
            initialValue={false}
            checked={isSubscription}
            toggleChecked={() => {
              setIsSubscription(!isSubscription);
            }}
          />
        )}
      </div>
    </Fragment>
  );
}
