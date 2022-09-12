/** @jsx h */
import { h } from 'preact';
import { useSharedState } from '../hooks/useSharedState';
import { ProductStickySelect } from '../components/ProductStickySelect';
import { getDisplayPrice } from '../lib/utils';
import api from '../../outsmartly/content-sources/api.json';
import { TransformedData } from '../../outsmartly/content-sources/src/transform/transform-data';

export type ProductStickySelectContainerProps = {};

const blendjet2Api = api['blendjet-2'] as TransformedData['blendjet-2'];

const { productSelect } = {
  productSelect: blendjet2Api.productSelect,
};

export function ProductStickySelectContainer({}: ProductStickySelectContainerProps) {
  // Shared State
  const useSharedStateStore = useSharedState();
  const colorOrder = useSharedStateStore((state) => state.colorOrder);

  const { currency, currentVariant } = useSharedStateStore(
    ({ context, currentVariant }) => ({
      currency: context.currency,
      currentVariant,
    }),
  );
  const { quantity, addItemToCart } = useSharedStateStore((state) => ({
    quantity: state.quantity,
    addItemToCart: state.addItemToCart,
  }));

  const variantPrice = getDisplayPrice(
    currentVariant.price,
    currency,
    quantity,
  );
  return (
    <ProductStickySelect
      image={currentVariant.cartImage}
      title={productSelect.product.title}
      colorOrder={colorOrder}
      selectedColor={{
        id: currentVariant.colorId,
        title: currentVariant.title.toUpperCase(),
        price: getDisplayPrice(currentVariant.price, currency),
      }}
      totalPrice={variantPrice}
      comparedPrice={getDisplayPrice(
        currentVariant.compareAtPrice
          ? currentVariant.compareAtPrice
          : currentVariant.price,
        currency,
      )}
      ship={'SHIPS BY 4/1'}
      addItemToCart={addItemToCart}
    />
  );
}
