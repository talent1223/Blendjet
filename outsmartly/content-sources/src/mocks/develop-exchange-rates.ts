import { getCurrencyPrices } from '../runtime/getCurrencyPrices';
import api from '../../api.json';
import { pricesForLocalization } from '../transform/pricesForLocalization';
import fetch from 'node-fetch';

type API = typeof api['blendjet-2'];

async function run(api: API) {
  // include rates and cache by expire time
  const variantPrices = pricesForLocalization(api as any);
  const rates = await getCurrencyPrices(
    {
      country: 'JP',
      prices: variantPrices,
    },
    fetch as any,
  );
  console.log(rates);
}

run(api['blendjet-2']);
