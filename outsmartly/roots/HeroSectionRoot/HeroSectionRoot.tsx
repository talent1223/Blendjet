/** @jsx h */
import { Fragment, h } from 'preact';
import { HeroCarouselContainer } from '../../../src/containers/HeroCarouselContainer';
import { createFeature } from '../../utils/createFeature';

export type HeroSectionRootProps = {};
export const featureId = 'hero-section';

export function HeroSectionRoot({}) {
  return createFeature(<HeroCarouselContainer />, featureId);
}
