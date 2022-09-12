/** @jsx h */
import { h } from 'preact';
import { MediaContentCarousel } from '../components/MediaContentCarousel/MediaContentCarousel';
import { useSharedState } from '../hooks/useSharedState';

export function MediaContentCarouselContainer() {
  const useSharedStateStore = useSharedState();
  const images = useSharedStateStore((state) => {
    return state.currentVariant.mediaContentCarousel.images;
  });

  return <MediaContentCarousel images={images} />;
}
