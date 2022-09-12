console.log(
  JSON.stringify(
    [
      {
        value: 'Mint',
      },
      {
        value: 'Black',
      },
      {
        value: 'Lemon',
      },
      {
        value: 'Hot Pink',
      },
      {
        value: 'Seafoam',
      },
      {
        value: 'Orange',
      },
      {
        value: 'Purple',
      },
      {
        value: 'Lime',
      },
      {
        value: 'Coral',
      },
      {
        value: 'Sky Blue',
      },
      {
        value: 'White',
      },
      {
        value: 'Blush',
      },
      {
        value: 'Royal Blue',
      },
      {
        value: 'Red',
      },
      {
        value: 'Lavender',
      },
      {
        value: 'Ocean',
      },
      {
        value: 'Baileys',
      },
      {
        value: 'White Marble',
      },
      {
        value: 'Black Marble',
      },
      {
        value: 'Woodland Camo',
      },
      {
        value: 'Urban Camo',
      },
      {
        value: 'Winter Camo',
      },
      {
        value: 'Carbon Fiber',
      },
      {
        value: 'Walnut',
      },
      {
        value: 'Leopard',
      },
      {
        value: 'Geode',
      },
    ].map((item) => ({
      id: String(item.value).replace(/\s+/g, '').toLowerCase(),
      swatch: String(item.value).replace(/\s+/g, '-').toLowerCase(),
    })),
  ),
);
