/** @jsx h */
import { h, Fragment } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { QuantityDropdown } from './QuantityDropdown';
import { cx, generateConsecutive, getDisplayPrice } from '../../lib/utils';
import { ApplicationState, ColorOrderData } from '../../hooks/useSharedState';
import { UpsellItem, UpsellItemVariant } from './CartUpsellsItem';
import { TabSelector } from './TabSelector';
import { sendAnalytics } from '../../data-layer/data-layer';
import { RecommendedQuantity } from './RecommendedQuantity';
import { SubscribeSelect } from '../RelatedProducts/SubscribeSelect';
import { CartDropdownColor } from './CartDropdownColor';
import { CartDropdown } from './CartDropdown';
import { RotatingImage } from './RotatingImage';
import {
  findCurrent,
  matchesSelectedVariant,
  showSizes,
  variantToChoice,
} from './processOptionFields';

export interface MultipleUpsellProps {
  item: UpsellItem;
  colorOrder: ColorOrderData;
  addToCart: ApplicationState['addToCart'];
  currency: ApplicationState['context']['currency'];
}

export function MultipleUpsell({
  item,
  colorOrder,
  addToCart,
  currency,
}: MultipleUpsellProps) {
  if (!item.products) {
    return null;
  }

  // Get the products. If one is missing, return null. TODO: this is highly
  // coupled to the data...refactor to make more flexible.
  const originalProducts = item.products;
  item.withVarietyPack;
  const latteProduct = originalProducts.find(
    (x) => x.handle === 'jetpack-latte',
  );
  const proteinProduct = originalProducts.find(
    (x) => x.handle === 'jetpack-protein-smoothie',
  );
  const smoothieProduct = originalProducts.find(
    (x) => x.handle === 'jetpack-smoothies',
  );
  if (!latteProduct || !proteinProduct || !smoothieProduct) {
    return null;
  }

  const products = [
    {
      tabLabel: 'Latte',
      product: latteProduct,
    },
    {
      tabLabel: 'Protein',
      product: proteinProduct,
    },
    {
      tabLabel: 'Smoothie',
      product: smoothieProduct,
    },
  ];

  const tabLabels = products.map((x) => x.tabLabel);

  const [addToCartText, setAddToCartText] = useState<string | undefined>();
  const [activeProductIndex, setActiveProductIndex] = useState<number>(0);
  const [selectedProduct, setSelectedProduct] = useState(
    products[activeProductIndex].product,
  );
  const [selectedVariant, setSelectedVariant] = useState<UpsellItemVariant>(
    selectedProduct.variants[0],
  );
  const [isSubscription, setIsSubscription] = useState(false);
  const withVarietyPack = item.withVarietyPack;
  const [varietyPackSelected, setVarietyPackSelected] = useState(
    withVarietyPack ? true : false,
  );
  const [quantity, setQuantity] = useState(1);
  const [activeIndexRecQuantity, setActiveIndexRecQuantity] = useState<
    number | undefined
  >(undefined);

  // When tab selector changes: set selected product, reset variant and image
  useEffect(() => {
    setSelectedProduct(products[activeProductIndex].product);
    setVarietyPackSelected(true);
    setSelectedVariant(products[activeProductIndex].product.variants[0]);
  }, [activeProductIndex]);

  // Calculate the upsell item price
  const price = (
    parseFloat(
      isSubscription ? selectedVariant.discountPrice : selectedVariant.price,
    ) *
    quantity *
    // if we have a variety pack selected then we should multiply
    // the price by the number of variants we have
    (varietyPackSelected ? selectedProduct.variants.length : 1)
  ).toString();

  const displayPrice = getDisplayPrice(price, currency);

  const showSubcribeToggle =
    withVarietyPack || selectedProduct.discountPercentage > 0;

  const varietyPack = {
    label: `Variety Pack (${selectedProduct.variants.length})`,
    value: 'varietyPack',
    quantities: [1, 3, 5],
    selectedOptions: [{ name: 'Flavor', value: 'Variety Pack' }],
  };

  // Get quantityOption data from Contentful. It seems that right now they
  // are all the same.
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

  // Making `showTabSelector` a variable because we might want to drive it from
  // the API
  const showTabSelector = true;

  return (
    <Fragment>
      <div class={cx('header', showTabSelector && 'has-tab-selector')}>
        {item.title && <p class="upsell-title">{item.title}</p>}
        {item.subtitle && <p class="upsell-subtitle">{item.subtitle}</p>}
      </div>

      <TabSelector
        activeIndex={activeProductIndex}
        onChange={(value) => {
          setActiveProductIndex(tabLabels.indexOf(value));
          sendAnalytics('UPSELL_JETPACK_TYPE_CHANGE', {
            value,
          });
        }}
        tabLabels={tabLabels}
        title={item.selectorLabel ?? 'Select'}
      />

      <div class="image single">
        {varietyPackSelected ? (
          <RotatingImage
            imagesToRotate={selectedProduct.variants.map(
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

        {selectedProduct.variants.length > 1 &&
          selectedVariant.selectedOptions.map((optionField, i) => {
            const hasFlavor = selectedVariant.selectedOptions.find(
              (item) => item.name.toLowerCase() === 'flavor',
            );
            // For each variant of this product, return an expanded "choice"
            // object that pulls `value` out of selectedOptions and makes it
            // `label` at the first level; this will be the *displayed text for
            // each <option> in the <select>*. Use variant id for the value
            // attribute in <option>. Also carry the original optionField array.
            const choices = selectedProduct.variants
              .map(variantToChoice(i))
              .filter(matchesSelectedVariant(hasFlavor, i, selectedVariant))
              .filter(findCurrent)
              .filter(showSizes(hasFlavor, optionField, i, selectedProduct));

            // If optionField.name contains 'color' then show a color selector
            // dropdown, else show a regular option dropdown.
            return optionField.name.toLowerCase() === 'color' ? (
              <CartDropdownColor
                key={i}
                fieldLabel={optionField.name}
                colorOrder={colorOrder}
                onChange={(value) => {
                  const variant = selectedProduct.variants.find((item) => {
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
                  const matchingVariant = selectedProduct.variants.find(
                    (variant) => {
                      return variant.id === value;
                    },
                  );
                  matchingVariant && setSelectedVariant(matchingVariant);
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
            onChange={(value) => {
              setQuantity(value);
              sendAnalytics('UPSELL_QUANTITY_CHANGE', { value });
            }}
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
                const varietyPackToAdd = selectedProduct.variants.map(
                  (variant) => {
                    return {
                      product: selectedProduct,
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
                  },
                );
                addToCart(varietyPackToAdd);
              } else {
                addToCart({
                  product: selectedProduct,
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
            discountPercentage={selectedProduct.discountPercentage}
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
