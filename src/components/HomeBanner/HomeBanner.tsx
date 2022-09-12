/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { cx } from '../../lib/utils';

export type HomeBannerProps = {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonLink: string;
  videoObj: {
    src: string;
  };
};

export function HomeBanner({
  title,
  subtitle,
  buttonText,
  buttonLink,
  videoObj,
}: HomeBannerProps) {
  return (
    <div class="section section__hero-banner">
      <div class="section__hero-banner__cta">
        <div class="section__hero-banner__cta__text">
          <div class="section__hero-banner__cta__text__line1">{title}</div>
          <div class="section__hero-banner__cta__text__line2">{subtitle}</div>
        </div>
        <a
          href={buttonLink}
          class="section__hero-banner__cta__button"
          role="button">
          {buttonText}
        </a>
      </div>
      <div class="section__hero-banner__media">
        <div class="section__hero-banner__media__desktop">
          <video
            class="section__hero-banner__media__desktop__video"
            autoPlay={true}
            loop={true}
            webkit-playsinline=""
            playsInline={true}>
            <source src={videoObj?.src} type="video/mp4" />
          </video>
        </div>
        <div class="section__hero-banner__media__mobile">
          <video
            class="section__hero-banner__media__mobile__video"
            autoPlay={true}
            loop={true}
            webkit-playsinline=""
            playsInline={true}>
            <source src={videoObj?.src} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
}
