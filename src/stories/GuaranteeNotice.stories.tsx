/** @jsx h */
import { h } from 'preact';
import { GuaranteeNotice } from '../components/GuaranteeNotice/GuaranteeNotice';

export default {
  title: 'Guarantee Notice',
  component: GuaranteeNotice,
};

export const GuaranteeNoticeStory = () => {
  // GuaranteeNotice takes no props
  return <GuaranteeNotice />;
};

GuaranteeNoticeStory.storyName = 'Guarantee Notice';
