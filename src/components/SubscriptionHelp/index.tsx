/** @jsx h */
import { Fragment, h } from 'preact';
import './style.scss';

import {
  subscribeCancel,
  subscribeDeliver,
  subscribeUpdate,
} from '../Icons/icons';

export function SubscriptionHelp() {
  return (
    <div class="about-subscriptions__container">
      <div class="about-subscriptions__heading">
        Get Delicious On
        <br />
        Demand And Save
      </div>{' '}
      <div class="about-subscriptions__column">
        <div class="about-subscriptions__icon">{subscribeCancel}</div>{' '}
        <div class="about-subscriptions__text">
          AUTOMATICALLY DELIVERED <br />
          EVERY 30 DAYS
        </div>{' '}
        <div class="about-subscriptions__icon">{subscribeCancel}</div>{' '}
        <div class="about-subscriptions__text">
          NO STRINGS ATTACHED <br />
          CANCEL ANYTIME
        </div>{' '}
        <div class="about-subscriptions__icon">{subscribeDeliver}</div>{' '}
        <div class="about-subscriptions__text">
          UPDATE YOUR SUBSCRIPTION <br />
          WHEN YOU WANT
        </div>
      </div>
    </div>
  );
}
