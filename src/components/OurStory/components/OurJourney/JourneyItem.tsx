/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { Image } from 'src/types/image';
import { OurJourneyItemProps } from './types';

export default function JourneyItem({
  image,
  content,
  heading,
  style,
  textStyle,
  direction,
  background,
}: OurJourneyItemProps) {
  const sectionType = background ? 'dream' : 'section';
  return (
    <div class="blah">
      <div
        class={`our-journey__${sectionType} ${style} ${
          direction ? 'row-reverse' : ''
        }`}>
        {image ? (
          <div class="our-journey__section__side">
            <img {...image} class="our-journey__section__img" />
          </div>
        ) : null}
        <div
          class={`our-journey__section${
            image || background ? '__side' : '--no-image'
          }`}
          style={background ? { backgroundImage: `url(${background})` } : {}}>
          <div
            class={`our-journey__${sectionType}__text-block ${
              textStyle ? 'text-' + textStyle : ''
            }`}>
            <div class={`our-journey__${sectionType}__text-block__heading`}>
              {heading}
            </div>
            <div
              class="our-journey__section__text-block__main"
              dangerouslySetInnerHTML={{ __html: content }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
