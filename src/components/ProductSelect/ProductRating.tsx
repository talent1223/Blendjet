/** @jsx h */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

/**
 * Returns an array of strings indicating the stars for a given rating, e.g.
 * ['full', 'full', 'full', 'half', 'empty']
 */
type StarType = 'full' | 'half' | 'empty';
function getStars(rating: number): StarType[] {
  const rounded = Math.ceil(2 * rating) / 2;
  const stars: StarType[] = [];
  for (let i = 1; i <= 5; i++) {
    const x = i <= rounded ? 'full' : i <= rounded + 0.5 ? 'half' : 'empty';
    stars.push(x);
  }
  return stars;
}

export interface ProductRatingProps {
  rating: number;
  raters: number;
  size?: 'sm' | 'md' | 'lg';
}

export function ProductRating({
  rating,
  raters,
  size = 'sm',
}: ProductRatingProps) {
  const starArray = getStars(rating);

  return (
    <div class="product-rating">
      <div class="stars">
        {starArray.map((type, i) => (
          <RatingStar key={i} type={type} size={size} />
        ))}
      </div>
      <div class={`raters lg`}>
        <span aria-hidden="true" class="raters-text">
          ({raters.toLocaleString()})
        </span>
        <p class="is-sr-only">
          Product Rating: {rating}, with {raters} reviews.
        </p>
      </div>
    </div>
  );
}

interface RatingStarProps {
  type: 'full' | 'half' | 'empty';
  size: 'sm' | 'md' | 'lg';
}

export function RatingStar({ type, size }: RatingStarProps) {
  return (
    <svg
      class={`rating-star ${size}`}
      width="16"
      height="16"
      viewBox="0 0 100 100"
      aria-hidden="true">
      {type === 'half' && (
        <path
          fill="currentcolor"
          d="M51 7l0 69.21-27.17 14.1 4.92-30.3-21.93-21.54 30.72-4.44Z"
        />
      )}
      <path
        stroke="currentcolor"
        stroke-width="7"
        fill={type === 'full' ? 'currentcolor' : 'none'}
        stroke-linejoin="round"
        d="M50 7l13.76 26.59 30.56 5.06-21.58 21.25 4.68 30.63-27.38-14.32
        -27.17 14.1 4.92-30.3-21.93-21.54 30.72-4.44Z"
      />
    </svg>
  );
}
