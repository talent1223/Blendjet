import { transformData } from '../transform/transform-data';
import contentfulBlendjet2 from '../mocks/contentful-blendjet2-entry.mock.json';
import nacelleProducts from '../mocks/nacelle-products-array.mock.json';
import warrantyData from '../mocks/warranty.mock.json';
import cartUpsellsData from '../mocks/cart-upsells.mock.json';
import output from './output.json';
import { UpsellsPackage } from '../sources/get-upsells';

// First, run `create-mocks.ts` and then run `combine-transform-mocks.ts`, in
// that order. Otherwise, when you transform the mock data here it will not
// match what is in `output.json`.

test('It properly transforms the data', async () => {
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
  // Uncomment to view transformed data during development
  // console.log(data);
  expect(data).toStrictEqual(output);
});
