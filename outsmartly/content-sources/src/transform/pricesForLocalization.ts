import { LookupPrice } from '../runtime/getCurrencyPrices';
import { OutputProps } from './transform-data';
import { decodeId } from './utils';

/*
 * This gets every price that we have in our data so that we can
 * efficiently localize them at runtime
 */
export function pricesForLocalization(output: OutputProps) {
  return (
    [
      ...prepareVariants(output.variants),
      ...prepareMobileCartUpsells(output.mobileCartUpsells.items),
      ...prepareProductBundle(output.productBundle),
      ...prepareProductWarranty(output.productWarranty.items),
      ...prepareRelatedProducts(
        output.relatedProducts.relatedProducts.variants,
      ),
    ]
      // deduplicate prices to minimize lookup needed at runtime
      .filter((item, i, array) => {
        return array.findIndex((find) => find.Price === item.Price) === i;
      })
  );
}

// type: "subscriptionPrice"
export function prepareVariants(
  variants: OutputProps['variants'],
): LookupPrice[] {
  return variants
    .map((variant) => {
      return [
        {
          Price: variant.price,
          Tag: variant.variantId,
          type: 'price',
        },
        {
          Price: variant.compareAtPrice as any,
          Tag: variant.variantId,
          type: 'compareAtPrice',
        },
      ];
    })
    .reduce((acc, item) => {
      return [...acc, ...item];
    }, [])
    .filter((item: any | LookupPrice): item is LookupPrice => item.Price);
}

function prepareMobileCartUpsells(
  items: OutputProps['mobileCartUpsells']['items'],
) {
  return items
    .map((item) => {
      let variants = (item.product && item.product.variants) || [];
      if (!variants && item.upsellType === 'bundle') {
        variants =
          item.products
            ?.map((product) => {
              return product.variants;
            })
            .reduce((acc, item) => {
              return [...acc, ...item];
            }, []) || [];
      }
      return variants
        .map((variant) => {
          return [
            {
              Price: variant.price,
              Tag: decodeId(variant.id),
              type: 'price',
            },
            {
              Price: variant.discountPrice,
              Tag: decodeId(variant.id),
              type: 'discountPrice',
            },
          ];
        })
        .reduce((acc, item) => {
          return [...acc, ...item];
        }, []);
    })
    .reduce((acc, item) => {
      return [...acc, ...item];
    }, []);
}

function prepareProductBundle(productBundle: OutputProps['productBundle']) {
  return [
    ...productBundle.bundleProducts
      .map((product) => {
        return product.variants.map((variant) => {
          return {
            Price: variant.price,
            Tag: decodeId(variant.id),
            type: 'price',
          };
        });
      })
      .reduce((acc, item) => {
        return [...acc, ...item];
      }, []),
    ...productBundle.varietyPacks
      .map((product) => {
        return product.variants.map((variant) => {
          return {
            Price: variant.price,
            Tag: decodeId(variant.id),
            type: 'price',
          };
        });
      })
      .reduce((acc, item) => {
        return [...acc, ...item];
      }, []),
  ];
}

function prepareProductWarranty(
  items: OutputProps['productWarranty']['items'],
) {
  return items.map((item) => {
    return {
      Price: item.price,
      Tag: decodeId(item.id),
      type: 'price',
    };
  });
}

function prepareRelatedProducts(
  variants: OutputProps['relatedProducts']['relatedProducts']['variants'],
) {
  return variants
    .map((variant) => {
      return [
        {
          Price: variant.price,
          Tag: decodeId(variant.id),
          type: 'price',
        },
        {
          Price: variant.discountPrice,
          Tag: decodeId(variant.id),
          type: 'discountPrice',
        },
      ];
    })
    .reduce((acc, item) => {
      return [...acc, ...item];
    }, []);
}
