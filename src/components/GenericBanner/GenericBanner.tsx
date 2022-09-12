/** @jsx h */
import { h } from 'preact';
import './style.scss';

export interface GenericBannerProps {
  type: string;
  content: string;
}

export function GenericBanner({ type, content }: GenericBannerProps) {
  return (
    <div class={`${type}-banner`}>
      <div
        class={`${type}-banner__content-block`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
