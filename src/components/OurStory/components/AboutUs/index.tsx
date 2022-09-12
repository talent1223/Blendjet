/** @jsx h */
import { h } from 'preact';
import './style.scss';
import { Image } from 'src/types/image';

export default function AboutUs({ image }: { image: Image }) {
  return (
    <div class="about-us-video">
      <img class="about-us-video__img" {...image} />
    </div>
  );
}
