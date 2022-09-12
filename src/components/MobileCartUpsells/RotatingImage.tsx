/** @jsx h */
import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Image } from '../../types/image';

export interface RotatingImageProps {
  imagesToRotate: Image[];
  duration?: number;
  size?: {
    width: number;
    height: number;
  };
}

export function RotatingImage({
  imagesToRotate,
  duration = 1000,
  size = {
    width: 150,
    height: 150,
  },
}: RotatingImageProps) {
  const [imageIndex, setImageIndex] = useState<number>(0);

  // Set up to rotate the images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((imageIndex + 1) % imagesToRotate.length);
    }, duration);
    return () => clearInterval(interval);
  });

  // Reset to 0 when image array changes
  useEffect(() => {
    setImageIndex(0);
  }, [imagesToRotate]);

  // Make sure we never get an index that is too high
  const index = Math.min(imageIndex, imagesToRotate.length);

  return (
    <img
      src={imagesToRotate[index].src}
      alt={imagesToRotate[index].alt}
      width={size.width}
      height={size.height}
    />
  );
}
