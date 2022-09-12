/** @jsx h */
import { h } from 'preact';
import {
  instagramIcon,
  facebookIcon,
  pinterestIcon,
  tiktokIcon,
  twitterIcon,
  youtubeIcon,
} from '../Icons/icons';

type Social = {
  title: string;
  href: string;
  icon: h.JSX.Element;
};

const socials: Social[] = [
  {
    title: 'instagram',
    href: 'https://instagram.com/BlendJet',
    icon: instagramIcon,
  },
  {
    title: 'facebook',
    href: 'http://facebook.com/BlendJet',
    icon: facebookIcon,
  },
  {
    title: 'pinterest',
    href: 'https://www.pinterest.com/blendjet',
    icon: pinterestIcon,
  },
  {
    title: 'tiktok',
    href: 'https://www.tiktok.com/@blendjet',
    icon: tiktokIcon,
  },
  { title: 'twitter', href: 'https://twitter.com/BlendJet', icon: twitterIcon },
  {
    title: 'youtube',
    href: 'https://www.youtube.com/channel/UCYCxpRsXpNh2REeyATMo_8w',
    icon: youtubeIcon,
  },
];

export function FooterSocials() {
  return (
    <div class="section__footer__social-media">
      {socials.map((social, i) => (
        <a
          rel="nofollow"
          href={social.href}
          target="_blank"
          class="section__footer__social-media__icon"
          key={i}>
          <span class="is-sr-only">{social.title}</span>
          {social.icon}
        </a>
      ))}
    </div>
  );
}
