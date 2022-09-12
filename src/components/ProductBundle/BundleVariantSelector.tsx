/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { cx } from '../../lib/utils';
import { ProductOptionSwatch } from '../ProductOptionSwatch/ProductOptionSwatch';
import { BundleProduct, BundleProductVariant } from './ProductBundle';
import { SelectorModal } from './SelectorModal';

interface VariantSelectorProps {
  product: BundleProduct;
  currentVariant: BundleProductVariant;
  show: boolean;
  onClose: () => void;
  onVariantSelect: (i: number) => void;
}

export function BundleVariantSelector({
  product,
  currentVariant,
  show,
  onClose,
  onVariantSelect,
}: VariantSelectorProps) {
  // If only one available variant, then don't bother showing the selector
  const singleVariant = product.variants.length <= 1;

  return (
    <SelectorModal show={show} onClose={onClose} video={product.video}>
      <div
        class={cx(
          'variant-select',
          'bundle-item',
          singleVariant && 'single-variant',
        )}>
        <ColorSelect
          product={product}
          currentValue={currentVariant.colorId}
          onColorSelect={onVariantSelect}
        />
      </div>
    </SelectorModal>
  );
}

interface ColorSelectProps {
  product: BundleProduct;
  currentValue: string;
  onColorSelect: (i: number) => void;
}

function ColorSelect({
  product,
  currentValue,
  onColorSelect,
}: ColorSelectProps) {
  const [selectedValue, setSelectedValue] = useState<string>(currentValue);

  return (
    <div class="options nacelle bundle-variant-select-color">
      <div class="option">
        <div class="swatches columns is-marginless is-multiline nacelle">
          {product.variants.map((variant, i) => (
            <ProductOptionSwatch
              colorId={variant.colorId}
              isSelected={variant.colorId === selectedValue}
              swatchClicked={() => {
                setSelectedValue(variant.colorId);
                onColorSelect(i);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
