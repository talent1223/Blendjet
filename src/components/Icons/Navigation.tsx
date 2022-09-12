/** @jsx h */
import { h, ComponentChildren } from 'preact';
import './style.scss';

interface IconStyleProps {
  color?: string;
  bgColor?: string;
}

export function CaretDown() {
  return (
    <svg width="12px" height="8px" viewBox="0 0 12 8">
      <path
        fill="currentColor"
        d="M6.419 7.414l-4.95-4.95.99-.99 3.95 3.95 3.95-3.95.99.99-4.95 4.95Z"
      />
    </svg>
  );
}

export function BiChevron() {
  return (
    <svg
      class="bi-chevron"
      height="16"
      width="16"
      fill="currentColor"
      viewBox="0 0 16 16">
      <path d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
      <path d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
    </svg>
  );
}

export function ChevronLeft({
  color = '#373795',
  bgColor = '#FFFFFF',
}: IconStyleProps) {
  return (
    <svg width="29px" height="29px" viewBox="0 0 29 29">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-217.000000, -414.000000)">
          <g transform="translate(231.500000, 428.500000) scale(-1, 1) translate(-231.500000, -428.500000) translate(218.000000, 415.000000)">
            <circle
              stroke={color}
              stroke-width="1.5"
              fill={bgColor}
              cx="13.5"
              cy="13.5"
              r="13.5"></circle>
            <g
              transform="translate(14.500000, 13.000000) scale(-1, 1) translate(-14.500000, -13.000000) translate(10.000000, 6.000000)"
              fill={color}>
              <polygon
                transform="translate(4.500015, 4.499985) rotate(-45.000000) translate(-4.500015, -4.499985)"
                points="3.72753246e-05 3.59998456 8.9999936 3.59998456 8.9999936 5.39998456 3.72753246e-05 5.39998456"></polygon>
              <polygon
                transform="translate(4.500015, 9.578392) scale(1, -1) rotate(-45.000000) translate(-4.500015, -9.578392)"
                points="3.72753236e-05 8.67839206 8.9999936 8.67839206 8.9999936 10.4783921 3.72753236e-05 10.4783921"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function ChevronRight({
  color = '#373795',
  bgColor = '#FFFFFF',
}: IconStyleProps) {
  return (
    <svg width="29px" height="29px" viewBox="0 0 29 29">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g transform="translate(-1194.000000, -414.000000)">
          <g transform="translate(1195.000000, 415.000000)">
            <circle
              stroke={color}
              stroke-width="1.5"
              fill={bgColor}
              cx="13.5"
              cy="13.5"
              r="13.5"></circle>
            <g
              transform="translate(14.500000, 13.000000) scale(-1, 1) translate(-14.500000, -13.000000) translate(10.000000, 6.000000)"
              fill={color}>
              <polygon
                transform="translate(4.500015, 4.499985) rotate(-45.000000) translate(-4.500015, -4.499985)"
                points="3.72753223e-05 3.59998456 8.9999936 3.59998456 8.9999936 5.39998456 3.72753223e-05 5.39998456"></polygon>
              <polygon
                transform="translate(4.500015, 9.578392) scale(1, -1) rotate(-45.000000) translate(-4.500015, -9.578392)"
                points="3.72753221e-05 8.67839206 8.9999936 8.67839206 8.9999936 10.4783921 3.72753221e-05 10.4783921"></polygon>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

interface IconProps {
  className?: string;
  onClick?: () => void;
  textLabel?: string;
  color?: string;
  bgColor?: string;
}

interface IconButtonProps extends IconProps {
  children: ComponentChildren;
}

export function IconButton({
  children,
  className,
  onClick,
  textLabel,
}: IconButtonProps) {
  return (
    <button class={`svg-wrapper ${className}`} onClick={onClick} aria-hidden>
      {children}
      <span class="is-sr-only">{textLabel}</span>
    </button>
  );
}

export function ArrowLeftButton({
  textLabel = 'Previous',
  ...props
}: IconProps) {
  return (
    <IconButton textLabel={textLabel} {...props}>
      <ChevronLeft {...props} />
    </IconButton>
  );
}

export function ArrowRightButton({ textLabel = 'Next', ...props }: IconProps) {
  return (
    <IconButton textLabel={textLabel} {...props}>
      <ChevronRight {...props} />
    </IconButton>
  );
}
