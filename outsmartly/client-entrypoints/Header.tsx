import {
  HeaderRoot,
  HeaderRootProps,
  featureId,
} from '../roots/HeaderRoot/HeaderRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint<HeaderRootProps>(featureId, HeaderRoot)();
