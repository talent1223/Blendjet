import {
  featureId,
  ProductSelectRoot,
  ProductSelectRootProps,
} from '../roots/ProductSelectRoot/ProductSelectRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint<ProductSelectRootProps>(featureId, ProductSelectRoot)();
