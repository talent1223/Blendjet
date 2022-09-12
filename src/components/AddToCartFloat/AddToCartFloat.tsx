/** @jsx h */
import { Fragment, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { ProductOptionSwatch } from '../ProductOptionSwatch/ProductOptionSwatch';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import { CloseButton } from '../Modal/CloseButton';
import { cx } from '../../lib/utils';
import { ColorOrder, ColorSelector } from '../ColorSelector/ColorSelector';
import { ShippingNotification } from '../ShippingNotification/ShippingNotification';
import { useShowFloat } from '../../hooks/useShowFloat';
import { VariantData } from '../../hooks/useSharedState';
import './style.scss';
import '../../styles/shared/button-group.scss';
import '../../styles/shared/quantity-select-container.scss';

export interface AddToCartFloatProps {
  initialShow?: boolean;
  price: string;
  quantity: number;
  increment: () => void;
  decrement: () => void;
  variant: VariantData;
  colorOrder: ColorOrder;
  shippingDay: string;
  shippingMessage: string;
  // TODO: This interface is TBD. Pass a no-op for now.
  onClick: (cartItem: any) => void;
}

export function AddToCartFloat({
  initialShow = false,
  price,
  quantity,
  increment,
  decrement,
  variant,
  colorOrder,
  shippingDay,
  shippingMessage,
  onClick,
}: AddToCartFloatProps) {
  const [showColorSelector, setShowColorSelector] = useState(false);
  const { showFloat } = useShowFloat(initialShow);

  // if the float closes, we should close the color selector as well
  useEffect(() => {
    !showFloat && setShowColorSelector(false);
  }, [showFloat]);

  return (
    <Fragment>
      <div class={cx('add-to-cart__mobile-float', showFloat && 'float-show')}>
        <div class="button-group">
          <div class="mobile-swatch">
            <ProductOptionSwatch
              colorId={variant.colorId}
              isSelected={true}
              // this opens and closes the color selector, and is a single color
              swatchClicked={() => setShowColorSelector(!showColorSelector)}
              size="large"
            />
          </div>
          <div class="quantity-select-container">
            <QuantitySelector
              quantity={quantity}
              decrementQuantity={decrement}
              incrementQuantity={increment}
            />
          </div>
          <AddToCartButton
            price={price}
            small={true}
            autoWidth={true}
            onClick={onClick}
          />
        </div>
      </div>

      <div
        class={cx(
          'mobile-variant-select',
          showFloat && showColorSelector && 'float-show',
        )}>
        <CloseButton
          onClick={() => setShowColorSelector(false)}
          position="top-right"
        />
        <ColorSelector
          colorOrder={colorOrder}
          selectedColor={{ id: variant.colorId, title: variant.title }}
        />
        <ShippingNotification
          compact={true}
          shippingDay={shippingDay}
          message={shippingMessage}
        />
      </div>
    </Fragment>
  );
}
