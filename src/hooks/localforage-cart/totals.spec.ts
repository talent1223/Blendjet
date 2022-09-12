import { mocked } from 'jest-mock';
import { cartMock, deepClone } from './test-utils';
import localforageReal from 'localforage';
import { getQuantityTotal, getCartSubtotal } from './totals';

jest.mock('uuid');
jest.mock('./recart');
jest.mock('localforage');
const localforageMock = mocked(localforageReal, true);

describe('totals', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    localforageMock.getItem.mockResolvedValueOnce(
      Promise.resolve(deepClone(cartMock)),
    );
  });

  describe('getQuantityTotal', () => {
    test('it returns zero if no items in cart', async () => {
      jest.resetAllMocks();
      localforageMock.getItem.mockResolvedValueOnce(Promise.resolve([]));
      const quantity = await getQuantityTotal();
      expect(quantity).toBe(0);
    });

    test('it returns correct quantity if items in cart', async () => {
      const quantity = await getQuantityTotal();
      expect(quantity).toBe(15);
    });
  });

  describe('getCartSubtotal', () => {
    test('it returns zero if no items in cart', async () => {
      jest.resetAllMocks();
      localforageMock.getItem.mockResolvedValueOnce(Promise.resolve([]));
      const quantity = await getCartSubtotal();
      expect(quantity).toBe(0);
    });

    test('it returns correct quantity if items in cart', async () => {
      const quantity = await getCartSubtotal();
      expect(quantity.toFixed(2)).toBe('197.73');
    });
  });
});
