/** @jsx h */
import { h, Fragment } from 'preact';

type LinkItem = {
  title: string;
  href: string;
};

export type LinkSection = {
  title?: string;
  items: LinkItem[];
};

export type LinkCollection = LinkSection[];

type FooterLinkSectionProps = {
  linkSection: LinkSection;
};

function FooterLinkSection({ linkSection }: FooterLinkSectionProps) {
  return (
    <Fragment>
      <div class="section__footer__links__column">
        {linkSection.title && (
          <div class="section__footer__links__column__subheading">
            {linkSection.title}
          </div>
        )}
        {linkSection.items.map((item, i) => (
          <a href={item.href} key={i}>
            {item.title}
          </a>
        ))}
      </div>
      <hr class="mobile-divider" />
    </Fragment>
  );
}

type FooterLinkCollectionProps = {
  linkCollection: LinkCollection;
};

export function FooterLinkCollection({
  linkCollection,
}: FooterLinkCollectionProps) {
  return (
    <div class="section__footer__links">
      {linkCollection.map((linkSection, i) => (
        <FooterLinkSection linkSection={linkSection} key={i} />
      ))}
    </div>
  );
}
