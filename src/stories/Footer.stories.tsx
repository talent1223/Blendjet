/** @jsx h */
import { h } from 'preact';
import { Footer, FooterProps } from '../components/Footer/Footer';
import { pageData } from '../mock-data/fullPageData';

export default {
  title: 'Footer',
  component: Footer,
};

export const FooterStory = () => {
  const storyProps: FooterProps = pageData.footer;
  return <Footer {...storyProps} />;
};

FooterStory.storyName = 'Footer';
