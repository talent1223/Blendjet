/** @jsx h */
import { h } from 'preact';
import {
  ProductPurchaseContainer,
  ProductPurchaseContainerProps,
} from '../../../src/containers/ProductPurchaseContainer';
import { createFeature } from '../../utils/createFeature';

export type ProductPurchaseRootProps = ProductPurchaseContainerProps;
export const featureId = 'product-purchase';

export function ProductPurchaseRoot(props: ProductPurchaseRootProps) {
  return createFeature(<ProductPurchaseContainer {...props} />, featureId);
}
