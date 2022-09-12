import {
  LinkItem,
  LinkCollection,
  Social,
  MobileMenuProps,
} from '../components/MobileMenu/MobileMenu';
import {
  instagramIcon,
  facebookIcon,
  pinterestIcon,
  tiktokIcon,
  twitterIcon,
  youtubeIcon,
} from '../components/Icons/icons';

export const navLinksMock: LinkItem[] = [
  {
    title: 'BlendJet 2',
    href: '/products/blendjet-2',
  },
  {
    title: 'JetPacks',
    href: '/products/jetpack-smoothies',
  },
  {
    title: 'Marketplace',
    href: '/marketplace',
  },
  {
    title: 'Recepies',
    href: '/recipes',
  },
  {
    title: 'User Guide',
    href: '/user-guide/blendjet-2',
  },
  {
    title: 'Our Story',
    href: '/our-story',
  },
];

export const menuSectionsMock: LinkCollection = [
  {
    title: 'Support',
    items: [
      {
        title: 'FAQs',
        href: '/faqs',
      },
      {
        title: 'Contact Us',
        href: 'mailto:support@blendjet.com',
      },
      {
        title: '1-844-588-1555',
        href: 'tel:1-844-588-1555',
      },
    ],
  },
  {
    title: 'Account',
    href: 'https://shop.blendjet.com/account/login',
    items: [
      {
        title: 'Sign Up',
        href: 'https://shop.blendjet.com/account/login',
      },
      {
        title: 'Log-In',
        href: 'https://shop.blendjet.com/account/login',
      },
      {
        title: 'Manage Subscription',
        href: 'https://shop.blendjet.com/account/login',
      },
    ],
  },
];

export const socialsMock: Social[] = [
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
  {
    title: 'twitter',
    href: 'https://twitter.com/BlendJet',
    icon: twitterIcon,
  },
  {
    title: 'youtube',
    href: 'https://www.youtube.com/channel/UCYCxpRsXpNh2REeyATMo_8w',
    icon: youtubeIcon,
  },
];

export const mobileMenuMock: MobileMenuProps = {
  menuSections: menuSectionsMock,
  navLinks: navLinksMock,
  onClose: () => {},
  socials: socialsMock,
};
