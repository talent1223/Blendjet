/** @jsx h */
import { ComponentChildren, Fragment, h } from 'preact';
import { useState } from 'preact/hooks';

export interface SelectorModalProps {
  video: {
    src: string;
  };
  show: boolean;
  onClose: () => void;
  children: ComponentChildren;
}

export function SelectorModal({
  show,
  onClose,
  video,
  children,
}: SelectorModalProps) {
  const [videoLoaded, setVideoLoaded] = useState<boolean>(false);

  if (show) {
    return (
      <div class="variant-select-container">
        {/* First, always render a video with a Close button */}
        <div class="media-tile__media variety-bundle-item-video">
          <div class="close-container" onClick={onClose}>
            <CloseIcon />
          </div>
          <span class="media-tile__media__video bundle-item-video">
            {videoLoaded || (
              <div class="loading-video height">
                <div class="loader" />
              </div>
            )}
            <video
              class={`${videoLoaded ? '' : 'loading'}`}
              onLoadedData={() => {
                setVideoLoaded(true);
              }}
              src={video.src}
              type="video/mp4"
              autoPlay
              loop
              muted
              webkit-playsinline
              playsInline
            />
          </span>
        </div>

        {/* Then render any children */}
        {children}

        {/* Last an overlay */}
        <div class="bundle-overlay" onClick={onClose} />
      </div>
    );
  }
  return null;
}

function CloseIcon() {
  return (
    <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g
          transform="translate(-894.000000, -318.000000)"
          fill="#FFFFFF"
          stroke="#FFFFFF">
          <g transform="translate(895.000000, 319.000000)">
            <path d="M11.52,3.16191517e-13 L12,0.48 L6.479,6 L12,11.52 L11.52,12 L5.999,6.48 L0.48,12 L-5.45410939e-13,11.52 L5.52,6 L-3.28403971e-13,0.48 L0.48,7.46472328e-13 L5.999,5.52 L11.52,3.16191517e-13 Z"></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
