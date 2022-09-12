/** @jsx h */
import { h } from 'preact';
import './style.scss';
import Marquee from 'react-fast-marquee';
import { ReactNode } from 'react';

export type AsSeenOnMarqueeProps = {
  title: string;
  imgList: {
    url: string;
    altText: string;
  }[];
};

export function AsSeenOnMarquee({ title, imgList }: AsSeenOnMarqueeProps) {
  return (
    <div class="section section__as-seen-on">
      <div class="as-seen-on">{title}</div>
      <div class="ticker__container">
        <div class="fade-block fade-block__left"></div>
        <Marquee gradient={false}>
          {imgList.map((item, i) => {
            return (
              <img class="ticker__img" src={item.url} alt={item.altText} />
            );
          })}
        </Marquee>
        <div class="fade-block fade-block__right"></div>
      </div>
    </div>
  );
}
