import { getLineItems } from './lineItems';
import { decodeBase64Id, delay } from './utils';

declare global {
  interface Window {
    _recart: any;
  }
}

export async function saveCartToRecart() {
  const lineItems = await getLineItems();

  const cartData = lineItems.reduce(
    function (sum, item) {
      sum.itemCount += Number(item.quantity);
      sum.value += parseFloat(
        (Number(item.variant.price) * Number(item.quantity)).toFixed(2),
      );
      return sum;
    },
    {
      itemCount: 0,
      value: 0,
      returnUrl: window.location.hostname,
      currency: 'USD',
    },
  );

  if (lineItems.length > 0) {
    cartData.currency = lineItems[0].variant.priceCurrency;
  }

  const cartItems = lineItems.map((lineItem) => {
    const quantity = Number(lineItem.quantity);
    const price = Number(lineItem.variant.price);

    return {
      variantId: parseInt(decodeBase64Id(lineItem.variant.id), 10),
      productId: parseInt(decodeBase64Id(lineItem.pimSyncSourceProductId), 10),
      name: lineItem.title,
      qty: quantity,
      price: price,
      qtyPrice: parseFloat((quantity * price).toFixed(2)),
      currency: lineItem.variant.priceCurrency,
      imageUrl: lineItem.variant.featuredMedia.thumbnailSrc,
    };
  });

  if (!window._recart || !window._recart.isReady()) {
    let timeoutCounter = 0;
    while (!window._recart || !window._recart.isReady()) {
      if (timeoutCounter > 30) {
        console.error('Recart is not initialized.');
        return;
      }
      await delay(200);
      timeoutCounter++;
    }

    await window._recart.setCart(cartData, cartItems, new Date());
  }
  await window._recart.setCart(cartData, cartItems, new Date());
}

export function getRecartMetafieldsForCheckout() {
  const metaFields = [{ key: 'RecartIntegration', value: 'Nacelle' }];

  if (!window || !window._recart) {
    return metaFields;
  }

  const sessionId =
    window._recart.getSessionId && window._recart.getSessionId();
  if (sessionId) {
    metaFields.push({ key: 'RecartSessionId', value: sessionId });
  }

  const shopperId =
    window._recart.getShopperId && window._recart.getShopperId();
  if (shopperId) {
    metaFields.push({ key: 'RecartShopperId', value: shopperId });
  }

  return metaFields;
}
