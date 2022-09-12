/** @jsx h */
import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import {
  JetpackCrossSellItem,
  JetpackCrossSellItemProps,
} from './JetpackCrossSellItem';
import { CrossSellProduct, CrossSellVariant } from './RelatedProducts';
import KeenSlider, { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ArrowLeftButton, ArrowRightButton } from '../Icons/Navigation';
import { ApplicationState } from '../../hooks/useSharedState';

export interface JetpackCrossSellProps {
  item: CrossSellProduct;
  heading?: string;
  handle: string;
  category: string;
  rating: number;
  raters: number;
  variants: CrossSellVariant[];
  currency: ApplicationState['context']['currency'];
  addToCart: JetpackCrossSellItemProps['addToCart'];
}

export function JetpackCrossSell({
  item,
  heading,
  handle,
  rating,
  raters,
  variants,
  currency,
  addToCart,
}: JetpackCrossSellProps) {
  const [width, setWidth] = useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState<number>(0);

  let slidesPerView = 4;
  if (window.innerWidth < 1024) {
    slidesPerView = 1;
  } else if (window.innerWidth >= 1024 && window.innerWidth < 1400) {
    slidesPerView = 3;
  }

  const keenSliderOptions = {
    initial: currentSlide,
    loop: true,
    slidesPerView: slidesPerView,
    slideChanged(s: KeenSlider) {
      setCurrentSlide(s.details().relativeSlide);
    },
  };

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>(keenSliderOptions);

  return (
    <div class="jetpacks">
      <div class="jetpack-cross-sell-container">
        {heading && (
          <div class="heading-container">
            <div class="heading-container__heading">{heading}</div>
          </div>
        )}
        <div ref={sliderRef} class="blendjet-carousel keen-slider">
          {variants.map((variant, i) => (
            <div class="keen-slider__slide">
              <JetpackCrossSellItem
                key={i}
                item={item}
                handle={handle}
                rating={rating}
                raters={raters}
                variant={variant}
                currency={currency}
                addToCart={addToCart}
              />
            </div>
          ))}
        </div>

        {slider && (
          <div class="carousel-indicator-container">
            <div class="carousel-indicator">
              <div class="carousel-indicator__left">
                <ArrowLeftButton onClick={() => slider.prev()} />
              </div>
              <progress
                class="progress is-small"
                value={currentSlide + 1}
                max={variants.length}>
                Product {currentSlide + 1} of {variants.length}
              </progress>
              <div class="carousel-indicator__right">
                <ArrowRightButton onClick={() => slider.next()} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
