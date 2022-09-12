import { mocked } from 'jest-mock';
import { cartMock, deepClone } from './test-utils';
import { updateOrAddItem } from './updateOrAddItem';
import { v4 } from 'uuid';

jest.mock('uuid');
const uuidv4Mock = mocked(v4, true);

describe('updateOrAddItem', () => {
  test('it updates an items if we already have it and preserves existing id', async () => {
    const currentItemsMock = deepClone(cartMock);
    const updated = await updateOrAddItem(currentItemsMock, {
      ...cartMock[0],
      quantity: 4,
      id: 'not-the-id-we-match-on',
    });
    console.log(updated.id);
    expect(updated.quantity).toBe(cartMock[0].quantity + 4);
    expect(updated.id).not.toBe('not-the-id-we-match-on');
    expect(updated.id).toBe(currentItemsMock[0].id);
  });

  test('it creates a unique id for the line if new variant id', async () => {
    uuidv4Mock.mockReturnValueOnce('12345-uuid');
    const updated = await updateOrAddItem(deepClone(cartMock), {
      ...cartMock[0],
      variant: { ...cartMock[0].variant, id: 'new-id' },
    });
    expect(updated.id).toEqual('new-id::12345-uuid');
  });

  test('it creates a unique id for the line if same variant id but different metafields', async () => {
    uuidv4Mock.mockReturnValueOnce('12345-uuid');
    const updated = await updateOrAddItem(deepClone(cartMock), {
      ...cartMock[0],
      quantity: 10,
      metafields: [{ key: 'new', value: 'new' }],
    });
    expect(updated.id).toBe(`${cartMock[0].variant.id}::12345-uuid`);
  });
});
