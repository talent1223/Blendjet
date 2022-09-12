/** @jsx h */
import { h } from 'preact';
import {
  RelatedProductsContainer,
  RelatedProductsContainerProps,
} from '../../../src/containers/RelatedProductsContainer';
import { createFeature } from '../../utils/createFeature';

export type RelatedProductsRootProps = RelatedProductsContainerProps;
export const featureId = 'related-products';

export function RelatedProductsRoot(props: RelatedProductsRootProps) {
  return createFeature(<RelatedProductsContainer {...props} />, featureId);
}
