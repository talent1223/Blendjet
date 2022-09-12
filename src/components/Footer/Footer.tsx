/** @jsx h */
import { h } from 'preact';
import { FooterBrand } from './FooterBrand';
import { FooterSocials } from './FooterSocials';
import { FooterLinkCollection, LinkCollection } from './FooterLinkCollection';
import { FooterLegal } from './FooterLegal';
import './style.scss';

export type FooterProps = {
  linkCollection: LinkCollection;
};

export function Footer({ linkCollection }: FooterProps) {
  return (
    <div class="section section__footer">
      <FooterBrand />
      <FooterSocials />
      <FooterLinkCollection linkCollection={linkCollection} />
      <FooterLegal />
    </div>
  );
}
