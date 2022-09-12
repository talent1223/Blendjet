/** @jsx h */
import './style.scss';
import { cx } from '../../lib/utils';
import { h, ComponentChildren } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import KeenSlider, { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeftButton, ArrowRightButton } from '../Icons/Navigation';

export interface ProductSliderProps {
  maxSlidePerPage?: number;
  screenWidth: number;
  total: number;
  showBottomArrowsMobile?: boolean;
  showDots?: boolean;
  autoplay?: boolean;
  autoplayTimeout?: number;
  isProgressWhite?: boolean;
}

interface SliderProps extends ProductSliderProps {
  children: ComponentChildren;
}

export function ProductSlider({
  children,
  maxSlidePerPage,
  screenWidth,
  total,
  showBottomArrowsMobile = true,
  showDots = false,
  autoplay = false,
  autoplayTimeout = 3000,
  isProgressWhite = false,
}: SliderProps) {
  let slidesPerView: number = 1;
  if (screenWidth <= 1024) {
    slidesPerView = 1;
  } else if (screenWidth > 1400) {
    slidesPerView = 4;
  } else if (screenWidth > 1024) {
    slidesPerView = 3;
  }
  if (maxSlidePerPage && maxSlidePerPage < slidesPerView) {
    slidesPerView = maxSlidePerPage;
  }

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const keenSliderOptions = {
    initial: 0,
    slidesPerView,
    loop: slidesPerView === total ? false : true,
    slideChanged(s: KeenSlider) {
      setCurrentSlide(s.details().relativeSlide);
    },
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(keenSliderOptions);

  if (autoplay) {
    useEffect(() => {
      const interval = setInterval(() => {
        slider.moveToSlide(currentSlide + 1);
      }, autoplayTimeout);
      return () => clearInterval(interval);
    });
  }

  return (
    <div class="product-slider">
      <div ref={sliderRef} class="blendjet-carousel keen-slider">
        {children}
        {slidesPerView < total && (
          <div class="slider-arrow-left" onClick={() => slider.prev()}>
            {isProgressWhite ? (
              <ArrowLeftButton color="#fff" bgColor="transparent" />
            ) : (
              <ArrowLeftButton />
            )}
          </div>
        )}
        {slidesPerView < total && (
          <div
            class="slider-arrow-right"
            onClick={() => {
              console.log(currentSlide);
              if (currentSlide + slidesPerView >= total) {
                // max reached
                // reset currentSlide and Slider
                slider.moveToSlide(0);
              } else {
                slider.next();
              }
            }}>
            {isProgressWhite ? (
              <ArrowRightButton color="#fff" bgColor="transparent" />
            ) : (
              <ArrowRightButton />
            )}
          </div>
        )}
      </div>

      {slider && showBottomArrowsMobile && (
        <div class="carousel-indicator-container">
          <div class="carousel-indicator">
            <div class="carousel-indicator__left" onClick={() => slider.prev()}>
              {isProgressWhite ? (
                <ArrowLeftButton color="#fff" bgColor="transparent" />
              ) : (
                <ArrowLeftButton />
              )}
            </div>
            <progress
              class={cx('progress is-small', isProgressWhite && 'white')}
              value={currentSlide + slidesPerView}
              max={total}>
              Product {currentSlide + slidesPerView} of {total}
            </progress>
            <div
              class="carousel-indicator__right"
              onClick={() => {
                if (currentSlide + slidesPerView > total) {
                  // max reached
                  // reset currentSlide and Slider
                  slider.moveToSlide(0);
                } else {
                  slider.next();
                }
              }}>
              {isProgressWhite ? (
                <ArrowRightButton color="#fff" bgColor="transparent" />
              ) : (
                <ArrowRightButton />
              )}
            </div>
          </div>
        </div>
      )}
      {slider && showDots && (
        <div className="dots">
          {[...Array(total).keys()].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  slider.moveToSlide(idx);
                }}
                className={
                  'dot' + (currentSlide === idx ? ' active' : '')
                }></button>
            );
          })}
        </div>
      )}
    </div>
  );
}
