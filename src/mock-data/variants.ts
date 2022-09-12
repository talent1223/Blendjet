import { mediaContentCarouselMock } from './mediaContentCarousel';

export const productMock = {
  title: 'BlendJet 2',
  metafields: [],
  handle: 'blendjet-2',
};

export const variantsMock = [
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
    variantId: '32478639390786',
    colorId: 'mint',
    price: '49.95',
    compareAtPrice: '99.95',
    title: 'Mint',
    image: {
      src: '//images.ctfassets.net/strhx3d94c40/5OP8sZsFUirSWzSeXcthYf/4e3fc008c4f6833befdf014c1570845e/BLENDJET-2-HERO-LANDSCAPE-CROP-MINT_2.jpg?w=600',
      alt: 'mint',
    },
    cartImage: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
      alt: 'Mint Blendjet Portable Blender',
    },
    mediaContentCarousel: {
      images: [
        mediaContentCarouselMock.images[1],
        ...mediaContentCarouselMock.images,
      ],
    },
    sku: 'abc',
    priceCurrency: 'USD',
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTc1MTIzNA==',
    variantId: '32478639751234',
    colorId: 'lemon',
    price: '49.95',
    compareAtPrice: '99.95',
    title: 'Lemon',
    image: {
      src: '//images.ctfassets.net/strhx3d94c40/2LKYrXqwX33PLWfkREaYJn/71ad308f4dbc71fbe35263645585e211/BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=600',
      alt: 'lemon',
    },
    cartImage: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-LEMON_af8d53f2-7bb2-4c7e-881e-6afeadbc17d3.png?v=1606733861&width=100',
      alt: 'Lemon Blendjet Portable Blender',
    },
    mediaContentCarousel: {
      images: [
        mediaContentCarouselMock.images[2],
        ...mediaContentCarouselMock.images,
      ],
    },
    sku: '123',
    priceCurrency: 'USD',
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTUyMTg1OA==',
    variantId: '32478639521858',
    colorId: 'red',
    price: '49.95',
    compareAtPrice: '99.95',
    title: 'Red',
    image: {
      src: '//images.ctfassets.net/strhx3d94c40/3GMwAEblYybEocy9j5KBeG/575ef28771b7a4eeae80375ad66a4a21/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=600',
      alt: 'red',
    },
    cartImage: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-RED_ed63217e-9712-4693-8006-5a20db4bd9ee.png?v=1607544473&width=100',
      alt: 'Red Blendjet Portable Blender',
    },
    mediaContentCarousel: {
      images: [
        mediaContentCarouselMock.images[3],
        ...mediaContentCarouselMock.images,
      ],
    },
    sku: 'abc123',
    priceCurrency: 'USD',
  },
];
