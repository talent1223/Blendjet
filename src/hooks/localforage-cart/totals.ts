import { getLineItems } from './lineItems';

export async function getQuantityTotal() {
  const lineItems = await getLineItems();
  if (lineItems.length >= 1) {
    return lineItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  return 0;
}

export async function getCartSubtotal() {
  const lineItems = await getLineItems();
  if (lineItems.length >= 1) {
    return lineItems.reduce(
      (acc, item) => acc + item.variant.price * item.quantity,
      0,
    );
  }

  return 0;
}
