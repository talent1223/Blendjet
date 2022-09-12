/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductCard, ProductCardProps } from '../ProductSlider/ProductCard';
import { ProductSlider } from '../ProductSlider/ProductSlider';
import { useState, useEffect } from 'preact/hooks';
export type HomeMarketplaceProps = {
  title: string;
  products: ProductCardProps[];
  screenWidth: number;
};

export function HomeMarketplace({
  title,
  products,
  screenWidth,
}: HomeMarketplaceProps) {
  const [imageIndex, setImageIndex] = useState<number>(1);
  // Set up to rotate the smoothie product images

  useEffect(() => {
    const interval = setInterval(() => {
      let newIndex = (imageIndex + 1) % products.length;
      if (newIndex === 0) {
        newIndex++;
      }
      setImageIndex(newIndex);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div class="home-jetsetter">
      <div class="title-container">
        <div class="jetsetter-title">{title}</div>
      </div>
      <ProductSlider total={products.length} screenWidth={screenWidth}>
        {products.map((item, i) => {
          if (item.sku === 'variety-pack') {
            return (
              <div class="keen-slider__slide">
                {products.map((newItem, index) => {
                  if (newItem.sku !== 'variety-pack') {
                    return (
                      <div
                        style={`display: ${
                          imageIndex === index ? 'block' : 'none'
                        }`}>
                        <ProductCard
                          key={i}
                          {...newItem}
                          displayName={item.displayName}
                        />
                      </div>
                    );
                  }
                })}
              </div>
            );
          } else {
            return (
              <div class="keen-slider__slide">
                <div>
                  <ProductCard key={i} {...item} />
                </div>
              </div>
            );
          }
        })}
      </ProductSlider>
    </div>
  );
}
