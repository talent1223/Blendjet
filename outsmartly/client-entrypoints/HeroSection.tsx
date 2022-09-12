import {
  featureId,
  HeroSectionRoot,
  HeroSectionRootProps,
} from '../roots/HeroSectionRoot/HeroSectionRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint<HeroSectionRootProps>(featureId, HeroSectionRoot)();
