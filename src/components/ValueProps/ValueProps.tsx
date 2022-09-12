/** @jsx h */
import { h } from 'preact';
import { cx } from '../../lib/utils';
import { Image } from '../../types/image';
import './style.scss';

type Badge = Image & {
  href: string;
  style?: string;
};

export interface ValuePropsProps {
  badges: Badge[];
  spaceX?: 'md' | 'lg';
  spaceB?: 'none' | 'lg';
}

export function ValueProps({
  badges,
  spaceX = 'md',
  spaceB = 'lg',
}: ValuePropsProps) {
  return (
    <div
      class={cx(
        'value-props',
        `value-props__px-${spaceX}`,
        `value-props__pb-${spaceB}`,
      )}>
      {badges.map((badge, i) => {
        return (
          <div class="value-props__badges__img" key={i}>
            <a
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer nofollow"
              style={badge.style}>
              <img src={badge.src} alt={badge.alt} />
            </a>
          </div>
        );
      })}
    </div>
  );
}
