// this is a public client-side token
const merchantId = '3af65681-4f06-46e4-805a-f2cb8bdaf1d4';
const baseUrl = 'https://checkout.gointerpay.net/v2.21/localize';

type LocalizeResponse = {
  Country: string;
  Currency: string;
  Symbol: string;
  Units: number;
  RateOffer: { Id: string; Expiry: string; Rate: number };
  ConsumerPrices: number[];
};

export type Rates = {
  code: string;
  symbol: string;
  expires: string;
  rates: { [key: string]: number | string };
};

export type LookupPrice = { Price: number | string; Tag: string; type: string };
export type GetCurrencyProps = {
  country?: string;
  currency?: string;
  prices: LookupPrice[];
};

type Fetch = typeof fetch;

export async function getCurrencyPrices(
  { country, currency, prices }: GetCurrencyProps,
  fetch: Fetch,
): Promise<Rates | undefined> {
  try {
    const lookupBy = currency ? `Currency=${currency}` : `Country=${country}`;
    const pricesLookup = prices.map((item) => ({
      Price: item.Price,
      Tag: item.Tag,
    }));
    const merchantPrices = `MerchantPrices=${encodeURIComponent(
      JSON.stringify(pricesLookup),
    )}`;
    const response = await fetch(
      `${baseUrl}?MerchantId=${merchantId}&${lookupBy}&${merchantPrices}&IncludeRate=true`,
    );

    const { Currency, Symbol, RateOffer, ConsumerPrices }: LocalizeResponse =
      await response.json();

    return {
      code: Currency,
      symbol: Symbol,
      expires: RateOffer.Expiry,
      rates: prices.reduce<{ [key: string]: any }>((acc, price, i) => {
        const fxPrice = ConsumerPrices[i];
        return {
          ...acc,
          [price.Price.toString()]: fxPrice.toString(),
        };
      }, {}),
    };
  } catch (e) {
    console.log(e);
    return;
  }
}
