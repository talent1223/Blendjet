import { getContentfulBlendJet2 } from './sources/get-contentful-blendjet2';
import { getNacelleProducts } from './sources/get-nacelle-products';
import { getUpsells } from './sources/get-upsells';
import { getWarranty } from './sources/get-warranty';
import { transformData } from './transform/transform-data';
import { NacelleProduct } from '@nacelle/client-js-sdk';

/**
 * This fetches, combines, and transforms. Gets called from `index.js`. During
 * development you can run it with `npm run csl`.
 */
export async function combineSources() {
  // Wait for all the fetching to be completed, then pull data together
  const [contentful, nacelle, cartUpsells, warranty] = await Promise.all([
    getContentfulBlendJet2(),
    getNacelleProducts(),
    getUpsells(),
    getWarranty(),
  ]);

  if (
    !contentful ||
    !nacelle ||
    !warranty ||
    !cartUpsells ||
    // every warranty that we tried to fetch needs to exist
    warranty.length !== warranty.filter((item) => item).length
  ) {
    return;
  }

  // Filter out any elements that are not Nacelle products
  const nacelleProducts = nacelle.filter(isNacelleProduct);

  //
  // Extract out known Nacelle products
  // ----------------------------------------------------------------------

  // For now, we'll hardcode the index, since we know the order
  const blendjet2 = nacelleProducts[0];
  // The second element is the Jetsetter sleeve product
  const sleeve = nacelleProducts[1];
  // 3rd, 4th, & 5th are smoothies, protein smoothies, and latte smoothies
  const smoothies = nacelleProducts[2];
  const smoothiesProtein = nacelleProducts[3];
  const smoothiesLatte = nacelleProducts[4];

  // Transform data
  const transformedData = await transformData(
    contentful,
    blendjet2,
    sleeve,
    smoothies,
    smoothiesProtein,
    smoothiesLatte,
    warranty.filter(
      (item: NacelleProduct | undefined): item is NacelleProduct => !!item,
    ),
    cartUpsells,
  );
  return transformedData;
}

function isNacelleProduct(
  item: NacelleProduct | undefined,
): item is NacelleProduct {
  return !item ? false : true;
}
