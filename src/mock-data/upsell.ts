import { UpsellItem } from '../components/MobileCartUpsells/CartUpsellsItem';
import { ParentMobileCartUpsellsProps } from '../components/Cart/Cart';
import { colorOrderMock } from './colorOrder';
import api from '../../outsmartly/content-sources/api.json';

const upsellAPI = api['blendjet-2'].mobileCartUpsells;

export const upsellItemsMock: UpsellItem[] = upsellAPI.items as UpsellItem[];

export const upsellsMock: ParentMobileCartUpsellsProps = {
  title: upsellAPI.title,
  items: upsellItemsMock,
  colorOrder: colorOrderMock,
};
