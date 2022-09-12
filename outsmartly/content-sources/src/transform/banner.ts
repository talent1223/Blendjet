import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ContentfulInput } from './transform-data';

export function banner(contentful: ContentfulInput) {
  if (!contentful.fields.headerText) {
    throw Error('banner: No headerText was found.');
  }
  const banner = {
    content: documentToHtmlString(contentful.fields.headerText),
  };
  return banner;
}
