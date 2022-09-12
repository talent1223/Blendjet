/** @jsx h */
import { h } from 'preact';
import './style.scss';

export interface ProductReviewsProps {
  pimSyncSourceProductId: string;
}

export function ProductReviews({
  pimSyncSourceProductId,
}: ProductReviewsProps) {
  return (
    <div id="reviews" class="reviews">
      <div
        id="looxReviews"
        class="loox-reviews"
        data-product-id={atob(pimSyncSourceProductId)
          .toString()
          .split('/')
          .pop()}
      />
    </div>
  );
}
