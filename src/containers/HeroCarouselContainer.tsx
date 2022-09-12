/** @jsx h */
import { h } from 'preact';
import { HeroCarousel } from '../components/HeroCarousel/HeroCarousel';
import { useSharedState } from '../hooks/useSharedState';

export function HeroCarouselContainer() {
  const useSharedStateStore = useSharedState();

  const {
    images,
    currentVariantIndex,
    initialCurrentVariantIndex,
    setCurrentVariantByIndex,
  } = useSharedStateStore((state) => ({
    initialCurrentVariantIndex: state.initialCurrentVariantIndex,
    images: state.variants.map((variant) => variant.image),
    currentVariantIndex: state.currentVariantIndex,
    setCurrentVariantByIndex: state.setCurrentVariantByIndex,
  }));
  const heroCarouselState = {
    images,
    currentVariantIndex,
    initialCurrentVariantIndex,
    setCurrentVariantByIndex,
  };

  return <HeroCarousel {...heroCarouselState} />;
}
