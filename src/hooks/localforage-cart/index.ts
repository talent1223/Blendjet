import { addBatchToCart } from './addBatchToCart';
import { checkoutCreate } from './checkout/create';
import {
  resetCheckout,
  setCheckout,
  checkoutRedirect,
  getCheckoutId,
  getLinkerParam,
  getHasSubscriptionProduct,
  processCheckout,
} from './checkout/helpers';
import { initializeCheckout } from './checkout/initialize';
import {
  getLineItems,
  saveLineItems,
  addLineItem,
  removeLineItem,
  incrementLineItem,
  decrementLineItem,
  initLineItems,
  getCheckoutLineItems,
} from './lineItems';
import { getQuantityTotal, getCartSubtotal } from './totals';
import { saveDiscountParam } from './saveDiscountParam';
export type { LocalForageCartItem } from './lineItems';

export const localForageCart = {
  saveDiscountParam,
  checkoutCreate,
  resetCheckout,
  setCheckout,
  checkoutRedirect,
  getCheckoutId,
  getLinkerParam,
  getHasSubscriptionProduct,
  addBatchToCart,
  processCheckout,
  getLineItems,
  initializeCheckout,
  saveLineItems,
  addLineItem,
  removeLineItem,
  incrementLineItem,
  decrementLineItem,
  initLineItems,
  getCheckoutLineItems,
  getQuantityTotal,
  getCartSubtotal,
};
