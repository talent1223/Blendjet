import {
  AfterpayScriptRoot,
  AfterpayScriptRootProps,
  featureId,
} from '../roots/AfterpayScriptRoot/AfterpayScriptRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint<AfterpayScriptRootProps>(featureId, AfterpayScriptRoot)();
