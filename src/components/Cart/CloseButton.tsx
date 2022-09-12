/** @jsx h */
import { h } from 'preact';

export function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <div class="close" onClick={onClick}>
      <div class="close-container">
        <svg width="14px" height="14px" viewBox="0 0 14 14">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g
              transform="translate(-894.000000, -318.000000)"
              fill="currentColor"
              stroke="currentColor">
              <g transform="translate(895.000000, 319.000000)">
                <path d="M11.52,3.16191517e-13 L12,0.48 L6.479,6 L12,11.52 L11.52,12 L5.999,6.48 L0.48,12 L-5.45410939e-13,11.52 L5.52,6 L-3.28403971e-13,0.48 L0.48,7.46472328e-13 L5.999,5.52 L11.52,3.16191517e-13 Z"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}
