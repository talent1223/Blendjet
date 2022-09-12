/** @jsx h */
import { h } from 'preact';
import './style.scss';

export type ProductCardProps = {
  sku: string;
  displayName?: string;
  product?: {
    title: string;
  };
  variant: {
    title?: string;
    featuredMedia: {
      src: string;
      altText: string;
    };
    availableForSale: boolean;
  };
  isVarietyPack?: boolean;
  url: string;
  gradiantColor1?: string;
  gradiantColor2?: string;
};

export function ProductCard({
  displayName,
  product,
  variant,
  url,
  gradiantColor1,
  gradiantColor2,
}: ProductCardProps) {
  return (
    <div class="card">
      <a
        href={url}
        class="card-image"
        style={getBGColor(gradiantColor1, gradiantColor2)}>
        <figure class="image">
          <img
            class="jetpack-image"
            src={variant.featuredMedia.src}
            alt={variant.featuredMedia.altText}
          />
        </figure>
      </a>
      <div class="card-content">
        <div class="content">
          <a href={url} class="title is-6 jetpack-title">
            {displayName || product?.title || variant.title}
          </a>
        </div>
      </div>
    </div>
  );
}

function getBGColor(color1?: string, color2?: string) {
  if (color1) {
    return `background-image: linear-gradient(146deg, ${color1} 8%, ${
      color2 ? color2 : color1
    } 88%)`;
  } else {
    return 'background-image: linear-gradient(146deg, #E0E0FF 8%, #E0E0FF 88%)';
  }
}
