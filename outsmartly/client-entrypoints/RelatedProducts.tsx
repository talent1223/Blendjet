import {
  RelatedProductsRoot,
  featureId,
} from '../roots/RelatedProductsRoot/RelatedProductsRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint(featureId, RelatedProductsRoot)();
