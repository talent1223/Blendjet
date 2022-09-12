/** @jsx h */
import { Fragment, h } from 'preact';
import { cx } from '../../lib/utils';
import './style.scss';

export interface ShippingNotificationProps {
  compact?: boolean;
  message: string;
  shippingDay: string;
  className?: string;
}

export function ShippingNotification({
  compact = false,
  message,
  shippingDay,
  className = '',
}: ShippingNotificationProps) {
  return (
    <Fragment>
      <div
        class={cx(
          'product-select__controls__shipping-notification',
          compact && 'compact',
          className,
        )}>
        <div class="normal-size__label">{message}</div>
        <div class="normal-size__countdown">{shippingDay}</div>
      </div>
    </Fragment>
  );
}
