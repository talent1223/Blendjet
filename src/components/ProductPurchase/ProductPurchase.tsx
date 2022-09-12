/** @jsx h */
import { h } from 'preact';
import {
  ProductWarranty,
  ProductWarrantyProps,
} from '../ProductWarranty/ProductWarranty';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { AddToCartButton } from '../AddToCartButton/AddToCartButton';
import {
  ProductBundle,
  ProductBundleProps,
} from '../ProductBundle/ProductBundle';
import { ShippingNotification } from '../ShippingNotification/ShippingNotification';
import { GuaranteeNotice } from '../GuaranteeNotice/GuaranteeNotice';
import { ValueProps, ValuePropsProps } from '../ValueProps/ValueProps';
import { AddToCartFloat } from '../AddToCartFloat/AddToCartFloat';
import { ColorOrder, ColorSelector } from '../ColorSelector/ColorSelector';
import { ApplicationState, VariantData } from '../../hooks/useSharedState';
import { cx, getDisplayPrice } from '../../lib/utils';
import { ProductSelectContainer } from '../../containers/ProductSelectContainer';
import '../../styles/shared/button-group.scss';
import '../../styles/shared/quantity-select-container.scss';
import './style.scss';

import api from '../../../outsmartly/content-sources/api.json';
import { TransformedData } from '../../../outsmartly/content-sources/src/transform/transform-data';

const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];

const { productSelect } = {
  productSelect: blendjet2Api.productSelect,
};

export type ProductPurchaseProps = {
  // TODO: addItemToCart interface is TBD. Pass a no-op for now.
  addItemToCart: (cartItem: any) => void;
  colorOrder: ColorOrder;
  currency: ApplicationState['context']['currency'];
  decrementQuantity: () => void;
  incrementQuantity: () => void;
  productBundle: ProductBundleProps;
  productWarranty: ProductWarrantyProps;
  quantity: number;
  setCurrentVariantById: (id: string) => void;
  shippingDay: string;
  shippingMessage: string;
  valueProps: ValuePropsProps;
  variant: VariantData;
};

export function ProductPurchase({
  colorOrder,
  addItemToCart,
  currency,
  decrementQuantity,
  incrementQuantity,
  productBundle,
  productWarranty,
  quantity,
  setCurrentVariantById,
  shippingDay,
  shippingMessage,
  valueProps,
  variant,
}: ProductPurchaseProps) {
  const variantPrice = getDisplayPrice(variant.price, currency, quantity);
  return (
    <div className="product-select__controls">
      <ProductSelectContainer {...productSelect} />
      <ColorSelector
        colorOrder={colorOrder}
        selectedColor={{ id: variant.colorId, title: variant.title }}
      />
      <ProductWarranty {...productWarranty} />
      <div class="button-group">
        <div class="quantity-select-container">
          <QuantitySelector
            quantity={quantity}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
        </div>
        <AddToCartButton
          onClick={addItemToCart}
          price={variantPrice}
          small={true}
        />
      </div>
      <ProductBundle {...productBundle} />
      <ShippingNotification
        message={shippingMessage}
        shippingDay={shippingDay}
      />
      <GuaranteeNotice />
      <ValueProps {...valueProps} />
      <AddToCartFloat
        price={variantPrice}
        quantity={quantity}
        increment={incrementQuantity}
        decrement={decrementQuantity}
        onClick={addItemToCart}
        shippingDay={shippingDay}
        shippingMessage={shippingMessage}
        colorOrder={colorOrder}
        variant={variant}
      />
    </div>
  );
}
