/** @jsx h */
import { h } from 'preact';
import {
  SubscriptionToggle,
  SubscriptionToggleProps,
} from '../components/SubscriptionToggle/SubscriptionToggle';
import { subscriptionToggleMock } from '../mock-data/subscriptionToggle';
export default {
  title: 'Subscription Toggle',
  component: SubscriptionToggle,
};

export const SubscriptionToggleStory = () => {
  const storyProps: SubscriptionToggleProps = subscriptionToggleMock;
  return <SubscriptionToggle {...storyProps} />;
};

SubscriptionToggleStory.storyName = 'Subscription Toggle';
