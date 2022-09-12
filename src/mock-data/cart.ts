import { CartProps } from '../components/Cart/Cart';
import { valuePropsMock } from './valueProps';
import { LocalForageCartItem } from '../hooks/localforage-cart';
import { CartItemProps } from '../components/Cart/CartItems';

export const actualCartItemsCompatWithNacelle = [
  {
    image: {
      id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS83MDUyOTI0ODQ2MTQ2',
      thumbnailSrc:
        'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-ROYALBLUE_8ac051ec-ad90-4bff-8e2c-9820d441ac58.png?v=1607544473&width=100',
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-ROYALBLUE_8ac051ec-ad90-4bff-8e2c-9820d441ac58.png?v=1607544473',
      type: 'image',
      altText: 'Royal Blue Blendjet Portable Blender',
    },
    title: 'BlendJet 2',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
      title: 'Mint',
      price: '49.95',
      priceCurrency: 'USD',
      compareAtPrice: '99.95',
      compareAtPriceCurrency: '99.95',
      swatchSrc: null,
      selectedOptions: [
        {
          name: 'Color',
          value: 'Mint',
        },
      ],
      featuredMedia: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTQ4NzkwNTMzMTYxNjI=',
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
        src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473',
        type: 'image',
        altText: 'Mint Blendjet Portable Blender',
      },
      sku: 'blendjet-2-mint',
      availableForSale: true,
      metafields: [],
      weight: 1.65,
      weightUnit: 'POUNDS',
      priceRules: null,
    },
    quantity: 1,
    productId: 'blendjet.myshopify.com::blendjet-2::en-us',
    handle: 'blendjet-2',
    vendor: 'BlendJet',
    tags: ['2', 'bj2', 'blendjet', 'blendjet 2', 'blendjet two', 'two'],
    metafields: [],
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==::22e5ce8c-1315-4cb9-b0fb-8e98d2d4aa15',
  },
  {
    image: {
      id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS8yMDMxMjc0NzM3NjcwNg==',
      thumbnailSrc:
        'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834',
      type: 'image',
      altText: null,
    },
    title: 'JetPack Smoothie',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==',
      title: 'Banana Blueberry',
      price: '3.99',
      priceCurrency: 'USD',
      compareAtPrice: null,
      compareAtPriceCurrency: null,
      swatchSrc: null,
      selectedOptions: [
        {
          name: 'Flavor',
          value: 'Banana Blueberry',
        },
      ],
      featuredMedia: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgwMTIxMjE5MTU0NTg=',
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
        src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834',
        type: 'image',
        altText: null,
      },
      sku: 'JP-Banana-Blueberry',
      availableForSale: true,
      metafields: [],
      weight: 1.375,
      weightUnit: 'OUNCES',
      priceRules: null,
    },
    quantity: 12,
    productId: 'blendjet.myshopify.com::jetpack-smoothies::en-us',
    handle: 'jetpack-smoothies',
    vendor: 'BlendJet',
    tags: ['jet', 'JetPack', 'OG', 'pack', 'standard'],
    metafields: [],
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==::0ece7a1e-aac3-4c78-8123-9918ad44c172',
  },
  {
    image: {
      id: 'Z2lkOi8vc2hvcGlmeS9JbWFnZVNvdXJjZS8yMDU3MzE5NDU4NDEzMA==',
      thumbnailSrc:
        'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/product_supplements_lean-1-removebg_8085fdf8-808f-44a5-90f9-d2ec2883aac3.png?v=1627268102&width=100',
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/product_supplements_lean-1-removebg_8085fdf8-808f-44a5-90f9-d2ec2883aac3.png?v=1627268102',
      type: 'image',
      altText: null,
    },
    title: 'LadyBoss Lean',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQyNzI5MzMxNTEzOA==',
      title: '1 Bag (1 Shake/Day - 30 Day Supply)',
      price: '49.76',
      priceCurrency: 'USD',
      compareAtPrice: null,
      compareAtPriceCurrency: null,
      swatchSrc: null,
      selectedOptions: [
        {
          name: 'Size',
          value: '1 Bag (1 Shake/Day - 30 Day Supply)',
        },
      ],
      featuredMedia: {
        id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMjgyNjYzNTAxNDk2OTg=',
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/product_supplements_lean-1-removebg.png?v=1627268280&width=100',
        src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/product_supplements_lean-1-removebg.png?v=1627268280',
        type: 'image',
        altText: null,
      },
      sku: 'carro-3259312',
      availableForSale: true,
      metafields: [],
      weight: 1.98,
      weightUnit: 'POUNDS',
      priceRules: null,
    },
    quantity: 1,
    productId: 'blendjet.myshopify.com::ladyboss-lean::en-us',
    handle: 'ladyboss-lean',
    vendor: 'ladyboss.swagagain.com',
    tags: ['Carro Brands Product'],
    metafields: [
      {
        key: 'charge_interval_frequency',
        value: '30',
      },
      {
        key: 'order_interval_frequency',
        value: '30',
      },
      {
        key: 'order_interval_unit',
        value: 'day',
      },
    ],
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQyNzI5MzMxNTEzOA==::b70da68d-862e-4d8e-9b20-2f542e83a800',
  },
];

export const thisIsMinimumNacelleCartNeeds: LocalForageCartItem[] = [
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==::22e5ce8c-1315-4cb9-b0fb-8e98d2d4aa15',
    pimSyncSourceProductId: '',
    handle: 'blendjet-2',
    title: 'BlendJet 2',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
      title: 'Mint',
      price: 49.95,
      featuredMedia: {
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-MINT_d611027c-d8e8-4431-9afa-7a8e66c47770.png?v=1607544473&width=100',
        altText: 'Mint Blendjet Portable Blender',
      },
      priceCurrency: 'USD',
      sku: 'abc',
    },
    quantity: 1,
    metafields: [],
    vendor: '',
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==::0ece7a1e-aac3-4c78-8123-9918ad44c172',
    pimSyncSourceProductId: '',
    title: 'JetPack Smoothie',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==',
      title: 'Banana Blueberry',
      price: 3.99,
      featuredMedia: {
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
        altText: undefined,
      },
      priceCurrency: 'USD',
      sku: 'abc',
    },
    quantity: 12,
    handle: 'jetpack-smoothies',
    metafields: [],
    vendor: '',
  },
  {
    id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQyNzI5MzMxNTEzOA==::b70da68d-862e-4d8e-9b20-2f542e83a800',
    pimSyncSourceProductId: '',
    title: 'LadyBoss Lean',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTQyNzI5MzMxNTEzOA==',
      title: '1 Bag (1 Shake/Day - 30 Day Supply)',
      price: 49.76,
      featuredMedia: {
        thumbnailSrc:
          'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/product_supplements_lean-1-removebg.png?v=1627268280&width=100',
        altText: undefined,
      },
      priceCurrency: 'USD',
      sku: 'some-sku',
    },
    handle: 'ladyboss-lean',
    quantity: 1,
    metafields: [
      {
        key: 'charge_interval_frequency',
        value: '30',
      },
      {
        key: 'order_interval_frequency',
        value: '30',
      },
      {
        key: 'order_interval_unit',
        value: 'day',
      },
    ],
    vendor: '',
  },
];

// Mock cart items are:
// 1. BlendJet 2 - red
// 2. Extended Warranty - 3yrs
// 3. Jetsetter Insulated Sleeve - black
// 4. Jetpack Smoothie - Banana Blueberry
// 5. Jetpack Smoothie - Raspberry Dragon Fruit - subscription - no discount
//    (not sure if we can actually get this from the UI!)
// 6. Jetpack Smoothie - Green Peach Ginger - subscription - 25% discount
// 7. Jetpack Protein Smoothie - Strawberry Banana

export const cartItemsMock: CartItemProps[] = [
  {
    href: '/products/blendjet-2?variant=32478639521858',
    title: 'BlendJet 2',
    subtitle: 'Red',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/BlendJet-2-RED_ed63217e-9712-4693-8006-5a20db4bd9ee.png?format=webp&v=1607544473&width=100',
      // TODO: these should probably be alt and not altText
      altText: 'BlendJet 2',
    },
    price: '49.95',
    quantity: 2,
    increment() {},
    decrement() {},
    isSubscription: false,
  },
  {
    href: '/products/8862eff0-e8c2-47bc-a194-157f853043ec-10002-blendjet-adh-replace-3y',
    title: 'Extend Protection Plan',
    subtitle: 'BlendJet 2 - Red',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/extend_icon_430a7899-65d0-45c3-975e-0986f6598300.png?v=1603476412&width=100',
      altText: 'Extend Protection Plan with Accident Coverage - BlendJet',
    },
    price: '9.99',
    quantity: 1,
    increment() {},
    decrement() {},
    isSubscription: false,
  },
  {
    href: '/products/jetsetter-insulated-sleeve',
    title: 'Jetsetter Insulated Sleeve',
    subtitle: 'Black',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Black-Sleeve_Website_Thumbnail.png?v=1613756333&width=100',
      altText: 'Jetsetter Insulated Sleeve in Black',
    },
    price: '14.95',
    quantity: 1,
    increment() {},
    decrement() {},
    isSubscription: false,
  },
  {
    href: '/products/jetpack-smoothies',
    title: 'JetPack Smoothie',
    subtitle: 'Banana Blueberry',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834&width=100',
      altText: 'JetPack Smoothie',
    },
    price: '3.99',
    quantity: 6,
    increment() {},
    decrement() {},
    isSubscription: false,
  },
  {
    href: '/products/jetpack-smoothies',
    title: 'JetPack Smoothie',
    subtitle: 'Raspberry Dragon Fruit',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Raspberry-Dragon-Fruit_JetPack_3270bf69-fbdd-4c82-8930-8c621fc13280.png?v=1618354834&width=100',
      altText: 'JetPack Smoothie',
    },
    price: '2.99',
    quantity: 1,
    increment() {},
    decrement() {},
    isSubscription: true,
  },
  {
    href: '/products/jetpack-smoothies',
    title: 'JetPack Smoothie',
    subtitle: 'Green Peach Ginger',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Green-Peach-Ginger_JetPack_8ca2b91b-5698-4952-b5c2-2ec996e79911.png?v=1618354834&width=100',
      altText: 'JetPack Smoothie',
    },
    price: '2.99',
    quantity: 6,
    increment() {},
    decrement() {},
    isSubscription: true,
    discountPercentage: 24,
  },
  {
    href: '/products/jetpack-protein-smoothie',
    title: 'JetPack Protein Smoothie',
    subtitle: 'Strawberry Banana',
    img: {
      src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Strawberry-Banana.png?v=1618201477&width=100',
      altText: 'JetPack Protein Smoothie',
    },
    price: '3.99',
    quantity: 6,
    increment() {},
    decrement() {},
    isSubscription: false,
  },
];

export const cartMock: Omit<CartProps, 'mobileCartUpsells' | 'addToCart'> = {
  freeShippingMessage: 'Free Express Shipping',
  initiateCheckout: { isLoading: false, checkout: () => {} },
  items: cartItemsMock,
  message: 'Please Adjust the Number of Extend Plans',
  onClose: () => {},
  subtotal: 159.85,
  valueProps: valuePropsMock,
  currency: {
    code: 'USD',
    symbol: '$',
    language: 'en-US',
  },
};
