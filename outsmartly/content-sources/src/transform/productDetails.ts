import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ProductPageProps } from '../../../../src/types';
import { ContentfulInput } from './transform-data';
import {
  IPage,
  IProduct,
  IProductDescriptionSection,
} from '../types/generated/contentful';

export function productDetails(contentful: ContentfulInput) {
  if (!contentful.fields.productDescription) {
    throw Error('productDetails: No Contentful productDescription was found.');
  }

  const sectionArray = contentful.fields.productDescription
    .filter(isProductDescriptionSection)
    .map((section) => {
      const videoFormats = ['mp4', 'mov', 'webm', 'ogg'];
      const data = section.fields;
      // Only `heading` and `text` are required
      const heading = data.heading;
      const text = data.text;
      const videoTitle = data.video!.fields.title;
      const videoFile = data.video!.fields.file;
      const textHtml = documentToHtmlString(text);
      const url = data.externalVideoUrl || videoFile?.url;
      const extension = url && url.split('.').pop();
      const type =
        extension && videoFormats.find((f: string) => extension.startsWith(f))
          ? 'video'
          : 'image';
      return {
        heading,
        text: textHtml,
        media: {
          alt: videoTitle,
          src: url,
          type: type as 'video' | 'image',
        },
      };
    });

  // Strip off the last one which contains "Details & Specs". Note: this is very
  // brittle! The right solution is to add a field as a key to use for grabbing
  // the Details & Specs, e.g., `isSpecs`.
  const specs = sectionArray.pop();
  if (!specs) {
    throw Error('productDetails: sectionArray has no items.');
  }

  const productDetails: ProductPageProps['productDetails'] = {
    image: {
      alt: specs.media.alt,
      src: specs.media.src,
    },
    sections: sectionArray,
  };

  return productDetails;
}

/**
 * User-defined type guard for narrowing ProductDescription sections
 */
function isProductDescriptionSection(
  item: IPage | IProduct | IProductDescriptionSection,
): item is IProductDescriptionSection {
  return 'video' in item.fields && !!item.fields.video;
}
