import { addBatchToCart } from './addBatchToCart';
import * as mockLineItems from './lineItems';
import { mocked } from 'jest-mock';
import { cartMock, deepClone } from './test-utils';

// return consistent uuid
jest.mock('uuid', () => {
  return {
    v4: jest.fn().mockImplementation(() => {
      return '12345-uuid';
    }),
  };
});

jest.mock('./lineItems');
const { getLineItems, saveLineItems } = mocked(mockLineItems, true);

describe('addBatchToCart', () => {
  beforeEach(() => {
    jest.resetModules();
    jest.clearAllMocks();
  });

  test('it updates multiple items in one call', async () => {
    getLineItems.mockResolvedValueOnce(deepClone(cartMock));

    await addBatchToCart(cartMock);

    const updatedQuantity = saveLineItems.mock.calls[0][0].map(
      (item) => item.quantity,
    );
    expect(updatedQuantity).toEqual([6, 24]);
  });

  test('it adds multiple items in one call', async () => {
    getLineItems.mockResolvedValueOnce(deepClone(cartMock));

    const itemsToAdd = deepClone(cartMock).map((item, i) => ({
      ...item,
      variant: { ...item.variant, id: `new-id-${i}` },
    }));
    await addBatchToCart(itemsToAdd);
    const numItems = saveLineItems.mock.calls[0][0].length;
    expect(numItems).toBe(4);
  });
});
