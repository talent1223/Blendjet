// import { mocked } from 'jest-mock';
// import localForage from 'localforage';
// import { getCheckoutLineItems } from '../lineItems';
// import { getRecartMetafieldsForCheckout } from '../recart';
// import { checkoutCreate } from './create';
// import { CHECKOUT_ID_KEY, CHECKOUT_URL_KEY } from './helpers';
// jest.mock('localforage');
// jest.mock('@nacelle/client-js-sdk');

// // it's awkward, but at the moment these mocks are overloading the id and
// // metadata being passed in to trigger different responses.
// // reason being that this method of mocking requires it to be global :/
// jest.mock('@nacelle/client-js-sdk', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       checkout: {
//         get: jest.fn(async ({ id, url }) => {
//           if (id === 'completed-false') {
//             return { completed: false };
//           } else if (id === 'completed-true') {
//             return { completed: true };
//           } else if (id.includes('error')) {
//             throw Error('nacelle failed');
//           }
//         }),
//         process: jest.fn(async ({ cartItems, checkoutId, metafields }) => {
//           if (checkoutId === 'throw-error') {
//             return {
//               id: 'abc',
//               url: 'https://blendjet.myshopify.com/checkout/123',
//               completed: false,
//             };
//           } else if (
//             checkoutId === 'throw-error' &&
//             metafields[0].key === 'completed-true'
//           ) {
//             return {
//               id: 'abc',
//               url: 'https://blendjet.myshopify.com/checkout/123',
//               completed: true,
//             };
//           }
//         }),
//       },
//     };
//   });
// });

// jest.mock('@nacelle/shopify-checkout', () => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       get: jest.fn(async ({ id, url }) => {
//         if (id === 'throw-error-shopify-error') {
//           throw Error('shopify failed');
//         } else if (id === 'throw-error-shopify-true') {
//           return { completed: true };
//         } else if (id === 'throw-error') {
//           return { completed: false };
//         }
//       }),
//       process: jest.fn(async ({ cartItems, id, metafields }) => {
//         if (id == 'checkout-not-completed') {
//           return {
//             id: 'abc',
//             url: 'https://blendjet.myshopify.com/checkout/123',
//             completed: false,
//           };
//         } else if (id === 'checkout-completed') {
//           return { completed: true };
//         } else if (id === 'throw-error') {
//           throw Error('Break the checkout!');
//         } else if (id === '' && metafields[0].value === 'throw-error') {
//           throw Error('Break the checkout!');
//         } else if (id === '') {
//           return {
//             id: 'new-id',
//             url: 'https://blendjet.myshopify.com/checkout/123',
//             completed: false,
//           };
//         }
//       }),
//     };
//   });
// });

// // return consistent uuid
// jest.mock('uuid', () => {
//   return {
//     v4: jest.fn().mockImplementation(() => {
//       return '12345-uuid';
//     }),
//   };
// });
// const itemsMock = mocked(getCheckoutLineItems, true);

// describe('Localforage Cart Tests', () => {
//   //   let lineItemsMock: typeof lineItems
//   //   // we mock localforage so we can spy on usage and return values
//   //   let localforage = mocked(localForage, true);
//   // let getRecartMetafieldsForCheckout = typeof

//   //   beforeEach(() => {
//   //     // this resets our modules between every test so we don't have conflicts
//   //     return Promise.all([
//   //       import('../lineItems'),
//   //       import('localforage'),
//   //       import('../recart')
//   //     ]).then((modules) => {
//   //       lineItemsMock = modules[0],
//   //       localforage = mocked(modules[1], true);
//   //       getRecartMetafieldsForCheckout = modules[2]
//   //       jest.resetModules();
//   //     });
//   //   });

//   describe('checkoutCreate Shopify No Subscriptions', () => {
//     test('it returns immediately if the cart is empty', async () => {
//       itemsMock.mockImplementation(async () => []);
//       const recartMock = mocked(getRecartMetafieldsForCheckout, true);
//       await checkoutCreate();
//       expect(recartMock).not.toBeCalled();
//     });

//     // test('it processes a checkout with Shopify Checkout', async () => {
//     //   localForageCart.getLineItems = jest.fn(async () => {
//     //     return deepClone(cartMock);
//     //   });
//     //   localForageCart.outsmartlyMetafields = jest.fn(() => [
//     //     { key: '1', value: '2' },
//     //   ]);
//     //   localForageCart.getCheckoutId = jest.fn(
//     //     async () => 'checkout-not-completed',
//     //   );
//     //   localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//     //     { key: 'recart', value: 'hello' },
//     //   ]);
//     //   localForageCart.hasSubscriptionProduct = jest.fn(async () => false);
//     //   localForageCart.setCheckout = jest.fn();
//     //   await localForageCart.checkoutCreate();
//     //   expect(localForageCart.setCheckout).toBeCalledWith({
//     //     id: 'abc',
//     //     url: 'https://blendjet.myshopify.com/checkout/123',
//     //     completed: false,
//     //   });
//     // });

//     // test('it retries the checkout with Shopify Checkout if id already completed', async () => {
//     //   localForageCart.getLineItems = jest.fn(async () => {
//     //     return deepClone(cartMock);
//     //   });
//     //   localForageCart.outsmartlyMetafields = jest.fn(() => [
//     //     { key: '1', value: '2' },
//     //   ]);
//     //   localForageCart.getCheckoutId = jest.fn(async () => 'checkout-completed');
//     //   localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//     //     { key: 'recart', value: 'hello' },
//     //   ]);
//     //   localForageCart.hasSubscriptionProduct = jest.fn(async () => false);
//     //   localForageCart.setCheckout = jest.fn();
//     //   await localForageCart.checkoutCreate();
//     //   expect(localForageCart.setCheckout).toBeCalledWith({
//     //     id: 'new-id',
//     //     url: 'https://blendjet.myshopify.com/checkout/123',
//     //     completed: false,
//     //   });
//     // });
//   });

//   //   describe('checkoutCreate Shopify Subscriptions', () => {
//   //     test('it processes a checkout with Shopify Checkout', async () => {
//   //       localForageCart.getLineItems = jest.fn(async () => {
//   //         return deepClone(cartMock);
//   //       });
//   //       localForageCart.outsmartlyMetafields = jest.fn(() => [
//   //         { key: '1', value: '2' },
//   //       ]);
//   //       localForageCart.getCheckoutId = jest.fn(
//   //         async () => 'checkout-not-completed',
//   //       );
//   //       localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//   //         { key: 'recart', value: 'hello' },
//   //       ]);
//   //       localForageCart.hasSubscriptionProduct = jest.fn(async () => true);
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.checkoutCreate();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         id: 'abc',
//   //         url: 'https://blendjet.myshopify.com/checkout/123',
//   //         completed: false,
//   //       });
//   //     });

//   //     test('it retries the checkout with Shopify Checkout if id already completed', async () => {
//   //       localForageCart.getLineItems = jest.fn(async () => {
//   //         return deepClone(cartMock);
//   //       });
//   //       localForageCart.outsmartlyMetafields = jest.fn(() => [
//   //         { key: '1', value: '2' },
//   //       ]);
//   //       localForageCart.getCheckoutId = jest.fn(async () => 'checkout-completed');
//   //       localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//   //         { key: 'recart', value: 'hello' },
//   //       ]);
//   //       localForageCart.hasSubscriptionProduct = jest.fn(async () => true);
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.checkoutCreate();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         id: 'new-id',
//   //         url: 'https://blendjet.myshopify.com/checkout/123',
//   //         completed: false,
//   //       });
//   //     });
//   //   });

//   //   describe('checkoutCreate Nacelle No Subscriptions', () => {
//   //     test('it processes a checkout with Nacelle if Shopify fails', async () => {
//   //       localForageCart.getLineItems = jest.fn(async () => {
//   //         return deepClone(cartMock);
//   //       });
//   //       localForageCart.outsmartlyMetafields = jest.fn(() => [
//   //         { key: '1', value: '2' },
//   //       ]);
//   //       localForageCart.getCheckoutId = jest.fn(async () => 'throw-error');
//   //       localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//   //         { key: 'recart', value: 'throw-error' },
//   //       ]);
//   //       localForageCart.hasSubscriptionProduct = jest.fn(async () => false);
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.checkoutCreate();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         id: 'abc',
//   //         url: 'https://blendjet.myshopify.com/checkout/123',
//   //         completed: false,
//   //       });
//   //     });

//   //     test('it retries the checkout with Nacelle if id already completed', async () => {
//   //       localForageCart.getLineItems = jest.fn(async () => {
//   //         return deepClone(cartMock);
//   //       });
//   //       localForageCart.outsmartlyMetafields = jest.fn(() => [
//   //         { key: '1', value: '2' },
//   //       ]);
//   //       localForageCart.getCheckoutId = jest.fn(async () => 'throw-error');
//   //       localForageCart.getRecartMetafieldsForCheckout = jest.fn(() => [
//   //         { key: 'completed-true', value: 'throw-error' },
//   //       ]);
//   //       localForageCart.hasSubscriptionProduct = jest.fn(async () => false);
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.checkoutCreate();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         id: 'abc',
//   //         url: 'https://blendjet.myshopify.com/checkout/123',
//   //         completed: false,
//   //       });
//   //     });
//   //   });

//   //   describe('initializeCheckout', () => {
//   //     test('it does nothing if no id or url in localforage', async () => {
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).not.toBeCalled();
//   //       expect(localForageCart.setCheckout).not.toBeCalled();
//   //     });

//   //     test('it sets checkout if it has not been completed', async () => {
//   //       localforage.getItem.mockImplementation(async (key: string) => {
//   //         if (key === CHECKOUT_ID_KEY) {
//   //           return 'completed-false';
//   //         } else if (key === CHECKOUT_URL_KEY) {
//   //           return 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123';
//   //         }
//   //       });
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).not.toBeCalled();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         completed: false,
//   //         id: 'completed-false',
//   //         url: 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123',
//   //       });
//   //     });

//   //     test('it resets checkout if it has been completed', async () => {
//   //       localforage.getItem.mockImplementation(async (key: string) => {
//   //         if (key === CHECKOUT_ID_KEY) {
//   //           return 'completed-true';
//   //         } else if (key === CHECKOUT_URL_KEY) {
//   //           return 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123';
//   //         }
//   //       });
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).toBeCalled();
//   //       expect(localForageCart.setCheckout).not.toBeCalled();
//   //     });

//   //     test('it tries Shopify checkout if nacelle fails', async () => {
//   //       localforage.getItem.mockImplementation(async (key: string) => {
//   //         if (key === CHECKOUT_ID_KEY) {
//   //           return 'throw-error';
//   //         } else if (key === CHECKOUT_URL_KEY) {
//   //           return 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123';
//   //         }
//   //       });
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).not.toBeCalled();
//   //       expect(localForageCart.setCheckout).toBeCalledWith({
//   //         completed: false,
//   //         id: 'throw-error',
//   //         url: 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123',
//   //       });
//   //     });

//   //     test('it tries Shopify checkout if nacelle fails', async () => {
//   //       localforage.getItem.mockImplementation(async (key: string) => {
//   //         if (key === CHECKOUT_ID_KEY) {
//   //           return 'throw-error-shopify-true';
//   //         } else if (key === CHECKOUT_URL_KEY) {
//   //           return 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123';
//   //         }
//   //       });
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).toBeCalled();
//   //       expect(localForageCart.setCheckout).not.toBeCalled();
//   //     });

//   //     test('it resets if all fail', async () => {
//   //       localforage.getItem.mockImplementation(async (key: string) => {
//   //         if (key === CHECKOUT_ID_KEY) {
//   //           return 'throw-error-shopify-error';
//   //         } else if (key === CHECKOUT_URL_KEY) {
//   //           return 'https://checkout.rechargeapps.com/r/checkout/1234?myshopify_domain=blendjet.myshopify.com&_ga=123';
//   //         }
//   //       });
//   //       localForageCart.resetCheckout = jest.fn();
//   //       localForageCart.setCheckout = jest.fn();
//   //       await localForageCart.initializeCheckout();
//   //       expect(localForageCart.resetCheckout).toBeCalled();
//   //       expect(localForageCart.setCheckout).not.toBeCalled();
//   //     });
//   //   });
// });

// function deepClone<T>(item: T): T {
//   return JSON.parse(JSON.stringify(item));
// }

// const cartMock = [
//   {
//     image: {
//       id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS83MDUyOTI0ODQ2MTQ2',
//       thumbnailSrc:
//         'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-ROYALBLUE_8ac051ec-ad90-4bff-8e2c-9820d441ac58.png?v=1607544473&width=100',
//       src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-ROYALBLUE_8ac051ec-ad90-4bff-8e2c-9820d441ac58.png?v=1607544473',
//       type: 'image',
//       altText: 'Royal Blue Blendjet Portable Blender',
//     },
//     title: 'BlendJet 2',
//     pimSyncSourceProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ3NjAyNjUwMzE3NDY',
//     variant: {
//       id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
//       title: 'Mint',
//       price: 49.95,
//       priceCurrency: 'USD',
//       compareAtPrice: '99.95',
//       compareAtPriceCurrency: '99.95',
//       swatchSrc: null,
//       selectedOptions: [
//         {
//           name: 'Color',
//           value: 'Mint',
//         },
//       ],
//       featuredMedia: {
//         id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTQ4NzkwNTMzMTYxNjI=',
//         thumbnailSrc:
//           'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
//         src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473',
//         type: 'image',
//         altText: 'Mint Blendjet Portable Blender',
//       },
//       sku: 'blendjet-2-mint',
//       availableForSale: true,
//       metafields: [],
//       weight: 1.65,
//       weightUnit: 'POUNDS',
//       priceRules: null,
//     },
//     quantity: 3,
//     productId: 'blendjet.myshopify.com::blendjet-2::en-us',
//     handle: 'blendjet-2',
//     vendor: 'BlendJet',
//     tags: ['2', 'bj2', 'blendjet', 'blendjet 2', 'blendjet two', 'two'],
//     metafields: [],
//     id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==::22e5ce8c-1315-4cb9-b0fb-8e98d2d4aa15',
//   },
//   {
//     image: {
//       id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS8yMDMxMjc0NzM3NjcwNg==',
//       thumbnailSrc:
//         'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
//       src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834',
//       type: 'image',
//       altText: null,
//     },
//     title: 'JetPack Smoothie',
//     pimSyncSourceProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ3NjAyNjUwMzE3NDY',
//     variant: {
//       id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==',
//       title: 'Banana Blueberry',
//       price: 3.99,
//       priceCurrency: 'USD',
//       compareAtPrice: null,
//       compareAtPriceCurrency: null,
//       swatchSrc: null,
//       selectedOptions: [
//         {
//           name: 'Flavor',
//           value: 'Banana Blueberry',
//         },
//       ],
//       featuredMedia: {
//         id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgwMTIxMjE5MTU0NTg=',
//         thumbnailSrc:
//           'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
//         src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834',
//         type: 'image',
//         altText: 'Mint Blendjet Portable Blender',
//       },
//       sku: 'JP-Banana-Blueberry',
//       availableForSale: true,
//       metafields: [],
//       weight: 1.375,
//       weightUnit: 'OUNCES',
//       priceRules: null,
//     },
//     quantity: 12,
//     productId: 'blendjet.myshopify.com::jetpack-smoothies::en-us',
//     handle: 'jetpack-smoothies',
//     vendor: 'BlendJet',
//     tags: ['jet', 'JetPack', 'OG', 'pack', 'standard'],
//     metafields: [],
//     id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==::0ece7a1e-aac3-4c78-8123-9918ad44c172',
//   },
// ];
