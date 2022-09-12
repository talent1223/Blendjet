/** @jsx h */
import { h } from 'preact';
import { sendAnalytics } from '../../data-layer/data-layer';
import { cx } from '../../lib/utils';

interface TabSelectorProps {
  activeIndex: number;
  tabLabels: string[];
  onChange: (value: string) => void;
  title: string;
}
export function TabSelector({
  activeIndex,
  tabLabels,
  onChange,
  title,
}: TabSelectorProps) {
  return (
    <div class="additional-product-selector">
      <div class="is-sr-only">{title}:</div>

      <div class="tabs tab-selector">
        <ul class="tab-container">
          {tabLabels.map((tabLabel, i) => (
            <li
              key={tabLabel}
              class={cx('tab-item', activeIndex === i && 'is-active')}>
              <a
                href="#"
                class="tab-pill"
                onClick={(e) => {
                  e.preventDefault();
                  onChange(tabLabel);
                  sendAnalytics('UPSELL_JETPACK_TYPE_CHANGE', {
                    tabLabel,
                  });
                }}>
                {tabLabel}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
