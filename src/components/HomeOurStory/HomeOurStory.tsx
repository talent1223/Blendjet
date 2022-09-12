/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

export type HomeOurStoryProps = {
  title: string;
  videoObj: {
    src: string;
  };
};

export function HomeOurStory({ title, videoObj }: HomeOurStoryProps) {
  return (
    <div class="section section__about-video">
      <div class="title-container">
        <div class="jetsetter-title">{title}</div>
      </div>
      <div style="position:relative;width:100%;height:0;padding-bottom:56.27198%;">
        <iframe
          style="position:absolute;top:0;left:0;width:100%;height:100%;"
          width="500"
          height="294"
          src={videoObj.src}
          frameBorder="0"></iframe>
      </div>
    </div>
  );
}
