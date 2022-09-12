/** @jsx h */
import { h } from 'preact';
import {
  AfterpayContainer,
  AfterpayContainerProps,
} from '../../../src/containers/AfterpayContainer';
import { createFeature } from '../../utils/createFeature';

export type AfterpayRootProps = AfterpayContainerProps;
export const featureId = 'afterpay';

export function AfterpayRoot(props: AfterpayRootProps) {
  return createFeature(<AfterpayContainer {...props} />, featureId);
}
