/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

export interface ProductOptionSwatchProps {
  colorId: string;
  swatchClicked: () => void;
  isSelected: boolean;
  swatchStyle?: 'bubble' | 'tab';
  available?: boolean;
  size?: string;
  value?: string;
}

export function ProductOptionSwatch({
  colorId,
  swatchClicked,
  isSelected,
  swatchStyle = 'bubble',
  available = true,
  size = 'small',
  value,
}: ProductOptionSwatchProps) {
  return (
    <div
      class={cx(
        'option-swatch nacelle no-select',
        swatchStyle,
        available ? 'available' : 'not-available',
        'swatch-color__Color',
        isSelected && 'selected',
        size === 'large' && 'bubble-large',
      )}
      onClick={swatchClicked}>
      {swatchStyle === 'bubble' ? (
        <div class={`swatch-color__${colorId} inside-color`} />
      ) : (
        <span>{{ value }}</span>
      )}
    </div>
  );
}
