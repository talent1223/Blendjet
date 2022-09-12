/** @jsx h */
import { h } from 'preact';
import { sendAnalytics } from '../../data-layer/data-layer';
import { Image } from '../../types/image';
import './style.scss';

type MediaTypes = 'video' | 'image';

type DetailSection = {
  heading: string;
  text: string;
  media: {
    src: string;
    type: 'video' | 'image';
    alt?: string;
  };
};

function renderMedia(
  src: string,
  mediaType: MediaTypes,
  lazyVideos: boolean,
  alt?: string,
) {
  if (mediaType === 'video') {
    return (
      <video
        autoPlay
        loop
        muted
        webkit-playsInline
        playsInline
        class={`media-tile__media__video${lazyVideos ? ' lazy' : ''}`}
        width="400"
        height="400"
        onLoad={() => {
          sendAnalytics('PRODUCT_DETAIL_VIDEO_LOADED', { src });
        }}
        // TODO: do we want to have placeholders for lazy loading?
        // poster=""
      >
        {lazyVideos ? (
          <source data-src={src} type="video/mp4" />
        ) : (
          <source src={src} type="video/mp4" />
        )}
      </video>
    );
  } else if (mediaType === 'image') {
    return (
      <img
        src={src}
        class="media-tile__media__image"
        alt={alt}
        loading="lazy"
      />
    );
  } else {
    return null;
  }
}

// The following is hardcoded in the Vue templates. I've converted
// it to a list for if we want to API-fy it.
const blendjet2Specifications: string[] = [
  'Compact Size: 9” x 3” (230mm x 76mm)',
  'Product Weight: 1.34 lb (.61 kg)',
  'Jar w/ Measurement Markings: 16 oz (475 mL)',
  '15+ Blends Per 1 Hour Charge',
  'Water-resistant USB-C Port',
  '4000 mAh Rechargeable Battery',
  '5V Electric Motor Spins 275 Times Per Second',
  '6-Point Stainless Steel Blade',
  'Durable Built-In Carrying Strap',
];

export type ProductDetailsProps = {
  image?: Image;
  sections: DetailSection[];
  productSpecifications?: string[];
  lazyVideos?: boolean;
};

export function ProductDetails({
  image,
  sections,
  productSpecifications = blendjet2Specifications,
  lazyVideos = false,
}: ProductDetailsProps) {
  return (
    <div class="media-content__main__details">
      {sections.map((section, i) => (
        <div
          class="media-tile media-content__main__details__content-block"
          key={i}>
          <div class="media-tile__header">{section.heading}</div>
          <div
            class="media-tile__text"
            dangerouslySetInnerHTML={{ __html: section.text }}
          />
          <div class="media-tile__media">
            {renderMedia(
              section.media.src,
              section.media.type,
              lazyVideos,
              section.media.alt,
            )}
          </div>
        </div>
      ))}
      {image ? (
        <div class="media-content__main__details__content-block">
          <div class="media-content__main__details__specs__heading">
            Details &amp; specs
          </div>
          <div class="media-content__main__details__specs__text">
            Blend your favorite smoothies, shakes, margaritas, and more without
            the limitations of a regular blender - whenever, wherever you want!
          </div>
          <div class="media-content__main__details__content-block__image">
            <img
              class="media-content__main__details__content-block__img"
              style="margin-bottom: 35px;"
              src={image.src}
              alt={image.alt}
            />
          </div>
          <div class="media-content__main__details__specs__list">
            <ul>
              {productSpecifications.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
