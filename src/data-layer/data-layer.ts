import { LocalForageCartItem } from '../hooks/localforage-cart';
import { VariantData, Product } from '../hooks/useSharedState';
import { blendJetAdaptor } from './blendjet-adaptor';

declare global {
  interface Window {
    __outsmartly__: {
      push: (event: Event) => void;
    };
    dataLayer: any;
    __orly__: (event: any) => void;
  }
}

export const sendAnalytics = (
  event: string,
  payload: Record<string, unknown> = {},
) => {
  window.__orly__ &&
    window.__orly__({
      event,
      payload: {
        time: window.performance.now(),
        ...payload,
      },
    });
};

export type PageView = {
  event: 'PAGE_VIEW';
  payload: { url: string };
};

type Item = {
  product: Omit<
    Product,
    'rating' | 'raters' | 'priceRange' | 'type' | 'metafields'
  >;
  variant: Omit<
    VariantData,
    | 'variantId'
    | 'colorId'
    | 'cartImage'
    | 'mediaContentCarousel'
    | 'shippingDate'
    | 'shippingOffset'
    | 'specialEdition'
  >;
};

export type ViewProduct = {
  event: 'VIEW_PRODUCT';
  payload: Item;
};

export type RemoveFromCart = {
  event: 'REMOVE_FROM_CART';
  payload: Item;
};

export type AddToCart = {
  event: 'ADD_TO_CART';
  payload: Item & { quantity: number };
};

export type AddBundleToCart = {
  event: 'ADD_BUNDLE_TO_CART';
  payload: (Item & { quantity: number })[];
};

export type ViewCart = {
  event: 'VIEW_CART';
  payload: {
    lineItems: LocalForageCartItem[];
    subtotal: number;
  };
};

export type Unknown = {
  event: string;
  payload: {
    [key: string]: unknown;
  };
};

export type Event =
  | PageView
  | ViewProduct
  | RemoveFromCart
  | AddToCart
  | AddBundleToCart
  | ViewCart;

export const outsmartlyDataLayer = {
  push(event: Event) {
    window.__orly__ && window.__orly__(event);
    blendJetAdaptor(event);
  },
};

if (typeof window !== 'undefined') {
  window.__outsmartly__ = outsmartlyDataLayer;
}
