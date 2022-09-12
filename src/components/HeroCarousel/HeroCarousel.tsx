/** @jsx h */
import { h, Fragment } from 'preact';
import { useEffect, useMemo, useState } from 'preact/hooks';
import KeenSlider, { useKeenSlider } from 'keen-slider/react';
import { ArrowLeftButton, ArrowRightButton } from '../Icons/Navigation';
import type { Image } from '../../types/image';
import 'keen-slider/keen-slider.min.css';
import './style.scss';
import { cx } from '../../lib/utils';
import type { ApplicationState } from '../../hooks/useSharedState';
import { sendAnalytics } from '../../data-layer/data-layer';

export type HeroCarouselProps = {
  images: Image[];
  currentVariantIndex: number;
  initialCurrentVariantIndex: number;
  setCurrentVariantByIndex: ApplicationState['setCurrentVariantByIndex'];
};

export function HeroCarousel({
  images,
  currentVariantIndex,
  initialCurrentVariantIndex,
  setCurrentVariantByIndex,
}: HeroCarouselProps) {
  const [jsEnabled, setJsEnabled] = useState(false);

  const innerImages = useMemo(() => {
    const innerImages = [
      ...images.slice(initialCurrentVariantIndex),
      ...images.slice(0, initialCurrentVariantIndex),
    ];
    return innerImages;
  }, [images]);

  // use of 'useMemo' helps to prevent slider jank
  const keenSliderOptions = useMemo(() => {
    return {
      initial: 0,
      loop: true,
      // This fires on drag end, we use it to track swipes
      dragEnd(s: KeenSlider) {
        const slide =
          (s.details().relativeSlide + initialCurrentVariantIndex) %
          images.length;
        sendAnalytics(`SET_CURRENT_VARIANT_INDEX_SWIPE_${slide}`);
      },
      slideChanged(s: KeenSlider) {
        const slide =
          (s.details().relativeSlide + initialCurrentVariantIndex) %
          images.length;
        setCurrentVariantByIndex(slide);
      },
    };
  }, []);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(keenSliderOptions);

  // this updates the local slider when the selected variant changes in state
  useEffect(() => {
    if (!slider) return;
    const slide =
      (slider.details().absoluteSlide + initialCurrentVariantIndex) %
      images.length;
    if (currentVariantIndex !== slide) {
      slider.moveToSlide(
        (currentVariantIndex - initialCurrentVariantIndex) % images.length,
        0,
      );
    }
  }, [currentVariantIndex]);

  // Before we do anything, remove the "no JavaScript" class
  useEffect(() => {
    setJsEnabled(true);
  }, []);

  return (
    <div
      class={cx(
        'product-select__image-carousel has-bundle',
        !jsEnabled && 'nojs',
      )}>
      <div class="navigation-wrapper">
        <div ref={sliderRef} class="keen-slider">
          {innerImages.map((image, i) => (
            <div class="keen-slider__slide" key={i}>
              <img {...image} class="product-select__image-carousel__img" />
            </div>
          ))}
        </div>
        {innerImages.length > 1 && (
          <Fragment>
            <ArrowLeftButton
              className="arrow arrow--left"
              onClick={() => {
                slider.prev();
                sendAnalytics(`SET_CURRENT_VARIANT_INDEX_CLICK_PREVIOUS_ARROW`);
              }}
            />
            <ArrowRightButton
              className="arrow arrow--right"
              onClick={() => {
                slider.next();
                sendAnalytics(`SET_CURRENT_VARIANT_INDEX_CLICK_NEXT_ARROW`);
              }}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
}
