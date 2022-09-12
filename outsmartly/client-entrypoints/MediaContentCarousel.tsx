import {
  MediaContentCarouselRoot,
  featureId,
} from '../roots/MediaContentCarouselRoot/MediaContentCarouselRoot';
import { createEntrypoint } from '../utils/createEntrypoint';

createEntrypoint(featureId, MediaContentCarouselRoot)();
