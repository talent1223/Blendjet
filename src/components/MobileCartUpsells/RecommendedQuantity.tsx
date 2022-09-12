/** @jsx h */
import { h } from 'preact';
import { sendAnalytics } from '../../data-layer/data-layer';
import { cx } from '../../lib/utils';

interface RecommendedQuantityProps {
  activeIndex: number | undefined;
  onChange: (value: number) => void;
  quantities: number[];
  title: string;
}
export function RecommendedQuantity({
  activeIndex,
  onChange,
  quantities,
  title,
}: RecommendedQuantityProps) {
  return (
    <div class="quantity-set">
      <div class="field-label">{title}:</div>
      <div class="tabs">
        <ul class="tab-container">
          {quantities.map((quantity, i) => (
            <li
              key={quantity}
              class={cx('tab-item', activeIndex === i && 'is-active')}>
              <a
                href="#"
                class="tab-pill"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(quantity);
                  sendAnalytics('UPSELL_RECOMMENDED_QUANTITY_CHANGE', {
                    quantity,
                  });
                }}>
                {quantity}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
