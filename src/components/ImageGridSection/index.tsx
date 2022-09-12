/** @jsx h */
import { h } from 'preact';
import { Image } from 'src/types/image';
import './style.scss';
import { ImageGridSectionProps } from '../ImageGrid/types';

export function ImageGridSection({
  image,
  title,
  onClick,
}: ImageGridSectionProps) {
  return (
    <div className="image-grid__section" onClick={onClick}>
      <div className="image-grid__section__text">{title}</div>
      <img className="image-grid__section__img darken-image" {...image} />
    </div>
  );
}
