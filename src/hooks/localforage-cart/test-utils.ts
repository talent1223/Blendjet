export function deepClone<T>(item: T): T {
  return JSON.parse(JSON.stringify(item));
}

export async function delay(milliseconds: number) {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), milliseconds),
  );
}

export const cartMock = [
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
    pimSyncSourceProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ3NjAyNjUwMzE3NDY',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMjQ3ODYzOTM5MDc4Ng==',
      title: 'Mint',
      price: 49.95,
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
    quantity: 3,
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
    pimSyncSourceProductId: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ3NjAyNjUwMzE3NDY',
    variant: {
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI4OTE2NzI4MjI0Mg==',
      title: 'Banana Blueberry',
      price: 3.99,
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
        altText: 'Mint Blendjet Portable Blender',
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
];
