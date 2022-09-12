/** @jsx h */
import { h } from 'preact';
import './style.scss';

export interface BannerProps {
  content: string;
}

export function Banner({ content }: BannerProps) {
  return (
    <div class="blendjet-banner">
      <div
        class="blendjet-banner__content-block"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
