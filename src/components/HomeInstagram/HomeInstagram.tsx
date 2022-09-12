/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductSlider } from '../ProductSlider/ProductSlider';

interface InstagramImages {
  id: string;
  media_url: string;
  caption: string;
  permalink: string;
}

export type HomeInstagramProps = {
  subtitle: string;
  description: string;
  hashTag: string;
  buttonText: string;
  buttonLink: string;
  instagramHandle: string;
  instagramURL: string;
  images: InstagramImages[];
  screenWidth: number;
};

export function HomeInstagram({
  subtitle,
  instagramHandle,
  instagramURL,
  description,
  hashTag,
  buttonText,
  buttonLink,
  images,
  screenWidth,
}: HomeInstagramProps) {
  return (
    <div class="instagram-container">
      <div class="instagram-text-block">
        <div class="instagram-text-block__title">
          <a href={instagramURL} class="title-click" target="_blank">
            {instagramHandle}
            <div class="instagram-text-block__icon-container">
              <img
                src="https://cdn.shopify.com/s/files/1/0066/4433/4658/files/fb_verified_icon_6d38bcd0-60bf-4a6e-9271-e453e8b002ae.jpg?v=1645532318"
                class="instagram-text-block__icon"
              />
            </div>
          </a>
        </div>
        <div class="instagram-text-block__on-instagram">{subtitle}</div>
        <div class="instagram-text-block__content">
          {description}
          <div class="instagram-text-block__hastag">{hashTag}</div>
        </div>
        <div class="instagram-text-block__follow">
          <a rel="nofollow" target="_blank" href={buttonLink}>
            <button role="button" class="instagram-text-block__follow__button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="16"
                viewBox="0 0 15 16">
                <path
                  fill="#373795"
                  d="M10.509 15.01c1.192-.057 2.248-.33 3.118-1.203.87-.87 1.142-1.925 1.201-3.117.07-1.229.07-4.908 0-6.136-.056-1.192-.328-2.248-1.201-3.118C12.757.566 11.7.294 10.509.234c-1.229-.07-4.911-.07-6.14 0C3.182.29 2.126.563 1.253 1.433.379 2.303.11 3.358.05 4.55c-.07 1.229-.07 4.911 0 6.14.056 1.192.329 2.248 1.202 3.117.873.87 1.926 1.143 3.118 1.202 1.228.07 4.91.07 6.139 0zm-2.851-1.288H7.44c-1.083 0-3.41.085-4.386-.3-.651-.259-1.152-.76-1.415-1.414-.388-.98-.299-3.304-.299-4.386 0-1.083-.086-3.41.3-4.386.258-.651.76-1.153 1.414-1.415.98-.388 3.303-.299 4.386-.299 1.082 0 3.41-.086 4.386.3.65.258 1.152.76 1.414 1.414.389.98.3 3.303.3 4.386 0 1.082.089 3.41-.3 4.386-.259.65-.76 1.152-1.414 1.414-.918.364-3.018.308-4.17.3zm3.754-9.182c.491 0 .89-.395.89-.89 0-.49-.399-.89-.89-.89-.492 0-.89.4-.89.89 0 .492.395.89.89.89zM7.44 11.437c2.112 0 3.815-1.704 3.815-3.815 0-2.112-1.703-3.815-3.815-3.815S3.626 5.51 3.626 7.622c0 2.111 1.703 3.815 3.815 3.815zm0-1.335c-1.365 0-2.48-1.112-2.48-2.48 0-1.368 1.112-2.48 2.48-2.48 1.368 0 2.48 1.112 2.48 2.48 0 1.368-1.116 2.48-2.48 2.48z"
                />
              </svg>
              <div class="instagram-text-block__follow__button__text">
                {buttonText}
              </div>
            </button>
          </a>
        </div>
      </div>
      <div class="instagram-carousel">
        <ProductSlider
          total={images.length}
          screenWidth={screenWidth}
          showBottomArrowsMobile={false}>
          {images.map((item) => {
            return (
              <div class="keen-slider__slide" key={item.id}>
                <a
                  href={item.permalink}
                  class="card-image-insta"
                  target="_blank">
                  <img src={item.media_url} alt={item.caption} />
                </a>
              </div>
            );
          })}
        </ProductSlider>
      </div>
    </div>
  );
}
