import { getProductFromNacelle } from '../utils/fetch-nacelle';
import { NacelleProduct } from '@nacelle/client-js-sdk';

// Same as get-nacelle-products.ts, just with different product handles

export async function getWarranty(): Promise<(NacelleProduct | undefined)[]> {
  const warrantyHandles = [
    '8862eff0-e8c2-47bc-a194-157f853043ec-10003-blendjet-adh-replace-1y',
    '8862eff0-e8c2-47bc-a194-157f853043ec-10003-blendjet-adh-replace-2y',
    '8862eff0-e8c2-47bc-a194-157f853043ec-10002-blendjet-adh-replace-3y',
  ];

  return Promise.all(
    warrantyHandles.map((handle) => {
      return getProductFromNacelle(handle);
    }),
  );
}
