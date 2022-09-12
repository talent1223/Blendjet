import isEqual from 'lodash.isequal';
import { v4 } from 'uuid';
import { LocalForageCartItem } from './lineItems';

export function updateOrAddItem(
  lineItems: LocalForageCartItem[],
  item: LocalForageCartItem,
) {
  const index = lineItems.findIndex((lineItem) => {
    if (lineItem.variant.id === item.variant.id) {
      const areMetafieldsEqual = isEqual(item.metafields, lineItem.metafields);

      return areMetafieldsEqual; // match only if metafields are the same.
    }
    return false;
  });
  if (index === -1) {
    // generate unique id for line
    return {
      ...item,
      id: `${item.variant.id}::${v4()}`,
    };
  } else {
    return {
      // here we spread the existing item in the cart so we keep the existing id
      ...lineItems[index],
      quantity: (lineItems[index].quantity += item.quantity),
    };
  }
}
