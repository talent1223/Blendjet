import { mocked } from 'jest-mock';
import { cartMock, deepClone } from './test-utils';
import localforageReal from 'localforage';
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
import { saveCartToRecart } from './recart';
import { v4 } from 'uuid';

jest.mock('uuid');
jest.mock('./recart');
jest.mock('localforage');
const uuidv4Mock = mocked(v4, true);
const localforageMock = mocked(localforageReal, true);
const recartMock = mocked(saveCartToRecart, true);

describe('lineItems', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localforageMock.getItem.mockResolvedValueOnce(
      Promise.resolve(deepClone(cartMock)),
    );
    uuidv4Mock.mockReturnValueOnce('12345-uuid');
  });

  describe('getLineItems', () => {
    test("is called with the proper key 'line-items'", async () => {
      await getLineItems();
      expect(localforageMock.getItem).toBeCalledWith('line-items');
    });

    test('gets items from localforage cart', async () => {
      const lineItems = await getLineItems();
      expect(lineItems).toEqual(cartMock);
    });

    test('gets empty array if nothing in localforage cart', async () => {
      jest.resetAllMocks();

      localforageMock.getItem.mockReturnValue(Promise.resolve(undefined));
      const lineItems = await getLineItems();
      expect(lineItems).toEqual([]);
    });
  });

  describe('initLineItems', () => {
    test('sets an empty array in storage if initially undefined', async () => {
      jest.resetAllMocks();
      localforageMock.getItem.mockResolvedValueOnce(Promise.resolve(undefined));
      await initLineItems();
      expect(localforageMock.setItem).toBeCalledWith('line-items', []);
    });

    // this should be it's own test and just assert it calls this function
    test('synchronizes cart with recart', async () => {
      const mockDate = new Date('2022-02-02T03:30:53.478Z');
      global.Date = class MockDate extends Date {
        constructor() {
          super(mockDate);
        }
      } as any;

      await initLineItems();
      expect(recartMock).toBeCalled();
    });
  });

  describe('saveLineItems', () => {
    test('it saves line items and calls sync to recart', async () => {
      await saveLineItems(cartMock);
      expect(localforageMock.setItem).toBeCalledWith('line-items', cartMock);
      expect(recartMock).toBeCalled();
    });
  });

  describe('addLineItem', () => {
    test('it adds a new line item', async () => {
      const item = cartMock[0];
      await addLineItem({
        ...item,
        variant: { ...item.variant, id: 'new-id' },
      });
      const numItems = getCartItems(localforageMock).length;
      expect(numItems).toBe(3);
    });

    test('generates unique id for a new line item', async () => {
      const item = cartMock[0];
      await addLineItem({
        ...item,
        variant: { ...item.variant, id: 'new-id' },
      });
      const itemId = getCartItems(localforageMock)[2].id;
      expect(itemId).toBe('new-id::12345-uuid');
    });

    test('it updates an existing line item', async () => {
      await addLineItem({ ...cartMock[0], quantity: 1 });
      const updatedQuantity = getCartItems(localforageMock)[0].quantity;
      expect(updatedQuantity).toBe(4);
    });
  });

  describe('decrementLineItem', () => {
    test('it decrements a line item', async () => {
      const item = cartMock[0];
      await decrementLineItem(item.id);
      const updatedQuantity = getCartItems(localforageMock)[0].quantity;
      expect(updatedQuantity).toBe(item.quantity - 1);
    });
  });

  describe('incrementLineItem', () => {
    test('it increments a line item', async () => {
      const item = cartMock[0];
      await incrementLineItem(item.id);
      const updatedQuantity = getCartItems(localforageMock)[0].quantity;
      expect(updatedQuantity).toBe(item.quantity + 1);
    });
  });

  describe('removeLineItem', () => {
    test('it removes a line item', async () => {
      const item = cartMock[0];
      await removeLineItem(item.id);
      const cartItems = getCartItems(localforageMock);
      expect(cartItems.length).toBe(cartMock.length - 1);
    });
  });

  describe('getCheckoutLineItems', () => {
    test('it returns empty array if no items in cart', async () => {
      jest.resetAllMocks();

      localforageMock.getItem.mockResolvedValueOnce(Promise.resolve([]));
      const items = await getCheckoutLineItems();
      expect(items).toEqual([]);
    });

    test('it returns items in format for checkout', async () => {
      const items = await getCheckoutLineItems();
      expect(items).toStrictEqual([
        {
          cartItemId:
            'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==::22e5ce8c-1315-4cb9-b0fb-8e98d2d4aa15',
          variantId:
            'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
          quantity: 3,
          metafields: [],
        },
        {
          cartItemId:
            'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==::0ece7a1e-aac3-4c78-8123-9918ad44c172',
          variantId:
            'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==',
          quantity: 12,
          metafields: [],
        },
      ]);
    });
  });
});

function getCartItems(localforageMock: any): typeof cartMock {
  return localforageMock.setItem.mock.calls[0][1];
}
