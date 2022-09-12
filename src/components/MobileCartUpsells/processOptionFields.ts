import {
  ExpandedChoice,
  OptionField,
  UpsellItemProduct,
  UpsellItemVariant,
} from './CartUpsellsItem';

/**
 * Some functions for processing the 'selectedOptions' array for the currently
 * selectedVariant
 */
export function variantToChoice(index: number) {
  return function mappingFunction(variant: UpsellItemVariant): ExpandedChoice {
    return {
      label: variant.selectedOptions[index].value,
      value: variant.id,
      selectedOptions: variant.selectedOptions,
    };
  };
}

export function matchesSelectedVariant(
  hasFlavor: OptionField | undefined,
  index: number,
  selectedVariant: UpsellItemVariant,
) {
  return function filterFunction(item: ExpandedChoice) {
    if (hasFlavor && index === 1) {
      return (
        item.selectedOptions[0].value ===
        selectedVariant.selectedOptions[0].value
      );
    }
    return true;
  };
}

export function showSizes(
  hasFlavor: OptionField | undefined,
  optionField: OptionField,
  index: number,
  product: UpsellItemProduct,
) {
  return function filterFunction(item: ExpandedChoice) {
    // const hasFlavor = selectedVariant.selectedOptions.find(
    //   (item) => item.name === 'Flavor',
    // );
    if (hasFlavor && optionField.name !== 'Flavor') {
      // This thing has flavors and now we probably have sizes, we want to
      // only show sizes we have stock for this flavor
      const size = item.label;
      const selectedFlavor = hasFlavor.value;
      // does this flavor have this size?
      return product.variants.find(
        (item) =>
          item.selectedOptions[0].value === selectedFlavor &&
          item.selectedOptions[index].value === size,
      );
    }
    return true;
  };
}

export function findCurrent(
  { label }: ExpandedChoice,
  index: number,
  array: ExpandedChoice[],
) {
  return array.findIndex((item) => item.label === label) === index;
}
