/** @jsx h */
import { h } from 'preact';
import {
  AfterpayScriptContainer,
  AfterpayScriptContainerProps,
} from '../../../src/containers/AfterpayScriptContainer';
import { createFeature } from '../../utils/createFeature';

export type AfterpayScriptRootProps = AfterpayScriptContainerProps;
export const featureId = 'afterpay';

export function AfterpayScriptRoot(props: AfterpayScriptRootProps) {
  return createFeature(<AfterpayScriptContainer {...props} />, featureId);
}
