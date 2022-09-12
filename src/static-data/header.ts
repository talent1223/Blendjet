import { HeaderContainerProps } from '../containers/HeaderContainer';
import { mobileMenuData } from './mobileMenu';
import { valuePropsData } from './valueProps';

export const headerData: Omit<HeaderContainerProps, 'mobileCartUpsells'> = {
  freeShippingMessage: 'Free Express Shipping',
  menuSections: mobileMenuData.menuSections,
  navLinks: mobileMenuData.navLinks,
  socials: mobileMenuData.socials,
  valueProps: valuePropsData,
};
