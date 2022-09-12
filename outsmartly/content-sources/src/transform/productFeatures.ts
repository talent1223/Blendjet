import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulInput } from './transform-data';
import { IFeature } from '../types/generated/contentful';

export function productFeatures(contentful: ContentfulInput) {
  if (
    !contentful.fields.features ||
    !contentful.fields.features.fields.features
  ) {
    throw Error('productFeatures: No features were found.');
  }

  // const productFeatures: ProductPageProps['productFeatures'] = {
  // TODO: Fix the any
  const productFeatures: any = {
    features: {
      title: contentful.fields.features.fields.title,
      fields: contentful.fields.features.fields.features.map(
        (elem: IFeature) => {
          const data = elem.fields;
          return {
            title: data.title,
            icon: data.icon,
            description:
              data.description && documentToHtmlString(data.description),
          };
        },
      ),
    },
  };

  return productFeatures;
}
