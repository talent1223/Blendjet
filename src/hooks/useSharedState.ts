/*
  Shared state is a store that is intended to be used for state that is shared
  across multiple Preact roots. For state that does not need to be synced across
  roots, the current pattern is to use Preact's useState hooks.

  This hook is currently a light wrapper around Zustand's built-in hook
  (https://github.com/pmndrs/zustand).
 */
import create, { UseBoundStore } from 'zustand';
import { Image } from '../types/image';
import { MediaContentCarouselProps } from '../components/MediaContentCarousel/MediaContentCarousel';
import { CartProps } from '../components/Cart/Cart';
import { localForageCart, LocalForageCartItem } from './localforage-cart';
import {
  BundleProductVariant,
  ProductBundleProps,
  VarietyPack,
} from '../components/ProductBundle/ProductBundle';
import { lookupLocalPrice, priceToLocalString } from '../lib/utils';
import { outsmartlyDataLayer, sendAnalytics } from '../data-layer/data-layer';
import { WarrantyRawData } from '../containers/ProductPurchaseContainer';

export type Product = {
  id: string;
  title: string;
  metafields: { key: string; value: string }[];
  handle: string;
  vendor: string;
  productType?: string;
  pimSyncSourceProductId: string;
  priceRange: {
    currencyCode: string;
  };
  rating: number;
  raters: number;
  type: string;
};

// TODO: It would nice to rename `id` to `rawId`, and `variantId` to `id`
export type VariantData = {
  id: string;
  variantId: string;
  price: string;
  compareAtPrice?: string;
  colorId: string;
  title: string;
  image: Image;
  cartImage: Image;
  mediaContentCarousel: MediaContentCarouselProps;
  sku: string;
  priceCurrency: string;
  shippingDate: string;
  shippingOffset?: number;
  specialEdition?: string;
};

export type VariantsData = VariantData[];

export interface Context {
  cartQuantity: number;
  country: string;
  currency: {
    code: string;
    symbol: string;
    rates?: { [key: string]: string };
    language: string;
  };
  initialSelectedVariantId: string;
  pimSyncSourceProductId: string;
  routeName: string;
  shippingDay: string;
  shippingMessage: string;
}

export type ColorOrderData = {
  id: string;
  variantId: string;
  swatch: string;
}[];

export type ProductBundleData = Omit<
  ProductBundleProps,
  'bundlePrice' | 'currentVariant' | 'addBundleToCart'
>;

export interface InitializationData {
  product: Product;
  context: Context;
  variants: VariantsData;
  productBundle: ProductBundleData;
  colorOrder: ColorOrderData;
  productWarranty: WarrantyRawData;
}

export type CartState = Omit<
  CartProps,
  | 'onClose'
  | 'freeShippingMessage'
  | 'valueProps'
  | 'initiateCheckout'
  | 'mobileCartUpsells'
  | 'addToCart'
>;

export type AddToCart = {
  product: {
    id: string;
    handle: string;
    title: string;
    pimSyncSourceProductId: string;
    discountPercentage?: number;
    subscriptionMetafields: { key: string; value: string }[];
    vendor: string;
  };
  variant: {
    id: string;
    title: string;
    image: {
      src: string;
      alt: string;
    };
    sku: string;
    discountPrice?: string;
    price: string;
  };
  quantity: number;
  isSubscription?: boolean;
};

export interface ApplicationState {
  // state
  initialCurrentVariantIndex: number;
  colorOrder: { id: string; swatch: string; swatchClicked: () => void }[];
  productBundleProps: Omit<ProductBundleProps, 'currentVariant'>;
  selectedWarrantyHandle: string | null;
  product: Product;
  productWarranty: WarrantyRawData;
  context: Context;
  variants: VariantsData;
  currentVariantIndex: number;
  currentVariant: VariantData;
  showCart: boolean;
  quantity: number;
  cartQuantity: number;
  cart: CartState;
  initiateCheckout: {
    isLoading: boolean;
    checkout: () => void;
  };

  // actions
  setSelectedWarrantyHandle: (handle: string | null) => void;
  initCart: () => void;
  syncCarts: () => void;
  setShowCart: (show: boolean) => void;
  setCurrentVariantById: (id: string) => void;
  setCurrentVariantByIndex: (index: number) => void;
  setNextColorId: (action?: string) => void;
  setPrevColorId: (action?: string) => void;
  incrementQuantity: () => void;
  decrementQuantity: () => void;
  addItemToCart: () => void;
  addToCart: (item: AddToCart | AddToCart[]) => void;
}

export type SharedStateHook = UseBoundStore<ApplicationState>;

declare global {
  interface Window {
    __outsmartly_state_hook: SharedStateHook;
  }
}

export function getVariantIndexById(
  id: string,
  variants: VariantsData,
): number {
  return variants.findIndex((el: VariantData) => el.variantId === id);
}

// need the selected bundle variants up here too
function calculateBundlePrice(
  currency: Context['currency'],
  currentVariant: VariantData,
  productBundle: ProductBundleData,
  quantity: number,
) {
  const { bundleProducts, varietyPacks } = productBundle;
  const sleeveVariant = bundleProducts[0].variants[0];
  const varietyPackPrice = varietyPacks[0].variants
    .map((item) => {
      return (
        lookupLocalPrice(item.price.toString(), currency) ||
        parseFloat(item.price)
      );
    })
    .reduce((acc, item) => acc + item, 0);

  const currenctVariantPrice =
    lookupLocalPrice(currentVariant.price, currency) ||
    parseFloat(currentVariant.price);
  const sleeveVariantPrice =
    lookupLocalPrice(sleeveVariant.price, currency) ||
    parseFloat(sleeveVariant.price);

  const totalPrice =
    (currenctVariantPrice + sleeveVariantPrice + varietyPackPrice) * quantity;

  return priceToLocalString(totalPrice, currency);
}

function checkIfSubscription(item: LocalForageCartItem) {
  const subscriptionMetafield = item.metafields.find(
    (metafield) => metafield.key === 'charge_interval_frequency',
  );
  return subscriptionMetafield ? true : false;
}

let stateHook: SharedStateHook | null = null;

function getInitialVariant(
  initialSelectedVariantId: string,
  variants: VariantData[],
) {
  // TODO: conditionally load polyfill for URLSearchParams if not in window
  const variantId =
    (typeof window !== 'undefined' &&
      'URLSearchParams' in window &&
      new URLSearchParams(window.location.search).get('variant')) ||
    initialSelectedVariantId;

  const initialCurrentVariantIndex = variants.findIndex(
    (el: VariantData) => el.variantId === variantId,
  );

  if (initialCurrentVariantIndex > -1) {
    const initialVariant = variants[initialCurrentVariantIndex];
    setVariantParamInQueryString(initialSelectedVariantId);
    return { initialCurrentVariantIndex, initialVariant };
  }

  // default to the first variant
  const initialVariant = variants[0];

  return { initialCurrentVariantIndex: 0, initialVariant };
}

async function checkAndLogCurrency(context: Context) {
  try {
    const response = await fetch(
      `https://checkout.gointerpay.net/v2.21/localize?MerchantId=3af65681-4f06-46e4-805a-f2cb8bdaf1d4`,
    );
    const data = await response.json();
    sendAnalytics(
      `EDGE_${context.currency.code}_${context.country}_CLIENT_${data.Currency}_${data.Country}`,
    );
  } catch (e) {
    //
  }
}

// debounce the adding and removing of app class otherwise
// it causes the hero slider to have jank
let timer: any;
function changeVariantSideEffects(
  product: Product,
  currentVariant: VariantData,
) {
  // Add or remove any theming classes on <div class="app">
  if (currentVariant.colorId.includes('lisa-frank')) {
    document.querySelector('.app')?.classList.add('lisa-frank');
  } else {
    document.querySelector('.app')?.classList.remove('lisa-frank');
  }
  // these cause a drop in framerate, so we debounce them
  clearTimeout(timer);
  timer = setTimeout(() => {
    outsmartlyDataLayer.push({
      event: 'VIEW_PRODUCT',
      payload: {
        product: product,
        variant: currentVariant,
      },
    });
    setVariantParamInQueryString(currentVariant.variantId);
  }, 2000);
}

function initWeLoveYouTitle() {
  if (typeof document === 'undefined') return;
  const pageTitle = document.title;
  const attentionMessage = 'We miss you ❤';
  let blinkEvent: null | NodeJS.Timer = null;

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden;

    if (!isPageActive) {
      blink();
    } else {
      document.title = pageTitle;
      blinkEvent && clearInterval(blinkEvent);
    }
  });

  function blink() {
    blinkEvent = setInterval(function () {
      if (document.title === attentionMessage) {
        document.title = pageTitle;
      } else {
        document.title = attentionMessage;
      }
    }, 2000);
  }
}

export function initializeSharedStateStore(data: InitializationData): void {
  const { initialCurrentVariantIndex, initialVariant } = getInitialVariant(
    data.context.initialSelectedVariantId,
    data.variants,
  );
  checkAndLogCurrency(data.context);
  initWeLoveYouTitle();

  if (typeof window !== 'undefined') {
    sendAnalytics('INIT_SHARED_STATE', {
      context: data.context,
      initialVariant: initialVariant.variantId,
    });
    outsmartlyDataLayer.push({
      event: 'PAGE_VIEW',
      payload: {
        url: window.location.href,
      },
    });
    outsmartlyDataLayer.push({
      event: 'VIEW_PRODUCT',
      payload: {
        product: data.product,
        variant: initialVariant,
      },
    });
    try {
      localForageCart.saveDiscountParam();
      // check if the saved checkout URL has already been completed,
      // and reset if it has
      localForageCart.initializeCheckout();
    } catch (e) {
      sendAnalytics('INITIALIZE_CART_FAILED');
      // this shouldn't fail, but if it does the user shouldn't see it
    }
  }

  const zustandHook = create<ApplicationState>((set, get) => {
    return {
      initialCurrentVariantIndex,
      language:
        typeof window !== 'undefined'
          ? navigator.language
          : data.context.currency.language,
      colorOrder: data.colorOrder.map(({ id, swatch, variantId }) => ({
        id,
        swatch,
        swatchClicked: () => {
          get().setCurrentVariantById(variantId);
          sendAnalytics('SWATCH_CLICKED', {
            variantId,
            time: window.performance.now(),
          });
        },
      })),
      productWarranty: data.productWarranty,
      productBundleProps: {
        ...data.productBundle,
        bundlePrice: calculateBundlePrice(
          data.context.currency,
          initialVariant,
          data.productBundle,
          1,
        ),
        async addBundleToCart({
          currentVarietyPack,
          currentBundleVariants,
        }: {
          currentVarietyPack: VarietyPack;
          currentBundleVariants: BundleProductVariant[];
        }) {
          get().setShowCart(true);

          const product = get().product;
          const variant = get().currentVariant;

          // add warrant if we have one
          const productWarranty = get().productWarranty;
          const warranty = productWarranty.items.find(
            (item) => item.handle === get().selectedWarrantyHandle,
          );
          const warrantyToAdd = warranty && {
            pimSyncSourceProductId: warranty.pimSyncSourceProductId,
            title: productWarranty.title,
            variant: {
              id: warranty.id,
              title: warranty.title,
              price: parseFloat(warranty.price),
              featuredMedia: {
                thumbnailSrc: productWarranty.image.src,
                altText: productWarranty.image.alt,
              },
              priceCurrency: warranty.priceCurrency,
              sku: warranty.sku,
            },
            // we add the same quantity as the number of items we are adding
            quantity: get().quantity,
            handle: warranty.handle,
            vendor: 'Extend',
            metafields: [
              {
                key: 'Ref',
                value: variant.variantId,
              },
            ],
            id: warranty.id,
          };

          // add the selected blendjet
          const blendJet = {
            id: product.id,
            title: product.title,
            pimSyncSourceProductId: data.context.pimSyncSourceProductId,
            variant: {
              id: variant.id,
              title: variant.title,
              price: parseFloat(variant.price),
              featuredMedia: {
                thumbnailSrc: variant.cartImage.src,
                altText: variant.cartImage.alt,
              },
              priceCurrency: 'USD',
              sku: variant.sku,
            },
            quantity: get().quantity,
            handle: product.handle,
            metafields: [], //product.metafields,
            vendor: product.vendor,
          };

          const sleeveVariant = currentBundleVariants[0];
          const sleeveProduct = data.productBundle.bundleProducts[0];
          const sleeve = {
            id: sleeveProduct.id,
            title: sleeveProduct.title,
            pimSyncSourceProductId: sleeveProduct.pimSyncSourceProductId,
            variant: {
              id: sleeveVariant.id,
              title: sleeveVariant.title,
              price: parseFloat(sleeveVariant.price),
              featuredMedia: {
                thumbnailSrc: sleeveVariant.image.src,
                altText: sleeveVariant.image.alt,
              },
              priceCurrency: sleeveVariant.priceCurrency,
              sku: sleeveVariant.sku,
            },
            quantity: get().quantity,
            handle: sleeveProduct.handle,
            metafields: [], //sleeveProduct.metafields,
            vendor: sleeveProduct.vendor,
          };

          const items = currentVarietyPack.variants.map((variant) => {
            const itemToAdd = {
              id: currentVarietyPack.id,
              title: currentVarietyPack.title,
              pimSyncSourceProductId: currentVarietyPack.pimSyncSourceProductId,
              variant: {
                id: variant.id,
                title: variant.title,
                price: parseFloat(variant.price),
                featuredMedia: {
                  thumbnailSrc: variant.image.src,
                  altText: variant.image.alt,
                },
                priceCurrency: variant.priceCurrency,
                sku: variant.sku,
              },
              quantity: get().quantity,
              handle: currentVarietyPack.handle,
              // TODO: proper metafields
              metafields: [], //currentVarietyPack.metafields,
              vendor: currentVarietyPack.vendor,
            };
            return itemToAdd;
          });

          await localForageCart.addBatchToCart([
            ...(warrantyToAdd ? [warrantyToAdd] : []),
            blendJet,
            sleeve,
            ...items,
          ]);

          get().syncCarts();

          const quantity = get().quantity;
          outsmartlyDataLayer.push({
            event: 'ADD_BUNDLE_TO_CART',
            payload: [
              {
                quantity,
                product,
                variant,
              },
              {
                quantity,
                product: {
                  id: sleeveProduct.id,
                  title: sleeveProduct.title,
                  handle: sleeveProduct.handle,
                  vendor: sleeveProduct.vendor,
                  productType: 'Jetsetter',
                  pimSyncSourceProductId: sleeveProduct.pimSyncSourceProductId,
                  type: '',
                },
                variant: sleeveVariant,
              },
              ...currentVarietyPack.variants.map((item) => ({
                quantity,
                product: {
                  id: currentVarietyPack.id,
                  title: currentVarietyPack.title,
                  handle: currentVarietyPack.handle,
                  vendor: currentVarietyPack.vendor,
                  productType: 'Jetpack Smoothies',
                  pimSyncSourceProductId:
                    currentVarietyPack.pimSyncSourceProductId,
                  type: '',
                },
                variant: item,
              })),
            ],
          });
        },
      },
      async addToCart(toBeAdded) {
        get().setShowCart(true);

        // this is an array when adding a varietyPack
        const itemsArrayToAdd = (
          Array.isArray(toBeAdded) ? toBeAdded : [toBeAdded]
        ).map((item) => {
          const product = item.product;
          const variant = item.variant;
          const isSubscription = item.isSubscription || false;

          const price = parseFloat(
            isSubscription && variant.discountPrice
              ? variant.discountPrice
              : variant.price,
          );
          //LocalForageCartItem
          const itemToAdd = {
            id: product.id,
            title: product.title,
            pimSyncSourceProductId: product.pimSyncSourceProductId,
            variant: {
              id: variant.id,
              title: variant.title,
              price,
              featuredMedia: {
                thumbnailSrc: variant.image.src,
                altText: variant.image.alt,
              },
              priceCurrency: 'USD',
              sku: variant.sku,
              isSubscription,
              discountPercentage: product.discountPercentage,
            },
            quantity: item.quantity,
            handle: product.handle,
            metafields: isSubscription ? product.subscriptionMetafields : [],
            vendor: product.vendor,
          };

          outsmartlyDataLayer.push({
            event: 'ADD_TO_CART',
            payload: {
              product,
              variant: {
                id: variant.id,
                title: variant.title,
                price: price.toString(),
                image: {
                  src: variant.image.src,
                  alt: variant.image.alt,
                },
                priceCurrency: 'USD',
                sku: variant.sku,
              },
              quantity: itemToAdd.quantity,
            },
          });

          return itemToAdd;
        });

        await localForageCart.addBatchToCart(itemsArrayToAdd);
        get().syncCarts();
      },
      selectedWarrantyHandle: null,
      setSelectedWarrantyHandle: (selectedWarrantyHandle) => {
        return set(() => ({
          selectedWarrantyHandle,
        }));
      },
      context: { ...data.context, shippingDay: initialVariant.shippingDate },
      product: data.product,
      variants: data.variants,
      currentVariantIndex: initialCurrentVariantIndex,
      currentVariant: initialVariant,
      showCart: false,
      setShowCart: async (showCart: boolean) => {
        if (showCart) {
          // cart is opening
          setTimeout(async () => {
            outsmartlyDataLayer.push({
              event: 'VIEW_CART',
              payload: {
                lineItems: await localForageCart.getLineItems(),
                subtotal: await localForageCart.getCartSubtotal(),
              },
            });
          }, 50);
        }

        return set(() => {
          return {
            showCart,
          };
        });
      },
      setCurrentVariantByIndex: (index: number) => {
        return set((state) => {
          const currentVariant = state.variants[index];
          if (state.currentVariantIndex !== index) {
            changeVariantSideEffects(state.product, currentVariant);
          }
          return {
            currentVariant,
            currentVariantIndex: index,
            context: {
              ...data.context,
              shippingDay: currentVariant.shippingDate,
            },
            productBundleProps: {
              ...state.productBundleProps,
              bundlePrice: calculateBundlePrice(
                data.context.currency,
                currentVariant,
                data.productBundle,
                state.quantity,
              ),
            },
          };
        });
      },
      initCart: async () => {
        await localForageCart.initLineItems();
        get().syncCarts();
      },
      syncCarts: async () => {
        let subtotal = await localForageCart.getCartSubtotal();
        const cartQuantity = await localForageCart.getQuantityTotal();
        const lineItems = await localForageCart.getLineItems();
        const items = await Promise.all(
          lineItems.map(async (item) => {
            return {
              href: `/products/${item.handle}`,
              title: formatTitle(item.title),
              subtitle: item.title.includes('Extend')
                ? await formatWarrantyVariant(item)
                : formatVariantTitle(item.variant.title),
              img: {
                src: item.variant.featuredMedia.thumbnailSrc,
                altText: item.variant.featuredMedia.altText,
              },
              price: item.variant.price.toString(),
              quantity: item.quantity,
              metafields: item.metafields,
              increment: async () => {
                await localForageCart.incrementLineItem(item.id);
                get().syncCarts();
              },
              decrement: async () => {
                await localForageCart.decrementLineItem(item.id);
                if (item.quantity === 1) {
                  // TODO: these types don't match
                  outsmartlyDataLayer.push({
                    event: 'REMOVE_FROM_CART',
                    payload: {
                      product: {
                        id: item.id,
                        title: item.title,
                        handle: item.handle,
                        vendor: item.vendor,
                        pimSyncSourceProductId: item.pimSyncSourceProductId,
                      },
                      variant: {
                        id: item.variant.id,
                        price: item.variant.price.toString(),
                        title: item.variant.title,
                        image: {
                          src: item.variant.featuredMedia.thumbnailSrc,
                          alt: item.variant.featuredMedia.altText || '',
                        },
                        sku: item.variant.sku,
                        priceCurrency: item.variant.priceCurrency,
                      },
                    },
                  });
                }
                get().syncCarts();
              },
              isSubscription: checkIfSubscription(item),
              discountPercentage: item.variant.discountPercentage,
            };
          }),
        );

        setCartQuantityCookie(cartQuantity);

        // close the cart if we just removed the last item
        if (cartQuantity === 0 && get().showCart) {
          setTimeout(() => {
            get().setShowCart(false);
          }, 200);
        }

        const message = getCartMessage(lineItems);

        if (
          data.context.currency.code !== 'USD' &&
          data.context.currency.rates
        ) {
          subtotal = lineItems.reduce((acc, item) => {
            const localPrice =
              lookupLocalPrice(
                item.variant.price.toString(),
                data.context.currency,
              ) || item.variant.price;
            return acc + localPrice * item.quantity;
          }, 0);
        }

        return set(() => {
          return {
            cartQuantity,
            cart: {
              items,
              message,
              subtotal,
              currency: data.context.currency,
            },
          };
        });
      },
      addItemToCart: async () => {
        get().setShowCart(true);

        const product = get().product;
        const variant = get().currentVariant;

        const productWarranty = get().productWarranty;
        const warranty = productWarranty.items.find(
          (item) => item.handle === get().selectedWarrantyHandle,
        );
        const warrantyToAdd = warranty && {
          pimSyncSourceProductId: warranty.pimSyncSourceProductId,
          title: productWarranty.title,
          variant: {
            id: warranty.id,
            title: warranty.title,
            price: parseFloat(warranty.price),
            featuredMedia: {
              thumbnailSrc: productWarranty.image.src,
              altText: productWarranty.image.alt,
            },
            priceCurrency: warranty.priceCurrency,
            sku: warranty.sku,
          },
          // we add the same quantity as the number of items we are adding
          quantity: get().quantity,
          handle: warranty.handle,
          vendor: 'Extend',
          metafields: [
            {
              key: 'Ref',
              value: variant.variantId,
            },
          ],
          id: warranty.id,
        };

        const itemToAdd = {
          id: product.id,
          title: product.title,
          pimSyncSourceProductId: product.pimSyncSourceProductId,
          variant: {
            id: variant.id,
            title: variant.title,
            price: parseFloat(variant.price),
            featuredMedia: {
              thumbnailSrc: variant.cartImage.src,
              altText: variant.cartImage.alt,
            },
            priceCurrency: 'USD',
            sku: variant.sku,
          },
          quantity: get().quantity,
          handle: product.handle,
          metafields: [], //product.metafields,
          vendor: product.vendor,
        };

        outsmartlyDataLayer.push({
          event: 'ADD_TO_CART',
          payload: {
            product,
            variant,
            quantity: itemToAdd.quantity,
          },
        });

        await localForageCart.addBatchToCart([
          ...(warrantyToAdd ? [warrantyToAdd] : []),
          itemToAdd,
        ]);

        get().syncCarts();
      },
      setCurrentVariantById: (id: string) =>
        set((state) => {
          const currentVariantIndex = getVariantIndexById(id, state.variants);
          return state.setCurrentVariantByIndex(currentVariantIndex);
        }),
      setNextColorId: (action = 'CLICK') => {
        sendAnalytics(`SET_NEXT_COLOR_ID_${action}`);
        const index = (get().currentVariantIndex + 1) % get().variants.length;
        return get().setCurrentVariantByIndex(index);
      },
      setPrevColorId: (action = 'CLICK') => {
        sendAnalytics(`SET_PREV_COLOR_ID_${action}`);
        const currentVariantIndex = get().currentVariantIndex;
        const variantsLength = get().variants.length;
        // if the current variant index is 0, then we want the last item in the array
        const index =
          currentVariantIndex === 0
            ? variantsLength - 1
            : (currentVariantIndex - 1) % variantsLength;
        return get().setCurrentVariantByIndex(index);
      },
      quantity: 1,
      incrementQuantity: () =>
        set((state) => ({
          quantity: state.quantity + 1,
          productBundleProps: {
            ...state.productBundleProps,
            bundlePrice: calculateBundlePrice(
              data.context.currency,
              state.currentVariant,
              data.productBundle,
              state.quantity + 1,
            ),
          },
        })),
      decrementQuantity: () =>
        set((state) => ({
          quantity: state.quantity >= 2 ? state.quantity - 1 : 1,
          productBundleProps: {
            ...state.productBundleProps,
            bundlePrice: calculateBundlePrice(
              data.context.currency,
              state.currentVariant,
              data.productBundle,
              state.quantity >= 2 ? state.quantity - 1 : 1,
            ),
          },
        })),
      cartQuantity: data.context.cartQuantity,
      cart: {
        items: [],
        message: '',
        subtotal: 0,
        currency: data.context.currency,
      },
      initiateCheckout: {
        isLoading: false,
        checkout: async () => {
          if (get().initiateCheckout.isLoading) {
            // don't start a new checkout if we already have one in process
            return;
          }
          sendAnalytics('CHECKOUT_INITIATED');
          set((state) => ({
            initiateCheckout: {
              ...state.initiateCheckout,
              isLoading: true,
            },
          }));
          try {
            // this should set checkingOut = true;
            await localForageCart.processCheckout();
          } catch (err) {
            sendAnalytics('CHECKOUT_FAILED', { err });
            console.log(err);
            // this should set checkingout = false
            // and show an error message
            // and also log to somewhere that it happened!
            set((state) => ({
              initiateCheckout: {
                ...state.initiateCheckout,
                isLoading: false,
              },
            }));
            alert('Checkout failed, please refresh and try again.');
          }
        },
      },
    };
  });

  if (typeof window === 'undefined') {
    stateHook = zustandHook;
  } else {
    window.__outsmartly_state_hook = zustandHook;
    // maybe here is where we sync with the router?
  }
}

function setVariantParamInQueryString(variantId: string) {
  // synchronize newly selected variant with query params
  if (typeof window !== 'undefined' && 'URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    // TODO: make this the proper variant ID for the URL
    searchParams.set('variant', variantId);
    var newRelativePathQuery =
      window.location.pathname + '?' + searchParams.toString();
    history.pushState(null, '', newRelativePathQuery);
  }
}

export function useSharedState(): SharedStateHook {
  if (typeof window === 'undefined') {
    if (stateHook === null) {
      throw new Error(
        'Shared state store has not been initialized. Please use initializeSharedStateStore() to initialized before accessing.',
      );
    }
    return stateHook;
  } else {
    if (window.__outsmartly_state_hook === undefined) {
      throw new Error(
        'Shared state store has not been initialized. Please use initializeSharedStateStore() to initialized before accessing.',
      );
    }
    return window.__outsmartly_state_hook;
  }
}

function getCartMessage(lineItems: LocalForageCartItem[]) {
  const obj: any = {};
  lineItems.forEach((item) => {
    if (item.title.toLowerCase().includes('extend')) {
      if (!obj[item.metafields[0]?.value]) {
        obj[item.metafields[0]?.value] = {};
      }
      obj[item.metafields[0]?.value].warranties =
        obj[item.metafields[0]?.value].warranties + item.quantity ||
        item.quantity;
      //  console.log('obj', obj)
    }

    if (item.title.toLowerCase().includes('blendjet')) {
      const id = atob(item.variant.id).split('/').pop();
      if (typeof id !== 'string') {
        return;
      }
      if (!obj[id]) {
        obj[id] = {};
      }
      obj[id].blendjets = obj[id].blendjets + item.quantity || item.quantity;
      //  console.log('obj', obj)
    }
  });
  for (const key in obj) {
    if (!obj[key].blendjets || obj[key].warranties > obj[key].blendjets) {
      return 'Please adjust the number of extend plans';
    }
  }

  return '';
}

function setCartQuantityCookie(cartQuantity: number) {
  // set quantity in a cookie for server rendering
  document.cookie = `cart_quantity=${cartQuantity}; expires=Tue, 19 Jan 2038 03:14:07 UTC`;
}

function formatTitle(title: string) {
  if (title.includes('JetPack')) {
    return title.split('-')[0].trim();
  }
  if (title.includes('Book')) {
    return title.split('- Recipe Book')[0].trim();
  }
  if (title.includes('Extend')) {
    return 'Extend Protection Plan';
  }
  return title;
}

function formatVariantTitle(title: string) {
  return title;
}

async function formatWarrantyVariant(item: LocalForageCartItem) {
  let variantId = btoa(
    `gid://shopify/ProductVariant/${item.metafields[0].value}`,
  );
  const lineItems = await localForageCart.getLineItems();
  let [warrantyProduct] = lineItems.filter((item) => {
    return item.variant.id === variantId;
  });
  try {
    return `${warrantyProduct.title} - ${warrantyProduct.variant.title}`;
  } catch (e) {
    return '';
  }
}
