/** @jsx h */
import { h, Fragment } from 'preact';

const currentYear = new Date().getFullYear();

const links = [
  { title: 'Patents', href: '/patents' },
  { title: 'Trademarks', href: '/trademarks' },
  { title: 'Terms of Use', href: '/terms-of-service' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
];

export function FooterLegal() {
  return (
    <Fragment>
      <div class="section__footer__legal">
        {links.map((link, i) => (
          <a href={link.href} key={i}>
            {link.title}
          </a>
        ))}
      </div>
      <div class="section__footer__legal__copyright">
        ©{currentYear} BlendJet
      </div>
    </Fragment>
  );
}
