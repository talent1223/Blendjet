/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { ProductSlider } from '../ProductSlider/ProductSlider';

interface Testimonial {
  text: string;
  author: string;
}

export type HomeTestimonialProps = {
  screenWidth: number;
  title: string;
  maxSlidePerPage: number;
  testimonials: Testimonial[];
};

export function HomeTestimonial({
  title,
  screenWidth,
  maxSlidePerPage,
  testimonials,
}: HomeTestimonialProps) {
  return (
    <div class="testimonials-container">
      <div class="testimonials-carousel">
        <div class="testimonials-subheading">{title}</div>
        <div class="testimonials-carousel-container">
          <ProductSlider
            total={testimonials.length}
            screenWidth={screenWidth}
            maxSlidePerPage={maxSlidePerPage}
            showBottomArrowsMobile={false}
            showDots={true}
            autoplay={true}>
            {testimonials.map((testimonial, i) => {
              return (
                <div class="keen-slider__slide key={i}">
                  <section class="hero is-medium">
                    <div class="has-text-centered testimonial-card">
                      <div class="text">{testimonial.text}</div>
                      <div class="author">-{testimonial.author}</div>
                    </div>
                  </section>
                </div>
              );
            })}
          </ProductSlider>
        </div>
      </div>
    </div>
  );
}
