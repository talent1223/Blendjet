/** @jsx h */
import { Fragment, h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';
import { aboutIcon } from '../Icons/icons';

export interface SubscriptionToggleProps {
  discountPercentage: number;
  active: boolean;
  onClick: (active: boolean) => void;
  showHelper?: boolean;
  onHelper?: () => void;
}

export function SubscriptionToggle({
  discountPercentage,
  onClick,
  active,
  showHelper = false,
  onHelper,
}: SubscriptionToggleProps) {
  function style() {
    return {
      transform: `translateX(${pos_percentage()})`,
    };
  }
  function pos_percentage() {
    return `${(sliderPosition() / 100) * 100}%`;
  }

  function sliderPosition() {
    return active ? 0 : 100;
  }
  return (
    <Fragment>
      <div class="toggle-container">
        <div class="text-container">
          <div class="text-container__option subscription">
            Subscribe & Save {discountPercentage}%
          </div>
          <div class="text-container__option onetime">
            One-time <br />
            Purchase
          </div>
        </div>
        <div
          class={cx('toggle', active && 'active')}
          onClick={() => {
            onClick(!active);
          }}>
          <div class="draggable" style={style()}></div>
        </div>
      </div>
      {showHelper ? (
        <div class="subscribe-helper" onClick={onHelper}>
          <div class="subscribe-helper__label">How do subscriptions work?</div>
          <div class="subscribe-helper__icon">{aboutIcon}</div>
        </div>
      ) : null}
    </Fragment>
  );
}
