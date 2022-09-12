/** @jsx h */
import { h } from 'preact';
import { HeaderContainerProps } from '../../../src/containers/HeaderContainer';
import { HeaderContainer } from '../../../src/containers/HeaderContainer';
import { createFeature } from '../../utils/createFeature';

export type HeaderRootProps = HeaderContainerProps;
export const featureId = 'header';

export function HeaderRoot(props: HeaderRootProps) {
  return createFeature(<HeaderContainer {...props} />, featureId);
}
