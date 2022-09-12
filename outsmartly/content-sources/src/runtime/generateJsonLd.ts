import DomParser from 'dom-parser';
import { TransformedData } from '../transform/transform-data';
import { titleToKebabCase } from '../transform/utils';

export function generateJsonLd(api: TransformedData) {
  const blendjet2 = api['blendjet-2'];

  // This stuff is the same for all variants
  // For now, just use a hard-coded string for description
  // const desc = getDescription(blendjet2);
  const desc =
    'BlendJet 2 is the Next-Gen Blender and serves up big blender power on the go. We created the BlendJet 2 portable blender so you can make anything you want, anyw';
  const logoUrl =
    'https://cdn.shopify.com/s/files/1/0066/4433/4658/files/BlendJet-2-logo.png?v=1616611844';
  const productName = blendjet2.productSelect.product.title;
  const handle = blendjet2.productSelect.product.handle;
  const productCategory = blendjet2.productSelect.product.type;
  const rating = blendjet2.productSelect.product.rating;
  const raters = blendjet2.productSelect.product.raters;

  // Loop through all the variants
  const output = blendjet2.variants.map((variant) => {
    const colorId = titleToKebabCase(variant.title.replace('Lisa Frank ', ''));
    return {
      '@context': 'http://www.schema.org',
      '@type': 'Product',
      brand: {
        '@type': 'Brand',
        name: 'BlendJet',
        logo: logoUrl,
      },
      description: desc.substring(0, 160),
      image: [
        variant.image.src,
        ...variant.mediaContentCarousel.images.map((image) => {
          return image.src;
        }),
      ],
      id: `${handle}-${colorId}`,
      sku: `${handle}-${colorId}`,
      name: `${productName} - ${variant.title}`,
      category: productCategory,
      model: variant.title,
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        price: variant.price,
        priceCurrency: variant.priceCurrency,
        url: `https://blendjet.com/products/blendjet-2?variant=${variant.variantId}`,
      },
      shippingDetails: {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0',
          currency: 'USD',
        },
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: String(rating),
        worstRating: '0',
        bestRating: '5',
        ratingCount: String(raters),
      },
      inProductGroupWithID: handle,
    };
  });

  return output;
}

function getDescription(blendjet2: TransformedData['blendjet-2']): string {
  // When driven by rich text from Contentful, we could parse the string as follows
  const descriptionHtml =
    blendjet2.productDetails.sections.find((x) =>
      x.heading.includes('Next-Gen Blender'),
    )?.text || '';

  // Use DOM Parser for Node:
  const domparser = new DomParser();
  const paragraph = domparser
    .parseFromString(descriptionHtml)
    .getElementsByTagName('p');
  const description = paragraph ? paragraph[0].textContent : '';
  return description;
}
