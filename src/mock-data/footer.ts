import { FooterProps } from '../components/Footer/Footer';

export const footerMock: FooterProps = {
  linkCollection: [
    {
      items: [
        {
          title: 'BlendJet 2',
          href: ' /products/blendjet-2',
        },
        {
          title: 'JetPack',
          href: ' /products/jetpack-smoothies',
        },
        {
          title: 'Sleeve',
          href: ' /products/jetsetter-insulated-sleeve',
        },
        {
          title: 'Tote',
          href: ' /products/jetsetter-insulated-tote',
        },
        {
          title: 'Recipe Book',
          href: ' /products/recipe-book',
        },
      ],
    },
    {
      items: [
        { title: 'Our Story', href: ' /our-story' },
        { title: 'Reviews', href: ' /reviews' },
        { title: 'Recipes', href: ' /recipes' },
        { title: 'Blog', href: ' /blog' },
      ],
    },
    {
      title: 'Get Help',
      items: [
        { title: 'User Guide', href: ' /user-guide' },
        { title: 'FAQS', href: ' /faqs' },
        {
          title: 'Returns & Guarantees',
          href: ' /returns',
        },
        {
          title: 'Replacement Parts',
          href: ' /replacement-parts',
        },
      ],
    },
    {
      title: 'Account',
      items: [
        {
          title: 'Sign Up',
          href: 'https://shop.blendjet.com/account/register',
        },
        {
          title: 'Log-in',
          href: 'https://shop.blendjet.com/account/login?return_url=%2Faccount',
        },
        {
          title: 'Manage Subscription',
          href: 'https://shop.blendjet.com/tools/recurring/login',
        },
        {
          title: 'Accessibility Statement',
          href: 'https://blendjet.com/accessibility-statement',
        },
      ],
    },
    {
      title: 'Get in Touch',
      items: [
        { title: 'Contact Us', href: 'mailto:support@blendjet.com' },
        { title: '1‑844‑588‑1555', href: 'tel:1-844-588-1555' },
        { title: 'Wholesale', href: 'mailto:wholesale@blendjet.com' },
      ],
    },
  ],
};
