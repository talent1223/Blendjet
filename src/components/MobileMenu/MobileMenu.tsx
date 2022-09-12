/** @jsx h */
import { h } from 'preact';
import './style.scss';

export type LinkItem = {
  title: string;
  href: string;
};

export type LinkSection = {
  title: string;
  href?: string;
  items: LinkItem[];
};

export type LinkCollection = LinkSection[];

export type Social = {
  title: string;
  href: string;
  icon: h.JSX.Element;
};

export interface MobileMenuProps {
  menuSections: LinkCollection;
  navLinks: LinkItem[];
  onClose: () => void;
  socials: Social[];
}

export function MobileMenu({
  menuSections,
  navLinks,
  onClose,
  socials,
}: MobileMenuProps) {
  return (
    <div class="mobile-menu">
      <div class="mobile-menu__header">
        <button class="mobile-menu__header__close" onClick={onClose}>
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-19.000000, -121.000000)"
                fill="#FFFFFF"
                stroke="#FFFFFF">
                <g transform="translate(0.000000, 92.000000)">
                  <g transform="translate(20.000000, 30.000000)">
                    <path d="M17.28,-3.55271368e-15 L18,0.72 L9.719,8.999 L18,17.28 L17.28,18 L8.999,9.719 L0.72,18 L-3.32511796e-13,17.28 L8.28,8.999 L-3.32511796e-13,0.72 L0.72,-5.77315973e-15 L8.999,8.28 L17.28,-3.55271368e-15 Z"></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
          <span class="is-sr-only">Close</span>
        </button>
      </div>
      <div class="mobile-menu__body">
        <div class="mobile-menu__nav-links">
          {navLinks.map((link, i) => (
            <a href={link.href} key={i}>
              {link.title}
            </a>
          ))}
        </div>
        <hr class="mobile-menu__menu-divider" />
        {menuSections.map((section, i) => (
          <div class="mobile-menu__section">
            <a href={section.href} key={i} class="mobile-menu__section__title">
              {section.title}
            </a>
            {section.items.map((item, i) => (
              <a class="mobile-menu__sub-menu-link" href={item.href} key={i}>
                {item.title}
              </a>
            ))}
            <hr class="mobile-menu__menu-divider" />
          </div>
        ))}
        <div class="mobile-menu__social">
          {socials.map((social, i) => (
            <a
              rel="nofollow"
              href={social.href}
              target="_blank"
              class="mobile-menu__social__icon"
              key={i}>
              {social.icon}
              <span class="is-sr-only">{social.title}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
