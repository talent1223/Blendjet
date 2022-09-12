const colorOptions = {
  mint: 'Mint',
  black: 'Black',
  lemon: 'Lemon',
  hotpink: 'Hot Pink',
  seafoam: 'Seafoam',
  orange: 'Orange',
  purple: 'Purple',
  lime: 'Lime',
  coral: 'Coral',
  skyblue: 'Sky Blue',
  white: 'White',
  blush: 'Blush',
  royalblue: 'Royal Blue',
  red: 'Red',
  lavender: 'Lavender',
  ocean: 'Ocean',
  baileys: 'Baileys',
  whitemarble: 'White Marble',
  blackmarble: 'Black Marble',
  woodlandcamo: 'Woodland Camo',
  urbancamo: 'Urban Camo',
  wintercamo: 'Winter Camo',
  carbonfiber: 'Carbon Fiber',
  walnut: 'Walnut',
  leopard: 'Leopard',
  geode: 'Geode',
};

const products = contentfulProducts()
  .items[0].fields.variants.map((item) => {
    return {
      title: item.fields.title,
      productImage: item.fields.productImage.fields.file.url,
    };
  })
  .reduce((acc, item, i, products) => {
    const colorId = String(item.title).replace(/\s+/g, '-').toLowerCase();

    const { title: previous } =
      i === 0 ? products[products.length - 1] : products[i - 1];
    const { title: next } =
      i === products.length - 1 ? products[0] : products[i + 1];
    return {
      ...acc,
      [colorId]: {
        title: colorOptions[colorId],
        image: {
          src: item.productImage,
          alt: item.title,
        },
        previous: String(previous).replace(/\s+/g, '-').toLowerCase(),
        next: String(next).replace(/\s+/g, '-').toLowerCase(),
      },
    };
  }, {});

console.log(JSON.stringify(products, null, 4));

function contentfulProducts() {
  return {
    sys: { type: 'Array' },
    total: 1,
    skip: 0,
    limit: 100,
    items: [
      {
        metadata: { tags: [] },
        sys: {
          space: {
            sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
          },
          id: '3h7GKFvs4RzAFkwj6H1XuQ',
          type: 'Entry',
          createdAt: '2020-10-21T00:11:49.903Z',
          updatedAt: '2021-10-20T09:58:32.604Z',
          environment: {
            sys: { id: 'master', type: 'Link', linkType: 'Environment' },
          },
          revision: 43,
          contentType: {
            sys: { type: 'Link', linkType: 'ContentType', id: 'product' },
          },
          locale: 'en-US',
        },
        fields: {
          title: 'blendjet2',
          handle: 'blendjet-2',
          variants: [
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7DWb0joJ3R4NJi8fFMKSOO',
                type: 'Entry',
                createdAt: '2020-10-20T22:33:51.670Z',
                updatedAt: '2021-08-18T19:44:39.456Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'mint',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5OP8sZsFUirSWzSeXcthYf',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:32.637Z',
                    updatedAt: '2021-05-12T01:14:45.170Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/5OP8sZsFUirSWzSeXcthYf/4e3fc008c4f6833befdf014c1570845e/BLENDJET-2-HERO-LANDSCAPE-CROP-MINT_2.jpg?w=400',
                      details: {
                        size: 592569,
                        image: { width: 3556, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT 2.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '48V8HhKqrkOxxULndC0Duj',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:14.459Z',
                      updatedAt: '2021-08-16T20:19:25.417Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'heroMint1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/48V8HhKqrkOxxULndC0Duj/763598b8e8ee87ac2e7d06e16f86d9ca/PajeVictoriaxblendjetxbanners-8.jpg?w=400',
                        details: {
                          size: 1424952,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName: 'PajeVictoriaxblendjetxbanners-8.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2582vWbX6MxHrf1WwvJ9sr',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:14.736Z',
                      updatedAt: '2021-08-16T20:21:20.697Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'heroMint3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2582vWbX6MxHrf1WwvJ9sr/70473fd85182a6135e95d981d64a9612/pajevictoriaxblendjet2xlifestyle-65__1_.jpg?w=400',
                        details: {
                          size: 745155,
                          image: { width: 3600, height: 2308 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-65 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1ZWwKDO1r9oxg5njQ3XRm',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:09:46.862Z',
                      updatedAt: '2021-08-16T20:22:08.285Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'heromint5',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1ZWwKDO1r9oxg5njQ3XRm/15a9726a6296808526665837b2c3573c/PajeVictoriaxblendjetxbanners-26.jpg?w=400',
                        details: {
                          size: 1286450,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName: 'PajeVictoriaxblendjetxbanners-26.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3JfhYdlbQjd4fh17wz1Hqx',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:10:21.828Z',
                      updatedAt: '2020-10-26T00:10:21.828Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'heromint4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3JfhYdlbQjd4fh17wz1Hqx/3cdba2f601aabd7bb46c589a6735a208/_DSC6816__1_.jpg?w=400',
                        details: {
                          size: 690943,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC6816 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '35FZEjz9gyZnikYzwxHjgy',
                type: 'Entry',
                createdAt: '2020-10-20T22:35:07.062Z',
                updatedAt: '2020-10-27T21:16:53.509Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'black',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '1YTbF5tGizsjmmGtmDf7tx',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:32.457Z',
                    updatedAt: '2020-10-15T18:05:32.457Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/1YTbF5tGizsjmmGtmDf7tx/c3593da25daef024771437dac2589dfb/BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
                      details: {
                        size: 314330,
                        image: { width: 3555, height: 1999 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '22RiuWql7G2f7yrPMPMU3W',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:14.668Z',
                      updatedAt: '2020-10-27T21:14:31.724Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blackHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/22RiuWql7G2f7yrPMPMU3W/8dbe0c95c5c114e9f521406bcaa26c95/pajevictoriaxblendjet2xlifestyle-786__1_.jpg?w=400',
                        details: {
                          size: 529683,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-786 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6VprwTnCRShZUweOBMQUiO',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:17:03.125Z',
                      updatedAt: '2020-10-27T21:11:16.566Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blackhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6VprwTnCRShZUweOBMQUiO/14752bcf1a1386a365edfcd103617e7f/pajevictoriaxblendjet2xlifestyle-1083__1_.jpg?w=400',
                        details: {
                          size: 312947,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1083 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'i5l4nbC7UNwBJeBmrjQYr',
                type: 'Entry',
                createdAt: '2021-03-29T23:26:40.123Z',
                updatedAt: '2021-04-06T13:53:51.031Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 12,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'baileys',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '3GMwAEblYybEocy9j5KBeG',
                    type: 'Asset',
                    createdAt: '2021-04-02T15:32:29.063Z',
                    updatedAt: '2021-04-02T18:54:53.683Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 4,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'baileys',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/3GMwAEblYybEocy9j5KBeG/575ef28771b7a4eeae80375ad66a4a21/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
                      details: {
                        size: 474649,
                        image: { width: 2100, height: 1182 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6SOUHa7R0s5FBBNGtYqdo6',
                      type: 'Asset',
                      createdAt: '2021-04-02T15:42:21.439Z',
                      updatedAt: '2021-04-06T13:46:17.209Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 5,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileysHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6SOUHa7R0s5FBBNGtYqdo6/5e9059f4b6b3af4b3d7c49296852a9c3/PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
                        details: {
                          size: 13701241,
                          image: { width: 6720, height: 4480 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '37upHMruwhxiZ74TsUMRqL',
                      type: 'Asset',
                      createdAt: '2021-04-02T15:41:05.238Z',
                      updatedAt: '2021-04-06T13:47:10.329Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 5,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileysHero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/37upHMruwhxiZ74TsUMRqL/b927bf67e1d78423e06aa593ebc21cce/PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
                        details: {
                          size: 11958276,
                          image: { width: 6115, height: 2802 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6rDBjPZrkTvz6aLPTjw79s',
                      type: 'Asset',
                      createdAt: '2021-04-02T15:40:34.194Z',
                      updatedAt: '2021-04-06T13:47:44.864Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 6,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileysHero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6rDBjPZrkTvz6aLPTjw79s/ec03c2320c54df204077269bc279ac28/PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
                        details: {
                          size: 9442015,
                          image: { width: 5831, height: 4403 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7kMbIvz0v5Fyvm2uhtJjnt',
                      type: 'Asset',
                      createdAt: '2021-04-02T15:41:35.062Z',
                      updatedAt: '2021-04-06T13:51:35.708Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileysHero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7kMbIvz0v5Fyvm2uhtJjnt/ad9c440e76891be7f0bb7a68cfee8335/PajeVictoriaxblendjetxBaileysxfinals-11_copy.jpg?w=400',
                        details: {
                          size: 16636138,
                          image: { width: 5913, height: 3761 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-11 copy.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6iJ926YVjFFA35BokBFWNC',
                      type: 'Asset',
                      createdAt: '2021-04-02T15:41:59.387Z',
                      updatedAt: '2021-04-06T13:52:09.408Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileysHero5',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6iJ926YVjFFA35BokBFWNC/0278c5c132ac5da8515e6afb691bfe72/PajeVictoriaxblendjetxBaileysxfinals-16_copy.jpg?w=400',
                        details: {
                          size: 7418272,
                          image: { width: 5607, height: 3346 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-16 copy.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '488Hg6Kc5WgkwCKyxH0p4N',
                      type: 'Asset',
                      createdAt: '2021-04-06T13:52:37.198Z',
                      updatedAt: '2021-04-06T13:52:37.198Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileyshero6',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/488Hg6Kc5WgkwCKyxH0p4N/ba5c745cbb8d116fea71b7659eab726a/PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
                        details: {
                          size: 4609314,
                          image: { width: 4356, height: 2383 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7kqF21AmRyMplOooP990cQ',
                      type: 'Asset',
                      createdAt: '2021-04-06T13:53:10.477Z',
                      updatedAt: '2021-04-06T13:53:10.477Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileyshero7',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7kqF21AmRyMplOooP990cQ/3483d425e4abd8d1a0cc0e1eeadba11f/PajeVictoriaxblendjetxBaileysxfinals-21_copy.jpg?w=400',
                        details: {
                          size: 12302939,
                          image: { width: 6606, height: 4277 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-21 copy.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7mpVjTCj4cprV383DzsjmV',
                      type: 'Asset',
                      createdAt: '2021-04-06T13:53:41.778Z',
                      updatedAt: '2021-04-06T13:53:41.778Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'baileyshero8',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7mpVjTCj4cprV383DzsjmV/d7259d5104c5a364c67613e7b172ca42/PajeVictoriaxblendjetxBaileysxfinals-28_copy.jpg?w=400',
                        details: {
                          size: 14444439,
                          image: { width: 6720, height: 4095 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxBaileysxfinals-28 copy.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4trSKG4ibk4CswxvWGqUjX',
                type: 'Entry',
                createdAt: '2020-10-20T22:39:19.220Z',
                updatedAt: '2020-10-28T00:12:21.167Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'lavender',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2csc8u77kAGQ3JYRJBDMvU',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:33.082Z',
                    updatedAt: '2020-10-20T22:37:42.491Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'lavenderProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2csc8u77kAGQ3JYRJBDMvU/29432737845944359ac4650c97b7e85d/BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
                      details: {
                        size: 275672,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '79qiiLfUV7MjfnliCch84z',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:13.836Z',
                      updatedAt: '2020-10-27T23:19:16.651Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 5,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'lavenderHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/79qiiLfUV7MjfnliCch84z/d35d2286ede3d32f5815c7194b5d899c/pajevictoriaxblendjet2xlifestyle-347__1_.jpg?w=400',
                        details: {
                          size: 670370,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-347 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6FWFcC4laPo5uWkdKtU4F2',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:15.607Z',
                      updatedAt: '2020-10-27T23:20:13.933Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'lavenderHero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6FWFcC4laPo5uWkdKtU4F2/13b9e6218db3b848d86035c223e17b07/pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
                        details: {
                          size: 627254,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '10ORj3yhit0JQI9NC4PRuG',
                      type: 'Asset',
                      createdAt: '2020-10-28T00:12:16.153Z',
                      updatedAt: '2020-10-28T00:21:24.986Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'herolavender3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/10ORj3yhit0JQI9NC4PRuG/cf421088259b100b24b80a4deef0bc2d/pajevictoriaxblendjet2xlifestyle-534__1_.jpg?w=400',
                        details: {
                          size: 635401,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-534 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6vTPUwWRY8kB715qZQ3Bfh',
                type: 'Entry',
                createdAt: '2020-10-20T22:43:58.835Z',
                updatedAt: '2020-10-26T00:24:59.361Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'purple',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '45lAEGHKtTrEljUU6i3v6a',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.199Z',
                    updatedAt: '2020-10-15T18:05:31.199Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/45lAEGHKtTrEljUU6i3v6a/7bd7326310b0bcff76c791e76523845c/BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
                      details: {
                        size: 356528,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3i9UoGzSKnQHCk2dB9K0Tw',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.561Z',
                      updatedAt: '2020-10-26T00:24:18.961Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'purpleHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3i9UoGzSKnQHCk2dB9K0Tw/ccecf76411586ecee0ae0140e6146758/_DSC6686.jpg?w=400',
                        details: {
                          size: 636937,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC6686.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6Ec5d165elSJb2wcmn7koq',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:24:36.806Z',
                      updatedAt: '2020-10-26T00:24:36.806Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'purpleHero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6Ec5d165elSJb2wcmn7koq/b9707ba0913f9237af2e61ddde32bcdd/pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
                        details: {
                          size: 87948,
                          image: { width: 1024, height: 683 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '151AlQq31tmNcjKtD7LAMz',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:24:53.331Z',
                      updatedAt: '2020-10-26T00:24:53.331Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'purpleHero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/151AlQq31tmNcjKtD7LAMz/97d3c910be2ff38cd15aafd7d50a8a29/pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
                        details: {
                          size: 111537,
                          image: { width: 1024, height: 683 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '64cHQKhILbF2M0ii4NjORS',
                type: 'Entry',
                createdAt: '2020-10-20T22:43:50.860Z',
                updatedAt: '2020-10-26T00:26:45.460Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'royalBlue',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2PYezjJHVj8ol1RnxuOnkT',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.214Z',
                    updatedAt: '2020-10-15T18:05:31.214Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2PYezjJHVj8ol1RnxuOnkT/dcfe80a53f4a8fc242054fcf1d46f20a/BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
                      details: {
                        size: 306833,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5Ds6dqaVdwBtLJQAFkk3wK',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:13.832Z',
                      updatedAt: '2020-10-28T00:02:15.406Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'royalBlueHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5Ds6dqaVdwBtLJQAFkk3wK/40c4399d3f7b8029a3f49286ec2b3ab1/pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
                        details: {
                          size: 740553,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5BuuLwmEpWqn6ovy1r5omh',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:26:21.818Z',
                      updatedAt: '2020-10-26T00:26:21.818Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'royalblueHero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5BuuLwmEpWqn6ovy1r5omh/22b38a33a60ed72e3ebdb641df1fa414/_DSC8806.jpg?w=400',
                        details: {
                          size: 671219,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC8806.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5A3vafoyJrHCHP1qon63hs',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:26:39.584Z',
                      updatedAt: '2020-10-28T00:00:16.525Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'royalblueHero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5A3vafoyJrHCHP1qon63hs/44f1e1f6a0267d1e43b46645b6fd4c95/pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
                        details: {
                          size: 687041,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2a8766zWDPP6DVbUggYr2m',
                type: 'Entry',
                createdAt: '2020-10-20T22:44:40.913Z',
                updatedAt: '2020-10-28T02:18:51.292Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 6,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'red',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: 'UVY2MB5HocGn39i2bPXyH',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.233Z',
                    updatedAt: '2020-10-15T18:05:31.233Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/UVY2MB5HocGn39i2bPXyH/565e88e698a2825a63ad90ea8d693cd5/BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
                      details: {
                        size: 291548,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '35hJXfuSdAdBqrjcBuQ5yo',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:29:19.454Z',
                      updatedAt: '2020-10-26T00:29:19.454Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'redhero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/35hJXfuSdAdBqrjcBuQ5yo/5f07959a7872ca523500968e66f7012c/pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
                        details: {
                          size: 1101296,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1yCXm2K0GNPxoVaWtNq5XH',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:31:08.172Z',
                      updatedAt: '2020-10-26T00:31:08.172Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'redhero5',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1yCXm2K0GNPxoVaWtNq5XH/9bff7f32097044a0730e354168270861/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                        details: {
                          size: 139171,
                          image: { width: 1024, height: 683 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6kbBRrTTd9tXl1wKAeV6UV',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:30:40.396Z',
                      updatedAt: '2020-10-26T00:30:40.396Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'redhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6kbBRrTTd9tXl1wKAeV6UV/0ccc615f6c850ae8b0c6b6acab3862a9/_DSC7377.jpg?w=400',
                        details: {
                          size: 672878,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC7377.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2p5gFzd0Z4YESSuiQXTxQn',
                      type: 'Asset',
                      createdAt: '2020-10-26T00:30:17.380Z',
                      updatedAt: '2020-10-26T00:30:17.380Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'redhero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2p5gFzd0Z4YESSuiQXTxQn/64ec35cc025fb8124bb5c1c1623a7ed4/pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
                        details: {
                          size: 856674,
                          image: { width: 3600, height: 1984 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'yx87uV5t4VrD45NCU4xTL',
                type: 'Entry',
                createdAt: '2020-10-20T23:45:14.265Z',
                updatedAt: '2020-10-28T02:19:45.905Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'coral',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: 'jmwIDAvmbSDBK72zXaCne',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:32.397Z',
                    updatedAt: '2020-10-20T22:56:46.443Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'productImageCoral',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/jmwIDAvmbSDBK72zXaCne/5ece5c03b5a6ffe6e17b27dfb2fc05dd/BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
                      details: {
                        size: 320627,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7Hgvh2CTHfTPd2FRmFnBPX',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:03:53.680Z',
                      updatedAt: '2020-10-27T21:30:45.795Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'coralhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7Hgvh2CTHfTPd2FRmFnBPX/9fe9aba0a482391019996161674034ae/pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
                        details: {
                          size: 556093,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'w9LoR0f1V4xGNu4FGKHS3',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:03:18.199Z',
                      updatedAt: '2020-10-27T21:30:18.702Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'coralhero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/w9LoR0f1V4xGNu4FGKHS3/b483cd492fddd33ce06996cbc678f08c/pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
                        details: {
                          size: 934404,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1qwpDcHjIzx41Kv4vxjNup',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:04:12.518Z',
                      updatedAt: '2020-10-27T21:31:08.993Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'coralhero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1qwpDcHjIzx41Kv4vxjNup/13ee44fcdb78659766b161b8b77b39d1/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                        details: {
                          size: 789037,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3p3l2UBK9hHUyvj5eXh21f',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:01:42.295Z',
                      updatedAt: '2020-10-27T21:34:08.040Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'coralhero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3p3l2UBK9hHUyvj5eXh21f/821e8da37bc1244957d38422af22bc04/pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
                        details: {
                          size: 632390,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '63BAP3xzeoEV9CSUAGaKYL',
                type: 'Entry',
                createdAt: '2020-10-20T23:08:12.345Z',
                updatedAt: '2020-10-27T21:43:16.305Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'hotPink',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2sRdV7y65KfP63RAqB2DOr',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:33.310Z',
                    updatedAt: '2020-10-15T18:05:33.310Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2sRdV7y65KfP63RAqB2DOr/7dbbc3e526c6d2f8dd71b72d1863d03d/BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
                      details: {
                        size: 330545,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'T8TFnRRCHxVZRJoZnjPUP',
                      type: 'Asset',
                      createdAt: '2020-10-20T23:06:20.062Z',
                      updatedAt: '2020-10-27T21:37:20.598Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'hotPinkHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/T8TFnRRCHxVZRJoZnjPUP/c81d534feea03efdee42128142ac9a29/pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
                        details: {
                          size: 1238436,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1vBlbVAr383Ue91EfAIojg',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:06:14.478Z',
                      updatedAt: '2020-10-27T21:37:53.346Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'hotpinkhero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1vBlbVAr383Ue91EfAIojg/00a589e98fb6d081314bc2f5257f46fb/pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
                        details: {
                          size: 623650,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5fwSnXiviMq6qyQiAPD8r6',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:06:35.646Z',
                      updatedAt: '2020-10-27T21:38:15.486Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'hotpinkhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5fwSnXiviMq6qyQiAPD8r6/e32dd25a35c9f2844c3da3074db76e90/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                        details: {
                          size: 1007063,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5gRM186OwJ3Ezkap52lUWR',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:07:18.905Z',
                      updatedAt: '2020-10-27T21:38:37.824Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'hotpinkhero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5gRM186OwJ3Ezkap52lUWR/0ccd9245841b52df95af60056233c02a/pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
                        details: {
                          size: 635844,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6rXqVUnSL1zxb2SeHVP5nC',
                type: 'Entry',
                createdAt: '2020-10-20T23:47:03.188Z',
                updatedAt: '2021-09-08T21:01:51.144Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 6,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'lime',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2x7cTOsKWnyAogiA3OOCNb',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.200Z',
                    updatedAt: '2020-10-15T18:05:31.200Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2x7cTOsKWnyAogiA3OOCNb/25ba0d0b0385190d4c88bce9a2459f71/BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
                      details: {
                        size: 389068,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2mLUfuBvrIgQZO6IUSJAC9',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:17:32.861Z',
                      updatedAt: '2020-10-27T23:31:31.356Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'herolime2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2mLUfuBvrIgQZO6IUSJAC9/f13debde5ab79e7b9392bf030860ba44/pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
                        details: {
                          size: 615416,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'meFTELtmhz6PDXgBenWyp',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:17:54.380Z',
                      updatedAt: '2020-10-27T23:32:01.566Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'herolime3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/meFTELtmhz6PDXgBenWyp/d4a81315d1447f933af589262dbfc333/pajevictoriaxblendjet2xlifestyle-1391__1_.jpg?w=400',
                        details: {
                          size: 582928,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1391 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7MbZLJb5wIT2GW055p1XrO',
                      type: 'Asset',
                      createdAt: '2020-10-27T23:34:19.392Z',
                      updatedAt: '2020-10-27T23:34:19.392Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'herolime5',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7MbZLJb5wIT2GW055p1XrO/6ab405b7f49fb72c64602f665314f0b9/_DSC6844__2_.jpg?w=400',
                        details: {
                          size: 683654,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC6844 (2).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5tWiLAp7crpCJgwkSU5br5',
                type: 'Entry',
                createdAt: '2020-10-20T23:50:23.546Z',
                updatedAt: '2020-10-26T21:19:56.552Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'orange',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: 'XArTUNlrA3aNaVfgbQb5I',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:34.580Z',
                    updatedAt: '2020-10-20T23:50:17.641Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'orangeProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/XArTUNlrA3aNaVfgbQb5I/12a30ea4d491bd54cab2d55047b6afa7/BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
                      details: {
                        size: 349162,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '17ubFMpbMhAt1VgtZqKuyl',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:14.187Z',
                      updatedAt: '2020-10-26T01:20:55.154Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'orangeHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/17ubFMpbMhAt1VgtZqKuyl/a3d17ab705e9995b05116392b3c13e8f/pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
                        details: {
                          size: 164603,
                          image: { width: 1024, height: 683 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '404ONuvp37xrnAb5DG1o8x',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:21:52.147Z',
                      updatedAt: '2020-10-26T01:22:04.221Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'orangehero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/404ONuvp37xrnAb5DG1o8x/127122240831ba7369d34030bf8d2ff6/_DSC6619.jpg?w=400',
                        details: {
                          size: 718523,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC6619.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'PUV5mk8av6qexY7J5PnBy',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:21:18.603Z',
                      updatedAt: '2020-10-26T01:21:18.603Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'orangehero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/PUV5mk8av6qexY7J5PnBy/3ff31e0b5543f5b3bf511b334567c242/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                        details: {
                          size: 169951,
                          image: { width: 1024, height: 608 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '8jfC9TBJaQo89twBFnERH',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.511Z',
                      updatedAt: '2020-10-26T01:20:37.694Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'orangeHero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/8jfC9TBJaQo89twBFnERH/43538b324fc6c00061bcb448cbda3e23/pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
                        details: {
                          size: 900443,
                          image: { width: 3081, height: 2054 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7ib7KwE7vZC5qHDji4kTXs',
                type: 'Entry',
                createdAt: '2020-10-20T23:54:01.715Z',
                updatedAt: '2020-11-02T17:55:28.890Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 4,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'blush',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: 'BSPjcPUrluUkMmSsMklTk',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:32.632Z',
                    updatedAt: '2020-10-15T18:05:32.632Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/BSPjcPUrluUkMmSsMklTk/e22305a1e04989991cc5b721b76f4617/BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
                      details: {
                        size: 259249,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '26b9czvsgK57cj4oHzQcB1',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:13.423Z',
                      updatedAt: '2020-10-27T21:26:10.690Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blushHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/26b9czvsgK57cj4oHzQcB1/0501421791d3f08fc7ec4d8d00587068/pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
                        details: {
                          size: 769186,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6okMDTQBucpDibj0h6ZbII',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.507Z',
                      updatedAt: '2020-10-27T21:26:48.190Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blushHero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6okMDTQBucpDibj0h6ZbII/d8c6c8a62c1632d9104e638d1950fcf2/pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
                        details: {
                          size: 479378,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5aCmQ0oQcbUgH5LaQzs2v0',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:25:13.174Z',
                      updatedAt: '2020-10-27T21:27:09.528Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blushhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5aCmQ0oQcbUgH5LaQzs2v0/f6cef96590056c413b7cb14894e0c5f4/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                        details: {
                          size: 1025702,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'Zz1UGiAxJyhbbT64UNZAM',
                type: 'Entry',
                createdAt: '2020-10-21T00:06:37.581Z',
                updatedAt: '2020-10-28T02:10:23.438Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'skyBlue',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2UdNLcFpgjnKJgsX0waEtJ',
                    type: 'Asset',
                    createdAt: '2020-10-21T00:04:24.593Z',
                    updatedAt: '2020-10-21T00:04:24.593Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'skyBlueProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2UdNLcFpgjnKJgsX0waEtJ/c5bcd518328b37465ba80fd4e5de9b9a/BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
                      details: {
                        size: 378603,
                        image: { width: 3555, height: 1999 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1q7ANn7c1hGD6Z8icqYzC8',
                      type: 'Asset',
                      createdAt: '2020-10-28T00:16:46.674Z',
                      updatedAt: '2020-10-28T02:09:42.261Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'skybluehero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1q7ANn7c1hGD6Z8icqYzC8/efa5a5ab46cc5b5671ed29bb57798597/2pajevictoriaxblendjet2xlifestyle-767__1_.jpg?w=400',
                        details: {
                          size: 117903,
                          image: { width: 1080, height: 608 },
                        },
                        fileName:
                          '2pajevictoriaxblendjet2xlifestyle-767 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '4SDiXbBIXApjGZn45Vb4kr',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:29:32.917Z',
                      updatedAt: '2020-10-26T01:29:32.917Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'skybluehero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/4SDiXbBIXApjGZn45Vb4kr/a509aa39ae1ee3c046aecf528613ed8b/pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
                        details: {
                          size: 724747,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2XBNz9EvO54sasH49u0oEb',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:28:38.089Z',
                      updatedAt: '2020-10-26T01:28:38.089Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'skybluehero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2XBNz9EvO54sasH49u0oEb/eadb55a798db6fd1e6b68f20a5cf725d/_DSC8850.jpg?w=400',
                        details: {
                          size: 687648,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC8850.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2WX7OWu4BActTVUkwORaVW',
                type: 'Entry',
                createdAt: '2020-10-21T00:08:11.122Z',
                updatedAt: '2020-10-27T23:28:10.602Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'lemon',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2LKYrXqwX33PLWfkREaYJn',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.250Z',
                    updatedAt: '2021-03-29T23:28:16.937Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 4,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'lemonProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/2LKYrXqwX33PLWfkREaYJn/71ad308f4dbc71fbe35263645585e211/BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
                      details: {
                        size: 268731,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2tHnzQUI38TMpkCojuLuQ',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.639Z',
                      updatedAt: '2020-10-27T23:27:06.610Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 4,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'lemonHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2tHnzQUI38TMpkCojuLuQ/d67ea69fbfdeccc72a4574dd59ac13f5/pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
                        details: {
                          size: 414276,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '4liq4y6Yc2KhGCSlV1T8qK',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:42:22.153Z',
                      updatedAt: '2020-10-27T23:27:25.456Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'lemonhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/4liq4y6Yc2KhGCSlV1T8qK/a82e653d821adfe3313bfa8744ca8cc7/pajevictoriaxblendjet2xfalloutdoor2-62__1_.jpg?w=400',
                        details: {
                          size: 696446,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-62 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5gZ1okOWbmxBUNwPk0ZFiF',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:42:40.576Z',
                      updatedAt: '2020-10-27T23:27:48.351Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'lemonhero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5gZ1okOWbmxBUNwPk0ZFiF/8a532277d66658d5a04062006151c545/pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
                        details: {
                          size: 506004,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5L9brckty2b32Ji5JnQPnN',
                type: 'Entry',
                createdAt: '2020-10-21T00:10:06.170Z',
                updatedAt: '2020-10-28T00:16:22.157Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'seafoam',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '69LpvXulHbVwkImVsdMOYe',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.326Z',
                    updatedAt: '2020-10-21T00:09:55.190Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'seaFoamProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/69LpvXulHbVwkImVsdMOYe/ab80e6caa0c6ef2eb4c95372cf58a884/BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
                      details: {
                        size: 256023,
                        image: { width: 3555, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '74eT5edDTSvsv2u5o7AQh3',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:44:44.001Z',
                      updatedAt: '2020-10-26T20:50:59.513Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'seafoamhero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/74eT5edDTSvsv2u5o7AQh3/5040b436153fecac27a0c26b49951179/pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
                        details: {
                          size: 240231,
                          image: { width: 1024, height: 683 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5sHyXNkZscDpY94NvGr0dY',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:45:15.467Z',
                      updatedAt: '2020-10-28T00:05:49.136Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'seafoamhero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5sHyXNkZscDpY94NvGr0dY/b9f1f72d884ccffa4e963bd28e4c5609/pajevictoriaxblendjet2xfalloutdoor2-20__1_.jpg?w=400',
                        details: {
                          size: 510212,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xfalloutdoor2-20 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7JRMPZvPRJ2g5AahBJGTnG',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:45:39.083Z',
                      updatedAt: '2020-10-26T20:51:24.700Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'seafoamhero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7JRMPZvPRJ2g5AahBJGTnG/540ffece187bfc61f9aa854930d963e9/_DSC8972.jpg?w=400',
                        details: {
                          size: 562506,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC8972.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2Aq8LavbRyKacQRXsfqfo6',
                type: 'Entry',
                createdAt: '2020-10-21T00:11:30.760Z',
                updatedAt: '2021-09-08T21:16:16.911Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 8,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'white',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '1cyBrTKLyFH24NmUWfALFG',
                    type: 'Asset',
                    createdAt: '2020-10-15T18:05:31.218Z',
                    updatedAt: '2020-10-21T00:10:35.945Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'whiteProductImage',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/1cyBrTKLyFH24NmUWfALFG/a0299e789458bac829eb3fc708d087b2/BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
                      details: {
                        size: 298760,
                        image: { width: 3555, height: 1999 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2KFMzvIMcKUZiif2pLZHTW',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.561Z',
                      updatedAt: '2021-09-07T18:51:53.616Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 5,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whiteHero1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2KFMzvIMcKUZiif2pLZHTW/48a49dd116775b37aca36fd33ab5ef50/PajeVictoriaxblendjetxbanners2-3__1_.jpg?w=400',
                        details: {
                          size: 1861863,
                          image: { width: 3600, height: 2522 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxbanners2-3 (1).jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2VjSAedOviimHX7fDM1Kag',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:32:59.909Z',
                      updatedAt: '2021-09-08T21:04:33.844Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whitehero2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2VjSAedOviimHX7fDM1Kag/47a4bf9230904928f2710ff2feb79add/PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
                        details: {
                          size: 1099099,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7DFXRTHvnMWxMSKHyaUQ0H',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:33:49.603Z',
                      updatedAt: '2020-10-26T01:33:49.603Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whitehero3',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7DFXRTHvnMWxMSKHyaUQ0H/dd2ccfd1193e4913e8e610b44501877e/_DSC8929.jpg?w=400',
                        details: {
                          size: 723455,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC8929.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7s7i3N3YVOZqObN3h9iesR',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:36:24.374Z',
                      updatedAt: '2020-10-28T00:08:27.686Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whitehero4',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7s7i3N3YVOZqObN3h9iesR/ff15cd0cef25768a51e01ea6e958b1df/pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
                        details: {
                          size: 571178,
                          image: { width: 2300, height: 1150 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2W0Pmb5kc12sFa4lcsbdB4',
                type: 'Entry',
                createdAt: '2020-10-23T15:10:47.165Z',
                updatedAt: '2020-10-27T23:44:13.108Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'ocean',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '6GMprp75HM0swouzUoy02Y',
                    type: 'Asset',
                    createdAt: '2020-10-23T15:08:48.739Z',
                    updatedAt: '2021-02-19T18:01:00.850Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 3,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'oceanProductImage',
                    description: 'BlendJet 2 in Ocean Color with Fruits Inside',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/6GMprp75HM0swouzUoy02Y/76b5c26e0897bd5f9a3b7514015ca558/BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
                      details: {
                        size: 334569,
                        image: { width: 3556, height: 2000 },
                      },
                      fileName:
                        'BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5wbj2sN47L8BrfG5B8GArY',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:39:07.029Z',
                      updatedAt: '2021-02-19T17:58:32.639Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'oceanhero3',
                      description: 'BlendJet 2 in Ocean Color',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5wbj2sN47L8BrfG5B8GArY/284a5236b60f4d9493bea9bcec6dfc3f/_DSC6782.jpg?w=400',
                        details: {
                          size: 783720,
                          image: { width: 2048, height: 1365 },
                        },
                        fileName: '_DSC6782.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7BUIqg4Qys6ZzftY4ki3Oa',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:38:37.297Z',
                      updatedAt: '2021-02-19T17:58:51.292Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'oceanhero2',
                      description: 'BlendJet 2 in Five Different Colors',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7BUIqg4Qys6ZzftY4ki3Oa/1df11c2544e6bb5143d73a1f25da14b6/pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
                        details: {
                          size: 635875,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5PwJV6YENKw3d98SxB2Mc6',
                      type: 'Asset',
                      createdAt: '2020-10-20T22:30:12.547Z',
                      updatedAt: '2021-02-19T17:59:11.574Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 7,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'oceanhero1',
                      description: 'BlendJet 2 with Delicious Smoothie Inside',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5PwJV6YENKw3d98SxB2Mc6/b88f88de7c307c84ca86248f87f0c75b/pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
                        details: {
                          size: 862449,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6QWmbb7SZx0JYA6vICFFfT',
                      type: 'Asset',
                      createdAt: '2020-10-26T01:39:24.161Z',
                      updatedAt: '2021-02-19T17:59:23.382Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'oceanhero4',
                      description:
                        'BlendJet 2 in Five Different Colors with Delicious Smoothies Inside',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6QWmbb7SZx0JYA6vICFFfT/1ba4610765250368cfbb720470d5b6eb/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                        details: {
                          size: 169951,
                          image: { width: 1024, height: 608 },
                        },
                        fileName:
                          'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4v5dfM84uMwuGJT7UsjPET',
                type: 'Entry',
                createdAt: '2021-04-14T01:30:05.197Z',
                updatedAt: '2021-09-06T22:28:05.680Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 6,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'geode',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '1yoFXhwz1ITFEcRCiOvsTG',
                    type: 'Asset',
                    createdAt: '2021-04-14T02:06:08.997Z',
                    updatedAt: '2021-04-14T02:06:08.997Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/1yoFXhwz1ITFEcRCiOvsTG/da0ca44752e13518647ad0d5e38c555f/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
                      details: {
                        size: 316225,
                        image: { width: 2100, height: 1181 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '27iyFoieHUMptHlWnxSY1h',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:47:43.683Z',
                      updatedAt: '2021-04-14T01:47:43.683Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'geode1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/27iyFoieHUMptHlWnxSY1h/c0f9c1cdbde23671d532c0726d6f7dbf/PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
                        details: {
                          size: 1233861,
                          image: { width: 3600, height: 1605 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3f2PSBjqAWeOhnnVi61OmR',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:49:14.996Z',
                      updatedAt: '2021-04-14T01:55:02.644Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'geode2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3f2PSBjqAWeOhnnVi61OmR/7e8bf4280a369ebd7cdadbf7ac8b3f28/PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
                        details: {
                          size: 597443,
                          image: { width: 3600, height: 1639 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'hVcdFzbLuIcdTWWWsuilh',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:28:01.730Z',
                      updatedAt: '2021-09-06T22:28:01.730Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'geode3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/hVcdFzbLuIcdTWWWsuilh/61f353e689d694ccec1b3df2954d6892/PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
                        details: {
                          size: 528776,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5kTJN2HGylqkkeP4g83Izg',
                type: 'Entry',
                createdAt: '2021-04-14T01:30:42.352Z',
                updatedAt: '2021-09-06T22:13:10.138Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 6,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'walnut',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '7ybdU4G7GlIHIdWlDF2Kdn',
                    type: 'Asset',
                    createdAt: '2021-04-14T02:06:59.550Z',
                    updatedAt: '2021-04-14T02:06:59.550Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/7ybdU4G7GlIHIdWlDF2Kdn/97917476a81ffbe7a3909ac97f4ff04d/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
                      details: {
                        size: 361614,
                        image: { width: 2100, height: 1181 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2NQSwZzIWzMRMwMhTbyrj2',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:51:16.720Z',
                      updatedAt: '2021-04-14T01:51:16.720Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'walnut1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2NQSwZzIWzMRMwMhTbyrj2/2f5ad3551a1ba00e6b146033304b5134/PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
                        details: {
                          size: 1965831,
                          image: { width: 3600, height: 2067 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '665IrZasJ9phcwHvCuIENE',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:52:26.339Z',
                      updatedAt: '2021-04-14T01:52:26.339Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'walnut2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/665IrZasJ9phcwHvCuIENE/11fc42d68b072feca191fc762be16e07/PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
                        details: {
                          size: 536989,
                          image: { width: 3600, height: 2167 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1I9QtYO3PCrP5ux31mtBbS',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:12:46.849Z',
                      updatedAt: '2021-09-06T22:12:46.849Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'walnut3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1I9QtYO3PCrP5ux31mtBbS/6d8abdc131091a76a288fcfb28da3785/PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
                        details: {
                          size: 456276,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5sxUHmIz7qBE5gLRmPZMgQ',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:13:05.674Z',
                      updatedAt: '2021-09-06T22:13:05.674Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'walnut4',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5sxUHmIz7qBE5gLRmPZMgQ/6c9c411a5fc04f420528d23636dc2418/PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
                        details: {
                          size: 504513,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'djzncDANJ3sw2tk0RPL8K',
                type: 'Entry',
                createdAt: '2021-04-14T01:31:02.545Z',
                updatedAt: '2021-09-06T22:14:50.217Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'winterCamo',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '6NBI2Bxz1jOCOIEbzb9rgW',
                    type: 'Asset',
                    createdAt: '2021-04-14T02:07:22.317Z',
                    updatedAt: '2021-06-12T21:16:38.792Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/6NBI2Bxz1jOCOIEbzb9rgW/6bd0d16201471a464cdc23663b264193/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
                      details: {
                        size: 3611764,
                        image: { width: 5456, height: 3069 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6ksM5fEYyru3eec56Uz1S2',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:54:00.130Z',
                      updatedAt: '2021-04-14T01:54:00.130Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'wintercamo1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6ksM5fEYyru3eec56Uz1S2/e9409dc6666da609d23e48004360de32/PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
                        details: {
                          size: 741677,
                          image: { width: 3600, height: 2155 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3JCNw4uXuTKNzL9nm3QDEa',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:54:30.507Z',
                      updatedAt: '2021-04-14T01:54:30.507Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'wintercamo2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3JCNw4uXuTKNzL9nm3QDEa/230a9a1ce93adfdf3230afd8bc1e2e02/PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
                        details: {
                          size: 1675714,
                          image: { width: 3600, height: 1821 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '47rc5cChawgDgQvaRfftSS',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:14:27.194Z',
                      updatedAt: '2021-09-06T22:14:27.194Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'wintercamo3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/47rc5cChawgDgQvaRfftSS/481f1d3cb737ebf5377abf8132db2583/PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
                        details: {
                          size: 708582,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '36EA6239OdBxydk4pZ6EDs',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:14:46.645Z',
                      updatedAt: '2021-09-06T22:14:46.645Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'wintercamo4',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/36EA6239OdBxydk4pZ6EDs/54c7c597cec80a64b6eebbe6bded6062/PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
                        details: {
                          size: 555064,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '46znl68bCDzA8ikkjDXe4y',
                type: 'Entry',
                createdAt: '2021-08-28T00:24:38.717Z',
                updatedAt: '2021-09-06T22:16:24.829Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'urbanCamo',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5kyTAhTfvKT7ciIRmsmRdB',
                    type: 'Asset',
                    createdAt: '2021-08-28T00:24:32.904Z',
                    updatedAt: '2021-08-28T00:24:32.904Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'urbanCamo1',
                    description: '',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/5kyTAhTfvKT7ciIRmsmRdB/3f5529a815efe5cb0dd596e6fe685062/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
                      details: {
                        size: 141748,
                        image: { width: 2101, height: 1181 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '2Q9kkII9EIz1AxIHFBJ5Gb',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:15:30.362Z',
                      updatedAt: '2021-09-06T22:15:30.362Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'urbancamo1',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/2Q9kkII9EIz1AxIHFBJ5Gb/30b47776dfac3ff0f9d514a3668b3a22/PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
                        details: {
                          size: 367187,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '61Vb0TFePAhWmovnL1jMsm',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:15:52.084Z',
                      updatedAt: '2021-09-06T22:15:52.084Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'urbancamo3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/61Vb0TFePAhWmovnL1jMsm/2d2abf618434d0dd9474a827d2201fb5/PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
                        details: {
                          size: 801777,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '5YW0mmzROyW5dwtl27e5fL',
                      type: 'Asset',
                      createdAt: '2021-08-28T00:24:13.878Z',
                      updatedAt: '2021-09-06T22:16:17.945Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'urbancamo2',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/5YW0mmzROyW5dwtl27e5fL/d6a212afc185c88c761a636401a4ea25/PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
                        details: {
                          size: 1301115,
                          image: { width: 3600, height: 2400 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6VtLyFsN9aiSgvoHIubyxt',
                type: 'Entry',
                createdAt: '2021-06-09T15:37:56.525Z',
                updatedAt: '2021-09-06T22:21:20.722Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'woodlandCamo',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '265ywGeHUuu9LPBhNVw4jp',
                    type: 'Asset',
                    createdAt: '2021-06-09T19:24:53.355Z',
                    updatedAt: '2021-06-12T03:23:57.496Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'blendjetwoodlandcamo',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/265ywGeHUuu9LPBhNVw4jp/4abab1182c88382af63c1f90143ea67b/BLENDJET-WOODLAND-CAMO.jpg?w=400',
                      details: {
                        size: 573054,
                        image: { width: 2100, height: 1181 },
                      },
                      fileName: 'BLENDJET-WOODLAND-CAMO.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '3kgfmWm7FSh0mb281oFrB2',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:21:14.347Z',
                      updatedAt: '2021-09-06T22:21:14.347Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'woodlandcamo3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/3kgfmWm7FSh0mb281oFrB2/ee3c5b4f0a2775e29f5d45aee025ef0d/PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
                        details: {
                          size: 635730,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6u7D58bVlU7k9Mh3RCpaMc',
                      type: 'Asset',
                      createdAt: '2021-06-09T15:37:20.185Z',
                      updatedAt: '2021-06-09T15:37:20.185Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'woodlandcamo1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6u7D58bVlU7k9Mh3RCpaMc/b4fb07bf5822e5fa4074f5ab717717d6/PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
                        details: {
                          size: 551980,
                          image: { width: 3600, height: 1892 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '4cyBGS8N23g2eAWQb86Hhk',
                      type: 'Asset',
                      createdAt: '2021-06-09T15:37:51.998Z',
                      updatedAt: '2021-06-09T15:37:51.998Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'woodlandcamo2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/4cyBGS8N23g2eAWQb86Hhk/3fcfc8f4ce06f75ab3f2b6d827d5afb5/PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
                        details: {
                          size: 690522,
                          image: { width: 3600, height: 1884 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4vEw2mjKrtMnWjPzohGCyg',
                type: 'Entry',
                createdAt: '2021-04-14T01:30:27.840Z',
                updatedAt: '2021-09-06T22:22:41.979Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'leopard',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5WniqfKvODQZeQHL23bQKA',
                    type: 'Asset',
                    createdAt: '2021-04-23T04:55:51.492Z',
                    updatedAt: '2021-04-23T04:55:51.492Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/5WniqfKvODQZeQHL23bQKA/2e2011147bec337436f9429952b3fe2f/BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
                      details: {
                        size: 453342,
                        image: { width: 2100, height: 1181 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6suoBmKvpCesIoSMvaFlCS',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:22:32.555Z',
                      updatedAt: '2021-10-04T22:58:43.752Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'leopard4',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6suoBmKvpCesIoSMvaFlCS/0afb7cd31fd78662c12ffb5c0971b6e2/PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
                        details: {
                          size: 856053,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '4YmrrFVHK8hK6njcum4XHN',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:22:12.869Z',
                      updatedAt: '2021-10-04T23:59:26.089Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 3,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'leopard3',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/4YmrrFVHK8hK6njcum4XHN/769e8680029d9cf36118f69d615ab2ff/PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
                        details: {
                          size: 456648,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '58i8SIRZkIPavEZpGbJnEC',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:50:05.053Z',
                      updatedAt: '2021-04-14T01:50:05.053Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'leopard1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/58i8SIRZkIPavEZpGbJnEC/d0996a509b1f475d4e12c4743b2e1ef7/PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
                        details: {
                          size: 636591,
                          image: { width: 3600, height: 1913 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1RRbrEcbJrJtJMT1bzU8Gc',
                      type: 'Asset',
                      createdAt: '2021-04-14T01:50:35.937Z',
                      updatedAt: '2021-04-14T01:50:35.937Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'leopard2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1RRbrEcbJrJtJMT1bzU8Gc/32f7709489d88359d62f08db914d3360/PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
                        details: {
                          size: 847510,
                          image: { width: 3093, height: 1324 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5MuvWn0q2NHaoyHGSjZUT9',
                type: 'Entry',
                createdAt: '2021-08-28T00:26:55.920Z',
                updatedAt: '2021-09-06T22:23:34.772Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'blackMarble',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '3LXO4YTDXsI0Ua8UQvpprm',
                    type: 'Asset',
                    createdAt: '2021-08-28T00:26:23.866Z',
                    updatedAt: '2021-08-28T00:26:23.866Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'blackMarble1',
                    description: '',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/3LXO4YTDXsI0Ua8UQvpprm/eca43c4b51f2da8c7e0fbaff08296ff3/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
                      details: {
                        size: 217015,
                        image: { width: 2100, height: 1182 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1OFuyVQ9McRH3GeuHkJEZN',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:23:12.854Z',
                      updatedAt: '2021-09-06T22:23:12.854Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blackmarble1',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1OFuyVQ9McRH3GeuHkJEZN/38e30e3f1daf14c5acb9febb1737d8c3/PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
                        details: {
                          size: 567164,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName: 'PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '1jVxa3NuYfPmkGJDe7fI5d',
                      type: 'Asset',
                      createdAt: '2021-08-28T00:26:52.508Z',
                      updatedAt: '2021-09-06T22:23:30.988Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'blackMarble2',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/1jVxa3NuYfPmkGJDe7fI5d/b0c89950154281ed223f8f8432a530bf/PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
                        details: {
                          size: 758278,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'VYOr3oLHv7BnJEbXVCuXy',
                type: 'Entry',
                createdAt: '2021-07-15T00:34:33.147Z',
                updatedAt: '2021-07-16T01:22:52.470Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'whiteMarble',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '35H5SZMMjM4uKfesW8nEKL',
                    type: 'Asset',
                    createdAt: '2021-07-15T00:33:24.367Z',
                    updatedAt: '2021-07-16T01:51:59.667Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 3,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'whitemarble',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/35H5SZMMjM4uKfesW8nEKL/e2303be6ac929ed1d0ebb2b343096c11/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
                      details: {
                        size: 247522,
                        image: { width: 2100, height: 1181 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6X8hQXn1NuJtLlVU9Zj5cK',
                      type: 'Asset',
                      createdAt: '2021-07-15T00:33:56.277Z',
                      updatedAt: '2021-07-15T00:33:56.277Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whitemarble1',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6X8hQXn1NuJtLlVU9Zj5cK/f9335973a0f5f3e5946f2e12ffbfd83c/PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
                        details: {
                          size: 559362,
                          image: { width: 3600, height: 1788 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '6N1l5yHt8uEqJaUXeTRhw1',
                      type: 'Asset',
                      createdAt: '2021-07-15T00:34:26.083Z',
                      updatedAt: '2021-07-15T00:34:26.083Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'whitemarble2',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/6N1l5yHt8uEqJaUXeTRhw1/1416505789314b0be5bf995c649b94b4/PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
                        details: {
                          size: 628357,
                          image: { width: 3600, height: 1827 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '76IUTMGondUj1CyeicRIhr',
                type: 'Entry',
                createdAt: '2021-08-28T00:27:52.395Z',
                updatedAt: '2021-09-06T22:24:34.111Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productVariant',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                title: 'carbonFiber',
                productImage: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '31EF2F46eAs9fMdp25IPD4',
                    type: 'Asset',
                    createdAt: '2021-08-28T00:27:48.529Z',
                    updatedAt: '2021-08-28T00:27:48.529Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'carbonFiber1',
                    description: '',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/31EF2F46eAs9fMdp25IPD4/8e24e42c7b3753ceead096eb5b0d2911/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
                      details: {
                        size: 204801,
                        image: { width: 2001, height: 1125 },
                      },
                      fileName:
                        'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
                heroImages: [
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: '7CvKdqoVuUn81NoIShxZJj',
                      type: 'Asset',
                      createdAt: '2021-08-28T00:28:11.377Z',
                      updatedAt: '2021-09-06T22:24:13.803Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 2,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'carbonFiber2',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/7CvKdqoVuUn81NoIShxZJj/36396f42e85a02fbd1b8b9c9b60d1338/PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
                        details: {
                          size: 593524,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                  {
                    metadata: { tags: [] },
                    sys: {
                      space: {
                        sys: {
                          type: 'Link',
                          linkType: 'Space',
                          id: 'strhx3d94c40',
                        },
                      },
                      id: 'znJEKWUSQCg8AsOprdpuO',
                      type: 'Asset',
                      createdAt: '2021-09-06T22:24:29.270Z',
                      updatedAt: '2021-09-06T22:24:29.270Z',
                      environment: {
                        sys: {
                          id: 'master',
                          type: 'Link',
                          linkType: 'Environment',
                        },
                      },
                      revision: 1,
                      locale: 'en-US',
                    },
                    fields: {
                      title: 'carbonfiber1',
                      description: '',
                      file: {
                        url: '//images.ctfassets.net/strhx3d94c40/znJEKWUSQCg8AsOprdpuO/bdda58967c722e196fd3be7e60afdaa7/PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
                        details: {
                          size: 723918,
                          image: { width: 3600, height: 1800 },
                        },
                        fileName:
                          'PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
                        contentType: 'image/jpeg',
                      },
                    },
                  },
                ],
              },
            },
          ],
          headerText: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value: 'BLEND EVERYWHERE',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'heading-2',
              },
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      'Imagine the freedom of being able to go anywhere and blend your favorite smoothies, shakes, margaritas, or baby food without the limitations of a regular blender.',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          productDescription: [
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'llDIFcf6OtlZe12iBImSX',
                type: 'Entry',
                createdAt: '2020-10-26T03:29:01.478Z',
                updatedAt: '2021-06-12T21:39:39.650Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 8,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: ' The Next-Gen Blender',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'BlendJet 2 serves up big blender power on the go. We created the BlendJet 2 portable blender so you can make anything you want, anywhere in the world — from a mountaintop to your kitchen countertop. It’s easy and convenient to use at home, at work, outdoors, at the gym, in the car, at the beach, on vacation or wherever the day takes you.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4ETIUGqWUCyXMWv3zofTBb',
                    type: 'Asset',
                    createdAt: '2020-10-27T07:01:49.502Z',
                    updatedAt: '2020-10-27T07:01:49.502Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '1 NEXT-GEN',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/4ETIUGqWUCyXMWv3zofTBb/50f58964b5304264c95977f219e62f8d/1_NEXT-GEN.mp4',
                      details: { size: 1434620 },
                      fileName: '1_NEXT-GEN.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
                externalVideoUrl:
                  'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/1_NEXT-GEN.mp4?v=1614333788',
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2xQyIQdkfBC0Pi8LaqeTwU',
                type: 'Entry',
                createdAt: '2020-10-26T03:29:58.169Z',
                updatedAt: '2021-06-09T00:59:26.706Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 11,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Patented TurboJet Technology',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Traditional blenders only use their blades to blend, but we invented a new method that makes every other blender obsolete. Our secret weapon? BlendJet 2’s stainless steel blades are offset from the center of the base, which creates a tornado effect that blasts ingredients into the back of the jar 275 times per second, resulting in dramatically better blending. This technology — combined with a more powerful motor and doubled battery capacity — makes BlendJet 2 five times more powerful than BlendJet One.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4d7J1KC3AgdNbbl3dYQQDg',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:11.997Z',
                    updatedAt: '2020-10-26T13:28:11.997Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '2 TURBOJET',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/4d7J1KC3AgdNbbl3dYQQDg/1aca8b7f6734d5f1ee246bdf3bc6f46b/2_TURBOJET.mp4',
                      details: { size: 1649868 },
                      fileName: '2_TURBOJET.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
                externalVideoUrl:
                  'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/2_TURBOJET.mp4?v=1623200162',
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5jdq1ZZa3PWpn2ec3Vjv6Q',
                type: 'Entry',
                createdAt: '2020-10-26T03:31:14.249Z',
                updatedAt: '2021-10-04T16:08:30.684Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 9,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Perfect for Everything',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'BlendJet 2 makes smoothie-bar-quality beverages, silky-smooth protein shakes, top-shelf mixed drinks and creamy frozen lattes, plus milkshakes, slushies, baby food, dips, dressings, sauces, and so much more. We’ll send a new recipe video straight to your inbox each week to inspire creativity and ensure you get the most out of your BlendJet 2.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5VOTNkK34QBn2YHc36lCJu',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.041Z',
                    updatedAt: '2020-10-26T13:28:12.041Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '3 PERFECT',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/5VOTNkK34QBn2YHc36lCJu/1c8d8350d64adfc653ff9ace4132df95/3_PERFECT.mp4',
                      details: { size: 1455477 },
                      fileName: '3_PERFECT.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
                externalVideoUrl:
                  'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/3_PERFECT.mp4?v=1614333788',
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4sOOQqQT48C4IYBVBTDGSC',
                type: 'Entry',
                createdAt: '2020-10-26T03:35:06.737Z',
                updatedAt: '2021-10-04T16:08:52.405Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Shake Up Your Routine',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'BlendJet 2 is more than a blender — it’s a way of life. It helps you live healthier while keeping your energy level sky-high. Make breakfast a breeze, reinvent lunch, fuel your workout or chill with a frozen margarita, all while saving time and money.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '3TdX6oIlK7Cvfke16RlaF3',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:11.993Z',
                    updatedAt: '2020-10-30T19:50:46.152Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '4 SHAKE-UP-ROUTINE',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/3TdX6oIlK7Cvfke16RlaF3/1dae50999af2bc423919a20a22521890/4_SHAKE-UP-ROUTINE.mp4',
                      details: { size: 1301406 },
                      fileName: '4_SHAKE-UP-ROUTINE.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
                externalVideoUrl:
                  'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/4_SHAKE-UP-ROUTINE.mp4?v=1614333788',
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '1Nly2tk1xXXiiAvAf1jovw',
                type: 'Entry',
                createdAt: '2020-10-26T03:37:55.224Z',
                updatedAt: '2020-10-28T17:29:39.789Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 4,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'USB-C Rechargeable',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Get 15+ blends from just one hour of charging with any USB port. The BlendJet 2 portable blender is equipped with a water-resistant USB-C port that makes it easier than ever to power up. And the included cable is smartly reversible, so there’s no wrong way to plug it in.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '2YGh7omx6veErwMCFGCiok',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:11.995Z',
                    updatedAt: '2020-10-26T13:28:11.995Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '5 USB-C',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/2YGh7omx6veErwMCFGCiok/79d7bb88708f3107e1d20777bced79a3/5_USB-C.mp4',
                      details: { size: 418015 },
                      fileName: '5_USB-C.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4yu9AabSdRkJYghZ0GYOjP',
                type: 'Entry',
                createdAt: '2020-10-26T03:38:48.475Z',
                updatedAt: '2020-10-26T13:34:04.243Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Self-Cleaning',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Say goodbye to the most annoying part of blending. Bulky kitchen blenders feel impossible to clean — especially when you’re in a hurry — but BlendJet 2 cleans itself. Just add a drop of soap, a bit of water, blend, and you’re ready for your next blended creation.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4xypYvB3PeguBsbCcDhZc5',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.164Z',
                    updatedAt: '2020-10-26T13:28:12.164Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '6 SELF-CLEANING',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/4xypYvB3PeguBsbCcDhZc5/e351cb1b3b0b2039c063c770b8433c63/6_SELF-CLEANING.mp4',
                      details: { size: 1483137 },
                      fileName: '6_SELF-CLEANING.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2k8BKoKMrwSRorMtUF8YWE',
                type: 'Entry',
                createdAt: '2020-10-26T03:39:55.650Z',
                updatedAt: '2020-10-26T13:34:24.685Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: '16 Crush-Worthy Colors',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'BlendJet 2 comes in 16 vibrant colors with a design that complements your style. It looks great on your desk or countertop and is a positive reminder to enjoy something delicious and nutritious every day.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '6NgswuIGpIwh7oVu4Y88lf',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.533Z',
                    updatedAt: '2020-10-26T13:28:12.533Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '7 COLORS',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/6NgswuIGpIwh7oVu4Y88lf/439d9e70118f4ed8b9bd43829fc95131/7_COLORS.mp4',
                      details: { size: 1156094 },
                      fileName: '7_COLORS.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '46aa9LgM6Q6icnEAglGuzc',
                type: 'Entry',
                createdAt: '2020-10-26T03:40:49.324Z',
                updatedAt: '2020-10-26T13:34:40.689Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Food Processing with Pulse Mode',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'With a double-press of the power button, your BlendJet 2 portable blender transforms into a powerful food processor that pulverizes veggies, fruits, nuts and more. You can pulse your way to tasty guacamole, pesto, salsa and hummus in mere seconds.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5e8btB2FMJAqKgTDhZDTNi',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:15.098Z',
                    updatedAt: '2020-10-26T13:28:15.098Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '8 FOOD-PROCESSING',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/5e8btB2FMJAqKgTDhZDTNi/960c623d2841652449c0c2dff6da52f1/8_FOOD-PROCESSING.mp4',
                      details: { size: 1258321 },
                      fileName: '8_FOOD-PROCESSING.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2r0kqNEzhg7BXRXNk8eZL',
                type: 'Entry',
                createdAt: '2020-10-26T03:41:47.243Z',
                updatedAt: '2020-10-26T13:35:05.821Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Forget the Measuring Cup',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Measurement markings on the jar make it easy to follow our mouth-watering recipes or to create your own. With its 16 oz capacity, BlendJet 2 holds 33% more than the original BlendJet in a sleek and compact design.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4HAqXL8ep4AYCMW9Opatgu',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.611Z',
                    updatedAt: '2020-10-26T13:28:12.611Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '9 MEASURING',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/4HAqXL8ep4AYCMW9Opatgu/7d4f4686fea50a50e54886d8a9c34749/9_MEASURING.mp4',
                      details: { size: 710968 },
                      fileName: '9_MEASURING.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'zAXHtdSLVxPmfDuZOIihm',
                type: 'Entry',
                createdAt: '2020-10-26T03:42:21.346Z',
                updatedAt: '2020-10-26T13:35:27.302Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Water-Resistant & Ready for Adventure',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'BlendJet 2 is also water-resistant, so you don’t have to worry about getting liquid in the USB-C port or accidentally submerging your BlendJet 2 in the sink or pool. It’s the ideal blender for mermaids.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: 'ImUTstv4VoCUbEoPOjc7D',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.522Z',
                    updatedAt: '2020-11-06T21:23:53.735Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 3,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '10 WATER-RESISTANT',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/ImUTstv4VoCUbEoPOjc7D/9b499c8e7d395ccba6f32dba8c432cfa/10_WATER-RESISTANT.mp4',
                      details: { size: 1157519 },
                      fileName: '10_WATER-RESISTANT.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7zEC0jQec7T69hzANM1uIg',
                type: 'Entry',
                createdAt: '2020-10-26T03:42:59.754Z',
                updatedAt: '2021-06-12T22:27:27.593Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 7,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Quiet Enough for a Library',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'We engineered BlendJet 2 to deliver incredible power without the jet-engine sound made by clunky kitchen blenders. In fact, the BlendJet 2 portable blender is so quiet, you can use it during late-night study sessions or early in the morning without waking up your household.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '3M3qI22QfXOBEsBttGvRRU',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.550Z',
                    updatedAt: '2020-10-27T02:38:52.853Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '11 QUIET',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/3M3qI22QfXOBEsBttGvRRU/6e7ada9aaa369d86ca09e1ba45098b0e/11_QUIET.mp4',
                      details: { size: 422173 },
                      fileName: '11_QUIET.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2ZXraW5F4LJHmPyDnMOU1M',
                type: 'Entry',
                createdAt: '2020-10-26T03:43:38.005Z',
                updatedAt: '2020-10-28T17:31:21.419Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 4,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'Lock Your Blender',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Shift into Lock Mode to prevent accidental blending, and confidently toss your BlendJet 2 portable blender into your backpack or purse, or sip straight from the jar.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4vLiYBk7LLqwjt8kiIAiPv',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.509Z',
                    updatedAt: '2020-10-27T02:35:54.919Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '12 LOCK',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/4vLiYBk7LLqwjt8kiIAiPv/54624fdfe841471af0a4f10ee18cd871/12_LOCK.mp4',
                      details: { size: 1312186 },
                      fileName: '12_LOCK.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '43CFdTYcdEZfgMobGIoJzu',
                type: 'Entry',
                createdAt: '2020-10-26T03:48:26.435Z',
                updatedAt: '2021-06-12T22:23:39.659Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'No Fridge? No Problem!',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'Make healthy happen on the run with our nutrient-rich JetPack® Ready-to-Blend Smoothies. Simply add milk or water to enjoy a creamy, delicious smoothie whenever, wherever. JetPacks are proudly made in California with only the highest-quality ingredients and no artificial anything. Add JetPack to your order today.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5Zagb2GIFS9cDdy3DkEXVF',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:15.091Z',
                    updatedAt: '2020-10-26T13:28:15.091Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '13 JETPACK',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/5Zagb2GIFS9cDdy3DkEXVF/0c640715b721cce88ec9149b90e3100f/13_JETPACK.mp4',
                      details: { size: 1042176 },
                      fileName: '13_JETPACK.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5byBqzFJ4aUAX3eHXOfdOv',
                type: 'Entry',
                createdAt: '2020-10-26T03:48:59.181Z',
                updatedAt: '2021-06-12T22:32:40.241Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'On a Mission to Improve Lives',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'BlendJet was born after our co-founder suffered a debilitating injury and smoothies and shakes became a key part of his recovery process. After he (thankfully!) made a full recovery, he felt compelled to find a way to help others live longer and healthier lives. Our mission is to make the healthy choice the most convenient choice for all.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '5DLdkUNBkZyGgOgNdCEWno',
                    type: 'Asset',
                    createdAt: '2020-10-26T23:11:49.695Z',
                    updatedAt: '2020-10-26T23:11:49.695Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'on a mission',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/5DLdkUNBkZyGgOgNdCEWno/cc0be5dd0a1346edcf4239d0cff11b42/About_us_hero_image_TWO.jpg?w=400',
                      details: {
                        size: 46687,
                        image: { width: 720, height: 480 },
                      },
                      fileName: 'About us hero image TWO.jpg?w=400',
                      contentType: 'image/jpeg',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4gfkfufyvXJuYnr8agLYpW',
                type: 'Entry',
                createdAt: '2020-10-26T03:49:25.857Z',
                updatedAt: '2021-06-12T22:37:47.952Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'FREE 2-Day Shipping',
                text: {
                  nodeType: 'document',
                  data: {},
                  content: [
                    {
                      nodeType: 'paragraph',
                      content: [
                        {
                          nodeType: 'text',
                          value:
                            'We offer free express shipping from our headquarters just east of San Francisco in Concord, California. We take great pride in handling all of our own research and development, design, manufacturing, shipping and customer service.',
                          marks: [],
                          data: {},
                        },
                      ],
                      data: {},
                    },
                  ],
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '7AkyQEwK3vxdaTYV7cWV3z',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:12.540Z',
                    updatedAt: '2020-10-26T23:25:38.113Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 2,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '15 SHIPPING',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/7AkyQEwK3vxdaTYV7cWV3z/23060e99d9806b2aae817896818ac76b/15_SHIPPING.mp4',
                      details: { size: 941955 },
                      fileName: '15_SHIPPING.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4yZequKZ3wg24hHRQvQ68H',
                type: 'Entry',
                createdAt: '2020-10-26T03:50:09.114Z',
                updatedAt: '2020-10-26T13:39:13.198Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: '30-Day Money Back Guarantee',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          marks: [],
                          value:
                            'Don’t be fooled by imitators. Nothing else comes close to the quality, power and innovation of the BlendJet 2 portable blender. We guarantee you’ll love it, or your money back.',
                          nodeType: 'text',
                        },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '7h6IjVhDWkzitazC46dkrf',
                    type: 'Asset',
                    createdAt: '2020-10-26T13:28:11.975Z',
                    updatedAt: '2020-10-26T13:28:11.975Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: '16 MISSION',
                    file: {
                      url: '//videos.ctfassets.net/strhx3d94c40/7h6IjVhDWkzitazC46dkrf/24596eea329bc85369bb92c49cea984b/16_MISSION.mp4',
                      details: { size: 936948 },
                      fileName: '16_MISSION.mp4',
                      contentType: 'video/mp4',
                    },
                  },
                },
              },
            },
            {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '1MNMzoytdJ6UBkyndnGDfM',
                type: 'Entry',
                createdAt: '2020-10-26T03:53:03.207Z',
                updatedAt: '2021-06-12T21:41:47.207Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 5,
                contentType: {
                  sys: {
                    type: 'Link',
                    linkType: 'ContentType',
                    id: 'productDescriptionSection',
                  },
                },
                locale: 'en-US',
              },
              fields: {
                heading: 'DETAILS & SPECS',
                text: {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Compact Size: 9” x 3” (230mm x 76mm)',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Product Weight: 1.34 lb (.61 kg)',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    'Jar w/ Measurement Markings: 16 oz (475 mL)',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: '15+ Blends Per 1 Hour Charge',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Water-resistant USB-C Port',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: '4000 mAh Rechargeable Battery',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value:
                                    '5V Electric Motor Spins 275 Times Per Second',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: '6-Point Stainless Steel Blade',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              content: [
                                {
                                  data: {},
                                  marks: [],
                                  value: 'Durable Built-In Carrying Strap',
                                  nodeType: 'text',
                                },
                              ],
                              nodeType: 'paragraph',
                            },
                          ],
                          nodeType: 'list-item',
                        },
                      ],
                      nodeType: 'unordered-list',
                    },
                    {
                      data: {},
                      content: [
                        { data: {}, marks: [], value: '', nodeType: 'text' },
                      ],
                      nodeType: 'paragraph',
                    },
                  ],
                  nodeType: 'document',
                },
                video: {
                  metadata: { tags: [] },
                  sys: {
                    space: {
                      sys: {
                        type: 'Link',
                        linkType: 'Space',
                        id: 'strhx3d94c40',
                      },
                    },
                    id: '4x9c0ZGHnRUioPGibmIIlQ',
                    type: 'Asset',
                    createdAt: '2021-06-12T21:41:42.980Z',
                    updatedAt: '2021-06-12T21:41:42.980Z',
                    environment: {
                      sys: {
                        id: 'master',
                        type: 'Link',
                        linkType: 'Environment',
                      },
                    },
                    revision: 1,
                    locale: 'en-US',
                  },
                  fields: {
                    title: 'Red Dot Design Award 2021',
                    file: {
                      url: '//images.ctfassets.net/strhx3d94c40/4x9c0ZGHnRUioPGibmIIlQ/894adab1cb7d9639765ca9508af35480/PD2021_RD.png',
                      details: {
                        size: 75234,
                        image: { width: 806, height: 472 },
                      },
                      fileName: 'PD2021_RD.png',
                      contentType: 'image/png',
                    },
                  },
                },
              },
            },
          ],
          productAnnouncement: {
            data: {},
            content: [
              {
                data: {},
                content: [
                  {
                    data: {},
                    marks: [],
                    value:
                      '<div class="outer-canvas-bfcm">\n\t\t<div class="canvas-bfcm">\n\t\t\t<div class="col-bfcm">\n\t\t\t\t<span class="entry-title-bfcm">Spring Sale</span>\n\t\t\t\t<span class="content-split-element-bfcm">Free JetPack Smoothies</span>\t\t\t\t\n\t\t\t\t<span class="simple-text-bfcm">With Each BlendJet <b class="b-hide-bfcm">|</b> <span>Discount Applied at Checkout</span></span>\n\t\t\t</div>\n\t\t</div>\n\t</div>',
                    nodeType: 'text',
                  },
                ],
                nodeType: 'paragraph',
              },
            ],
            nodeType: 'document',
          },
          metaTitle: 'BlendJet® 2 Portable Blender - The Next-Gen Blender®',
          metaDescription:
            'The BlendJet 2 portable blender packs big blender power on the go. It blasts through ice and frozen fruit, recharges quickly via USB-C, and even cleans itself.',
          metaImage:
            'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/BlendJet-2-social_80d9e882-ba48-4b5a-808a-9355d2c55ec7.png?v=1630593313',
          features: {
            metadata: { tags: [] },
            sys: {
              space: {
                sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
              },
              id: '5G7SJ2ExMj9qZiwsUHeSX',
              type: 'Entry',
              createdAt: '2020-11-19T08:07:47.301Z',
              updatedAt: '2020-11-19T08:07:47.301Z',
              environment: {
                sys: { id: 'master', type: 'Link', linkType: 'Environment' },
              },
              revision: 1,
              contentType: {
                sys: {
                  type: 'Link',
                  linkType: 'ContentType',
                  id: 'featureSet',
                },
              },
              locale: 'en-US',
            },
            fields: {
              title: 'BLENDJET 2 FEATURES',
              features: [
                {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: 'D1BnMqtd5a1yqAMFYC5TA',
                  },
                },
                {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: '5iJYQde8NZPNZyOKx36bcq',
                  },
                },
                {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: '8Fb5uhf4TfYqie2y3qkmd',
                  },
                },
                {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: '7CEWVH64x9MTfwtFiY6d3f',
                  },
                },
                {
                  sys: {
                    type: 'Link',
                    linkType: 'Entry',
                    id: '5DxM9LHG9kozJsYw4j48Ox',
                  },
                },
              ],
            },
          },
        },
      },
    ],
    includes: {
      Entry: [
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1MNMzoytdJ6UBkyndnGDfM',
            type: 'Entry',
            createdAt: '2020-10-26T03:53:03.207Z',
            updatedAt: '2021-06-12T21:41:47.207Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'DETAILS & SPECS',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Compact Size: 9” x 3” (230mm x 76mm)',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Product Weight: 1.34 lb (.61 kg)',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                'Jar w/ Measurement Markings: 16 oz (475 mL)',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: '15+ Blends Per 1 Hour Charge',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Water-resistant USB-C Port',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: '4000 mAh Rechargeable Battery',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value:
                                '5V Electric Motor Spins 275 Times Per Second',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: '6-Point Stainless Steel Blade',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                    {
                      data: {},
                      content: [
                        {
                          data: {},
                          content: [
                            {
                              data: {},
                              marks: [],
                              value: 'Durable Built-In Carrying Strap',
                              nodeType: 'text',
                            },
                          ],
                          nodeType: 'paragraph',
                        },
                      ],
                      nodeType: 'list-item',
                    },
                  ],
                  nodeType: 'unordered-list',
                },
                {
                  data: {},
                  content: [
                    { data: {}, marks: [], value: '', nodeType: 'text' },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4x9c0ZGHnRUioPGibmIIlQ',
                type: 'Asset',
                createdAt: '2021-06-12T21:41:42.980Z',
                updatedAt: '2021-06-12T21:41:42.980Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'Red Dot Design Award 2021',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/4x9c0ZGHnRUioPGibmIIlQ/894adab1cb7d9639765ca9508af35480/PD2021_RD.png',
                  details: { size: 75234, image: { width: 806, height: 472 } },
                  fileName: 'PD2021_RD.png',
                  contentType: 'image/png',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1Nly2tk1xXXiiAvAf1jovw',
            type: 'Entry',
            createdAt: '2020-10-26T03:37:55.224Z',
            updatedAt: '2020-10-28T17:29:39.789Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'USB-C Rechargeable',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Get 15+ blends from just one hour of charging with any USB port. The BlendJet 2 portable blender is equipped with a water-resistant USB-C port that makes it easier than ever to power up. And the included cable is smartly reversible, so there’s no wrong way to plug it in.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2YGh7omx6veErwMCFGCiok',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:11.995Z',
                updatedAt: '2020-10-26T13:28:11.995Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '5 USB-C',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/2YGh7omx6veErwMCFGCiok/79d7bb88708f3107e1d20777bced79a3/5_USB-C.mp4',
                  details: { size: 418015 },
                  fileName: '5_USB-C.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2Aq8LavbRyKacQRXsfqfo6',
            type: 'Entry',
            createdAt: '2020-10-21T00:11:30.760Z',
            updatedAt: '2021-09-08T21:16:16.911Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 8,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'white',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '1cyBrTKLyFH24NmUWfALFG',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.218Z',
                updatedAt: '2020-10-21T00:10:35.945Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'whiteProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/1cyBrTKLyFH24NmUWfALFG/a0299e789458bac829eb3fc708d087b2/BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
                  details: {
                    size: 298760,
                    image: { width: 3555, height: 1999 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2KFMzvIMcKUZiif2pLZHTW',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.561Z',
                  updatedAt: '2021-09-07T18:51:53.616Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whiteHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2KFMzvIMcKUZiif2pLZHTW/48a49dd116775b37aca36fd33ab5ef50/PajeVictoriaxblendjetxbanners2-3__1_.jpg?w=400',
                    details: {
                      size: 1861863,
                      image: { width: 3600, height: 2522 },
                    },
                    fileName: 'PajeVictoriaxblendjetxbanners2-3 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2VjSAedOviimHX7fDM1Kag',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:32:59.909Z',
                  updatedAt: '2021-09-08T21:04:33.844Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whitehero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2VjSAedOviimHX7fDM1Kag/47a4bf9230904928f2710ff2feb79add/PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
                    details: {
                      size: 1099099,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7DFXRTHvnMWxMSKHyaUQ0H',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:33:49.603Z',
                  updatedAt: '2020-10-26T01:33:49.603Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whitehero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7DFXRTHvnMWxMSKHyaUQ0H/dd2ccfd1193e4913e8e610b44501877e/_DSC8929.jpg?w=400',
                    details: {
                      size: 723455,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC8929.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7s7i3N3YVOZqObN3h9iesR',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:36:24.374Z',
                  updatedAt: '2020-10-28T00:08:27.686Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whitehero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7s7i3N3YVOZqObN3h9iesR/ff15cd0cef25768a51e01ea6e958b1df/pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
                    details: {
                      size: 571178,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2W0Pmb5kc12sFa4lcsbdB4',
            type: 'Entry',
            createdAt: '2020-10-23T15:10:47.165Z',
            updatedAt: '2020-10-27T23:44:13.108Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'ocean',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6GMprp75HM0swouzUoy02Y',
                type: 'Asset',
                createdAt: '2020-10-23T15:08:48.739Z',
                updatedAt: '2021-02-19T18:01:00.850Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                locale: 'en-US',
              },
              fields: {
                title: 'oceanProductImage',
                description: 'BlendJet 2 in Ocean Color with Fruits Inside',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/6GMprp75HM0swouzUoy02Y/76b5c26e0897bd5f9a3b7514015ca558/BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
                  details: {
                    size: 334569,
                    image: { width: 3556, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5wbj2sN47L8BrfG5B8GArY',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:39:07.029Z',
                  updatedAt: '2021-02-19T17:58:32.639Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'oceanhero3',
                  description: 'BlendJet 2 in Ocean Color',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5wbj2sN47L8BrfG5B8GArY/284a5236b60f4d9493bea9bcec6dfc3f/_DSC6782.jpg?w=400',
                    details: {
                      size: 783720,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC6782.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7BUIqg4Qys6ZzftY4ki3Oa',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:38:37.297Z',
                  updatedAt: '2021-02-19T17:58:51.292Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'oceanhero2',
                  description: 'BlendJet 2 in Five Different Colors',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7BUIqg4Qys6ZzftY4ki3Oa/1df11c2544e6bb5143d73a1f25da14b6/pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
                    details: {
                      size: 635875,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5PwJV6YENKw3d98SxB2Mc6',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.547Z',
                  updatedAt: '2021-02-19T17:59:11.574Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 7,
                  locale: 'en-US',
                },
                fields: {
                  title: 'oceanhero1',
                  description: 'BlendJet 2 with Delicious Smoothie Inside',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5PwJV6YENKw3d98SxB2Mc6/b88f88de7c307c84ca86248f87f0c75b/pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
                    details: {
                      size: 862449,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6QWmbb7SZx0JYA6vICFFfT',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:39:24.161Z',
                  updatedAt: '2021-02-19T17:59:23.382Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'oceanhero4',
                  description:
                    'BlendJet 2 in Five Different Colors with Delicious Smoothies Inside',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6QWmbb7SZx0JYA6vICFFfT/1ba4610765250368cfbb720470d5b6eb/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                    details: {
                      size: 169951,
                      image: { width: 1024, height: 608 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2WX7OWu4BActTVUkwORaVW',
            type: 'Entry',
            createdAt: '2020-10-21T00:08:11.122Z',
            updatedAt: '2020-10-27T23:28:10.602Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'lemon',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2LKYrXqwX33PLWfkREaYJn',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.250Z',
                updatedAt: '2021-03-29T23:28:16.937Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 4,
                locale: 'en-US',
              },
              fields: {
                title: 'lemonProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2LKYrXqwX33PLWfkREaYJn/71ad308f4dbc71fbe35263645585e211/BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
                  details: {
                    size: 268731,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2tHnzQUI38TMpkCojuLuQ',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.639Z',
                  updatedAt: '2020-10-27T23:27:06.610Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'lemonHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2tHnzQUI38TMpkCojuLuQ/d67ea69fbfdeccc72a4574dd59ac13f5/pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
                    details: {
                      size: 414276,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '4liq4y6Yc2KhGCSlV1T8qK',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:42:22.153Z',
                  updatedAt: '2020-10-27T23:27:25.456Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'lemonhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/4liq4y6Yc2KhGCSlV1T8qK/a82e653d821adfe3313bfa8744ca8cc7/pajevictoriaxblendjet2xfalloutdoor2-62__1_.jpg?w=400',
                    details: {
                      size: 696446,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-62 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5gZ1okOWbmxBUNwPk0ZFiF',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:42:40.576Z',
                  updatedAt: '2020-10-27T23:27:48.351Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'lemonhero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5gZ1okOWbmxBUNwPk0ZFiF/8a532277d66658d5a04062006151c545/pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
                    details: {
                      size: 506004,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2ZXraW5F4LJHmPyDnMOU1M',
            type: 'Entry',
            createdAt: '2020-10-26T03:43:38.005Z',
            updatedAt: '2020-10-28T17:31:21.419Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Lock Your Blender',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Shift into Lock Mode to prevent accidental blending, and confidently toss your BlendJet 2 portable blender into your backpack or purse, or sip straight from the jar.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4vLiYBk7LLqwjt8kiIAiPv',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.509Z',
                updatedAt: '2020-10-27T02:35:54.919Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: '12 LOCK',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/4vLiYBk7LLqwjt8kiIAiPv/54624fdfe841471af0a4f10ee18cd871/12_LOCK.mp4',
                  details: { size: 1312186 },
                  fileName: '12_LOCK.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2a8766zWDPP6DVbUggYr2m',
            type: 'Entry',
            createdAt: '2020-10-20T22:44:40.913Z',
            updatedAt: '2020-10-28T02:18:51.292Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 6,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'red',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'UVY2MB5HocGn39i2bPXyH',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.233Z',
                updatedAt: '2020-10-15T18:05:31.233Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/UVY2MB5HocGn39i2bPXyH/565e88e698a2825a63ad90ea8d693cd5/BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
                  details: {
                    size: 291548,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '35hJXfuSdAdBqrjcBuQ5yo',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:29:19.454Z',
                  updatedAt: '2020-10-26T00:29:19.454Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'redhero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/35hJXfuSdAdBqrjcBuQ5yo/5f07959a7872ca523500968e66f7012c/pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
                    details: {
                      size: 1101296,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1yCXm2K0GNPxoVaWtNq5XH',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:31:08.172Z',
                  updatedAt: '2020-10-26T00:31:08.172Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'redhero5',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1yCXm2K0GNPxoVaWtNq5XH/9bff7f32097044a0730e354168270861/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                    details: {
                      size: 139171,
                      image: { width: 1024, height: 683 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6kbBRrTTd9tXl1wKAeV6UV',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:30:40.396Z',
                  updatedAt: '2020-10-26T00:30:40.396Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'redhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6kbBRrTTd9tXl1wKAeV6UV/0ccc615f6c850ae8b0c6b6acab3862a9/_DSC7377.jpg?w=400',
                    details: {
                      size: 672878,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC7377.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2p5gFzd0Z4YESSuiQXTxQn',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:30:17.380Z',
                  updatedAt: '2020-10-26T00:30:17.380Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'redhero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2p5gFzd0Z4YESSuiQXTxQn/64ec35cc025fb8124bb5c1c1623a7ed4/pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
                    details: {
                      size: 856674,
                      image: { width: 3600, height: 1984 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2k8BKoKMrwSRorMtUF8YWE',
            type: 'Entry',
            createdAt: '2020-10-26T03:39:55.650Z',
            updatedAt: '2020-10-26T13:34:24.685Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: '16 Crush-Worthy Colors',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'BlendJet 2 comes in 16 vibrant colors with a design that complements your style. It looks great on your desk or countertop and is a positive reminder to enjoy something delicious and nutritious every day.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6NgswuIGpIwh7oVu4Y88lf',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.533Z',
                updatedAt: '2020-10-26T13:28:12.533Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '7 COLORS',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/6NgswuIGpIwh7oVu4Y88lf/439d9e70118f4ed8b9bd43829fc95131/7_COLORS.mp4',
                  details: { size: 1156094 },
                  fileName: '7_COLORS.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2r0kqNEzhg7BXRXNk8eZL',
            type: 'Entry',
            createdAt: '2020-10-26T03:41:47.243Z',
            updatedAt: '2020-10-26T13:35:05.821Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Forget the Measuring Cup',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Measurement markings on the jar make it easy to follow our mouth-watering recipes or to create your own. With its 16 oz capacity, BlendJet 2 holds 33% more than the original BlendJet in a sleek and compact design.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4HAqXL8ep4AYCMW9Opatgu',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.611Z',
                updatedAt: '2020-10-26T13:28:12.611Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '9 MEASURING',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/4HAqXL8ep4AYCMW9Opatgu/7d4f4686fea50a50e54886d8a9c34749/9_MEASURING.mp4',
                  details: { size: 710968 },
                  fileName: '9_MEASURING.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2xQyIQdkfBC0Pi8LaqeTwU',
            type: 'Entry',
            createdAt: '2020-10-26T03:29:58.169Z',
            updatedAt: '2021-06-09T00:59:26.706Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 11,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Patented TurboJet Technology',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Traditional blenders only use their blades to blend, but we invented a new method that makes every other blender obsolete. Our secret weapon? BlendJet 2’s stainless steel blades are offset from the center of the base, which creates a tornado effect that blasts ingredients into the back of the jar 275 times per second, resulting in dramatically better blending. This technology — combined with a more powerful motor and doubled battery capacity — makes BlendJet 2 five times more powerful than BlendJet One.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4d7J1KC3AgdNbbl3dYQQDg',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:11.997Z',
                updatedAt: '2020-10-26T13:28:11.997Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '2 TURBOJET',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/4d7J1KC3AgdNbbl3dYQQDg/1aca8b7f6734d5f1ee246bdf3bc6f46b/2_TURBOJET.mp4',
                  details: { size: 1649868 },
                  fileName: '2_TURBOJET.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
            externalVideoUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/2_TURBOJET.mp4?v=1623200162',
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '35FZEjz9gyZnikYzwxHjgy',
            type: 'Entry',
            createdAt: '2020-10-20T22:35:07.062Z',
            updatedAt: '2020-10-27T21:16:53.509Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'black',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '1YTbF5tGizsjmmGtmDf7tx',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:32.457Z',
                updatedAt: '2020-10-15T18:05:32.457Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/1YTbF5tGizsjmmGtmDf7tx/c3593da25daef024771437dac2589dfb/BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
                  details: {
                    size: 314330,
                    image: { width: 3555, height: 1999 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '22RiuWql7G2f7yrPMPMU3W',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:14.668Z',
                  updatedAt: '2020-10-27T21:14:31.724Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blackHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/22RiuWql7G2f7yrPMPMU3W/8dbe0c95c5c114e9f521406bcaa26c95/pajevictoriaxblendjet2xlifestyle-786__1_.jpg?w=400',
                    details: {
                      size: 529683,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-786 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6VprwTnCRShZUweOBMQUiO',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:17:03.125Z',
                  updatedAt: '2020-10-27T21:11:16.566Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blackhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6VprwTnCRShZUweOBMQUiO/14752bcf1a1386a365edfcd103617e7f/pajevictoriaxblendjet2xlifestyle-1083__1_.jpg?w=400',
                    details: {
                      size: 312947,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-1083 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '43CFdTYcdEZfgMobGIoJzu',
            type: 'Entry',
            createdAt: '2020-10-26T03:48:26.435Z',
            updatedAt: '2021-06-12T22:23:39.659Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'No Fridge? No Problem!',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'Make healthy happen on the run with our nutrient-rich JetPack® Ready-to-Blend Smoothies. Simply add milk or water to enjoy a creamy, delicious smoothie whenever, wherever. JetPacks are proudly made in California with only the highest-quality ingredients and no artificial anything. Add JetPack to your order today.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5Zagb2GIFS9cDdy3DkEXVF',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:15.091Z',
                updatedAt: '2020-10-26T13:28:15.091Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '13 JETPACK',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/5Zagb2GIFS9cDdy3DkEXVF/0c640715b721cce88ec9149b90e3100f/13_JETPACK.mp4',
                  details: { size: 1042176 },
                  fileName: '13_JETPACK.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '46aa9LgM6Q6icnEAglGuzc',
            type: 'Entry',
            createdAt: '2020-10-26T03:40:49.324Z',
            updatedAt: '2020-10-26T13:34:40.689Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Food Processing with Pulse Mode',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'With a double-press of the power button, your BlendJet 2 portable blender transforms into a powerful food processor that pulverizes veggies, fruits, nuts and more. You can pulse your way to tasty guacamole, pesto, salsa and hummus in mere seconds.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5e8btB2FMJAqKgTDhZDTNi',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:15.098Z',
                updatedAt: '2020-10-26T13:28:15.098Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '8 FOOD-PROCESSING',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/5e8btB2FMJAqKgTDhZDTNi/960c623d2841652449c0c2dff6da52f1/8_FOOD-PROCESSING.mp4',
                  details: { size: 1258321 },
                  fileName: '8_FOOD-PROCESSING.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '46znl68bCDzA8ikkjDXe4y',
            type: 'Entry',
            createdAt: '2021-08-28T00:24:38.717Z',
            updatedAt: '2021-09-06T22:16:24.829Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'urbanCamo',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5kyTAhTfvKT7ciIRmsmRdB',
                type: 'Asset',
                createdAt: '2021-08-28T00:24:32.904Z',
                updatedAt: '2021-08-28T00:24:32.904Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'urbanCamo1',
                description: '',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/5kyTAhTfvKT7ciIRmsmRdB/3f5529a815efe5cb0dd596e6fe685062/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
                  details: {
                    size: 141748,
                    image: { width: 2101, height: 1181 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2Q9kkII9EIz1AxIHFBJ5Gb',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:15:30.362Z',
                  updatedAt: '2021-09-06T22:15:30.362Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'urbancamo1',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2Q9kkII9EIz1AxIHFBJ5Gb/30b47776dfac3ff0f9d514a3668b3a22/PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
                    details: {
                      size: 367187,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '61Vb0TFePAhWmovnL1jMsm',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:15:52.084Z',
                  updatedAt: '2021-09-06T22:15:52.084Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'urbancamo3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/61Vb0TFePAhWmovnL1jMsm/2d2abf618434d0dd9474a827d2201fb5/PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
                    details: {
                      size: 801777,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5YW0mmzROyW5dwtl27e5fL',
                  type: 'Asset',
                  createdAt: '2021-08-28T00:24:13.878Z',
                  updatedAt: '2021-09-06T22:16:17.945Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'urbancamo2',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5YW0mmzROyW5dwtl27e5fL/d6a212afc185c88c761a636401a4ea25/PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
                    details: {
                      size: 1301115,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4gfkfufyvXJuYnr8agLYpW',
            type: 'Entry',
            createdAt: '2020-10-26T03:49:25.857Z',
            updatedAt: '2021-06-12T22:37:47.952Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'FREE 2-Day Shipping',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'We offer free express shipping from our headquarters just east of San Francisco in Concord, California. We take great pride in handling all of our own research and development, design, manufacturing, shipping and customer service.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7AkyQEwK3vxdaTYV7cWV3z',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.540Z',
                updatedAt: '2020-10-26T23:25:38.113Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: '15 SHIPPING',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/7AkyQEwK3vxdaTYV7cWV3z/23060e99d9806b2aae817896818ac76b/15_SHIPPING.mp4',
                  details: { size: 941955 },
                  fileName: '15_SHIPPING.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4sOOQqQT48C4IYBVBTDGSC',
            type: 'Entry',
            createdAt: '2020-10-26T03:35:06.737Z',
            updatedAt: '2021-10-04T16:08:52.405Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Shake Up Your Routine',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'BlendJet 2 is more than a blender — it’s a way of life. It helps you live healthier while keeping your energy level sky-high. Make breakfast a breeze, reinvent lunch, fuel your workout or chill with a frozen margarita, all while saving time and money.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '3TdX6oIlK7Cvfke16RlaF3',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:11.993Z',
                updatedAt: '2020-10-30T19:50:46.152Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: '4 SHAKE-UP-ROUTINE',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/3TdX6oIlK7Cvfke16RlaF3/1dae50999af2bc423919a20a22521890/4_SHAKE-UP-ROUTINE.mp4',
                  details: { size: 1301406 },
                  fileName: '4_SHAKE-UP-ROUTINE.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
            externalVideoUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/4_SHAKE-UP-ROUTINE.mp4?v=1614333788',
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4trSKG4ibk4CswxvWGqUjX',
            type: 'Entry',
            createdAt: '2020-10-20T22:39:19.220Z',
            updatedAt: '2020-10-28T00:12:21.167Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'lavender',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2csc8u77kAGQ3JYRJBDMvU',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:33.082Z',
                updatedAt: '2020-10-20T22:37:42.491Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'lavenderProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2csc8u77kAGQ3JYRJBDMvU/29432737845944359ac4650c97b7e85d/BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
                  details: {
                    size: 275672,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName:
                    'BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '79qiiLfUV7MjfnliCch84z',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:13.836Z',
                  updatedAt: '2020-10-27T23:19:16.651Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  locale: 'en-US',
                },
                fields: {
                  title: 'lavenderHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/79qiiLfUV7MjfnliCch84z/d35d2286ede3d32f5815c7194b5d899c/pajevictoriaxblendjet2xlifestyle-347__1_.jpg?w=400',
                    details: {
                      size: 670370,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-347 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6FWFcC4laPo5uWkdKtU4F2',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:15.607Z',
                  updatedAt: '2020-10-27T23:20:13.933Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'lavenderHero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6FWFcC4laPo5uWkdKtU4F2/13b9e6218db3b848d86035c223e17b07/pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
                    details: {
                      size: 627254,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '10ORj3yhit0JQI9NC4PRuG',
                  type: 'Asset',
                  createdAt: '2020-10-28T00:12:16.153Z',
                  updatedAt: '2020-10-28T00:21:24.986Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'herolavender3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/10ORj3yhit0JQI9NC4PRuG/cf421088259b100b24b80a4deef0bc2d/pajevictoriaxblendjet2xlifestyle-534__1_.jpg?w=400',
                    details: {
                      size: 635401,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-534 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4v5dfM84uMwuGJT7UsjPET',
            type: 'Entry',
            createdAt: '2021-04-14T01:30:05.197Z',
            updatedAt: '2021-09-06T22:28:05.680Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 6,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'geode',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '1yoFXhwz1ITFEcRCiOvsTG',
                type: 'Asset',
                createdAt: '2021-04-14T02:06:08.997Z',
                updatedAt: '2021-04-14T02:06:08.997Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/1yoFXhwz1ITFEcRCiOvsTG/da0ca44752e13518647ad0d5e38c555f/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
                  details: {
                    size: 316225,
                    image: { width: 2100, height: 1181 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '27iyFoieHUMptHlWnxSY1h',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:47:43.683Z',
                  updatedAt: '2021-04-14T01:47:43.683Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'geode1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/27iyFoieHUMptHlWnxSY1h/c0f9c1cdbde23671d532c0726d6f7dbf/PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
                    details: {
                      size: 1233861,
                      image: { width: 3600, height: 1605 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3f2PSBjqAWeOhnnVi61OmR',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:49:14.996Z',
                  updatedAt: '2021-04-14T01:55:02.644Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'geode2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3f2PSBjqAWeOhnnVi61OmR/7e8bf4280a369ebd7cdadbf7ac8b3f28/PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
                    details: {
                      size: 597443,
                      image: { width: 3600, height: 1639 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'hVcdFzbLuIcdTWWWsuilh',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:28:01.730Z',
                  updatedAt: '2021-09-06T22:28:01.730Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'geode3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/hVcdFzbLuIcdTWWWsuilh/61f353e689d694ccec1b3df2954d6892/PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
                    details: {
                      size: 528776,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4vEw2mjKrtMnWjPzohGCyg',
            type: 'Entry',
            createdAt: '2021-04-14T01:30:27.840Z',
            updatedAt: '2021-09-06T22:22:41.979Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'leopard',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5WniqfKvODQZeQHL23bQKA',
                type: 'Asset',
                createdAt: '2021-04-23T04:55:51.492Z',
                updatedAt: '2021-04-23T04:55:51.492Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/5WniqfKvODQZeQHL23bQKA/2e2011147bec337436f9429952b3fe2f/BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
                  details: {
                    size: 453342,
                    image: { width: 2100, height: 1181 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6suoBmKvpCesIoSMvaFlCS',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:22:32.555Z',
                  updatedAt: '2021-10-04T22:58:43.752Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'leopard4',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6suoBmKvpCesIoSMvaFlCS/0afb7cd31fd78662c12ffb5c0971b6e2/PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
                    details: {
                      size: 856053,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '4YmrrFVHK8hK6njcum4XHN',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:22:12.869Z',
                  updatedAt: '2021-10-04T23:59:26.089Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'leopard3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/4YmrrFVHK8hK6njcum4XHN/769e8680029d9cf36118f69d615ab2ff/PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
                    details: {
                      size: 456648,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '58i8SIRZkIPavEZpGbJnEC',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:50:05.053Z',
                  updatedAt: '2021-04-14T01:50:05.053Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'leopard1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/58i8SIRZkIPavEZpGbJnEC/d0996a509b1f475d4e12c4743b2e1ef7/PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
                    details: {
                      size: 636591,
                      image: { width: 3600, height: 1913 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1RRbrEcbJrJtJMT1bzU8Gc',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:50:35.937Z',
                  updatedAt: '2021-04-14T01:50:35.937Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'leopard2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1RRbrEcbJrJtJMT1bzU8Gc/32f7709489d88359d62f08db914d3360/PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
                    details: {
                      size: 847510,
                      image: { width: 3093, height: 1324 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4yZequKZ3wg24hHRQvQ68H',
            type: 'Entry',
            createdAt: '2020-10-26T03:50:09.114Z',
            updatedAt: '2020-10-26T13:39:13.198Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: '30-Day Money Back Guarantee',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Don’t be fooled by imitators. Nothing else comes close to the quality, power and innovation of the BlendJet 2 portable blender. We guarantee you’ll love it, or your money back.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7h6IjVhDWkzitazC46dkrf',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:11.975Z',
                updatedAt: '2020-10-26T13:28:11.975Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '16 MISSION',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/7h6IjVhDWkzitazC46dkrf/24596eea329bc85369bb92c49cea984b/16_MISSION.mp4',
                  details: { size: 936948 },
                  fileName: '16_MISSION.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4yu9AabSdRkJYghZ0GYOjP',
            type: 'Entry',
            createdAt: '2020-10-26T03:38:48.475Z',
            updatedAt: '2020-10-26T13:34:04.243Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Self-Cleaning',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'Say goodbye to the most annoying part of blending. Bulky kitchen blenders feel impossible to clean — especially when you’re in a hurry — but BlendJet 2 cleans itself. Just add a drop of soap, a bit of water, blend, and you’re ready for your next blended creation.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4xypYvB3PeguBsbCcDhZc5',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.164Z',
                updatedAt: '2020-10-26T13:28:12.164Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '6 SELF-CLEANING',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/4xypYvB3PeguBsbCcDhZc5/e351cb1b3b0b2039c063c770b8433c63/6_SELF-CLEANING.mp4',
                  details: { size: 1483137 },
                  fileName: '6_SELF-CLEANING.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5G7SJ2ExMj9qZiwsUHeSX',
            type: 'Entry',
            createdAt: '2020-11-19T08:07:47.301Z',
            updatedAt: '2020-11-19T08:07:47.301Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            contentType: {
              sys: { type: 'Link', linkType: 'ContentType', id: 'featureSet' },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET 2 FEATURES',
            features: [
              {
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: 'D1BnMqtd5a1yqAMFYC5TA',
                },
              },
              {
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: '5iJYQde8NZPNZyOKx36bcq',
                },
              },
              {
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: '8Fb5uhf4TfYqie2y3qkmd',
                },
              },
              {
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: '7CEWVH64x9MTfwtFiY6d3f',
                },
              },
              {
                sys: {
                  type: 'Link',
                  linkType: 'Entry',
                  id: '5DxM9LHG9kozJsYw4j48Ox',
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5L9brckty2b32Ji5JnQPnN',
            type: 'Entry',
            createdAt: '2020-10-21T00:10:06.170Z',
            updatedAt: '2020-10-28T00:16:22.157Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'seafoam',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '69LpvXulHbVwkImVsdMOYe',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.326Z',
                updatedAt: '2020-10-21T00:09:55.190Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'seaFoamProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/69LpvXulHbVwkImVsdMOYe/ab80e6caa0c6ef2eb4c95372cf58a884/BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
                  details: {
                    size: 256023,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '74eT5edDTSvsv2u5o7AQh3',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:44:44.001Z',
                  updatedAt: '2020-10-26T20:50:59.513Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'seafoamhero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/74eT5edDTSvsv2u5o7AQh3/5040b436153fecac27a0c26b49951179/pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
                    details: {
                      size: 240231,
                      image: { width: 1024, height: 683 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5sHyXNkZscDpY94NvGr0dY',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:45:15.467Z',
                  updatedAt: '2020-10-28T00:05:49.136Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'seafoamhero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5sHyXNkZscDpY94NvGr0dY/b9f1f72d884ccffa4e963bd28e4c5609/pajevictoriaxblendjet2xfalloutdoor2-20__1_.jpg?w=400',
                    details: {
                      size: 510212,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-20 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7JRMPZvPRJ2g5AahBJGTnG',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:45:39.083Z',
                  updatedAt: '2020-10-26T20:51:24.700Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'seafoamhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7JRMPZvPRJ2g5AahBJGTnG/540ffece187bfc61f9aa854930d963e9/_DSC8972.jpg?w=400',
                    details: {
                      size: 562506,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC8972.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5MuvWn0q2NHaoyHGSjZUT9',
            type: 'Entry',
            createdAt: '2021-08-28T00:26:55.920Z',
            updatedAt: '2021-09-06T22:23:34.772Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'blackMarble',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '3LXO4YTDXsI0Ua8UQvpprm',
                type: 'Asset',
                createdAt: '2021-08-28T00:26:23.866Z',
                updatedAt: '2021-08-28T00:26:23.866Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'blackMarble1',
                description: '',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/3LXO4YTDXsI0Ua8UQvpprm/eca43c4b51f2da8c7e0fbaff08296ff3/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
                  details: {
                    size: 217015,
                    image: { width: 2100, height: 1182 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1OFuyVQ9McRH3GeuHkJEZN',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:23:12.854Z',
                  updatedAt: '2021-09-06T22:23:12.854Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blackmarble1',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1OFuyVQ9McRH3GeuHkJEZN/38e30e3f1daf14c5acb9febb1737d8c3/PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
                    details: {
                      size: 567164,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1jVxa3NuYfPmkGJDe7fI5d',
                  type: 'Asset',
                  createdAt: '2021-08-28T00:26:52.508Z',
                  updatedAt: '2021-09-06T22:23:30.988Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blackMarble2',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1jVxa3NuYfPmkGJDe7fI5d/b0c89950154281ed223f8f8432a530bf/PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
                    details: {
                      size: 758278,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5byBqzFJ4aUAX3eHXOfdOv',
            type: 'Entry',
            createdAt: '2020-10-26T03:48:59.181Z',
            updatedAt: '2021-06-12T22:32:40.241Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'On a Mission to Improve Lives',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'BlendJet was born after our co-founder suffered a debilitating injury and smoothies and shakes became a key part of his recovery process. After he (thankfully!) made a full recovery, he felt compelled to find a way to help others live longer and healthier lives. Our mission is to make the healthy choice the most convenient choice for all.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5DLdkUNBkZyGgOgNdCEWno',
                type: 'Asset',
                createdAt: '2020-10-26T23:11:49.695Z',
                updatedAt: '2020-10-26T23:11:49.695Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'on a mission',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/5DLdkUNBkZyGgOgNdCEWno/cc0be5dd0a1346edcf4239d0cff11b42/About_us_hero_image_TWO.jpg?w=400',
                  details: { size: 46687, image: { width: 720, height: 480 } },
                  fileName: 'About us hero image TWO.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5jdq1ZZa3PWpn2ec3Vjv6Q',
            type: 'Entry',
            createdAt: '2020-10-26T03:31:14.249Z',
            updatedAt: '2021-10-04T16:08:30.684Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 9,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Perfect for Everything',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'BlendJet 2 makes smoothie-bar-quality beverages, silky-smooth protein shakes, top-shelf mixed drinks and creamy frozen lattes, plus milkshakes, slushies, baby food, dips, dressings, sauces, and so much more. We’ll send a new recipe video straight to your inbox each week to inspire creativity and ensure you get the most out of your BlendJet 2.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5VOTNkK34QBn2YHc36lCJu',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.041Z',
                updatedAt: '2020-10-26T13:28:12.041Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '3 PERFECT',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/5VOTNkK34QBn2YHc36lCJu/1c8d8350d64adfc653ff9ace4132df95/3_PERFECT.mp4',
                  details: { size: 1455477 },
                  fileName: '3_PERFECT.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
            externalVideoUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/3_PERFECT.mp4?v=1614333788',
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5kTJN2HGylqkkeP4g83Izg',
            type: 'Entry',
            createdAt: '2021-04-14T01:30:42.352Z',
            updatedAt: '2021-09-06T22:13:10.138Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 6,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'walnut',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '7ybdU4G7GlIHIdWlDF2Kdn',
                type: 'Asset',
                createdAt: '2021-04-14T02:06:59.550Z',
                updatedAt: '2021-04-14T02:06:59.550Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/7ybdU4G7GlIHIdWlDF2Kdn/97917476a81ffbe7a3909ac97f4ff04d/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
                  details: {
                    size: 361614,
                    image: { width: 2100, height: 1181 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2NQSwZzIWzMRMwMhTbyrj2',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:51:16.720Z',
                  updatedAt: '2021-04-14T01:51:16.720Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'walnut1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2NQSwZzIWzMRMwMhTbyrj2/2f5ad3551a1ba00e6b146033304b5134/PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
                    details: {
                      size: 1965831,
                      image: { width: 3600, height: 2067 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '665IrZasJ9phcwHvCuIENE',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:52:26.339Z',
                  updatedAt: '2021-04-14T01:52:26.339Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'walnut2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/665IrZasJ9phcwHvCuIENE/11fc42d68b072feca191fc762be16e07/PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
                    details: {
                      size: 536989,
                      image: { width: 3600, height: 2167 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1I9QtYO3PCrP5ux31mtBbS',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:12:46.849Z',
                  updatedAt: '2021-09-06T22:12:46.849Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'walnut3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1I9QtYO3PCrP5ux31mtBbS/6d8abdc131091a76a288fcfb28da3785/PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
                    details: {
                      size: 456276,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5sxUHmIz7qBE5gLRmPZMgQ',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:13:05.674Z',
                  updatedAt: '2021-09-06T22:13:05.674Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'walnut4',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5sxUHmIz7qBE5gLRmPZMgQ/6c9c411a5fc04f420528d23636dc2418/PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
                    details: {
                      size: 504513,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5tWiLAp7crpCJgwkSU5br5',
            type: 'Entry',
            createdAt: '2020-10-20T23:50:23.546Z',
            updatedAt: '2020-10-26T21:19:56.552Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'orange',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'XArTUNlrA3aNaVfgbQb5I',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:34.580Z',
                updatedAt: '2020-10-20T23:50:17.641Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'orangeProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/XArTUNlrA3aNaVfgbQb5I/12a30ea4d491bd54cab2d55047b6afa7/BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
                  details: {
                    size: 349162,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '17ubFMpbMhAt1VgtZqKuyl',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:14.187Z',
                  updatedAt: '2020-10-26T01:20:55.154Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'orangeHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/17ubFMpbMhAt1VgtZqKuyl/a3d17ab705e9995b05116392b3c13e8f/pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
                    details: {
                      size: 164603,
                      image: { width: 1024, height: 683 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '404ONuvp37xrnAb5DG1o8x',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:21:52.147Z',
                  updatedAt: '2020-10-26T01:22:04.221Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'orangehero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/404ONuvp37xrnAb5DG1o8x/127122240831ba7369d34030bf8d2ff6/_DSC6619.jpg?w=400',
                    details: {
                      size: 718523,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC6619.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'PUV5mk8av6qexY7J5PnBy',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:21:18.603Z',
                  updatedAt: '2020-10-26T01:21:18.603Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'orangehero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/PUV5mk8av6qexY7J5PnBy/3ff31e0b5543f5b3bf511b334567c242/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                    details: {
                      size: 169951,
                      image: { width: 1024, height: 608 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '8jfC9TBJaQo89twBFnERH',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.511Z',
                  updatedAt: '2020-10-26T01:20:37.694Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'orangeHero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/8jfC9TBJaQo89twBFnERH/43538b324fc6c00061bcb448cbda3e23/pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
                    details: {
                      size: 900443,
                      image: { width: 3081, height: 2054 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '63BAP3xzeoEV9CSUAGaKYL',
            type: 'Entry',
            createdAt: '2020-10-20T23:08:12.345Z',
            updatedAt: '2020-10-27T21:43:16.305Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'hotPink',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2sRdV7y65KfP63RAqB2DOr',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:33.310Z',
                updatedAt: '2020-10-15T18:05:33.310Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2sRdV7y65KfP63RAqB2DOr/7dbbc3e526c6d2f8dd71b72d1863d03d/BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
                  details: {
                    size: 330545,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'T8TFnRRCHxVZRJoZnjPUP',
                  type: 'Asset',
                  createdAt: '2020-10-20T23:06:20.062Z',
                  updatedAt: '2020-10-27T21:37:20.598Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'hotPinkHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/T8TFnRRCHxVZRJoZnjPUP/c81d534feea03efdee42128142ac9a29/pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
                    details: {
                      size: 1238436,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1vBlbVAr383Ue91EfAIojg',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:06:14.478Z',
                  updatedAt: '2020-10-27T21:37:53.346Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'hotpinkhero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1vBlbVAr383Ue91EfAIojg/00a589e98fb6d081314bc2f5257f46fb/pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
                    details: {
                      size: 623650,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5fwSnXiviMq6qyQiAPD8r6',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:06:35.646Z',
                  updatedAt: '2020-10-27T21:38:15.486Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'hotpinkhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5fwSnXiviMq6qyQiAPD8r6/e32dd25a35c9f2844c3da3074db76e90/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                    details: {
                      size: 1007063,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5gRM186OwJ3Ezkap52lUWR',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:07:18.905Z',
                  updatedAt: '2020-10-27T21:38:37.824Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'hotpinkhero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5gRM186OwJ3Ezkap52lUWR/0ccd9245841b52df95af60056233c02a/pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
                    details: {
                      size: 635844,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '64cHQKhILbF2M0ii4NjORS',
            type: 'Entry',
            createdAt: '2020-10-20T22:43:50.860Z',
            updatedAt: '2020-10-26T00:26:45.460Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'royalBlue',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2PYezjJHVj8ol1RnxuOnkT',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.214Z',
                updatedAt: '2020-10-15T18:05:31.214Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2PYezjJHVj8ol1RnxuOnkT/dcfe80a53f4a8fc242054fcf1d46f20a/BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
                  details: {
                    size: 306833,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName:
                    'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5Ds6dqaVdwBtLJQAFkk3wK',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:13.832Z',
                  updatedAt: '2020-10-28T00:02:15.406Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'royalBlueHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5Ds6dqaVdwBtLJQAFkk3wK/40c4399d3f7b8029a3f49286ec2b3ab1/pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
                    details: {
                      size: 740553,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5BuuLwmEpWqn6ovy1r5omh',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:26:21.818Z',
                  updatedAt: '2020-10-26T00:26:21.818Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'royalblueHero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5BuuLwmEpWqn6ovy1r5omh/22b38a33a60ed72e3ebdb641df1fa414/_DSC8806.jpg?w=400',
                    details: {
                      size: 671219,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC8806.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5A3vafoyJrHCHP1qon63hs',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:26:39.584Z',
                  updatedAt: '2020-10-28T00:00:16.525Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'royalblueHero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5A3vafoyJrHCHP1qon63hs/44f1e1f6a0267d1e43b46645b6fd4c95/pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
                    details: {
                      size: 687041,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6VtLyFsN9aiSgvoHIubyxt',
            type: 'Entry',
            createdAt: '2021-06-09T15:37:56.525Z',
            updatedAt: '2021-09-06T22:21:20.722Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'woodlandCamo',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '265ywGeHUuu9LPBhNVw4jp',
                type: 'Asset',
                createdAt: '2021-06-09T19:24:53.355Z',
                updatedAt: '2021-06-12T03:23:57.496Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'blendjetwoodlandcamo',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/265ywGeHUuu9LPBhNVw4jp/4abab1182c88382af63c1f90143ea67b/BLENDJET-WOODLAND-CAMO.jpg?w=400',
                  details: {
                    size: 573054,
                    image: { width: 2100, height: 1181 },
                  },
                  fileName: 'BLENDJET-WOODLAND-CAMO.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3kgfmWm7FSh0mb281oFrB2',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:21:14.347Z',
                  updatedAt: '2021-09-06T22:21:14.347Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'woodlandcamo3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3kgfmWm7FSh0mb281oFrB2/ee3c5b4f0a2775e29f5d45aee025ef0d/PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
                    details: {
                      size: 635730,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6u7D58bVlU7k9Mh3RCpaMc',
                  type: 'Asset',
                  createdAt: '2021-06-09T15:37:20.185Z',
                  updatedAt: '2021-06-09T15:37:20.185Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'woodlandcamo1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6u7D58bVlU7k9Mh3RCpaMc/b4fb07bf5822e5fa4074f5ab717717d6/PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
                    details: {
                      size: 551980,
                      image: { width: 3600, height: 1892 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '4cyBGS8N23g2eAWQb86Hhk',
                  type: 'Asset',
                  createdAt: '2021-06-09T15:37:51.998Z',
                  updatedAt: '2021-06-09T15:37:51.998Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'woodlandcamo2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/4cyBGS8N23g2eAWQb86Hhk/3fcfc8f4ce06f75ab3f2b6d827d5afb5/PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
                    details: {
                      size: 690522,
                      image: { width: 3600, height: 1884 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6rXqVUnSL1zxb2SeHVP5nC',
            type: 'Entry',
            createdAt: '2020-10-20T23:47:03.188Z',
            updatedAt: '2021-09-08T21:01:51.144Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 6,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'lime',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2x7cTOsKWnyAogiA3OOCNb',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.200Z',
                updatedAt: '2020-10-15T18:05:31.200Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2x7cTOsKWnyAogiA3OOCNb/25ba0d0b0385190d4c88bce9a2459f71/BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
                  details: {
                    size: 389068,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2mLUfuBvrIgQZO6IUSJAC9',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:17:32.861Z',
                  updatedAt: '2020-10-27T23:31:31.356Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'herolime2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2mLUfuBvrIgQZO6IUSJAC9/f13debde5ab79e7b9392bf030860ba44/pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
                    details: {
                      size: 615416,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'meFTELtmhz6PDXgBenWyp',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:17:54.380Z',
                  updatedAt: '2020-10-27T23:32:01.566Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'herolime3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/meFTELtmhz6PDXgBenWyp/d4a81315d1447f933af589262dbfc333/pajevictoriaxblendjet2xlifestyle-1391__1_.jpg?w=400',
                    details: {
                      size: 582928,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-1391 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7MbZLJb5wIT2GW055p1XrO',
                  type: 'Asset',
                  createdAt: '2020-10-27T23:34:19.392Z',
                  updatedAt: '2020-10-27T23:34:19.392Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'herolime5',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7MbZLJb5wIT2GW055p1XrO/6ab405b7f49fb72c64602f665314f0b9/_DSC6844__2_.jpg?w=400',
                    details: {
                      size: 683654,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC6844 (2).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6vTPUwWRY8kB715qZQ3Bfh',
            type: 'Entry',
            createdAt: '2020-10-20T22:43:58.835Z',
            updatedAt: '2020-10-26T00:24:59.361Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'purple',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '45lAEGHKtTrEljUU6i3v6a',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:31.199Z',
                updatedAt: '2020-10-15T18:05:31.199Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/45lAEGHKtTrEljUU6i3v6a/7bd7326310b0bcff76c791e76523845c/BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
                  details: {
                    size: 356528,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3i9UoGzSKnQHCk2dB9K0Tw',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.561Z',
                  updatedAt: '2020-10-26T00:24:18.961Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'purpleHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3i9UoGzSKnQHCk2dB9K0Tw/ccecf76411586ecee0ae0140e6146758/_DSC6686.jpg?w=400',
                    details: {
                      size: 636937,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC6686.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6Ec5d165elSJb2wcmn7koq',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:24:36.806Z',
                  updatedAt: '2020-10-26T00:24:36.806Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'purpleHero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6Ec5d165elSJb2wcmn7koq/b9707ba0913f9237af2e61ddde32bcdd/pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
                    details: {
                      size: 87948,
                      image: { width: 1024, height: 683 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '151AlQq31tmNcjKtD7LAMz',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:24:53.331Z',
                  updatedAt: '2020-10-26T00:24:53.331Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'purpleHero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/151AlQq31tmNcjKtD7LAMz/97d3c910be2ff38cd15aafd7d50a8a29/pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
                    details: {
                      size: 111537,
                      image: { width: 1024, height: 683 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '76IUTMGondUj1CyeicRIhr',
            type: 'Entry',
            createdAt: '2021-08-28T00:27:52.395Z',
            updatedAt: '2021-09-06T22:24:34.111Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'carbonFiber',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '31EF2F46eAs9fMdp25IPD4',
                type: 'Asset',
                createdAt: '2021-08-28T00:27:48.529Z',
                updatedAt: '2021-08-28T00:27:48.529Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'carbonFiber1',
                description: '',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/31EF2F46eAs9fMdp25IPD4/8e24e42c7b3753ceead096eb5b0d2911/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
                  details: {
                    size: 204801,
                    image: { width: 2001, height: 1125 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7CvKdqoVuUn81NoIShxZJj',
                  type: 'Asset',
                  createdAt: '2021-08-28T00:28:11.377Z',
                  updatedAt: '2021-09-06T22:24:13.803Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'carbonFiber2',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7CvKdqoVuUn81NoIShxZJj/36396f42e85a02fbd1b8b9c9b60d1338/PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
                    details: {
                      size: 593524,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'znJEKWUSQCg8AsOprdpuO',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:24:29.270Z',
                  updatedAt: '2021-09-06T22:24:29.270Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'carbonfiber1',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/znJEKWUSQCg8AsOprdpuO/bdda58967c722e196fd3be7e60afdaa7/PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
                    details: {
                      size: 723918,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7DWb0joJ3R4NJi8fFMKSOO',
            type: 'Entry',
            createdAt: '2020-10-20T22:33:51.670Z',
            updatedAt: '2021-08-18T19:44:39.456Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'mint',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '5OP8sZsFUirSWzSeXcthYf',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:32.637Z',
                updatedAt: '2021-05-12T01:14:45.170Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/5OP8sZsFUirSWzSeXcthYf/4e3fc008c4f6833befdf014c1570845e/BLENDJET-2-HERO-LANDSCAPE-CROP-MINT_2.jpg?w=400',
                  details: {
                    size: 592569,
                    image: { width: 3556, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT 2.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '48V8HhKqrkOxxULndC0Duj',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:14.459Z',
                  updatedAt: '2021-08-16T20:19:25.417Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'heroMint1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/48V8HhKqrkOxxULndC0Duj/763598b8e8ee87ac2e7d06e16f86d9ca/PajeVictoriaxblendjetxbanners-8.jpg?w=400',
                    details: {
                      size: 1424952,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetxbanners-8.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2582vWbX6MxHrf1WwvJ9sr',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:14.736Z',
                  updatedAt: '2021-08-16T20:21:20.697Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'heroMint3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2582vWbX6MxHrf1WwvJ9sr/70473fd85182a6135e95d981d64a9612/pajevictoriaxblendjet2xlifestyle-65__1_.jpg?w=400',
                    details: {
                      size: 745155,
                      image: { width: 3600, height: 2308 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xlifestyle-65 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1ZWwKDO1r9oxg5njQ3XRm',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:09:46.862Z',
                  updatedAt: '2021-08-16T20:22:08.285Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'heromint5',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1ZWwKDO1r9oxg5njQ3XRm/15a9726a6296808526665837b2c3573c/PajeVictoriaxblendjetxbanners-26.jpg?w=400',
                    details: {
                      size: 1286450,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetxbanners-26.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3JfhYdlbQjd4fh17wz1Hqx',
                  type: 'Asset',
                  createdAt: '2020-10-26T00:10:21.828Z',
                  updatedAt: '2020-10-26T00:10:21.828Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'heromint4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3JfhYdlbQjd4fh17wz1Hqx/3cdba2f601aabd7bb46c589a6735a208/_DSC6816__1_.jpg?w=400',
                    details: {
                      size: 690943,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC6816 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7ib7KwE7vZC5qHDji4kTXs',
            type: 'Entry',
            createdAt: '2020-10-20T23:54:01.715Z',
            updatedAt: '2020-11-02T17:55:28.890Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'blush',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'BSPjcPUrluUkMmSsMklTk',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:32.632Z',
                updatedAt: '2020-10-15T18:05:32.632Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/BSPjcPUrluUkMmSsMklTk/e22305a1e04989991cc5b721b76f4617/BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
                  details: {
                    size: 259249,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '26b9czvsgK57cj4oHzQcB1',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:13.423Z',
                  updatedAt: '2020-10-27T21:26:10.690Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blushHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/26b9czvsgK57cj4oHzQcB1/0501421791d3f08fc7ec4d8d00587068/pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
                    details: {
                      size: 769186,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6okMDTQBucpDibj0h6ZbII',
                  type: 'Asset',
                  createdAt: '2020-10-20T22:30:12.507Z',
                  updatedAt: '2020-10-27T21:26:48.190Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blushHero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6okMDTQBucpDibj0h6ZbII/d8c6c8a62c1632d9104e638d1950fcf2/pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
                    details: {
                      size: 479378,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '5aCmQ0oQcbUgH5LaQzs2v0',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:25:13.174Z',
                  updatedAt: '2020-10-27T21:27:09.528Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'blushhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/5aCmQ0oQcbUgH5LaQzs2v0/f6cef96590056c413b7cb14894e0c5f4/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                    details: {
                      size: 1025702,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7zEC0jQec7T69hzANM1uIg',
            type: 'Entry',
            createdAt: '2020-10-26T03:42:59.754Z',
            updatedAt: '2021-06-12T22:27:27.593Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Quiet Enough for a Library',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'We engineered BlendJet 2 to deliver incredible power without the jet-engine sound made by clunky kitchen blenders. In fact, the BlendJet 2 portable blender is so quiet, you can use it during late-night study sessions or early in the morning without waking up your household.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '3M3qI22QfXOBEsBttGvRRU',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.550Z',
                updatedAt: '2020-10-27T02:38:52.853Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: '11 QUIET',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/3M3qI22QfXOBEsBttGvRRU/6e7ada9aaa369d86ca09e1ba45098b0e/11_QUIET.mp4',
                  details: { size: 422173 },
                  fileName: '11_QUIET.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'VYOr3oLHv7BnJEbXVCuXy',
            type: 'Entry',
            createdAt: '2021-07-15T00:34:33.147Z',
            updatedAt: '2021-07-16T01:22:52.470Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'whiteMarble',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '35H5SZMMjM4uKfesW8nEKL',
                type: 'Asset',
                createdAt: '2021-07-15T00:33:24.367Z',
                updatedAt: '2021-07-16T01:51:59.667Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                locale: 'en-US',
              },
              fields: {
                title: 'whitemarble',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/35H5SZMMjM4uKfesW8nEKL/e2303be6ac929ed1d0ebb2b343096c11/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
                  details: {
                    size: 247522,
                    image: { width: 2100, height: 1181 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6X8hQXn1NuJtLlVU9Zj5cK',
                  type: 'Asset',
                  createdAt: '2021-07-15T00:33:56.277Z',
                  updatedAt: '2021-07-15T00:33:56.277Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whitemarble1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6X8hQXn1NuJtLlVU9Zj5cK/f9335973a0f5f3e5946f2e12ffbfd83c/PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
                    details: {
                      size: 559362,
                      image: { width: 3600, height: 1788 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6N1l5yHt8uEqJaUXeTRhw1',
                  type: 'Asset',
                  createdAt: '2021-07-15T00:34:26.083Z',
                  updatedAt: '2021-07-15T00:34:26.083Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'whitemarble2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6N1l5yHt8uEqJaUXeTRhw1/1416505789314b0be5bf995c649b94b4/PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
                    details: {
                      size: 628357,
                      image: { width: 3600, height: 1827 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'Zz1UGiAxJyhbbT64UNZAM',
            type: 'Entry',
            createdAt: '2020-10-21T00:06:37.581Z',
            updatedAt: '2020-10-28T02:10:23.438Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'skyBlue',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '2UdNLcFpgjnKJgsX0waEtJ',
                type: 'Asset',
                createdAt: '2020-10-21T00:04:24.593Z',
                updatedAt: '2020-10-21T00:04:24.593Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: 'skyBlueProductImage',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/2UdNLcFpgjnKJgsX0waEtJ/c5bcd518328b37465ba80fd4e5de9b9a/BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
                  details: {
                    size: 378603,
                    image: { width: 3555, height: 1999 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1q7ANn7c1hGD6Z8icqYzC8',
                  type: 'Asset',
                  createdAt: '2020-10-28T00:16:46.674Z',
                  updatedAt: '2020-10-28T02:09:42.261Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'skybluehero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1q7ANn7c1hGD6Z8icqYzC8/efa5a5ab46cc5b5671ed29bb57798597/2pajevictoriaxblendjet2xlifestyle-767__1_.jpg?w=400',
                    details: {
                      size: 117903,
                      image: { width: 1080, height: 608 },
                    },
                    fileName:
                      '2pajevictoriaxblendjet2xlifestyle-767 (1).jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '4SDiXbBIXApjGZn45Vb4kr',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:29:32.917Z',
                  updatedAt: '2020-10-26T01:29:32.917Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'skybluehero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/4SDiXbBIXApjGZn45Vb4kr/a509aa39ae1ee3c046aecf528613ed8b/pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
                    details: {
                      size: 724747,
                      image: { width: 3600, height: 2400 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '2XBNz9EvO54sasH49u0oEb',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:28:38.089Z',
                  updatedAt: '2020-10-26T01:28:38.089Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'skybluehero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/2XBNz9EvO54sasH49u0oEb/eadb55a798db6fd1e6b68f20a5cf725d/_DSC8850.jpg?w=400',
                    details: {
                      size: 687648,
                      image: { width: 2048, height: 1365 },
                    },
                    fileName: '_DSC8850.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'djzncDANJ3sw2tk0RPL8K',
            type: 'Entry',
            createdAt: '2021-04-14T01:31:02.545Z',
            updatedAt: '2021-09-06T22:14:50.217Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'winterCamo',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '6NBI2Bxz1jOCOIEbzb9rgW',
                type: 'Asset',
                createdAt: '2021-04-14T02:07:22.317Z',
                updatedAt: '2021-06-12T21:16:38.792Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/6NBI2Bxz1jOCOIEbzb9rgW/6bd0d16201471a464cdc23663b264193/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
                  details: {
                    size: 3611764,
                    image: { width: 5456, height: 3069 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6ksM5fEYyru3eec56Uz1S2',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:54:00.130Z',
                  updatedAt: '2021-04-14T01:54:00.130Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'wintercamo1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6ksM5fEYyru3eec56Uz1S2/e9409dc6666da609d23e48004360de32/PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
                    details: {
                      size: 741677,
                      image: { width: 3600, height: 2155 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3JCNw4uXuTKNzL9nm3QDEa',
                  type: 'Asset',
                  createdAt: '2021-04-14T01:54:30.507Z',
                  updatedAt: '2021-04-14T01:54:30.507Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'wintercamo2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3JCNw4uXuTKNzL9nm3QDEa/230a9a1ce93adfdf3230afd8bc1e2e02/PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
                    details: {
                      size: 1675714,
                      image: { width: 3600, height: 1821 },
                    },
                    fileName: 'PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '47rc5cChawgDgQvaRfftSS',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:14:27.194Z',
                  updatedAt: '2021-09-06T22:14:27.194Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'wintercamo3',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/47rc5cChawgDgQvaRfftSS/481f1d3cb737ebf5377abf8132db2583/PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
                    details: {
                      size: 708582,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '36EA6239OdBxydk4pZ6EDs',
                  type: 'Asset',
                  createdAt: '2021-09-06T22:14:46.645Z',
                  updatedAt: '2021-09-06T22:14:46.645Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'wintercamo4',
                  description: '',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/36EA6239OdBxydk4pZ6EDs/54c7c597cec80a64b6eebbe6bded6062/PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
                    details: {
                      size: 555064,
                      image: { width: 3600, height: 1800 },
                    },
                    fileName: 'PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'i5l4nbC7UNwBJeBmrjQYr',
            type: 'Entry',
            createdAt: '2021-03-29T23:26:40.123Z',
            updatedAt: '2021-04-06T13:53:51.031Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 12,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'baileys',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '3GMwAEblYybEocy9j5KBeG',
                type: 'Asset',
                createdAt: '2021-04-02T15:32:29.063Z',
                updatedAt: '2021-04-02T18:54:53.683Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 4,
                locale: 'en-US',
              },
              fields: {
                title: 'baileys',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/3GMwAEblYybEocy9j5KBeG/575ef28771b7a4eeae80375ad66a4a21/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
                  details: {
                    size: 474649,
                    image: { width: 2100, height: 1182 },
                  },
                  fileName:
                    'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6SOUHa7R0s5FBBNGtYqdo6',
                  type: 'Asset',
                  createdAt: '2021-04-02T15:42:21.439Z',
                  updatedAt: '2021-04-06T13:46:17.209Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileysHero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6SOUHa7R0s5FBBNGtYqdo6/5e9059f4b6b3af4b3d7c49296852a9c3/PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
                    details: {
                      size: 13701241,
                      image: { width: 6720, height: 4480 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '37upHMruwhxiZ74TsUMRqL',
                  type: 'Asset',
                  createdAt: '2021-04-02T15:41:05.238Z',
                  updatedAt: '2021-04-06T13:47:10.329Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 5,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileysHero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/37upHMruwhxiZ74TsUMRqL/b927bf67e1d78423e06aa593ebc21cce/PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
                    details: {
                      size: 11958276,
                      image: { width: 6115, height: 2802 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6rDBjPZrkTvz6aLPTjw79s',
                  type: 'Asset',
                  createdAt: '2021-04-02T15:40:34.194Z',
                  updatedAt: '2021-04-06T13:47:44.864Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 6,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileysHero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6rDBjPZrkTvz6aLPTjw79s/ec03c2320c54df204077269bc279ac28/PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
                    details: {
                      size: 9442015,
                      image: { width: 5831, height: 4403 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7kMbIvz0v5Fyvm2uhtJjnt',
                  type: 'Asset',
                  createdAt: '2021-04-02T15:41:35.062Z',
                  updatedAt: '2021-04-06T13:51:35.708Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileysHero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7kMbIvz0v5Fyvm2uhtJjnt/ad9c440e76891be7f0bb7a68cfee8335/PajeVictoriaxblendjetxBaileysxfinals-11_copy.jpg?w=400',
                    details: {
                      size: 16636138,
                      image: { width: 5913, height: 3761 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-11 copy.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '6iJ926YVjFFA35BokBFWNC',
                  type: 'Asset',
                  createdAt: '2021-04-02T15:41:59.387Z',
                  updatedAt: '2021-04-06T13:52:09.408Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileysHero5',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/6iJ926YVjFFA35BokBFWNC/0278c5c132ac5da8515e6afb691bfe72/PajeVictoriaxblendjetxBaileysxfinals-16_copy.jpg?w=400',
                    details: {
                      size: 7418272,
                      image: { width: 5607, height: 3346 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-16 copy.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '488Hg6Kc5WgkwCKyxH0p4N',
                  type: 'Asset',
                  createdAt: '2021-04-06T13:52:37.198Z',
                  updatedAt: '2021-04-06T13:52:37.198Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileyshero6',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/488Hg6Kc5WgkwCKyxH0p4N/ba5c745cbb8d116fea71b7659eab726a/PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
                    details: {
                      size: 4609314,
                      image: { width: 4356, height: 2383 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7kqF21AmRyMplOooP990cQ',
                  type: 'Asset',
                  createdAt: '2021-04-06T13:53:10.477Z',
                  updatedAt: '2021-04-06T13:53:10.477Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileyshero7',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7kqF21AmRyMplOooP990cQ/3483d425e4abd8d1a0cc0e1eeadba11f/PajeVictoriaxblendjetxBaileysxfinals-21_copy.jpg?w=400',
                    details: {
                      size: 12302939,
                      image: { width: 6606, height: 4277 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-21 copy.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7mpVjTCj4cprV383DzsjmV',
                  type: 'Asset',
                  createdAt: '2021-04-06T13:53:41.778Z',
                  updatedAt: '2021-04-06T13:53:41.778Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 1,
                  locale: 'en-US',
                },
                fields: {
                  title: 'baileyshero8',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7mpVjTCj4cprV383DzsjmV/d7259d5104c5a364c67613e7b172ca42/PajeVictoriaxblendjetxBaileysxfinals-28_copy.jpg?w=400',
                    details: {
                      size: 14444439,
                      image: { width: 6720, height: 4095 },
                    },
                    fileName:
                      'PajeVictoriaxblendjetxBaileysxfinals-28 copy.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'llDIFcf6OtlZe12iBImSX',
            type: 'Entry',
            createdAt: '2020-10-26T03:29:01.478Z',
            updatedAt: '2021-06-12T21:39:39.650Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 8,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: ' The Next-Gen Blender',
            text: {
              nodeType: 'document',
              data: {},
              content: [
                {
                  nodeType: 'paragraph',
                  content: [
                    {
                      nodeType: 'text',
                      value:
                        'BlendJet 2 serves up big blender power on the go. We created the BlendJet 2 portable blender so you can make anything you want, anywhere in the world — from a mountaintop to your kitchen countertop. It’s easy and convenient to use at home, at work, outdoors, at the gym, in the car, at the beach, on vacation or wherever the day takes you.',
                      marks: [],
                      data: {},
                    },
                  ],
                  data: {},
                },
              ],
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: '4ETIUGqWUCyXMWv3zofTBb',
                type: 'Asset',
                createdAt: '2020-10-27T07:01:49.502Z',
                updatedAt: '2020-10-27T07:01:49.502Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 1,
                locale: 'en-US',
              },
              fields: {
                title: '1 NEXT-GEN',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/4ETIUGqWUCyXMWv3zofTBb/50f58964b5304264c95977f219e62f8d/1_NEXT-GEN.mp4',
                  details: { size: 1434620 },
                  fileName: '1_NEXT-GEN.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
            externalVideoUrl:
              'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/1_NEXT-GEN.mp4?v=1614333788',
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'yx87uV5t4VrD45NCU4xTL',
            type: 'Entry',
            createdAt: '2020-10-20T23:45:14.265Z',
            updatedAt: '2020-10-28T02:19:45.905Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productVariant',
              },
            },
            locale: 'en-US',
          },
          fields: {
            title: 'coral',
            productImage: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'jmwIDAvmbSDBK72zXaCne',
                type: 'Asset',
                createdAt: '2020-10-15T18:05:32.397Z',
                updatedAt: '2020-10-20T22:56:46.443Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 2,
                locale: 'en-US',
              },
              fields: {
                title: 'productImageCoral',
                file: {
                  url: '//images.ctfassets.net/strhx3d94c40/jmwIDAvmbSDBK72zXaCne/5ece5c03b5a6ffe6e17b27dfb2fc05dd/BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
                  details: {
                    size: 320627,
                    image: { width: 3555, height: 2000 },
                  },
                  fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
                  contentType: 'image/jpeg',
                },
              },
            },
            heroImages: [
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '7Hgvh2CTHfTPd2FRmFnBPX',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:03:53.680Z',
                  updatedAt: '2020-10-27T21:30:45.795Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'coralhero3',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/7Hgvh2CTHfTPd2FRmFnBPX/9fe9aba0a482391019996161674034ae/pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
                    details: {
                      size: 556093,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName:
                      'pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: 'w9LoR0f1V4xGNu4FGKHS3',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:03:18.199Z',
                  updatedAt: '2020-10-27T21:30:18.702Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 2,
                  locale: 'en-US',
                },
                fields: {
                  title: 'coralhero2',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/w9LoR0f1V4xGNu4FGKHS3/b483cd492fddd33ce06996cbc678f08c/pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
                    details: {
                      size: 934404,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '1qwpDcHjIzx41Kv4vxjNup',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:04:12.518Z',
                  updatedAt: '2020-10-27T21:31:08.993Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 3,
                  locale: 'en-US',
                },
                fields: {
                  title: 'coralhero4',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/1qwpDcHjIzx41Kv4vxjNup/13ee44fcdb78659766b161b8b77b39d1/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                    details: {
                      size: 789037,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
              {
                metadata: { tags: [] },
                sys: {
                  space: {
                    sys: {
                      type: 'Link',
                      linkType: 'Space',
                      id: 'strhx3d94c40',
                    },
                  },
                  id: '3p3l2UBK9hHUyvj5eXh21f',
                  type: 'Asset',
                  createdAt: '2020-10-26T01:01:42.295Z',
                  updatedAt: '2020-10-27T21:34:08.040Z',
                  environment: {
                    sys: {
                      id: 'master',
                      type: 'Link',
                      linkType: 'Environment',
                    },
                  },
                  revision: 4,
                  locale: 'en-US',
                },
                fields: {
                  title: 'coralhero1',
                  file: {
                    url: '//images.ctfassets.net/strhx3d94c40/3p3l2UBK9hHUyvj5eXh21f/821e8da37bc1244957d38422af22bc04/pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
                    details: {
                      size: 632390,
                      image: { width: 2300, height: 1150 },
                    },
                    fileName: 'pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
                    contentType: 'image/jpeg',
                  },
                },
              },
            ],
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'zAXHtdSLVxPmfDuZOIihm',
            type: 'Entry',
            createdAt: '2020-10-26T03:42:21.346Z',
            updatedAt: '2020-10-26T13:35:27.302Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            contentType: {
              sys: {
                type: 'Link',
                linkType: 'ContentType',
                id: 'productDescriptionSection',
              },
            },
            locale: 'en-US',
          },
          fields: {
            heading: 'Water-Resistant & Ready for Adventure',
            text: {
              data: {},
              content: [
                {
                  data: {},
                  content: [
                    {
                      data: {},
                      marks: [],
                      value:
                        'BlendJet 2 is also water-resistant, so you don’t have to worry about getting liquid in the USB-C port or accidentally submerging your BlendJet 2 in the sink or pool. It’s the ideal blender for mermaids.',
                      nodeType: 'text',
                    },
                  ],
                  nodeType: 'paragraph',
                },
              ],
              nodeType: 'document',
            },
            video: {
              metadata: { tags: [] },
              sys: {
                space: {
                  sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
                },
                id: 'ImUTstv4VoCUbEoPOjc7D',
                type: 'Asset',
                createdAt: '2020-10-26T13:28:12.522Z',
                updatedAt: '2020-11-06T21:23:53.735Z',
                environment: {
                  sys: { id: 'master', type: 'Link', linkType: 'Environment' },
                },
                revision: 3,
                locale: 'en-US',
              },
              fields: {
                title: '10 WATER-RESISTANT',
                file: {
                  url: '//videos.ctfassets.net/strhx3d94c40/ImUTstv4VoCUbEoPOjc7D/9b499c8e7d395ccba6f32dba8c432cfa/10_WATER-RESISTANT.mp4',
                  details: { size: 1157519 },
                  fileName: '10_WATER-RESISTANT.mp4',
                  contentType: 'video/mp4',
                },
              },
            },
          },
        },
      ],
      Asset: [
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '10ORj3yhit0JQI9NC4PRuG',
            type: 'Asset',
            createdAt: '2020-10-28T00:12:16.153Z',
            updatedAt: '2020-10-28T00:21:24.986Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'herolavender3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/10ORj3yhit0JQI9NC4PRuG/cf421088259b100b24b80a4deef0bc2d/pajevictoriaxblendjet2xlifestyle-534__1_.jpg?w=400',
              details: { size: 635401, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-534 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '151AlQq31tmNcjKtD7LAMz',
            type: 'Asset',
            createdAt: '2020-10-26T00:24:53.331Z',
            updatedAt: '2020-10-26T00:24:53.331Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'purpleHero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/151AlQq31tmNcjKtD7LAMz/97d3c910be2ff38cd15aafd7d50a8a29/pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
              details: { size: 111537, image: { width: 1024, height: 683 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1048.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '17ubFMpbMhAt1VgtZqKuyl',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:14.187Z',
            updatedAt: '2020-10-26T01:20:55.154Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'orangeHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/17ubFMpbMhAt1VgtZqKuyl/a3d17ab705e9995b05116392b3c13e8f/pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
              details: { size: 164603, image: { width: 1024, height: 683 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-70.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1I9QtYO3PCrP5ux31mtBbS',
            type: 'Asset',
            createdAt: '2021-09-06T22:12:46.849Z',
            updatedAt: '2021-09-06T22:12:46.849Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'walnut3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1I9QtYO3PCrP5ux31mtBbS/6d8abdc131091a76a288fcfb28da3785/PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
              details: { size: 456276, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-184.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1OFuyVQ9McRH3GeuHkJEZN',
            type: 'Asset',
            createdAt: '2021-09-06T22:23:12.854Z',
            updatedAt: '2021-09-06T22:23:12.854Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'blackmarble1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1OFuyVQ9McRH3GeuHkJEZN/38e30e3f1daf14c5acb9febb1737d8c3/PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
              details: { size: 567164, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-4.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1RRbrEcbJrJtJMT1bzU8Gc',
            type: 'Asset',
            createdAt: '2021-04-14T01:50:35.937Z',
            updatedAt: '2021-04-14T01:50:35.937Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'leopard2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1RRbrEcbJrJtJMT1bzU8Gc/32f7709489d88359d62f08db914d3360/PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
              details: { size: 847510, image: { width: 3093, height: 1324 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-24.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1YTbF5tGizsjmmGtmDf7tx',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:32.457Z',
            updatedAt: '2020-10-15T18:05:32.457Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1YTbF5tGizsjmmGtmDf7tx/c3593da25daef024771437dac2589dfb/BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
              details: { size: 314330, image: { width: 3555, height: 1999 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-BLACK.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1ZWwKDO1r9oxg5njQ3XRm',
            type: 'Asset',
            createdAt: '2020-10-26T00:09:46.862Z',
            updatedAt: '2021-08-16T20:22:08.285Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'heromint5',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1ZWwKDO1r9oxg5njQ3XRm/15a9726a6296808526665837b2c3573c/PajeVictoriaxblendjetxbanners-26.jpg?w=400',
              details: { size: 1286450, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetxbanners-26.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1cyBrTKLyFH24NmUWfALFG',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.218Z',
            updatedAt: '2020-10-21T00:10:35.945Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'whiteProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1cyBrTKLyFH24NmUWfALFG/a0299e789458bac829eb3fc708d087b2/BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
              details: { size: 298760, image: { width: 3555, height: 1999 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-WHITE.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1jVxa3NuYfPmkGJDe7fI5d',
            type: 'Asset',
            createdAt: '2021-08-28T00:26:52.508Z',
            updatedAt: '2021-09-06T22:23:30.988Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'blackMarble2',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1jVxa3NuYfPmkGJDe7fI5d/b0c89950154281ed223f8f8432a530bf/PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
              details: { size: 758278, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-130.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1q7ANn7c1hGD6Z8icqYzC8',
            type: 'Asset',
            createdAt: '2020-10-28T00:16:46.674Z',
            updatedAt: '2020-10-28T02:09:42.261Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'skybluehero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1q7ANn7c1hGD6Z8icqYzC8/efa5a5ab46cc5b5671ed29bb57798597/2pajevictoriaxblendjet2xlifestyle-767__1_.jpg?w=400',
              details: { size: 117903, image: { width: 1080, height: 608 } },
              fileName: '2pajevictoriaxblendjet2xlifestyle-767 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1qwpDcHjIzx41Kv4vxjNup',
            type: 'Asset',
            createdAt: '2020-10-26T01:04:12.518Z',
            updatedAt: '2020-10-27T21:31:08.993Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'coralhero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1qwpDcHjIzx41Kv4vxjNup/13ee44fcdb78659766b161b8b77b39d1/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
              details: { size: 789037, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1vBlbVAr383Ue91EfAIojg',
            type: 'Asset',
            createdAt: '2020-10-26T01:06:14.478Z',
            updatedAt: '2020-10-27T21:37:53.346Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'hotpinkhero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1vBlbVAr383Ue91EfAIojg/00a589e98fb6d081314bc2f5257f46fb/pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
              details: { size: 623650, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-308.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1yCXm2K0GNPxoVaWtNq5XH',
            type: 'Asset',
            createdAt: '2020-10-26T00:31:08.172Z',
            updatedAt: '2020-10-26T00:31:08.172Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'redhero5',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1yCXm2K0GNPxoVaWtNq5XH/9bff7f32097044a0730e354168270861/pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
              details: { size: 139171, image: { width: 1024, height: 683 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-557.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '1yoFXhwz1ITFEcRCiOvsTG',
            type: 'Asset',
            createdAt: '2021-04-14T02:06:08.997Z',
            updatedAt: '2021-04-14T02:06:08.997Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/1yoFXhwz1ITFEcRCiOvsTG/da0ca44752e13518647ad0d5e38c555f/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
              details: { size: 316225, image: { width: 2100, height: 1181 } },
              fileName: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-GEODE.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '22RiuWql7G2f7yrPMPMU3W',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:14.668Z',
            updatedAt: '2020-10-27T21:14:31.724Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'blackHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/22RiuWql7G2f7yrPMPMU3W/8dbe0c95c5c114e9f521406bcaa26c95/pajevictoriaxblendjet2xlifestyle-786__1_.jpg?w=400',
              details: { size: 529683, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-786 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2582vWbX6MxHrf1WwvJ9sr',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:14.736Z',
            updatedAt: '2021-08-16T20:21:20.697Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'heroMint3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2582vWbX6MxHrf1WwvJ9sr/70473fd85182a6135e95d981d64a9612/pajevictoriaxblendjet2xlifestyle-65__1_.jpg?w=400',
              details: { size: 745155, image: { width: 3600, height: 2308 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-65 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '265ywGeHUuu9LPBhNVw4jp',
            type: 'Asset',
            createdAt: '2021-06-09T19:24:53.355Z',
            updatedAt: '2021-06-12T03:23:57.496Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'blendjetwoodlandcamo',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/265ywGeHUuu9LPBhNVw4jp/4abab1182c88382af63c1f90143ea67b/BLENDJET-WOODLAND-CAMO.jpg?w=400',
              details: { size: 573054, image: { width: 2100, height: 1181 } },
              fileName: 'BLENDJET-WOODLAND-CAMO.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '26b9czvsgK57cj4oHzQcB1',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:13.423Z',
            updatedAt: '2020-10-27T21:26:10.690Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'blushHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/26b9czvsgK57cj4oHzQcB1/0501421791d3f08fc7ec4d8d00587068/pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
              details: { size: 769186, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-72.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '27iyFoieHUMptHlWnxSY1h',
            type: 'Asset',
            createdAt: '2021-04-14T01:47:43.683Z',
            updatedAt: '2021-04-14T01:47:43.683Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'geode1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/27iyFoieHUMptHlWnxSY1h/c0f9c1cdbde23671d532c0726d6f7dbf/PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
              details: { size: 1233861, image: { width: 3600, height: 1605 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-79.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2KFMzvIMcKUZiif2pLZHTW',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.561Z',
            updatedAt: '2021-09-07T18:51:53.616Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            locale: 'en-US',
          },
          fields: {
            title: 'whiteHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2KFMzvIMcKUZiif2pLZHTW/48a49dd116775b37aca36fd33ab5ef50/PajeVictoriaxblendjetxbanners2-3__1_.jpg?w=400',
              details: { size: 1861863, image: { width: 3600, height: 2522 } },
              fileName: 'PajeVictoriaxblendjetxbanners2-3 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2LKYrXqwX33PLWfkREaYJn',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.250Z',
            updatedAt: '2021-03-29T23:28:16.937Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'lemonProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2LKYrXqwX33PLWfkREaYJn/71ad308f4dbc71fbe35263645585e211/BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
              details: { size: 268731, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-YELLOW.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2NQSwZzIWzMRMwMhTbyrj2',
            type: 'Asset',
            createdAt: '2021-04-14T01:51:16.720Z',
            updatedAt: '2021-04-14T01:51:16.720Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'walnut1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2NQSwZzIWzMRMwMhTbyrj2/2f5ad3551a1ba00e6b146033304b5134/PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
              details: { size: 1965831, image: { width: 3600, height: 2067 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-56.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2PYezjJHVj8ol1RnxuOnkT',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.214Z',
            updatedAt: '2020-10-15T18:05:31.214Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2PYezjJHVj8ol1RnxuOnkT/dcfe80a53f4a8fc242054fcf1d46f20a/BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
              details: { size: 306833, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ROYALBLUE.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2Q9kkII9EIz1AxIHFBJ5Gb',
            type: 'Asset',
            createdAt: '2021-09-06T22:15:30.362Z',
            updatedAt: '2021-09-06T22:15:30.362Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'urbancamo1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2Q9kkII9EIz1AxIHFBJ5Gb/30b47776dfac3ff0f9d514a3668b3a22/PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
              details: { size: 367187, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-72.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2UdNLcFpgjnKJgsX0waEtJ',
            type: 'Asset',
            createdAt: '2020-10-21T00:04:24.593Z',
            updatedAt: '2020-10-21T00:04:24.593Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'skyBlueProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2UdNLcFpgjnKJgsX0waEtJ/c5bcd518328b37465ba80fd4e5de9b9a/BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
              details: { size: 378603, image: { width: 3555, height: 1999 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-SKYBLUE.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2VjSAedOviimHX7fDM1Kag',
            type: 'Asset',
            createdAt: '2020-10-26T01:32:59.909Z',
            updatedAt: '2021-09-08T21:04:33.844Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'whitehero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2VjSAedOviimHX7fDM1Kag/47a4bf9230904928f2710ff2feb79add/PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
              details: { size: 1099099, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetxbanners2-186.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2XBNz9EvO54sasH49u0oEb',
            type: 'Asset',
            createdAt: '2020-10-26T01:28:38.089Z',
            updatedAt: '2020-10-26T01:28:38.089Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'skybluehero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2XBNz9EvO54sasH49u0oEb/eadb55a798db6fd1e6b68f20a5cf725d/_DSC8850.jpg?w=400',
              details: { size: 687648, image: { width: 2048, height: 1365 } },
              fileName: '_DSC8850.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2YGh7omx6veErwMCFGCiok',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:11.995Z',
            updatedAt: '2020-10-26T13:28:11.995Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '5 USB-C',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/2YGh7omx6veErwMCFGCiok/79d7bb88708f3107e1d20777bced79a3/5_USB-C.mp4',
              details: { size: 418015 },
              fileName: '5_USB-C.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2csc8u77kAGQ3JYRJBDMvU',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:33.082Z',
            updatedAt: '2020-10-20T22:37:42.491Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'lavenderProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2csc8u77kAGQ3JYRJBDMvU/29432737845944359ac4650c97b7e85d/BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
              details: { size: 275672, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-LAVENDER.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2mLUfuBvrIgQZO6IUSJAC9',
            type: 'Asset',
            createdAt: '2020-10-26T01:17:32.861Z',
            updatedAt: '2020-10-27T23:31:31.356Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'herolime2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2mLUfuBvrIgQZO6IUSJAC9/f13debde5ab79e7b9392bf030860ba44/pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
              details: { size: 615416, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-944.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2p5gFzd0Z4YESSuiQXTxQn',
            type: 'Asset',
            createdAt: '2020-10-26T00:30:17.380Z',
            updatedAt: '2020-10-26T00:30:17.380Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'redhero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2p5gFzd0Z4YESSuiQXTxQn/64ec35cc025fb8124bb5c1c1623a7ed4/pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
              details: { size: 856674, image: { width: 3600, height: 1984 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-238.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2sRdV7y65KfP63RAqB2DOr',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:33.310Z',
            updatedAt: '2020-10-15T18:05:33.310Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2sRdV7y65KfP63RAqB2DOr/7dbbc3e526c6d2f8dd71b72d1863d03d/BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
              details: { size: 330545, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-HOTPINK.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2tHnzQUI38TMpkCojuLuQ',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.639Z',
            updatedAt: '2020-10-27T23:27:06.610Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'lemonHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2tHnzQUI38TMpkCojuLuQ/d67ea69fbfdeccc72a4574dd59ac13f5/pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
              details: { size: 414276, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1185.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '2x7cTOsKWnyAogiA3OOCNb',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.200Z',
            updatedAt: '2020-10-15T18:05:31.200Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/2x7cTOsKWnyAogiA3OOCNb/25ba0d0b0385190d4c88bce9a2459f71/BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
              details: { size: 389068, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-GREEN.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '31EF2F46eAs9fMdp25IPD4',
            type: 'Asset',
            createdAt: '2021-08-28T00:27:48.529Z',
            updatedAt: '2021-08-28T00:27:48.529Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'carbonFiber1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/31EF2F46eAs9fMdp25IPD4/8e24e42c7b3753ceead096eb5b0d2911/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
              details: { size: 204801, image: { width: 2001, height: 1125 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-CARBON-FIBER.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '35H5SZMMjM4uKfesW8nEKL',
            type: 'Asset',
            createdAt: '2021-07-15T00:33:24.367Z',
            updatedAt: '2021-07-16T01:51:59.667Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'whitemarble',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/35H5SZMMjM4uKfesW8nEKL/e2303be6ac929ed1d0ebb2b343096c11/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
              details: { size: 247522, image: { width: 2100, height: 1181 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-V1-MARBLE.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '35hJXfuSdAdBqrjcBuQ5yo',
            type: 'Asset',
            createdAt: '2020-10-26T00:29:19.454Z',
            updatedAt: '2020-10-26T00:29:19.454Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'redhero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/35hJXfuSdAdBqrjcBuQ5yo/5f07959a7872ca523500968e66f7012c/pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
              details: { size: 1101296, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-161.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '36EA6239OdBxydk4pZ6EDs',
            type: 'Asset',
            createdAt: '2021-09-06T22:14:46.645Z',
            updatedAt: '2021-09-06T22:14:46.645Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'wintercamo4',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/36EA6239OdBxydk4pZ6EDs/54c7c597cec80a64b6eebbe6bded6062/PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
              details: { size: 555064, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-68.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '37upHMruwhxiZ74TsUMRqL',
            type: 'Asset',
            createdAt: '2021-04-02T15:41:05.238Z',
            updatedAt: '2021-04-06T13:47:10.329Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            locale: 'en-US',
          },
          fields: {
            title: 'baileysHero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/37upHMruwhxiZ74TsUMRqL/b927bf67e1d78423e06aa593ebc21cce/PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
              details: { size: 11958276, image: { width: 6115, height: 2802 } },
              fileName: 'PajeVictoriaxblendjetxBaileysxfinals-4.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3GMwAEblYybEocy9j5KBeG',
            type: 'Asset',
            createdAt: '2021-04-02T15:32:29.063Z',
            updatedAt: '2021-04-02T18:54:53.683Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'baileys',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3GMwAEblYybEocy9j5KBeG/575ef28771b7a4eeae80375ad66a4a21/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
              details: { size: 474649, image: { width: 2100, height: 1182 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BAILEYS-COLADA.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3JCNw4uXuTKNzL9nm3QDEa',
            type: 'Asset',
            createdAt: '2021-04-14T01:54:30.507Z',
            updatedAt: '2021-04-14T01:54:30.507Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'wintercamo2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3JCNw4uXuTKNzL9nm3QDEa/230a9a1ce93adfdf3230afd8bc1e2e02/PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
              details: { size: 1675714, image: { width: 3600, height: 1821 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-14.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3JfhYdlbQjd4fh17wz1Hqx',
            type: 'Asset',
            createdAt: '2020-10-26T00:10:21.828Z',
            updatedAt: '2020-10-26T00:10:21.828Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'heromint4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3JfhYdlbQjd4fh17wz1Hqx/3cdba2f601aabd7bb46c589a6735a208/_DSC6816__1_.jpg?w=400',
              details: { size: 690943, image: { width: 2048, height: 1365 } },
              fileName: '_DSC6816 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3LXO4YTDXsI0Ua8UQvpprm',
            type: 'Asset',
            createdAt: '2021-08-28T00:26:23.866Z',
            updatedAt: '2021-08-28T00:26:23.866Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'blackMarble1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3LXO4YTDXsI0Ua8UQvpprm/eca43c4b51f2da8c7e0fbaff08296ff3/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
              details: { size: 217015, image: { width: 2100, height: 1182 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-BLACK-MARBLE.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3M3qI22QfXOBEsBttGvRRU',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.550Z',
            updatedAt: '2020-10-27T02:38:52.853Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: '11 QUIET',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/3M3qI22QfXOBEsBttGvRRU/6e7ada9aaa369d86ca09e1ba45098b0e/11_QUIET.mp4',
              details: { size: 422173 },
              fileName: '11_QUIET.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3TdX6oIlK7Cvfke16RlaF3',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:11.993Z',
            updatedAt: '2020-10-30T19:50:46.152Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: '4 SHAKE-UP-ROUTINE',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/3TdX6oIlK7Cvfke16RlaF3/1dae50999af2bc423919a20a22521890/4_SHAKE-UP-ROUTINE.mp4',
              details: { size: 1301406 },
              fileName: '4_SHAKE-UP-ROUTINE.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3f2PSBjqAWeOhnnVi61OmR',
            type: 'Asset',
            createdAt: '2021-04-14T01:49:14.996Z',
            updatedAt: '2021-04-14T01:55:02.644Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'geode2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3f2PSBjqAWeOhnnVi61OmR/7e8bf4280a369ebd7cdadbf7ac8b3f28/PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
              details: { size: 597443, image: { width: 3600, height: 1639 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-40.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3i9UoGzSKnQHCk2dB9K0Tw',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.561Z',
            updatedAt: '2020-10-26T00:24:18.961Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'purpleHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3i9UoGzSKnQHCk2dB9K0Tw/ccecf76411586ecee0ae0140e6146758/_DSC6686.jpg?w=400',
              details: { size: 636937, image: { width: 2048, height: 1365 } },
              fileName: '_DSC6686.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3kgfmWm7FSh0mb281oFrB2',
            type: 'Asset',
            createdAt: '2021-09-06T22:21:14.347Z',
            updatedAt: '2021-09-06T22:21:14.347Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'woodlandcamo3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3kgfmWm7FSh0mb281oFrB2/ee3c5b4f0a2775e29f5d45aee025ef0d/PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
              details: { size: 635730, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-92.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '3p3l2UBK9hHUyvj5eXh21f',
            type: 'Asset',
            createdAt: '2020-10-26T01:01:42.295Z',
            updatedAt: '2020-10-27T21:34:08.040Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'coralhero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/3p3l2UBK9hHUyvj5eXh21f/821e8da37bc1244957d38422af22bc04/pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
              details: { size: 632390, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-179.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '404ONuvp37xrnAb5DG1o8x',
            type: 'Asset',
            createdAt: '2020-10-26T01:21:52.147Z',
            updatedAt: '2020-10-26T01:22:04.221Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'orangehero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/404ONuvp37xrnAb5DG1o8x/127122240831ba7369d34030bf8d2ff6/_DSC6619.jpg?w=400',
              details: { size: 718523, image: { width: 2048, height: 1365 } },
              fileName: '_DSC6619.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '45lAEGHKtTrEljUU6i3v6a',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.199Z',
            updatedAt: '2020-10-15T18:05:31.199Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/45lAEGHKtTrEljUU6i3v6a/7bd7326310b0bcff76c791e76523845c/BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
              details: { size: 356528, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PURPLE.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '47rc5cChawgDgQvaRfftSS',
            type: 'Asset',
            createdAt: '2021-09-06T22:14:27.194Z',
            updatedAt: '2021-09-06T22:14:27.194Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'wintercamo3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/47rc5cChawgDgQvaRfftSS/481f1d3cb737ebf5377abf8132db2583/PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
              details: { size: 708582, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-203.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '488Hg6Kc5WgkwCKyxH0p4N',
            type: 'Asset',
            createdAt: '2021-04-06T13:52:37.198Z',
            updatedAt: '2021-04-06T13:52:37.198Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'baileyshero6',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/488Hg6Kc5WgkwCKyxH0p4N/ba5c745cbb8d116fea71b7659eab726a/PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
              details: { size: 4609314, image: { width: 4356, height: 2383 } },
              fileName: 'PajeVictoriaxblendjetxBaileysxfinals-18.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '48V8HhKqrkOxxULndC0Duj',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:14.459Z',
            updatedAt: '2021-08-16T20:19:25.417Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'heroMint1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/48V8HhKqrkOxxULndC0Duj/763598b8e8ee87ac2e7d06e16f86d9ca/PajeVictoriaxblendjetxbanners-8.jpg?w=400',
              details: { size: 1424952, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetxbanners-8.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4ETIUGqWUCyXMWv3zofTBb',
            type: 'Asset',
            createdAt: '2020-10-27T07:01:49.502Z',
            updatedAt: '2020-10-27T07:01:49.502Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '1 NEXT-GEN',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/4ETIUGqWUCyXMWv3zofTBb/50f58964b5304264c95977f219e62f8d/1_NEXT-GEN.mp4',
              details: { size: 1434620 },
              fileName: '1_NEXT-GEN.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4HAqXL8ep4AYCMW9Opatgu',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.611Z',
            updatedAt: '2020-10-26T13:28:12.611Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '9 MEASURING',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/4HAqXL8ep4AYCMW9Opatgu/7d4f4686fea50a50e54886d8a9c34749/9_MEASURING.mp4',
              details: { size: 710968 },
              fileName: '9_MEASURING.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4SDiXbBIXApjGZn45Vb4kr',
            type: 'Asset',
            createdAt: '2020-10-26T01:29:32.917Z',
            updatedAt: '2020-10-26T01:29:32.917Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'skybluehero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/4SDiXbBIXApjGZn45Vb4kr/a509aa39ae1ee3c046aecf528613ed8b/pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
              details: { size: 724747, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1391.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4YmrrFVHK8hK6njcum4XHN',
            type: 'Asset',
            createdAt: '2021-09-06T22:22:12.869Z',
            updatedAt: '2021-10-04T23:59:26.089Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'leopard3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/4YmrrFVHK8hK6njcum4XHN/769e8680029d9cf36118f69d615ab2ff/PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
              details: { size: 456648, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-30.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4cyBGS8N23g2eAWQb86Hhk',
            type: 'Asset',
            createdAt: '2021-06-09T15:37:51.998Z',
            updatedAt: '2021-06-09T15:37:51.998Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'woodlandcamo2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/4cyBGS8N23g2eAWQb86Hhk/3fcfc8f4ce06f75ab3f2b6d827d5afb5/PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
              details: { size: 690522, image: { width: 3600, height: 1884 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-171.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4d7J1KC3AgdNbbl3dYQQDg',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:11.997Z',
            updatedAt: '2020-10-26T13:28:11.997Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '2 TURBOJET',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/4d7J1KC3AgdNbbl3dYQQDg/1aca8b7f6734d5f1ee246bdf3bc6f46b/2_TURBOJET.mp4',
              details: { size: 1649868 },
              fileName: '2_TURBOJET.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4liq4y6Yc2KhGCSlV1T8qK',
            type: 'Asset',
            createdAt: '2020-10-26T01:42:22.153Z',
            updatedAt: '2020-10-27T23:27:25.456Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'lemonhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/4liq4y6Yc2KhGCSlV1T8qK/a82e653d821adfe3313bfa8744ca8cc7/pajevictoriaxblendjet2xfalloutdoor2-62__1_.jpg?w=400',
              details: { size: 696446, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-62 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4vLiYBk7LLqwjt8kiIAiPv',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.509Z',
            updatedAt: '2020-10-27T02:35:54.919Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: '12 LOCK',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/4vLiYBk7LLqwjt8kiIAiPv/54624fdfe841471af0a4f10ee18cd871/12_LOCK.mp4',
              details: { size: 1312186 },
              fileName: '12_LOCK.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4x9c0ZGHnRUioPGibmIIlQ',
            type: 'Asset',
            createdAt: '2021-06-12T21:41:42.980Z',
            updatedAt: '2021-06-12T21:41:42.980Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'Red Dot Design Award 2021',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/4x9c0ZGHnRUioPGibmIIlQ/894adab1cb7d9639765ca9508af35480/PD2021_RD.png',
              details: { size: 75234, image: { width: 806, height: 472 } },
              fileName: 'PD2021_RD.png',
              contentType: 'image/png',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '4xypYvB3PeguBsbCcDhZc5',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.164Z',
            updatedAt: '2020-10-26T13:28:12.164Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '6 SELF-CLEANING',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/4xypYvB3PeguBsbCcDhZc5/e351cb1b3b0b2039c063c770b8433c63/6_SELF-CLEANING.mp4',
              details: { size: 1483137 },
              fileName: '6_SELF-CLEANING.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '58i8SIRZkIPavEZpGbJnEC',
            type: 'Asset',
            createdAt: '2021-04-14T01:50:05.053Z',
            updatedAt: '2021-04-14T01:50:05.053Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'leopard1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/58i8SIRZkIPavEZpGbJnEC/d0996a509b1f475d4e12c4743b2e1ef7/PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
              details: { size: 636591, image: { width: 3600, height: 1913 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-10.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5A3vafoyJrHCHP1qon63hs',
            type: 'Asset',
            createdAt: '2020-10-26T00:26:39.584Z',
            updatedAt: '2020-10-28T00:00:16.525Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'royalblueHero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5A3vafoyJrHCHP1qon63hs/44f1e1f6a0267d1e43b46645b6fd4c95/pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
              details: { size: 687041, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-56.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5BuuLwmEpWqn6ovy1r5omh',
            type: 'Asset',
            createdAt: '2020-10-26T00:26:21.818Z',
            updatedAt: '2020-10-26T00:26:21.818Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'royalblueHero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5BuuLwmEpWqn6ovy1r5omh/22b38a33a60ed72e3ebdb641df1fa414/_DSC8806.jpg?w=400',
              details: { size: 671219, image: { width: 2048, height: 1365 } },
              fileName: '_DSC8806.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5DLdkUNBkZyGgOgNdCEWno',
            type: 'Asset',
            createdAt: '2020-10-26T23:11:49.695Z',
            updatedAt: '2020-10-26T23:11:49.695Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'on a mission',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5DLdkUNBkZyGgOgNdCEWno/cc0be5dd0a1346edcf4239d0cff11b42/About_us_hero_image_TWO.jpg?w=400',
              details: { size: 46687, image: { width: 720, height: 480 } },
              fileName: 'About us hero image TWO.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5Ds6dqaVdwBtLJQAFkk3wK',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:13.832Z',
            updatedAt: '2020-10-28T00:02:15.406Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'royalBlueHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5Ds6dqaVdwBtLJQAFkk3wK/40c4399d3f7b8029a3f49286ec2b3ab1/pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
              details: { size: 740553, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-89.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5OP8sZsFUirSWzSeXcthYf',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:32.637Z',
            updatedAt: '2021-05-12T01:14:45.170Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5OP8sZsFUirSWzSeXcthYf/4e3fc008c4f6833befdf014c1570845e/BLENDJET-2-HERO-LANDSCAPE-CROP-MINT_2.jpg?w=400',
              details: { size: 592569, image: { width: 3556, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-MINT 2.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5PwJV6YENKw3d98SxB2Mc6',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.547Z',
            updatedAt: '2021-02-19T17:59:11.574Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 7,
            locale: 'en-US',
          },
          fields: {
            title: 'oceanhero1',
            description: 'BlendJet 2 with Delicious Smoothie Inside',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5PwJV6YENKw3d98SxB2Mc6/b88f88de7c307c84ca86248f87f0c75b/pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
              details: { size: 862449, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-116.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5VOTNkK34QBn2YHc36lCJu',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.041Z',
            updatedAt: '2020-10-26T13:28:12.041Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '3 PERFECT',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/5VOTNkK34QBn2YHc36lCJu/1c8d8350d64adfc653ff9ace4132df95/3_PERFECT.mp4',
              details: { size: 1455477 },
              fileName: '3_PERFECT.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5WniqfKvODQZeQHL23bQKA',
            type: 'Asset',
            createdAt: '2021-04-23T04:55:51.492Z',
            updatedAt: '2021-04-23T04:55:51.492Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5WniqfKvODQZeQHL23bQKA/2e2011147bec337436f9429952b3fe2f/BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
              details: { size: 453342, image: { width: 2100, height: 1181 } },
              fileName:
                'BLENDJET-PATTERN-LANSCAPE-CROP-LEOPARD-FINAL.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5YW0mmzROyW5dwtl27e5fL',
            type: 'Asset',
            createdAt: '2021-08-28T00:24:13.878Z',
            updatedAt: '2021-09-06T22:16:17.945Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'urbancamo2',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5YW0mmzROyW5dwtl27e5fL/d6a212afc185c88c761a636401a4ea25/PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
              details: { size: 1301115, image: { width: 3600, height: 2400 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-199.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5Zagb2GIFS9cDdy3DkEXVF',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:15.091Z',
            updatedAt: '2020-10-26T13:28:15.091Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '13 JETPACK',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/5Zagb2GIFS9cDdy3DkEXVF/0c640715b721cce88ec9149b90e3100f/13_JETPACK.mp4',
              details: { size: 1042176 },
              fileName: '13_JETPACK.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5aCmQ0oQcbUgH5LaQzs2v0',
            type: 'Asset',
            createdAt: '2020-10-26T01:25:13.174Z',
            updatedAt: '2020-10-27T21:27:09.528Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'blushhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5aCmQ0oQcbUgH5LaQzs2v0/f6cef96590056c413b7cb14894e0c5f4/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
              details: { size: 1025702, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5e8btB2FMJAqKgTDhZDTNi',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:15.098Z',
            updatedAt: '2020-10-26T13:28:15.098Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '8 FOOD-PROCESSING',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/5e8btB2FMJAqKgTDhZDTNi/960c623d2841652449c0c2dff6da52f1/8_FOOD-PROCESSING.mp4',
              details: { size: 1258321 },
              fileName: '8_FOOD-PROCESSING.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5fwSnXiviMq6qyQiAPD8r6',
            type: 'Asset',
            createdAt: '2020-10-26T01:06:35.646Z',
            updatedAt: '2020-10-27T21:38:15.486Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'hotpinkhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5fwSnXiviMq6qyQiAPD8r6/e32dd25a35c9f2844c3da3074db76e90/pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
              details: { size: 1007063, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-335.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5gRM186OwJ3Ezkap52lUWR',
            type: 'Asset',
            createdAt: '2020-10-26T01:07:18.905Z',
            updatedAt: '2020-10-27T21:38:37.824Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'hotpinkhero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5gRM186OwJ3Ezkap52lUWR/0ccd9245841b52df95af60056233c02a/pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
              details: { size: 635844, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1026.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5gZ1okOWbmxBUNwPk0ZFiF',
            type: 'Asset',
            createdAt: '2020-10-26T01:42:40.576Z',
            updatedAt: '2020-10-27T23:27:48.351Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'lemonhero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5gZ1okOWbmxBUNwPk0ZFiF/8a532277d66658d5a04062006151c545/pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
              details: { size: 506004, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-952.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5kyTAhTfvKT7ciIRmsmRdB',
            type: 'Asset',
            createdAt: '2021-08-28T00:24:32.904Z',
            updatedAt: '2021-08-28T00:24:32.904Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'urbanCamo1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5kyTAhTfvKT7ciIRmsmRdB/3f5529a815efe5cb0dd596e6fe685062/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
              details: { size: 141748, image: { width: 2101, height: 1181 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-URBAN-CAMO.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5sHyXNkZscDpY94NvGr0dY',
            type: 'Asset',
            createdAt: '2020-10-26T01:45:15.467Z',
            updatedAt: '2020-10-28T00:05:49.136Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'seafoamhero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5sHyXNkZscDpY94NvGr0dY/b9f1f72d884ccffa4e963bd28e4c5609/pajevictoriaxblendjet2xfalloutdoor2-20__1_.jpg?w=400',
              details: { size: 510212, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-20 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5sxUHmIz7qBE5gLRmPZMgQ',
            type: 'Asset',
            createdAt: '2021-09-06T22:13:05.674Z',
            updatedAt: '2021-09-06T22:13:05.674Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'walnut4',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5sxUHmIz7qBE5gLRmPZMgQ/6c9c411a5fc04f420528d23636dc2418/PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
              details: { size: 504513, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-52.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '5wbj2sN47L8BrfG5B8GArY',
            type: 'Asset',
            createdAt: '2020-10-26T01:39:07.029Z',
            updatedAt: '2021-02-19T17:58:32.639Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'oceanhero3',
            description: 'BlendJet 2 in Ocean Color',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/5wbj2sN47L8BrfG5B8GArY/284a5236b60f4d9493bea9bcec6dfc3f/_DSC6782.jpg?w=400',
              details: { size: 783720, image: { width: 2048, height: 1365 } },
              fileName: '_DSC6782.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '61Vb0TFePAhWmovnL1jMsm',
            type: 'Asset',
            createdAt: '2021-09-06T22:15:52.084Z',
            updatedAt: '2021-09-06T22:15:52.084Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'urbancamo3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/61Vb0TFePAhWmovnL1jMsm/2d2abf618434d0dd9474a827d2201fb5/PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
              details: { size: 801777, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-124.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '665IrZasJ9phcwHvCuIENE',
            type: 'Asset',
            createdAt: '2021-04-14T01:52:26.339Z',
            updatedAt: '2021-04-14T01:52:26.339Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'walnut2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/665IrZasJ9phcwHvCuIENE/11fc42d68b072feca191fc762be16e07/PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
              details: { size: 536989, image: { width: 3600, height: 2167 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-55.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '69LpvXulHbVwkImVsdMOYe',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.326Z',
            updatedAt: '2020-10-21T00:09:55.190Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'seaFoamProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/69LpvXulHbVwkImVsdMOYe/ab80e6caa0c6ef2eb4c95372cf58a884/BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
              details: { size: 256023, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-SEAFOAM.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6Ec5d165elSJb2wcmn7koq',
            type: 'Asset',
            createdAt: '2020-10-26T00:24:36.806Z',
            updatedAt: '2020-10-26T00:24:36.806Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'purpleHero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6Ec5d165elSJb2wcmn7koq/b9707ba0913f9237af2e61ddde32bcdd/pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
              details: { size: 87948, image: { width: 1024, height: 683 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1043.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6FWFcC4laPo5uWkdKtU4F2',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:15.607Z',
            updatedAt: '2020-10-27T23:20:13.933Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'lavenderHero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6FWFcC4laPo5uWkdKtU4F2/13b9e6218db3b848d86035c223e17b07/pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
              details: { size: 627254, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-138.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6GMprp75HM0swouzUoy02Y',
            type: 'Asset',
            createdAt: '2020-10-23T15:08:48.739Z',
            updatedAt: '2021-02-19T18:01:00.850Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'oceanProductImage',
            description: 'BlendJet 2 in Ocean Color with Fruits Inside',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6GMprp75HM0swouzUoy02Y/76b5c26e0897bd5f9a3b7514015ca558/BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
              details: { size: 334569, image: { width: 3556, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-IMAGES-OCEAN-LANDSCAPE.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6N1l5yHt8uEqJaUXeTRhw1',
            type: 'Asset',
            createdAt: '2021-07-15T00:34:26.083Z',
            updatedAt: '2021-07-15T00:34:26.083Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'whitemarble2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6N1l5yHt8uEqJaUXeTRhw1/1416505789314b0be5bf995c649b94b4/PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
              details: { size: 628357, image: { width: 3600, height: 1827 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-153.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6NBI2Bxz1jOCOIEbzb9rgW',
            type: 'Asset',
            createdAt: '2021-04-14T02:07:22.317Z',
            updatedAt: '2021-06-12T21:16:38.792Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6NBI2Bxz1jOCOIEbzb9rgW/6bd0d16201471a464cdc23663b264193/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
              details: { size: 3611764, image: { width: 5456, height: 3069 } },
              fileName:
                'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WINTER-CAMO.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6NgswuIGpIwh7oVu4Y88lf',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.533Z',
            updatedAt: '2020-10-26T13:28:12.533Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '7 COLORS',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/6NgswuIGpIwh7oVu4Y88lf/439d9e70118f4ed8b9bd43829fc95131/7_COLORS.mp4',
              details: { size: 1156094 },
              fileName: '7_COLORS.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6QWmbb7SZx0JYA6vICFFfT',
            type: 'Asset',
            createdAt: '2020-10-26T01:39:24.161Z',
            updatedAt: '2021-02-19T17:59:23.382Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'oceanhero4',
            description:
              'BlendJet 2 in Five Different Colors with Delicious Smoothies Inside',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6QWmbb7SZx0JYA6vICFFfT/1ba4610765250368cfbb720470d5b6eb/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
              details: { size: 169951, image: { width: 1024, height: 608 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6SOUHa7R0s5FBBNGtYqdo6',
            type: 'Asset',
            createdAt: '2021-04-02T15:42:21.439Z',
            updatedAt: '2021-04-06T13:46:17.209Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            locale: 'en-US',
          },
          fields: {
            title: 'baileysHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6SOUHa7R0s5FBBNGtYqdo6/5e9059f4b6b3af4b3d7c49296852a9c3/PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
              details: { size: 13701241, image: { width: 6720, height: 4480 } },
              fileName: 'PajeVictoriaxblendjetxBaileysxfinals-7.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6VprwTnCRShZUweOBMQUiO',
            type: 'Asset',
            createdAt: '2020-10-26T00:17:03.125Z',
            updatedAt: '2020-10-27T21:11:16.566Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'blackhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6VprwTnCRShZUweOBMQUiO/14752bcf1a1386a365edfcd103617e7f/pajevictoriaxblendjet2xlifestyle-1083__1_.jpg?w=400',
              details: { size: 312947, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1083 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6X8hQXn1NuJtLlVU9Zj5cK',
            type: 'Asset',
            createdAt: '2021-07-15T00:33:56.277Z',
            updatedAt: '2021-07-15T00:33:56.277Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'whitemarble1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6X8hQXn1NuJtLlVU9Zj5cK/f9335973a0f5f3e5946f2e12ffbfd83c/PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
              details: { size: 559362, image: { width: 3600, height: 1788 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-139.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6iJ926YVjFFA35BokBFWNC',
            type: 'Asset',
            createdAt: '2021-04-02T15:41:59.387Z',
            updatedAt: '2021-04-06T13:52:09.408Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'baileysHero5',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6iJ926YVjFFA35BokBFWNC/0278c5c132ac5da8515e6afb691bfe72/PajeVictoriaxblendjetxBaileysxfinals-16_copy.jpg?w=400',
              details: { size: 7418272, image: { width: 5607, height: 3346 } },
              fileName:
                'PajeVictoriaxblendjetxBaileysxfinals-16 copy.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6kbBRrTTd9tXl1wKAeV6UV',
            type: 'Asset',
            createdAt: '2020-10-26T00:30:40.396Z',
            updatedAt: '2020-10-26T00:30:40.396Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'redhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6kbBRrTTd9tXl1wKAeV6UV/0ccc615f6c850ae8b0c6b6acab3862a9/_DSC7377.jpg?w=400',
              details: { size: 672878, image: { width: 2048, height: 1365 } },
              fileName: '_DSC7377.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6ksM5fEYyru3eec56Uz1S2',
            type: 'Asset',
            createdAt: '2021-04-14T01:54:00.130Z',
            updatedAt: '2021-04-14T01:54:00.130Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'wintercamo1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6ksM5fEYyru3eec56Uz1S2/e9409dc6666da609d23e48004360de32/PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
              details: { size: 741677, image: { width: 3600, height: 2155 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-126.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6okMDTQBucpDibj0h6ZbII',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.507Z',
            updatedAt: '2020-10-27T21:26:48.190Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'blushHero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6okMDTQBucpDibj0h6ZbII/d8c6c8a62c1632d9104e638d1950fcf2/pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
              details: { size: 479378, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-338.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6rDBjPZrkTvz6aLPTjw79s',
            type: 'Asset',
            createdAt: '2021-04-02T15:40:34.194Z',
            updatedAt: '2021-04-06T13:47:44.864Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 6,
            locale: 'en-US',
          },
          fields: {
            title: 'baileysHero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6rDBjPZrkTvz6aLPTjw79s/ec03c2320c54df204077269bc279ac28/PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
              details: { size: 9442015, image: { width: 5831, height: 4403 } },
              fileName: 'PajeVictoriaxblendjetxBaileysxfinals-9.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6suoBmKvpCesIoSMvaFlCS',
            type: 'Asset',
            createdAt: '2021-09-06T22:22:32.555Z',
            updatedAt: '2021-10-04T22:58:43.752Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'leopard4',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6suoBmKvpCesIoSMvaFlCS/0afb7cd31fd78662c12ffb5c0971b6e2/PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
              details: { size: 856053, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-192.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '6u7D58bVlU7k9Mh3RCpaMc',
            type: 'Asset',
            createdAt: '2021-06-09T15:37:20.185Z',
            updatedAt: '2021-06-09T15:37:20.185Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'woodlandcamo1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/6u7D58bVlU7k9Mh3RCpaMc/b4fb07bf5822e5fa4074f5ab717717d6/PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
              details: { size: 551980, image: { width: 3600, height: 1892 } },
              fileName: 'PajeVictoriaxblendjetxNewPrints-121.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '74eT5edDTSvsv2u5o7AQh3',
            type: 'Asset',
            createdAt: '2020-10-26T01:44:44.001Z',
            updatedAt: '2020-10-26T20:50:59.513Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'seafoamhero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/74eT5edDTSvsv2u5o7AQh3/5040b436153fecac27a0c26b49951179/pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
              details: { size: 240231, image: { width: 1024, height: 683 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1148.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '79qiiLfUV7MjfnliCch84z',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:13.836Z',
            updatedAt: '2020-10-27T23:19:16.651Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 5,
            locale: 'en-US',
          },
          fields: {
            title: 'lavenderHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/79qiiLfUV7MjfnliCch84z/d35d2286ede3d32f5815c7194b5d899c/pajevictoriaxblendjet2xlifestyle-347__1_.jpg?w=400',
              details: { size: 670370, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-347 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7AkyQEwK3vxdaTYV7cWV3z',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.540Z',
            updatedAt: '2020-10-26T23:25:38.113Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: '15 SHIPPING',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/7AkyQEwK3vxdaTYV7cWV3z/23060e99d9806b2aae817896818ac76b/15_SHIPPING.mp4',
              details: { size: 941955 },
              fileName: '15_SHIPPING.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7BUIqg4Qys6ZzftY4ki3Oa',
            type: 'Asset',
            createdAt: '2020-10-26T01:38:37.297Z',
            updatedAt: '2021-02-19T17:58:51.292Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'oceanhero2',
            description: 'BlendJet 2 in Five Different Colors',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7BUIqg4Qys6ZzftY4ki3Oa/1df11c2544e6bb5143d73a1f25da14b6/pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
              details: { size: 635875, image: { width: 3600, height: 2400 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-530.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7CvKdqoVuUn81NoIShxZJj',
            type: 'Asset',
            createdAt: '2021-08-28T00:28:11.377Z',
            updatedAt: '2021-09-06T22:24:13.803Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'carbonFiber2',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7CvKdqoVuUn81NoIShxZJj/36396f42e85a02fbd1b8b9c9b60d1338/PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
              details: { size: 593524, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-18.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7DFXRTHvnMWxMSKHyaUQ0H',
            type: 'Asset',
            createdAt: '2020-10-26T01:33:49.603Z',
            updatedAt: '2020-10-26T01:33:49.603Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'whitehero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7DFXRTHvnMWxMSKHyaUQ0H/dd2ccfd1193e4913e8e610b44501877e/_DSC8929.jpg?w=400',
              details: { size: 723455, image: { width: 2048, height: 1365 } },
              fileName: '_DSC8929.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7Hgvh2CTHfTPd2FRmFnBPX',
            type: 'Asset',
            createdAt: '2020-10-26T01:03:53.680Z',
            updatedAt: '2020-10-27T21:30:45.795Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'coralhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7Hgvh2CTHfTPd2FRmFnBPX/9fe9aba0a482391019996161674034ae/pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
              details: { size: 556093, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xfalloutdoor2-83.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7JRMPZvPRJ2g5AahBJGTnG',
            type: 'Asset',
            createdAt: '2020-10-26T01:45:39.083Z',
            updatedAt: '2020-10-26T20:51:24.700Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'seafoamhero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7JRMPZvPRJ2g5AahBJGTnG/540ffece187bfc61f9aa854930d963e9/_DSC8972.jpg?w=400',
              details: { size: 562506, image: { width: 2048, height: 1365 } },
              fileName: '_DSC8972.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7MbZLJb5wIT2GW055p1XrO',
            type: 'Asset',
            createdAt: '2020-10-27T23:34:19.392Z',
            updatedAt: '2020-10-27T23:34:19.392Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'herolime5',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7MbZLJb5wIT2GW055p1XrO/6ab405b7f49fb72c64602f665314f0b9/_DSC6844__2_.jpg?w=400',
              details: { size: 683654, image: { width: 2048, height: 1365 } },
              fileName: '_DSC6844 (2).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7h6IjVhDWkzitazC46dkrf',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:11.975Z',
            updatedAt: '2020-10-26T13:28:11.975Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: '16 MISSION',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/7h6IjVhDWkzitazC46dkrf/24596eea329bc85369bb92c49cea984b/16_MISSION.mp4',
              details: { size: 936948 },
              fileName: '16_MISSION.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7kMbIvz0v5Fyvm2uhtJjnt',
            type: 'Asset',
            createdAt: '2021-04-02T15:41:35.062Z',
            updatedAt: '2021-04-06T13:51:35.708Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 4,
            locale: 'en-US',
          },
          fields: {
            title: 'baileysHero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7kMbIvz0v5Fyvm2uhtJjnt/ad9c440e76891be7f0bb7a68cfee8335/PajeVictoriaxblendjetxBaileysxfinals-11_copy.jpg?w=400',
              details: { size: 16636138, image: { width: 5913, height: 3761 } },
              fileName:
                'PajeVictoriaxblendjetxBaileysxfinals-11 copy.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7kqF21AmRyMplOooP990cQ',
            type: 'Asset',
            createdAt: '2021-04-06T13:53:10.477Z',
            updatedAt: '2021-04-06T13:53:10.477Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'baileyshero7',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7kqF21AmRyMplOooP990cQ/3483d425e4abd8d1a0cc0e1eeadba11f/PajeVictoriaxblendjetxBaileysxfinals-21_copy.jpg?w=400',
              details: { size: 12302939, image: { width: 6606, height: 4277 } },
              fileName:
                'PajeVictoriaxblendjetxBaileysxfinals-21 copy.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7mpVjTCj4cprV383DzsjmV',
            type: 'Asset',
            createdAt: '2021-04-06T13:53:41.778Z',
            updatedAt: '2021-04-06T13:53:41.778Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'baileyshero8',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7mpVjTCj4cprV383DzsjmV/d7259d5104c5a364c67613e7b172ca42/PajeVictoriaxblendjetxBaileysxfinals-28_copy.jpg?w=400',
              details: { size: 14444439, image: { width: 6720, height: 4095 } },
              fileName:
                'PajeVictoriaxblendjetxBaileysxfinals-28 copy.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7s7i3N3YVOZqObN3h9iesR',
            type: 'Asset',
            createdAt: '2020-10-26T01:36:24.374Z',
            updatedAt: '2020-10-28T00:08:27.686Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'whitehero4',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7s7i3N3YVOZqObN3h9iesR/ff15cd0cef25768a51e01ea6e958b1df/pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
              details: { size: 571178, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-340.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '7ybdU4G7GlIHIdWlDF2Kdn',
            type: 'Asset',
            createdAt: '2021-04-14T02:06:59.550Z',
            updatedAt: '2021-04-14T02:06:59.550Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/7ybdU4G7GlIHIdWlDF2Kdn/97917476a81ffbe7a3909ac97f4ff04d/BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
              details: { size: 361614, image: { width: 2100, height: 1181 } },
              fileName: 'BLENDJET-PATTERN-HERO-LANDSCAPE-CROP-WALNUT.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: '8jfC9TBJaQo89twBFnERH',
            type: 'Asset',
            createdAt: '2020-10-20T22:30:12.511Z',
            updatedAt: '2020-10-26T01:20:37.694Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: 'orangeHero3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/8jfC9TBJaQo89twBFnERH/43538b324fc6c00061bcb448cbda3e23/pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
              details: { size: 900443, image: { width: 3081, height: 2054 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-870.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'BSPjcPUrluUkMmSsMklTk',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:32.632Z',
            updatedAt: '2020-10-15T18:05:32.632Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/BSPjcPUrluUkMmSsMklTk/e22305a1e04989991cc5b721b76f4617/BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
              details: { size: 259249, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-PINK.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'ImUTstv4VoCUbEoPOjc7D',
            type: 'Asset',
            createdAt: '2020-10-26T13:28:12.522Z',
            updatedAt: '2020-11-06T21:23:53.735Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 3,
            locale: 'en-US',
          },
          fields: {
            title: '10 WATER-RESISTANT',
            file: {
              url: '//videos.ctfassets.net/strhx3d94c40/ImUTstv4VoCUbEoPOjc7D/9b499c8e7d395ccba6f32dba8c432cfa/10_WATER-RESISTANT.mp4',
              details: { size: 1157519 },
              fileName: '10_WATER-RESISTANT.mp4',
              contentType: 'video/mp4',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'PUV5mk8av6qexY7J5PnBy',
            type: 'Asset',
            createdAt: '2020-10-26T01:21:18.603Z',
            updatedAt: '2020-10-26T01:21:18.603Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'orangehero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/PUV5mk8av6qexY7J5PnBy/3ff31e0b5543f5b3bf511b334567c242/pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
              details: { size: 169951, image: { width: 1024, height: 608 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-694.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'T8TFnRRCHxVZRJoZnjPUP',
            type: 'Asset',
            createdAt: '2020-10-20T23:06:20.062Z',
            updatedAt: '2020-10-27T21:37:20.598Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'hotPinkHero1',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/T8TFnRRCHxVZRJoZnjPUP/c81d534feea03efdee42128142ac9a29/pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
              details: { size: 1238436, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-206.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'UVY2MB5HocGn39i2bPXyH',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:31.233Z',
            updatedAt: '2020-10-15T18:05:31.233Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/UVY2MB5HocGn39i2bPXyH/565e88e698a2825a63ad90ea8d693cd5/BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
              details: { size: 291548, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-RED.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'XArTUNlrA3aNaVfgbQb5I',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:34.580Z',
            updatedAt: '2020-10-20T23:50:17.641Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'orangeProductImage',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/XArTUNlrA3aNaVfgbQb5I/12a30ea4d491bd54cab2d55047b6afa7/BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
              details: { size: 349162, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-ORANGE.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'hVcdFzbLuIcdTWWWsuilh',
            type: 'Asset',
            createdAt: '2021-09-06T22:28:01.730Z',
            updatedAt: '2021-09-06T22:28:01.730Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'geode3',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/hVcdFzbLuIcdTWWWsuilh/61f353e689d694ccec1b3df2954d6892/PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
              details: { size: 528776, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-40.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'jmwIDAvmbSDBK72zXaCne',
            type: 'Asset',
            createdAt: '2020-10-15T18:05:32.397Z',
            updatedAt: '2020-10-20T22:56:46.443Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'productImageCoral',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/jmwIDAvmbSDBK72zXaCne/5ece5c03b5a6ffe6e17b27dfb2fc05dd/BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
              details: { size: 320627, image: { width: 3555, height: 2000 } },
              fileName: 'BLENDJET-2-HERO-LANDSCAPE-CROP-CORAL.jpeg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'meFTELtmhz6PDXgBenWyp',
            type: 'Asset',
            createdAt: '2020-10-26T01:17:54.380Z',
            updatedAt: '2020-10-27T23:32:01.566Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'herolime3',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/meFTELtmhz6PDXgBenWyp/d4a81315d1447f933af589262dbfc333/pajevictoriaxblendjet2xlifestyle-1391__1_.jpg?w=400',
              details: { size: 582928, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-1391 (1).jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'w9LoR0f1V4xGNu4FGKHS3',
            type: 'Asset',
            createdAt: '2020-10-26T01:03:18.199Z',
            updatedAt: '2020-10-27T21:30:18.702Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 2,
            locale: 'en-US',
          },
          fields: {
            title: 'coralhero2',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/w9LoR0f1V4xGNu4FGKHS3/b483cd492fddd33ce06996cbc678f08c/pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
              details: { size: 934404, image: { width: 2300, height: 1150 } },
              fileName: 'pajevictoriaxblendjet2xlifestyle-89.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
        {
          metadata: { tags: [] },
          sys: {
            space: {
              sys: { type: 'Link', linkType: 'Space', id: 'strhx3d94c40' },
            },
            id: 'znJEKWUSQCg8AsOprdpuO',
            type: 'Asset',
            createdAt: '2021-09-06T22:24:29.270Z',
            updatedAt: '2021-09-06T22:24:29.270Z',
            environment: {
              sys: { id: 'master', type: 'Link', linkType: 'Environment' },
            },
            revision: 1,
            locale: 'en-US',
          },
          fields: {
            title: 'carbonfiber1',
            description: '',
            file: {
              url: '//images.ctfassets.net/strhx3d94c40/znJEKWUSQCg8AsOprdpuO/bdda58967c722e196fd3be7e60afdaa7/PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
              details: { size: 723918, image: { width: 3600, height: 1800 } },
              fileName: 'PajeVictoriaxblendjetx9patterns-140.jpg?w=400',
              contentType: 'image/jpeg',
            },
          },
        },
      ],
    },
  };
}
