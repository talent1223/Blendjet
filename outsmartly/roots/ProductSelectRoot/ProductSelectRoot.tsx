/** @jsx h */
import { h } from 'preact';
import {
  ProductSelectContainer,
  ProductSelectContainerProps,
} from '../../../src/containers/ProductSelectContainer';
import { createFeature } from '../../utils/createFeature';

export type ProductSelectRootProps = ProductSelectContainerProps;
export const featureId = 'product-select';

export function ProductSelectRoot(props: ProductSelectRootProps) {
  return createFeature(<ProductSelectContainer {...props} />, featureId);
}
