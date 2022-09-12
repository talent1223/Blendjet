/** @jsx h */
import { h } from 'preact';
import { Image } from '../../types/image';
import './style.scss';

export type LeadershipCardProps = {
  name: string;
  title: string;
  image: Image;
  tag?: string;
  body?: string;
  favorites?: any[];
  onClick?: (ev: h.JSX.TargetedMouseEvent<HTMLDivElement>) => void;
};
export function LeadershipCard({
  name,
  title,
  image,
  tag,
  onClick,
}: LeadershipCardProps) {
  return (
    <div className="leadership__grid__entry" onClick={onClick}>
      <img
        src={image.src}
        alt={image.alt}
        className="leadership__grid__entry__img"
      />
      <div className="leadership__grid__entry__name">{name}</div>
      <div className="leadership__grid__entry__title">{title}</div>
      {tag ? <div className="leadership__grid__entry__tag">{tag}</div> : null}
    </div>
  );
}
