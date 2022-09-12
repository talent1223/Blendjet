/** @jsx h */
import { h } from 'preact';
import { MainNav, MainNavProps } from '../components/MainNav/MainNav';
import { headerMock } from '../mock-data/header';

// MainNav takes its props from its parent, Header. And it never exists on its
// own. So we don't need to import pageData, just headerMock.

export default {
  title: 'Main Nav',
  component: MainNav,
};

export const MainNavStory = () => {
  const storyProps: MainNavProps = {
    routeName: headerMock.routeName,
    quantityTotal: headerMock.quantityTotal,
    // Header creates these functions for MainNav. So we have to simulate
    // creating them here. Can make them emit a console.log, etc.
    onMenuIconClick: () => {},
    onCartIconClick: () => {},
  };

  return <MainNav {...storyProps} />;
};

MainNavStory.storyName = 'Main Nav';
