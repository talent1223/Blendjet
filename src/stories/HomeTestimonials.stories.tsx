/** @jsx h */
import { h } from 'preact';
import {
  HomeTestimonial,
  HomeTestimonialProps,
} from '../components/HomeTestimonial/HomeTestimonial';
import { homeTestimonialMock } from '../mock-data/homeTestimonialMock';

const title = 'Home Testimonial';
export default {
  title,
  component: HomeTestimonial,
};

export const HomeTestimonialStory = () => {
  const storyProps: HomeTestimonialProps = homeTestimonialMock;
  return <HomeTestimonial {...storyProps} />;
};

HomeTestimonialStory.storyName = title;
