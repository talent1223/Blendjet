/** @jsx h */
import { h } from 'preact';
import { TopBar, TopBarProps } from '../components/TopBar/TopBar';
import { headerMock } from '../mock-data/header';

// TopBar takes its props from its parent, Header. And it never exists on its
// own. So we don't need to import pageData, just headerMock.

export default {
  title: 'Top Bar',
  component: TopBar,
};

export const TopBarStory = () => {
  const storyProps: TopBarProps = {
    freeShippingMessage: headerMock.freeShippingMessage,
    // Uncomment to see a different shipping message just for the story
    // freeShippingMessage: 'FREE WORLDWIDE SHIPPING',
  };

  return <TopBar {...storyProps} />;
};

TopBarStory.storyName = 'Top Bar';
