export const homeJetpacksMock = {
  screenWidth: window.innerWidth,
  title: 'Jetpacks',
  subtitle: 'Ready-to-Blend Beverages',
  tabLabels: ['Lattes', 'Protein Smoothies', 'Smoothies'],
  products: [
    [
      {
        sku: 'variety-pack',
        displayName: 'Variety Pack (6)',
        variant: {
          title: 'Matcha Green Tea',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Matcha-Green-Tea.png?v=1641766813',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: true,
        url: '/products/jetpack-latte?variant=varietypack',
        gradiantColor1: '#eddab6',
        gradiantColor2: '#d9a067',
      },
      {
        sku: 'JP-Latte-Caramel',
        variant: {
          title: 'Caramel',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Caramel-JetPack-Latte.png?v=1641766811',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661204045890',
        gradiantColor1: '#eddab6',
        gradiantColor2: '#d9a067',
      },
      {
        sku: 'JP-Latte-Mocha',
        variant: {
          title: 'Mocha',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Mocha-JetPack-Latte.png?v=1641766813',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661203914818',
        gradiantColor1: '#ceb9ac',
        gradiantColor2: '#986c5b',
      },
      {
        sku: 'JP-Latte-Vanilla',
        variant: {
          title: 'Vanilla',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Vanilla-JetPack-Latte.png?v=1641766813',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661203882050',
        gradiantColor1: '#e8ca99',
        gradiantColor2: '#cea262',
      },
      {
        sku: 'JP-Latte-Chai',
        variant: {
          title: 'Chai',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Chai-JetPack-Latte.png?v=1641766811',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661204013122',
        gradiantColor1: '#db8f56',
        gradiantColor2: '#bc6a33',
      },
      {
        sku: 'JP-Latte-Cinnamon-Dolce',
        variant: {
          title: 'Cinnamon Dolce',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Cinnamon-Dolce-JetPack-Latte.png?v=1641766812',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661203980354',
        gradiantColor1: '#dec698',
        gradiantColor2: '#c08429',
      },
      {
        sku: 'JP-Latte-Matcha',
        variant: {
          title: 'Matcha Green Tea',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Matcha-Green-Tea.png?v=1641766813',
            altText: 'jetpack variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-latte?variant=39661203947586',
        gradiantColor1: '#c2c486',
        gradiantColor2: '#8eaa1b',
      },
    ],
    [
      {
        sku: 'variety-pack',
        displayName: 'Variety Pack (5)',
        variant: {
          title: 'Chocolate Peanut Butter Banana',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Chocolate-Peanut-Butter-Banana.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: true,
        url: '/products/jetpack-protein-smoothie?variant=varietypack',
        gradiantColor1: 'red',
        gradiantColor2: 'pink',
      },
      {
        sku: 'JP-PB-Power-Breakfast',
        variant: {
          title: 'Peanut Butter Power Breakfast',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Peanut-Butter-Power-Breakfast.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-protein-smoothie?variant=39264793198658',
        gradiantColor1: '#f89d4a',
        gradiantColor2: '#f1d7be',
      },
      {
        sku: 'JP-Blueberry-Acai',
        variant: {
          title: 'Blueberry Acai',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Blueberry-Acai.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-protein-smoothie?variant=39264793231426',
        gradiantColor1: '#3d3d78',
        gradiantColor2: '#8786c3',
      },
      {
        sku: 'JP-Orange-Mango-Pineapple',
        variant: {
          title: 'Orange Mango Pineapple',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Orange-Mango-Pineapple.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-protein-smoothie?variant=39264793362498',
        gradiantColor1: 'rgba(234,133,0,1)',
        gradiantColor2: 'rgba(249,221,12,1)',
      },
      {
        sku: 'JP-Very-Berry',
        variant: {
          title: 'Very Berry',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Very-Berry.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-protein-smoothie?variant=39264793296962',
        gradiantColor1: 'rgba(229,128,140,1)',
        gradiantColor2: 'rgba(219,30,53,1)',
      },
      {
        sku: 'JP-Chocolate-PB-Banana',
        variant: {
          title: 'Chocolate Peanut Butter Banana',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Protein-Smoothie_Chocolate-Peanut-Butter-Banana.png?v=1618201477',
            altText: 'Jetpack Protein Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-protein-smoothie?variant=39264793264194',
        gradiantColor1: 'rgba(126,128,217,1)',
        gradiantColor2: 'rgba(55,55,149,1)',
      },
    ],
    [
      {
        sku: 'variety-pack',
        displayName: 'Variety Pack (6)',
        variant: {
          title: 'Tropical Blue',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Tropical-Blue_JetPack_2dac4156-4df6-45ae-909d-129799813ac9.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: true,
        url: '/products/jetpack-smoothies?variant=varietypack',
        gradiantColor1: 'red',
        gradiantColor2: 'pink',
      },
      {
        sku: 'JP-Banana-Blueberry',
        variant: {
          title: 'Banana Blueberry',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Banana-Blueberry_JetPack_b9c06246-a52e-47b1-b844-bdb3d405ec1c.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167282242',
        gradiantColor1: 'rgba(126,128,217,1)',
        gradiantColor2: 'rgba(55,55,149,1)',
      },
      {
        sku: 'JP-Raspberry-Dragon-Fruit',
        variant: {
          title: 'Raspberry Dragon Fruit',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Raspberry-Dragon-Fruit_JetPack_3270bf69-fbdd-4c82-8930-8c621fc13280.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167315010',
        gradiantColor1: '#f098b3',
        gradiantColor2: '#f50e7d',
      },
      {
        sku: 'JP-Green-Peach',
        variant: {
          title: 'Green Peach Ginger',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Green-Peach-Ginger_JetPack_8ca2b91b-5698-4952-b5c2-2ec996e79911.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167347778',
        gradiantColor1: 'rgba(249,214,97,1)',
        gradiantColor2: 'rgba(255,243,202,1)',
      },
      {
        sku: 'JP-Mango-Matcha',
        variant: {
          title: 'Mango Matcha',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Mango-Matcha_JetPack_2cf093b9-fb41-4f5a-b7ae-a82522032da4.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167380546',
        gradiantColor1: 'rgba(234,133,0,1)',
        gradiantColor2: 'rgba(249,221,12,1)',
      },
      {
        sku: 'JP-Mocha-Chia',
        variant: {
          title: 'Mocha Chia',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Mocha-Chia_JetPack_81b29c34-fc20-45a5-8b05-bd3fd7a3ccff.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167413314',
        gradiantColor1: '#cab0b2',
        gradiantColor2: '#dbd3e8',
      },
      {
        sku: 'JP-Tropical-Blue',
        variant: {
          title: 'Tropical Blue',
          featuredMedia: {
            src: 'https://cdn.shopify.com/s/files/1/0066/4433/4658/products/Tropical-Blue_JetPack_2dac4156-4df6-45ae-909d-129799813ac9.png?v=1618354834',
            altText: 'Jetpack Latte Variant',
          },
          availableForSale: true,
        },
        isVarietyPack: false,
        url: '/products/jetpack-smoothies?variant=39289167446082',
        gradiantColor1: '#9ad4e5',
        gradiantColor2: '#dcd372',
      },
    ],
  ],
};
