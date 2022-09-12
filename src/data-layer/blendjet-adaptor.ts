import { Product } from '../hooks/useSharedState';
import { GA_ID, PINTEREST_ID, SNAP_ID } from './config';
import {
  AddBundleToCart,
  AddToCart,
  Event,
  PageView,
  RemoveFromCart,
  ViewCart,
  ViewProduct,
} from './data-layer';

declare global {
  interface Window {
    _learnq: any;
    ga: any;
    gtag: any;
    pintrk: any;
    snaptr: any;
  }
}

export function blendJetAdaptor(event: Event) {
  window.dataLayer = window.dataLayer || [];
  switch (event.event) {
    case 'ADD_BUNDLE_TO_CART':
      addBundleToCart(event);
      break;
    case 'ADD_TO_CART':
      addToCart(event);
      break;
    case 'PAGE_VIEW':
      pageView(event);
      break;
    case 'REMOVE_FROM_CART':
      removeFromCart(event);
      break;
    case 'VIEW_CART':
      viewCart(event);
      break;
    case 'VIEW_PRODUCT':
      viewProduct(event);
      break;
    default:
      console.error('Unkonwn event', event);
  }
}

function addBundleToCart(event: AddBundleToCart) {
  const addBundleToCartEvent = elevarAddBundleToCart(event);
  window.dataLayer.push(addBundleToCartEvent);
}

function addToCart(event: AddToCart) {
  const addToCartEvent = elevarAddToCart(event);
  window.dataLayer.push(addToCartEvent);
  sinks.googleAnalyticsAddToCart(event);
  sinks.googleTagAddToCart(event);
  sinks.klaviyoAddToCart(event);
  sinks.snapAddToCart();
}

function pageView(event: PageView) {
  const pageView = {
    event: 'dl_page_view',
    event_id: createUUID(),
  };
  window.dataLayer.push(pageView);
  sinks.googleTagPageView();
  sinks.pinterestPageView();
  sinks.googleAnalyticsPageView();
  sinks.snapPageView();
}

function removeFromCart(event: RemoveFromCart) {
  const removeFromCartEvent = elevarRemoveFromCart(event);
  window.dataLayer.push(removeFromCartEvent);
  sinks.googleAnalyticsRemoveFromCart(event);
}

function viewCart(event: ViewCart) {
  const viewCartEvent = elevarViewCart(event);
  window.dataLayer.push(viewCartEvent);
}

function viewProduct(event: ViewProduct) {
  const productViewEvent = elevarProductView(event);
  window.dataLayer.push(productViewEvent);
  sinks.snapProductView();
  sinks.googleTagProductView(event);
  sinks.klaviyoProductView(event);
  sinks.googleTagProductView(event);
}

function createUUID() {
  var result = '';
  var length = 16;
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

function productId(product: Product) {
  if (product && product.pimSyncSourceProductId) {
    return getId(product.pimSyncSourceProductId);
  }
  return null;
}

function getId(base64id: string) {
  if (base64id && typeof base64id === 'string') {
    return atob(base64id).split('/').pop();
  }
  return base64id;
}

function elevarProductView(event: ViewProduct) {
  const uuid = createUUID();
  const variant = event.payload.variant;
  const product = event.payload.product;
  const variantId = getId(variant.id);
  const referrer = document.referrer.includes('marketplace')
    ? document.referrer
    : '';
  return {
    event: 'dl_view_item',
    event_id: uuid,
    ecommerce: {
      currencyCode: 'USD',
      detail: {
        actionField: { list: referrer, action: 'detail' },
        products: [
          {
            name: product.title.replace("'", ''),
            id: (variant && variant.sku) || '',
            product_id: getId(product.pimSyncSourceProductId),
            variant_id: (variant && variantId) || '',
            image: variant.image.src,
            price: variant.price,
            brand: product.vendor.replace("'", ''),
            variant:
              (variant && variant.title && variant.title.replace("'", '')) ||
              '',
            category: product.productType,
            inventory: 1,
            list: referrer,
          },
        ],
      },
    },
  };
}

function elevarViewCart(event: ViewCart) {
  const { subtotal, lineItems } = event.payload;
  var uuid = createUUID();
  var cartItems = lineItems.map((product, idx) => {
    var productId = getId(product.pimSyncSourceProductId);
    var variantId = getId(product.variant.id);
    return {
      position: idx,
      id: product.variant.sku,
      product_id: productId,
      variant_id: variantId,
      name: product.title.replace("'", ''),
      category: 'NA',
      quantity: product.quantity,
      price: product.variant.price.toString(),
      brand: product.vendor.replace("'", ''),
      variant: product.variant.title,
    };
  });

  return {
    event: 'dl_view_cart',
    event_id: uuid,
    cart_total: subtotal,
    ecommerce: {
      currencyCode: 'USD',
      actionField: { list: 'Shopping Cart' },
      impressions: cartItems,
    },
  };
}

function elevarAddToCart(event: AddToCart) {
  const { variant, product, quantity } = event.payload;
  let currencyCode = 'USD';
  const uuid = createUUID();
  const referrer = document.referrer.includes('marketplace')
    ? document.referrer
    : '';
  const productId = getId(product.pimSyncSourceProductId);
  const variantId = getId(variant.id);
  const productList = [
    {
      name: product.title.replace("'", ''),
      id: (variant && variant.sku) || '',
      product_id: productId,
      variant_id: (variant && variantId) || '',
      image: variant.image.src,
      price: variant.price,
      brand: product.vendor.replace("'", ''),
      variant:
        (variant && variant.title && variant.title.replace("'", '')) || '',
      category: product.productType,
      inventory: quantity,
      list: referrer,
      source: 'productpage',
    },
  ];

  return {
    event: 'dl_add_to_cart',
    event_id: uuid,
    ecommerce: {
      currencyCode: currencyCode,
      add: {
        actionField: { list: referrer, action: 'add' },
        products: productList,
      },
    },
  };
}

function elevarAddBundleToCart(event: AddBundleToCart) {
  const uuid = createUUID();
  const referrer = document.referrer.includes('marketplace')
    ? document.referrer
    : '';
  const productList = event.payload.map(({ product, variant, quantity }) => {
    return {
      name: product?.title?.replace("'", ''),
      id: (variant && variant.sku) || '',
      product_id: getId(product?.pimSyncSourceProductId),
      variant_id: getId(variant?.id),
      image: variant.image.src,
      price: variant.price,
      brand: product?.vendor.replace("'", ''),
      variant:
        (variant && variant.title && variant.title.replace("'", '')) || '',
      category: product?.productType,
      inventory: quantity || 1,
      list: referrer,
      source: 'productpage',
    };
  });

  return {
    event: 'dl_add_to_cart',
    event_id: uuid,
    ecommerce: {
      currencyCode: 'USD',
      add: {
        actionField: { list: referrer },
        products: productList,
      },
    },
  };
}

function elevarRemoveFromCart(event: RemoveFromCart) {
  const { product, variant } = event.payload;
  const uuid = createUUID();

  var referrer = document.referrer.includes('marketplace')
    ? document.referrer
    : '';
  var variantId = getId(variant.id);
  var productId = getId(product.pimSyncSourceProductId);
  return {
    event: 'dl_remove_from_cart',
    event_id: uuid,
    ecommerce: {
      currencyCode: variant.priceCurrency,
      remove: {
        actionField: { list: referrer },
        products: [
          {
            name: variant.title.replace("'", ''),
            id: (variant && variant.sku) || '',
            product_id: productId,
            variant_id: (variant && variantId) || '',
            image: variant.image.src,
            price: variant.price,
            brand: product.vendor.replace("'", ''),
            variant:
              (variant && variant.title && variant.title.replace("'", '')) ||
              '',
            category: 'NA',
            quantity: [],
            list: referrer,
          },
        ],
      },
    },
  };
}

const sinks = {
  ga: typeof window !== 'undefined' ? window.ga : null,
  gtag: typeof window !== 'undefined' ? window.gtag : null,
  pintrk: typeof window !== 'undefined' ? window.pintrk : null,
  snaptr: typeof window !== 'undefined' ? window.snaptr : null,
  pinterestPageView() {
    if (typeof this.pintrk !== 'undefined') {
      this.pintrk('load', PINTEREST_ID);
      this.pintrk('page');
      this.pintrk('track', 'pagevisit');
    }
  },
  snapPageView() {
    if (typeof this.snaptr !== 'undefined') {
      this.snaptr('init', SNAP_ID);
      //        this.snaptr('init', 'e52aa5a4-67c5-48ab-8bf6-418523957576') //Added for BEN
      this.snaptr('track', 'PAGE_VIEW');
    }
  },
  googleAnalyticsPageView() {
    if (typeof this.ga !== 'undefined') {
      const vm = this;
      this.ga('send', 'pageview', window.location.href);
    }
  },
  googleTagPageView() {
    if (typeof this.gtag !== 'undefined') {
      const vm = this;
      this.gtag('event', 'page_view', {
        send_to: GA_ID,
        items: [
          {
            id: window.location.pathname,
            google_business_vertical: 'retail',
          },
        ],
      });
    }
  },

  /// / PRODUCT VIEW METHODS //////////////////////////////
  snapProductView() {
    if (typeof this.snaptr !== 'undefined') {
      this.snaptr('track', 'VIEW_CONTENT');
    }
  },
  klaviyoProductView(event: ViewProduct) {
    const { product, variant } = event.payload;
    if (window._learnq) {
      const _learnq = window._learnq || [];
      const vm = this;
      // console.log('klaviyo', vm.logEntry)
      var item = {
        Name: product.title,
        ProductID: decodeBase64Id(product.pimSyncSourceProductId),
        // Categories: vm.logEntry.payload.product.productType,
        ImageURL: variant.image.src,
        URL: 'https://www.blendjet.com/products' + product.handle,
        // Brand: vm.logEntry.payload.product.vendor,
        Price: variant.price,
        // CompareAtPrice: product.priceRange.max
      };
      _learnq.push(['track', 'Viewed Product', item]);
      _learnq.push([
        'trackViewedItem',
        {
          Title: item.Name,
          ItemId: item.ProductID,
          // Categories: item.Categories,
          ImageUrl: item.ImageURL,
          Url: item.URL,
          Metadata: {
            Price: item.Price,
            // CompareAtPrice: item.CompareAtPrice
          },
        },
      ]);
    }
  },
  googleAnalyticsProductView(event: ViewProduct) {
    const { product, variant } = event.payload;
    if (typeof this.ga !== 'undefined') {
      const vm = this;
      this.ga('ec:addProduct', {
        id: decodeBase64ProductId(product.id),
        name: product.title,
      });
      this.ga('ec:setAction', 'detail');
      this.ga('send', 'pageview');
    }
  },

  googleTagProductView(event: ViewProduct) {
    const { product, variant } = event.payload;
    if (
      typeof this.gtag !== 'undefined'
      // &&this.logEntry
      // &&this.logEntry.product
      // &&this.logEntry.product.variants.length
    ) {
      const vm = this;
      // console.log('gtag product', vm.logEntry)
      this.gtag('event', 'view_item', {
        send_to: GA_ID,
        value: variant.price,
        items: [
          {
            id: decodeBase64Id(product.pimSyncSourceProductId),
            google_business_vertical: 'retail',
          },
        ],
      });
    }
  },

  /// / ADD TO CART METHODS ///////////////////////////////
  pinterestAddToCart(event: AddToCart) {
    const { product, variant } = event.payload;
    if (typeof this.pintrk !== 'undefined') {
      const vm = this;
      this.pintrk('track', 'AddToCart', {
        value: variant.price,
        product_price: variant.price,
        product_name: product.title,
        product_id: decodeBase64VariantId(variant.id),
        currency: 'USD',
      });
    }
  },
  snapAddToCart() {
    if (typeof this.snaptr !== 'undefined') {
      this.snaptr('track', 'ADD_CART');
    }
  },
  googleAnalyticsAddToCart(event: AddToCart) {
    const { product, variant } = event.payload;
    if (typeof this.ga !== 'undefined') {
      const vm = this;
      this.ga('ec:addProduct', {
        id: decodeBase64ProductId(variant.id),
        name: product.title,
      });
      this.ga('ec:setAction', 'add');
      this.ga('send', 'event', 'UX', 'click', 'add to cart');
    }
  },

  googleTagAddToCart(event: AddToCart) {
    const { product, variant } = event.payload;
    if (typeof this.gtag !== 'undefined') {
      const vm = this;

      this.gtag('event', 'add_to_cart', {
        send_to: GA_ID,
        value: variant.price,
        items: [
          {
            id: decodeBase64VariantId(variant.id),
            google_business_vertical: 'retail',
          },
        ],
      });
    }
  },

  klaviyoAddToCart(event: AddToCart) {
    const { variant, product } = event.payload;
    if (window._learnq) {
      const vm = this;
      var _learnq = window._learnq || [];
      var item = {
        Name: product.title,
        ProductID: decodeBase64Id(product.pimSyncSourceProductId),
        Categories: product.productType,
        ImageURL: variant.image.src,
        URL: 'https://www.blendjet.com/products' + product.handle,
        Brand: product.vendor,
        Price: variant.price,
      };
      _learnq.push(['track', 'Added to Cart', item]);
    }
  },

  googleAnalyticsRemoveFromCart(event: RemoveFromCart) {
    const { variant } = event.payload;
    if (typeof this.ga !== 'undefined') {
      const vm = this;
      this.ga('ec:addProduct', {
        id: variant.id,
        name: variant.title,
      });
      this.ga('ec:setAction', 'remove');
      this.ga('send', 'event', 'UX', 'click', 'remove from cart');
    }
  },
};

function decodeBase64Id(encodedId: string) {
  if (encodedId && typeof encodedId === 'string') {
    const base64id = encodedId.split('::').shift() || '';
    return atob(base64id).split('/').pop();
  }
  return encodedId;
}

function decodeBase64VariantId(encodedId: string) {
  if (encodedId && typeof encodedId === 'string') {
    const decodedId = atob(encodedId);
    return decodedId.split('gid://shopify/ProductVariant/')[1];
  }
  return encodedId;
}

function decodeBase64ProductId(encodedId: string) {
  if (encodedId && typeof encodedId === 'string') {
    const variantIdBase64 = encodedId.split('::')[0];
    const variantIdString = atob(variantIdBase64);
    const variantId = variantIdString.split('gid://shopify/Product/')[1];

    return variantId;
  }
  return encodedId;
}
