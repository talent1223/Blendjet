import * as fs from 'fs';
import { resolve } from 'path';
import { transformData } from '../transform/transform-data';
import contentfulBlendjet2 from './contentful-blendjet2-entry.mock.json';
import nacelleProducts from './nacelle-products-array.mock.json';
import warrantyData from './warranty.mock.json';
import cartUpsellsData from './cart-upsells.mock.json';
import { UpsellsPackage } from '../sources/get-upsells';

/**
 * Combines data from mock data files, then transforms it, generating
 * `output.json`. This is used to test changes to our transform function in
 * `transform.test.js`.
 */
async function combineTransformMocks() {
  const [blendjet2, sleeve, smoothies, smoothiesProtein, smoothiesLatte] =
    nacelleProducts;
  const data = await transformData(
    contentfulBlendjet2 as any,
    blendjet2,
    sleeve,
    smoothies,
    smoothiesProtein,
    smoothiesLatte,
    warrantyData,
    cartUpsellsData as UpsellsPackage,
  );

  // Write out the returned data into `__tests__/output.json` for testing
  writeOutput('output.json', data);

  console.log('\n> √ Testing file `output.json` data created successfully.\n');
}

combineTransformMocks();

function writeOutput(name: string, data: any) {
  fs.writeFileSync(
    resolve(__dirname, `../../../../../src/__tests__/${name}`),
    JSON.stringify(data, null, 2).concat('\n'),
  );
}
