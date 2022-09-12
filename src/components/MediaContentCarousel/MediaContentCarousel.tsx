/** @jsx h */
import { h, Fragment } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import KeenSlider, { useKeenSlider } from 'keen-slider/react';
import { ArrowLeftButton, ArrowRightButton } from '../Icons/Navigation';
import { Image } from '../../types/image';
import 'keen-slider/keen-slider.min.css';
import './style.scss';
import { cx } from '../../lib/utils';
import { sendAnalytics } from '../../data-layer/data-layer';

export interface MediaContentCarouselProps {
  images: Image[];
}

export function MediaContentCarousel({ images }: MediaContentCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [jsEnabled, setJsEnabled] = useState(false);

  const keenSliderOptions = {
    initial: currentSlide,
    loop: true,
    slideChanged(s: KeenSlider) {
      setCurrentSlide(s.details().relativeSlide);
      sendAnalytics('CHANGE_MEDIA_SLIDE', { slide: s.details().relativeSlide });
    },
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(keenSliderOptions);

  // Go to the first slide if images change
  useEffect(() => {
    slider && slider.moveToSlideRelative(0);
  }, [images[0].src]);

  // Before we do anything, remove the "no JavaScript" class
  useEffect(() => {
    setJsEnabled(true);
  }, []);

  return (
    <div class={cx('media-content__carousel', !jsEnabled && 'nojs')}>
      <div class="navigation-wrapper">
        <div ref={sliderRef} class="keen-slider">
          {images.map((image, i) => (
            <div class="keen-slider__slide" key={i}>
              <img {...image} class="media-content__carousel__img" />
            </div>
          ))}
        </div>
        {slider && images.length > 1 && (
          <Fragment>
            <ArrowLeftButton
              className="arrow arrow--left"
              onClick={() => {
                slider.prev();
              }}
            />
            <ArrowRightButton
              className="arrow arrow--right"
              onClick={() => {
                slider.next();
              }}
            />
            <div class="dots">
              {Array.from(Array(images.length).keys()).map((idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx);
                  }}
                  class={`indicator-style dot ${
                    currentSlide === idx && 'active'
                  }`}
                />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </div>
  );
}
