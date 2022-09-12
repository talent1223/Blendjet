/** @jsx h */
import { h } from 'preact';

export function createFeature(
  component: preact.JSX.Element,
  featureId: string,
) {
  if (typeof window === 'undefined') {
    return <div id={featureId}>{component}</div>;
  }
  return component;
}
