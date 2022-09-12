/** @jsx h */
import { h } from 'preact';
import { ProductRating } from '../ProductSelect/ProductRating';
import './style.scss';
export interface ProductSummaryProps {
  title: string;
  category: string;
  rating: number;
  raters: number;
  className?: string;
  style?: string | h.JSX.CSSProperties;
}

export function ProductSummary({
  title,
  category,
  rating,
  raters,
  className = '',
  style,
}: ProductSummaryProps) {
  return (
    <div className={`${className}`} style={style}>
      <div class="product-summary__controls__title jetpack">{title}</div>
      <div class="product-summary__controls__category">
        <h1>{category}</h1>
      </div>
      <div class="product-summary__controls__rating">
        <ProductRating rating={rating} raters={raters} />
      </div>
    </div>
  );
}
