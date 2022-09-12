import localforage from 'localforage';
import isEqual from 'lodash.isequal';
import { saveCartToRecart } from './recart';
import { v4 } from 'uuid';

export type LocalForageCartItem = {
  id: string;
  pimSyncSourceProductId: string;
  handle: string;
  title: string;
  variant: {
    id: string;
    price: number;
    title: string;
    featuredMedia: {
      thumbnailSrc: string;
      altText: string | undefined;
    };
    priceCurrency: string;
    sku: string;
    isSubscription?: boolean;
    discountPercentage?: number;
  };
  quantity: number;
  metafields: { key: string; value: string }[];
  vendor: string;
};

export async function addLineItem(payload: LocalForageCartItem) {
  const lineItems = await getLineItems();
  const index = lineItems.findIndex((lineItem) => {
    if (lineItem.variant.id === payload.variant.id) {
      const areMetafieldsEqual = isEqual(
        payload.metafields,
        lineItem.metafields,
      );
      return areMetafieldsEqual; // match only if metafields are the same.
    }
    return false;
  });
  if (index === -1) {
    // generate unique id for line
    payload.id = `${payload.variant.id}::${v4()}`;
    lineItems.push(payload);
  } else {
    lineItems[index].quantity += payload.quantity;
  }
  return saveLineItems(lineItems);
}

export async function removeLineItem(id: string) {
  const lineItems = await getLineItems();
  const index = lineItems.findIndex((lineItem) => lineItem.id === id);
  if (index !== -1) {
    lineItems.splice(index, 1);
    saveLineItems(lineItems);
  }
}

export async function incrementLineItem(id: string) {
  const lineItems = await getLineItems();
  const index = lineItems.findIndex((lineItem) => lineItem.id === id);
  if (index !== -1) {
    lineItems[index].quantity++;
    saveLineItems(lineItems);
  }
}

export async function decrementLineItem(id: string) {
  const lineItems = await getLineItems();
  const index = lineItems.findIndex((lineItem) => lineItem.id === id);
  if (index !== -1 && lineItems[index].quantity >= 1) {
    lineItems[index].quantity--;
    if (lineItems[index].quantity === 0) {
      lineItems.splice(index, 1);
    }
    saveLineItems(lineItems);
  }
}

export async function saveLineItems(lineItems: LocalForageCartItem[]) {
  await localforage.setItem('line-items', lineItems);
  saveCartToRecart();
}

export async function initLineItems() {
  const lineItems = await getLineItems();
  await localforage.setItem('line-items', lineItems);
  saveCartToRecart();
}

export async function getLineItems(): Promise<LocalForageCartItem[]> {
  const lineItems: LocalForageCartItem[] =
    (await localforage.getItem('line-items')) || [];
  return lineItems;
}

export async function getCheckoutLineItems() {
  const lineItems = await getLineItems();
  if (lineItems.length > 0) {
    return lineItems.map((lineItem) => ({
      cartItemId: lineItem.id,
      variantId: lineItem.variant.id,
      quantity: lineItem.quantity,
      metafields: lineItem.metafields,
    }));
  } else {
    return [];
  }
}
