import { ParentMobileCartUpsellsProps } from '../../../../src/components/Cart/Cart';

export function filterMobileUpsellsByCountry(
  mobileCartUpsells: ParentMobileCartUpsellsProps,
  country: string,
) {
  if (country === 'US') {
    return mobileCartUpsells;
  }
  return {
    ...mobileCartUpsells,
    items: mobileCartUpsells.items.filter((item) => {
      // always keep bundles (do these have a non-usa check?)
      if (item.upsellType == 'bundle') {
        return (
          // we check to make sure all the items in the bundle are available internationally (usaOnly===false)
          item.products?.map((product) => product.usaOnly === false)?.length ===
          item.products?.length
        );
      }
      return item.product && item.product.usaOnly === false;
    }),
  };
}
