/** @jsx h */
import { h } from 'preact';
import {
  AsSeenOnMarquee,
  AsSeenOnMarqueeProps,
} from '../components/AsSeenOnMarquee/AsSeenOnMarquee';
import { asSeenOnMarqueeMock } from '../mock-data/asSeenOnMarqueeMock';

const title = 'As Seen on Marquee';
export default {
  title,
  component: AsSeenOnMarquee,
};

export const AsSeenOnMarqueeStory = () => {
  const storyProps: AsSeenOnMarqueeProps = asSeenOnMarqueeMock;
  return <AsSeenOnMarquee {...storyProps} />;
};

AsSeenOnMarqueeStory.storyName = title;
