/** @jsx h */
import { h } from 'preact';
import './style.scss';
import Marquee from 'react-fast-marquee';
import { ReactNode } from 'react';

export type FreeShippingMarqueeProps = {
  text: string;
};

export function FreeShippingMarquee({ text }: FreeShippingMarqueeProps) {
  let index = 0;
  return (
    <div class="section section__free-shipping">
      <div class="marquee-container">
        <Marquee gradient={false} speed={50}>
          {(() => {
            let list: ReactNode[] = Array();
            for (let i = 0; i < 50; i++) {
              list.push(
                <span class="item" key={i}>
                  {text}
                </span>,
              );
            }
            return list.map((item) => item);
          })()}
        </Marquee>
      </div>
    </div>
  );
}
