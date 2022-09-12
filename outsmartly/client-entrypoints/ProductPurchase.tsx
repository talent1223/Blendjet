import {
  ProductPurchaseRoot,
  featureId,
} from '../roots/ProductPurchaseRoot/ProductPurchaseRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint(featureId, ProductPurchaseRoot)();
