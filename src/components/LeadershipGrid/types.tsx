import { Image } from '../../types/image';

export interface FavoriteItem {
  category: string;
  link: string;
  image: string;
  name: string;
}

export interface ModalData {
  image: Image;
  name: string;
  title: string;
  tag?: string;
  favorites?: FavoriteItem[];
  body?: string;
}
