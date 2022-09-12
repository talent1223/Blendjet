/** @jsx h */
/* eslint-disable react/prop-types */
import { h } from 'preact';
import { cx } from '../../lib/utils';
import { BlendJetLogo } from './BlendJetLogo';
import { CartIconButton } from './CartIconButton';
import { SearchIcon } from './SearchIcon';
import './style.scss';

export interface MainNavProps {
  routeName: string;
  quantityTotal: number;
  onMenuIconClick: () => void;
  onCartIconClick: () => void;
}

export function MainNav({
  routeName,
  quantityTotal,
  onMenuIconClick,
  onCartIconClick,
}: MainNavProps) {
  return (
    <nav class="main-nav" aria-label="Main">
      <div class="main-nav-left">
        <div class="main-nav-burger">
          <button
            role="button"
            class="burger nacelle"
            aria-label="menu"
            onClick={onMenuIconClick}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
      </div>

      <div class="main-nav-center">
        <div class="bln-logo">
          <a href="/">
            <BlendJetLogo isHome={routeName === 'index'} />
          </a>
        </div>
      </div>

      <div class="main-nav-right">
        <a
          href="/search"
          class={cx(
            'nav-item',
            'nav-item__search',
            routeName === 'index' && 'home',
          )}>
          <SearchIcon />
        </a>

        <div class="nav-item nav-item__cart">
          <CartIconButton
            quantityTotal={quantityTotal}
            routeName={routeName}
            onClick={onCartIconClick}
          />
        </div>
      </div>
    </nav>
  );
}
