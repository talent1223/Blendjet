import { HeaderProps } from '../components/Header/Header';
import { CartState } from '../hooks/useSharedState';
import { cartMock } from './cart';
import { mobileMenuMock } from './mobileMenu';
import { valuePropsMock } from './valueProps';

export const headerMock: Omit<
  HeaderProps,
  'showCart' | 'setShowCart' | 'mobileCartUpsells' | 'cart'
> & { cart: CartState } = {
  freeShippingMessage: 'Free Express Shipping',
  routeName: '/products/exciting-new-product',
  quantityTotal: 3,
  menuSections: mobileMenuMock.menuSections,
  navLinks: mobileMenuMock.navLinks,
  socials: mobileMenuMock.socials,
  cart: cartMock,
  valueProps: valuePropsMock,
  initiateCheckout: cartMock.initiateCheckout,
};
