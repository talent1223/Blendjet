import { Image } from 'src/types/image';

export type ImageGridSectionProps = {
  image: Image;
  title: string;
  text: string;
  onClick?: () => void;
};
export type ImageGridProps = {
  prefix: string;
  data: ImageGridSectionProps[];
};
