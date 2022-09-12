import { Image } from 'src/types/image';

export interface OurJourneyProps {
  data: OurJourneyItemProps[];
}

export interface OurJourneyItemProps {
  image?: Image;
  heading: string;
  content: string;
  style?: string;
  textStyle?: string;
  direction?: string;
  background?: string;
}
