/** @jsx h */
import { h, Fragment } from 'preact';
import { blendjetIcon } from '../Icons/icons';

export function FooterBrand() {
  return (
    <Fragment>
      <div class="section__footer__logo">{blendjetIcon}</div>
      <div class="section__footer__made-with">
        Created with love in California
      </div>
    </Fragment>
  );
}
