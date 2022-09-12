/** @jsx h */
import { h } from 'preact';
import './style.scss';

export type MarketplaceNavigationProps = {
  background: string;
  textColor: string;
  country: string;
  displayCountries?: string[];
  menu: {
    title: string;
    to: string;
    type: string;
  }[];
};

export function MarketplaceNavigation({
  background,
  textColor,
  country,
  displayCountries,
  menu,
}: MarketplaceNavigationProps) {
  if (!displayCountries?.length || displayCountries?.includes(country)) {
    return (
      <div
        class="sub-nav-menu"
        style={{
          '--bgcolor': background || '#fff',
          '--color': textColor || '#000',
        }}>
        <div class="sub-nav-menu__content">
          {menu.map((link, i) => {
            return (
              <div class="sub-nav-menu__link" key={i}>
                <a href={link.to}>{link.title}</a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
