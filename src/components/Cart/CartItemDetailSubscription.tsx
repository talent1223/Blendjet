/** @jsx h */
import { h, Fragment } from 'preact';
import './cartItemDetailSubscription.scss';

interface CartItemDetailSubscriptionProps {
  discountPercentage?: number;
}

export function CartItemDetailSubscription({
  discountPercentage,
}: CartItemDetailSubscriptionProps) {
  const pillText = discountPercentage
    ? `${discountPercentage}% off w/ auto delivery`
    : 'Auto Delivery';

  return (
    <div class="subscription-details">
      <div class="subscription-pill">{pillText}</div>
    </div>
  );
}
