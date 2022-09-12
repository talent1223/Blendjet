import { saveCartToRecart, getRecartMetafieldsForCheckout } from './recart';
import { mocked } from 'jest-mock';
import localforageReal from 'localforage';
import { cartMock, deepClone } from './test-utils';
jest.mock('localforage');
const localforageMock = mocked(localforageReal, true);

describe('recart', () => {
  describe('getRecartMetafieldsForCheckout', () => {
    test('it gets nacelle metafields from recart if no _recart on window', async () => {
      const metafields = getRecartMetafieldsForCheckout();
      expect(metafields).toEqual([
        { key: 'RecartIntegration', value: 'Nacelle' },
      ]);
    });

    test('it gets metafields from recart if on window', async () => {
      window._recart = {
        getSessionId() {
          return 'session-id-123';
        },
        getShopperId() {
          return 'shopper-id-abc';
        },
      };

      const metafields = getRecartMetafieldsForCheckout();
      expect(metafields).toEqual([
        { key: 'RecartIntegration', value: 'Nacelle' },
        {
          key: 'RecartSessionId',
          value: 'session-id-123',
        },
        {
          key: 'RecartShopperId',
          value: 'shopper-id-abc',
        },
      ]);
    });
  });

  describe('saveCartToRecart', () => {
    // this should be it's own test and just assert it calls this function
    test('synchronizes cart with recart', async () => {
      const mockDate = new Date('2022-02-02T03:30:53.478Z');
      global.Date = class MockDate extends Date {
        constructor() {
          super(mockDate);
        }
      } as any;
      localforageMock.getItem.mockResolvedValueOnce(
        Promise.resolve(deepClone(cartMock)),
      );
      const recartMock = jest.fn();
      window._recart = { isReady: () => true, setCart: recartMock };
      await saveCartToRecart();

      expect(recartMock).toBeCalledWith(
        {
          itemCount: 15,
          value: 197.73,
          returnUrl: 'localhost',
          currency: 'USD',
        },
        [
          {
            variantId: 32478639390786,
            productId: 4760265031746,
            name: 'BlendJet 2',
            qty: 3,
            price: 49.95,
            qtyPrice: 149.85,
            currency: 'USD',
            imageUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
          },
          {
            variantId: 39289167282242,
            productId: 4760265031746,
            name: 'JetPack Smoothie',
            qty: 12,
            price: 3.99,
            qtyPrice: 47.88,
            currency: 'USD',
            imageUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
          },
        ],
        mockDate,
      );
    });
  });
});
