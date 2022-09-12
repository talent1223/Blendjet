import {
  AfterpayRoot,
  AfterpayRootProps,
  featureId,
} from '../roots/AfterpayRoot/AfterpayRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint<AfterpayRootProps>(featureId, AfterpayRoot)();
