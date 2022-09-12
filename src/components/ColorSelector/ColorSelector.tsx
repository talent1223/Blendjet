/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductOptionSwatch } from '../ProductOptionSwatch/ProductOptionSwatch';

export type ColorOrder = {
  id: string;
  swatch: string;
  swatchClicked: () => void;
}[];

type SelectedColor = {
  id: string;
  title?: string;
};

export type ColorSelectorProps = {
  colorOrder: ColorOrder;
  selectedColor: SelectedColor;
  variantLabel?: string;
};

export function ColorSelector({
  colorOrder,
  selectedColor,
  variantLabel = 'Color',
}: ColorSelectorProps) {
  return (
    <div class="product-select__controls__variant-color">
      {/* Only show the label and color title if there's a title */}
      {selectedColor.title && (
        <div class="product-select__controls__variant-color__text">
          <span class="product-select__controls__variant-color__text__label">
            {variantLabel}:{' '}
          </span>
          <span class="product-select__controls__variant-color__text__selected-color">
            {selectedColor.title}
          </span>
        </div>
      )}

      <div class="product-select__controls__variant-color__swatches">
        <div class="options nacelle">
          <div class="option">
            <div class="swatches columns is-marginless is-multiline nacelle">
              {colorOrder.map(({ swatch, swatchClicked }) => (
                <ProductOptionSwatch
                  colorId={swatch}
                  isSelected={swatch === selectedColor.id}
                  swatchClicked={swatchClicked}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
