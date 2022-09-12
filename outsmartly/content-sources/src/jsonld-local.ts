import { TransformedData } from './transform/transform-data';
import api from '../api.json';
import { generateJsonLd } from './runtime/generateJsonLd';

/**
 * Runs `generateJsonLd()` during local development, using our api.json data
 */
async function run() {
  const data = await generateJsonLd(api as TransformedData);

  // Output to a file if you want
  console.log(JSON.stringify(data, null, 2));
}

run();
