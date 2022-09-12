import { getOutsmartlyMetafields } from './getOutsmartlyMetafields';

describe('outsmartlyMetafields', () => {
  test('gets the outsmartlyMetafields from window', async () => {
    global.window = Object.create(window);
    Object.defineProperty(window, '__capi__', {
      value: {
        metafields: [{ key: 'internal_id', value: '123' }],
      },
    });
    const metafields = await getOutsmartlyMetafields();
    expect(metafields).toEqual([{ key: 'internal_id', value: '123' }]);
  });
});
