/** @jsx h */
import { h } from 'preact';
import { MediaContentCarouselContainer } from '../../../src/containers/MediaContentCarouselContainer';
import { createFeature } from '../../utils/createFeature';

export type MediaContentCarouselRootProps = {};
export const featureId = 'media-content-carousel';

export function MediaContentCarouselRoot({}: MediaContentCarouselRootProps) {
  return createFeature(<MediaContentCarouselContainer />, featureId);
}
