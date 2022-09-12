import * as fs from 'fs';
import { resolve } from 'path';
import { getContentfulProduct } from '../sources/get-contentful-product';
import { getContentfulBlendJet2 } from '../sources/get-contentful-blendjet2';
import { getNacelleProducts } from '../sources/get-nacelle-products';
import { getWarranty } from '../sources/get-warranty';
import { getUpsells } from '../sources/get-upsells';
import { getNacelleBlendJet2 } from '../sources/get-nacelle-blendjet2';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env' });

async function createMocks() {
  // The returned data set uses a link level 10 in `fetchFromContentful()` in
  // order to resolve Contentful item and asset references to their actual
  // values instead of just reference IDs. This results in circular references
  // for bundles (the products in the bundle also have bundles, etc.) which
  // JSON.stringify cannot handle. So we create a replacer function for
  // JSON.stringify that removes any nested `bundles` properties from the
  // resolved data, and this allows us to write out the data.
  function removeNestedBundles(key: string, value: unknown) {
    if (key === 'bundles') {
      if (addedBundles) return;
      addedBundles = true;
    }
    return value;
  }

  // `removeNestedBundles` will set this flag to `true` after encountering the
  // first level of `bundles`. Any subsequent encounter will return undefined.
  // After writing out data, reset this flag to `false`.
  let addedBundles = false;

  // Create mock Contentful data: the full product object by handle
  const contentfulBlendJet2Full = await getContentfulProduct('blendjet-2');

  writeMock(
    'contentful-blendjet2-full.mock.json',
    contentfulBlendJet2Full,
    removeNestedBundles,
  );
  addedBundles = false;

  // Create mock Contentful data, but just for the BlendJet2 entry
  const contentfulBlendJet2Entry = await getContentfulBlendJet2();

  writeMock(
    'contentful-blendjet2-entry.mock.json',
    contentfulBlendJet2Entry,
    removeNestedBundles,
  );
  addedBundles = false;

  // Create mock Nacelle product data, i.e., from Shopify
  const nacelleProductsArray = await getNacelleProducts();
  writeMock('nacelle-products-array.mock.json', nacelleProductsArray);

  // Create mock Nacelle product data, only for BlendJet-2
  const nacelleBlendJet2 = await getNacelleBlendJet2();
  writeMock('nacelle-blendjet2.mock.json', nacelleBlendJet2);

  // Create mock Warranty data
  const warrantyMock = await getWarranty();
  writeMock('warranty.mock.json', warrantyMock);

  // Create mock CartUpsells data
  const cartUpsells = await getUpsells();
  writeMock('cart-upsells.mock.json', cartUpsells);

  console.log('\n> √ Mocks created successfully.\n');
}

createMocks();

function writeMock(name: string, data: any, replacer: any = null) {
  fs.writeFileSync(
    resolve(`./src/mocks/${name}`),
    JSON.stringify(data, replacer, 2).concat('\n'),
  );
}
