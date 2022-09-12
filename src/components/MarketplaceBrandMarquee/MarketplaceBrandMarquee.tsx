/** @jsx h */
import { h } from 'preact';
import './style.scss';
import Marquee from 'react-fast-marquee';

export type MarketplaceBrandMarqueeProps = {
  title?: string;
  reversed: Boolean;
  images: {
    src: string;
    altText: string;
  }[];
  background: string;
  textColor: string;
  country: string;
  displayCountries?: string[];
};

export function MarketplaceBrandMarquee({
  title,
  reversed,
  images,
  background,
  textColor,
  country,
  displayCountries,
}: MarketplaceBrandMarqueeProps) {
  if (!displayCountries?.length || displayCountries?.includes(country)) {
    return (
      <div
        class="scrolling-marquee"
        style={{ '--bg': background, '--color': textColor }}>
        {title && <h2 class="scrolling-marquee__title">{title}</h2>}
        <Marquee gradient={false} direction={reversed ? 'left' : 'right'}>
          {images.map((img, i) => {
            return (
              <span class="scrolling-marquee__image" key={i}>
                <img src={img.src} alt={img.altText} />
              </span>
            );
          })}
          {images.map((img, i) => {
            return (
              <span class="scrolling-marquee__image" key={i}>
                <img src={img.src} alt={img.altText} />
              </span>
            );
          })}
        </Marquee>
      </div>
    );
  } else {
    return null;
  }
}
