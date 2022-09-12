/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { cx } from '../../lib/utils';
import { ColorSelector } from '../ColorSelector/ColorSelector';
import { CaretDown } from '../Icons/Navigation';
import { ProductOptionSwatch } from '../ProductOptionSwatch/ProductOptionSwatch';
import { ColorOrderData } from '../../hooks/useSharedState';
import {
  kebabToTitleCase,
  titleToKebabCase,
} from '../../../outsmartly/content-sources/src/transform/utils';

interface CartDropdownColorProps {
  fieldLabel: string;
  colorOrder: ColorOrderData;
  currentChoice: {
    label: string;
    value: string;
  };
  isMobile?: boolean;
  onChange?: (value: any) => void;
}

export function CartDropdownColor({
  fieldLabel,
  colorOrder,
  currentChoice,
  isMobile = true,
  onChange,
}: CartDropdownColorProps) {
  // Local state for showing/hiding the color selector
  const [showColorSelector, setShowColorSelector] = useState(false);

  // Need to override swatchClicked function to first close the color selector
  const localColors = colorOrder.map(({ id, swatch }) => ({
    id,
    swatch,
    swatchClicked: () => {
      setShowColorSelector(false);
      const newValue = kebabToTitleCase(swatch);
      onChange && onChange(newValue);
    },
  }));

  // Convert current color title string to a swatch string
  const swatch = titleToKebabCase(currentChoice.label);

  return (
    <div class="dropdown-container cart-dropdown-color">
      {isMobile && (
        <div class="dropdown" tabIndex={0} role="button">
          {/* This `dropbtn` opens the color selector */}
          <div class="dropbtn" onClick={() => setShowColorSelector(true)}>
            <span class="field-label" style="margin-right:7px">
              {fieldLabel}:
            </span>
            <div class="dropbtn__swatch">
              <ProductOptionSwatch
                colorId={swatch}
                isSelected={false}
                swatchClicked={() => {}}
              />
            </div>

            <div class="dropbtn__text">
              <div class="dropbtn__text__color">
                {currentChoice.label.replace('Lisa Frank ', '')}
              </div>
            </div>

            <div class="dropbtn__caret-down">
              <div class="svg-container caret-down">
                <CaretDown />
              </div>
            </div>
          </div>

          <div
            class={cx('dropdown-content', showColorSelector && 'float-show')}>
            {/* Transparent overlay for capturing clicks outside the selector */}
            <div
              class="dropdown-content__curtain"
              onClick={() => setShowColorSelector(false)}></div>
            <div class="dropdown-content__swatches">
              <ColorSelector
                colorOrder={localColors}
                selectedColor={{ id: swatch }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
