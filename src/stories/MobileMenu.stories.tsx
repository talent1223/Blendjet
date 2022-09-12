/** @jsx h */
import { h } from 'preact';
import {
  MobileMenu,
  MobileMenuProps,
} from '../components/MobileMenu/MobileMenu';
import { mobileMenuMock } from '../mock-data/mobileMenu';

export default {
  title: 'Mobile Menu',
  component: MobileMenu,
};

export const MobileMenuStory = () => {
  const storyProps: MobileMenuProps = mobileMenuMock;
  return <MobileMenu {...storyProps} />;
};

MobileMenuStory.storyName = 'Mobile Menu';
