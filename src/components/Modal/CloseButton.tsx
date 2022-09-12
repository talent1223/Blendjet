/** @jsx h */
import { h } from 'preact';
import { cx } from '../../lib/utils';

interface CloseButtonProps {
  position?: 'top-left' | 'top-right' | null;
  onClick: () => void;
}

export function CloseButton({
  onClick,
  position = 'top-right',
}: CloseButtonProps) {
  return (
    <button class={cx('close-button', position)} onClick={onClick}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="#373795">
        <path
          d="M12.5.27l1.225 1.225-5.5 5.5 5.5 5.5-1.225 1.225-5.5-5.5-5.5
          5.5-1.225-1.225 5.5-5.5-5.5-5.5 1.225-1.225 5.5 5.5Z"
        />
      </svg>
      <span class="is-sr-only">Close</span>
    </button>
  );
}
