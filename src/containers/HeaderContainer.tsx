/** @jsx h */
import { h } from 'preact';
import { useEffect } from 'preact/hooks';
import { ParentMobileCartUpsellsProps } from '../components/Cart/Cart';
import { Header, HeaderProps } from '../components/Header/Header';
import { MobileMenuProps } from '../components/MobileMenu/MobileMenu';
import { ValuePropsProps } from '../components/ValueProps/ValueProps';
import { useSharedState } from '../hooks/useSharedState';
import {
  loadKlaviyo,
  loadKlavioSubscribe,
} from '../third-party-scripts/klaviyo';
import { loadRecart } from '../third-party-scripts/recart';
import { loadLoox } from '../third-party-scripts/loox';
import { loadOptimonk } from '../third-party-scripts/optimonk';

export type HeaderContainerProps = {
  freeShippingMessage: HeaderProps['freeShippingMessage'];
  menuSections: MobileMenuProps['menuSections'];
  navLinks: MobileMenuProps['navLinks'];
  socials: MobileMenuProps['socials'];
  valueProps: ValuePropsProps;
  mobileCartUpsells: ParentMobileCartUpsellsProps;
};

export function HeaderContainer({
  freeShippingMessage,
  menuSections,
  navLinks,
  socials,
  valueProps,
  mobileCartUpsells,
}: HeaderContainerProps) {
  const useSharedStateStore = useSharedState();
  // TODO: This should probably be a prop, not state.
  const routeName = useSharedStateStore((state) => state.context.routeName);

  const { cart, addToCart } = useSharedStateStore((state) => ({
    cart: state.cart,
    addToCart: state.addToCart,
  }));
  const cartQuantity = useSharedStateStore((state) => state.cartQuantity);
  const initiateCheckout = useSharedStateStore(
    (state) => state.initiateCheckout,
  );
  const { setShowCart, showCart } = useSharedStateStore((state) => ({
    setShowCart: state.setShowCart,
    showCart: state.showCart,
  }));

  const { initCart } = useSharedStateStore((state) => ({
    initCart: state.initCart,
  }));

  useEffect(() => {
    initCart();
    loadRecart('5b18bf7940348200075173e6');
    loadKlaviyo('NhVDeY');
    loadKlavioSubscribe();
    loadLoox('blendjet');
    loadOptimonk();
  }, []);

  return (
    <Header
      freeShippingMessage={freeShippingMessage}
      routeName={routeName}
      quantityTotal={cartQuantity}
      cart={{ ...cart, addToCart }}
      initiateCheckout={initiateCheckout}
      menuSections={menuSections}
      navLinks={navLinks}
      socials={socials}
      valueProps={valueProps}
      mobileCartUpsells={mobileCartUpsells}
      setShowCart={setShowCart}
      showCart={showCart}
    />
  );
}
