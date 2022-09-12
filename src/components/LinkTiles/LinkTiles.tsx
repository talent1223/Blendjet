/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductSlider } from '../ProductSlider/ProductSlider';
export type LinkTilesProps = {
  title: string;
  products: {
    title: string;
    image: {
      src: string;
      alt: string;
    };
    url: string;
  }[];
  maxSlidePerPage: number;
  screenWidth: number;
  backgroundColor: string;
  textColor: string;
  country: string;
  displayCountries: string[];
};

export function LinkTiles({
  title,
  products,
  screenWidth,
  maxSlidePerPage,
  backgroundColor,
  textColor,
  country,
  displayCountries,
}: LinkTilesProps) {
  if (!displayCountries?.length || displayCountries?.includes(country)) {
    return (
      <div
        class="link-tile-grid"
        style={{
          '--color': textColor,
          '--bgcolor': backgroundColor || '#fff',
        }}>
        <div class="link-tile-grid__container">
          <h2 class="link-tile-grid__title">{title}</h2>
          <div class="link-tile-grid__carousel">
            <ProductSlider
              total={products.length}
              screenWidth={screenWidth}
              maxSlidePerPage={maxSlidePerPage}
              isProgressWhite={true}>
              {products.map((product, i) => {
                return (
                  <div class="keen-slider__slide">
                    <div class="link-tile" style={{ '--bgcolor': '#fff' }}>
                      <a href={product.url}>
                        <picture>
                          <img
                            src={product.image.src}
                            alt={product.image.alt}
                          />
                        </picture>
                        <h3>{product.title}</h3>
                      </a>
                    </div>
                  </div>
                );
              })}
            </ProductSlider>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
