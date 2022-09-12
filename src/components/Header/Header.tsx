/** @jsx h */
import { h } from 'preact';
import { useState } from 'preact/hooks';
import { Drawer } from '../Modal/Drawer';
import { TopBar } from '../TopBar/TopBar';
import { MainNav } from '../MainNav/MainNav';
import { MobileMenu, MobileMenuProps } from '../MobileMenu/MobileMenu';
import { Cart, CartProps, ParentMobileCartUpsellsProps } from '../Cart/Cart';
import './style.scss';
import { ValuePropsProps } from '../ValueProps/ValueProps';
import { ApplicationState, CartState } from '../../hooks/useSharedState';
import { sendAnalytics } from '../../data-layer/data-layer';

export type HeaderProps = {
  freeShippingMessage: string;
  routeName: string;
  quantityTotal: number;
  menuSections: MobileMenuProps['menuSections'];
  navLinks: MobileMenuProps['navLinks'];
  socials: MobileMenuProps['socials'];
  valueProps: ValuePropsProps;
  cart: CartState & { addToCart: CartProps['addToCart'] };
  initiateCheckout: ApplicationState['initiateCheckout'];
  showCart: boolean;
  setShowCart: (show: boolean) => void;
  mobileCartUpsells: ParentMobileCartUpsellsProps;
};

export function Header({
  freeShippingMessage,
  routeName,
  quantityTotal,
  menuSections,
  navLinks,
  socials,
  valueProps,
  cart,
  initiateCheckout,
  showCart,
  setShowCart,
  mobileCartUpsells,
}: HeaderProps) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <header class="global-header">
      <TopBar freeShippingMessage={freeShippingMessage} />
      <MainNav
        routeName={routeName}
        quantityTotal={quantityTotal}
        onMenuIconClick={() => {
          setShowMenu(true);
          sendAnalytics('SET_SHOW_MENU');
        }}
        onCartIconClick={() => setShowCart(true)}
      />
      <Drawer show={showMenu} width={'95vw'} onClose={() => setShowMenu(false)}>
        <MobileMenu
          menuSections={menuSections}
          navLinks={navLinks}
          onClose={() => setShowMenu(false)}
          socials={socials}
        />
      </Drawer>
      <Drawer
        show={showCart}
        curtainClose={false}
        width={'auto'}
        alignment="right"
        onClose={() => setShowCart(false)}>
        <Cart
          {...cart}
          freeShippingMessage={freeShippingMessage}
          valueProps={valueProps}
          initiateCheckout={initiateCheckout}
          onClose={() => setShowCart(false)}
          mobileCartUpsells={mobileCartUpsells}
        />
      </Drawer>
    </header>
  );
}
