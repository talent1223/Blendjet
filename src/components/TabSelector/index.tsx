/** @jsx h */
import { h } from 'preact';
import './style.scss';
export interface TabSelectorProps {
  activeIndex: number;
  tabLabels: string[];
  onChange: (value: number) => void;
  className?: string;
  style?: string | h.JSX.CSSProperties;
}

export function TabSelector({
  activeIndex,
  tabLabels,
  onChange,
  className = '',
  style,
}: TabSelectorProps) {
  return (
    <div class={`tabs tab-links ${className}`} style={style}>
      <ul class="tab-container">
        {tabLabels.map((label, ndx) => (
          <li
            class={ndx === activeIndex ? 'tab-item active' : 'tab-item'}
            key={ndx}
            onClick={() => onChange(ndx)}>
            <span>{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
