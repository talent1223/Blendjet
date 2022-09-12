import isEqual from 'lodash.isequal';
import { updateOrAddItem } from './updateOrAddItem';
import { getLineItems, LocalForageCartItem, saveLineItems } from './lineItems';

export async function addBatchToCart(payload: LocalForageCartItem[]) {
  const lineItems = await getLineItems();

  const itemsToSave = payload.map((item) => {
    return updateOrAddItem(lineItems, item);
  });

  return saveLineItems([
    ...lineItems.filter((item) => {
      const index = itemsToSave.findIndex((lineItem) => {
        if (lineItem.variant.id === item.variant.id) {
          const areMetafieldsEqual = isEqual(
            item.metafields,
            lineItem.metafields,
          );

          return areMetafieldsEqual; // match only if metafields are the same.
        }
        return false;
      });
      if (index === -1) {
        // we want to keep items that are not in our new array
        return true;
      } else {
        // filter out items that we are updating
        return false;
      }
    }),
    ...itemsToSave,
  ]);
}
