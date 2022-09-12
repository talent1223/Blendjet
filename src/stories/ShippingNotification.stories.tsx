/** @jsx h */
import { h } from 'preact';
import {
  ShippingNotification,
  ShippingNotificationProps,
} from '../components/ShippingNotification/ShippingNotification';
import { shippingNotificationMock } from '../mock-data/shippingNotification';

export default {
  title: 'Shipping Notification',
  component: ShippingNotification,
};

export const ShippingNotificationStory = () => {
  const storyProps: ShippingNotificationProps = shippingNotificationMock;
  return <ShippingNotification {...storyProps} />;
};

ShippingNotificationStory.storyName = 'Shipping Notification';
