import { Image } from '../types/image';

/*
To generate a mock array of images for HeroCarousel:
1. Open outsmartly/content-sources/api.json, and copy the `variants` array
2. In a node terminal, assign it to a variable
   - $ node
   - $ let v = [pasted variants array]
3. Map over the array, returning `variant.image`
   - $ let images = v.map(variant => variant.image)
4. Paste resulting array below
*/

export const heroImagesMock: Image[] = [
  {
    src: '//images.ctfassets.net/strhx3d94c40/5OP8sZsFUirSWzSeXcthYf/4e3fc008c4f6833befdf014c1570845e/BLENDJET-2-HERO-LANDSCAPE-CROP-MINT_2.jpg',
    alt: 'mint',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/1YTbF5tGizsjmmGtmDf7tx/c3593da25daef024771437dac2589dfb/BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg',
    alt: 'black',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2csc8u77kAGQ3JYRJBDMvU/29432737845944359ac4650c97b7e85d/BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg',
    alt: 'lavender',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2PYezjJHVj8ol1RnxuOnkT/dcfe80a53f4a8fc242054fcf1d46f20a/BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg',
    alt: 'royalBlue',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/45lAEGHKtTrEljUU6i3v6a/7bd7326310b0bcff76c791e76523845c/BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg',
    alt: 'purple',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/1cyBrTKLyFH24NmUWfALFG/a0299e789458bac829eb3fc708d087b2/BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg',
    alt: 'white',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/BSPjcPUrluUkMmSsMklTk/e22305a1e04989991cc5b721b76f4617/BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg',
    alt: 'blush',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/3LXO4YTDXsI0Ua8UQvpprm/eca43c4b51f2da8c7e0fbaff08296ff3/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg',
    alt: 'blackMarble',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2UdNLcFpgjnKJgsX0waEtJ/c5bcd518328b37465ba80fd4e5de9b9a/BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg',
    alt: 'skyBlue',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/UVY2MB5HocGn39i2bPXyH/565e88e698a2825a63ad90ea8d693cd5/BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg',
    alt: 'red',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2sRdV7y65KfP63RAqB2DOr/7dbbc3e526c6d2f8dd71b72d1863d03d/BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg',
    alt: 'hotPink',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/35H5SZMMjM4uKfesW8nEKL/21ff46724f1444612380d753699eccff/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg',
    alt: 'whiteMarble',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/31EF2F46eAs9fMdp25IPD4/8e24e42c7b3753ceead096eb5b0d2911/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg',
    alt: 'carbonFiber',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/6GMprp75HM0swouzUoy02Y/76b5c26e0897bd5f9a3b7514015ca558/BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg',
    alt: 'ocean',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/7ybdU4G7GlIHIdWlDF2Kdn/97917476a81ffbe7a3909ac97f4ff04d/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg',
    alt: 'walnut',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/5kyTAhTfvKT7ciIRmsmRdB/3f5529a815efe5cb0dd596e6fe685062/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg',
    alt: 'urbanCamo',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/jmwIDAvmbSDBK72zXaCne/5ece5c03b5a6ffe6e17b27dfb2fc05dd/BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg',
    alt: 'coral',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/69LpvXulHbVwkImVsdMOYe/ab80e6caa0c6ef2eb4c95372cf58a884/BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg',
    alt: 'seafoam',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/XArTUNlrA3aNaVfgbQb5I/12a30ea4d491bd54cab2d55047b6afa7/BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg',
    alt: 'orange',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2LKYrXqwX33PLWfkREaYJn/71ad308f4dbc71fbe35263645585e211/BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg',
    alt: 'lemon',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2x7cTOsKWnyAogiA3OOCNb/25ba0d0b0385190d4c88bce9a2459f71/BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg',
    alt: 'lime',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/6NBI2Bxz1jOCOIEbzb9rgW/6bd0d16201471a464cdc23663b264193/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg',
    alt: 'winterCamo',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/265ywGeHUuu9LPBhNVw4jp/4abab1182c88382af63c1f90143ea67b/BLENDJET-WOODLAND-CAMO.jpg',
    alt: 'woodlandCamo',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/5WniqfKvODQZeQHL23bQKA/2e2011147bec337436f9429952b3fe2f/BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg',
    alt: 'leopard',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/3vBoARTAffYGzpG6VBT6ek/36a5bb78d3609ea17d5f06fc9cd37bf3/BlendJetLisaFrankRainbowFade.jpg',
    alt: 'lisaFrankRainbowFade',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/RcnLzxCbQmOw1okPMpYY9/5aad98c7a697d8cdddc14a3daf9833f8/BlendJetLisaFrankLeopard.jpg',
    alt: 'lisaFrankRainbowLeopard',
  },
  {
    src: '//images.ctfassets.net/strhx3d94c40/2yjEEGiIC80Ba0CzfeDv3h/ca8bd9fec90e20b419ca39a0dec62267/BlendJetLisaFrankTieDye.jpg',
    alt: 'lisaFrankTie-Dye',
  },
];
