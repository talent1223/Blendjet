/** @jsx h */
import { h } from 'preact';
import { PaymentsProps } from '../components/Payments/Payments';
import { ProductPurchase } from '../components/ProductPurchase/ProductPurchase';
import { ValuePropsProps } from '../components/ValueProps/ValueProps';
import { useSharedState } from '../hooks/useSharedState';
import { getDisplayPrice } from '../lib/utils';
import { Image } from '../types/image';

export type RawWarrantyItem = {
  id: string;
  title: string;
  label: string;
  price: string;
  handle: string;
  sku: string;
  priceCurrency: string;
  pimSyncSourceProductId: string;
};

export interface WarrantyRawData {
  title: string;
  productType: string;
  image: Image;
  items: RawWarrantyItem[];
}

export type ProductPurchaseContainerProps = {
  productWarranty: WarrantyRawData;
  valueProps: ValuePropsProps;
};

export function ProductPurchaseContainer({
  productWarranty,
  valueProps,
}: ProductPurchaseContainerProps) {
  // Shared State
  const useSharedStateStore = useSharedState();
  const currentVariant = useSharedStateStore((state) => state.currentVariant);
  const setCurrentVariantById = useSharedStateStore(
    (state) => state.setCurrentVariantById,
  );
  const { country, currency, shippingDay, shippingMessage } =
    useSharedStateStore(({ context }) => ({
      country: context.country,
      currency: context.currency,
      shippingDay: context.shippingDay,
      shippingMessage: context.shippingMessage,
    }));
  const { quantity, decrementQuantity, incrementQuantity, addItemToCart } =
    useSharedStateStore((state) => ({
      quantity: state.quantity,
      decrementQuantity: state.decrementQuantity,
      incrementQuantity: state.incrementQuantity,
      addItemToCart: state.addItemToCart,
    }));

  const { selectedWarrantyHandle, setSelectedWarrantyHandle } =
    useSharedStateStore((state) => ({
      selectedWarrantyHandle: state.selectedWarrantyHandle,
      setSelectedWarrantyHandle: state.setSelectedWarrantyHandle,
    }));

  const colorOrder = useSharedStateStore((state) => state.colorOrder);

  // Root-scoped state
  const { items: productWarranties, ...restOfWarranty } = productWarranty;

  const processedProductWarranty = {
    ...restOfWarranty,
    country,
    selectedWarrantyHandle,
    setSelectedWarrantyHandle,
    items: productWarranties.map((item) => {
      // Remove `price` and replace it with calculated ``displayPrice`
      const { price, ...remaining } = item;
      return {
        ...remaining,
        displayPrice: getDisplayPrice(item.price, currency),
      };
    }),
  };

  const { productBundleProps } = useSharedStateStore((state) => ({
    productBundleProps: state.productBundleProps,
  }));

  return (
    <ProductPurchase
      addItemToCart={addItemToCart}
      colorOrder={colorOrder}
      currency={currency}
      decrementQuantity={decrementQuantity}
      incrementQuantity={incrementQuantity}
      productBundle={{
        ...productBundleProps,
        currentVariant: { image: currentVariant.cartImage },
      }}
      productWarranty={processedProductWarranty}
      quantity={quantity}
      setCurrentVariantById={setCurrentVariantById}
      shippingDay={shippingDay}
      shippingMessage={shippingMessage}
      valueProps={valueProps}
      variant={currentVariant}
    />
  );
}
