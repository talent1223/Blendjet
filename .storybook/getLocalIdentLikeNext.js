const path = require('path');
const loaderUtils = require('loader-utils');

/**
 * This function is passed to `getLocalIdent` for css-loader to support CSS
 * Modules. It generates a unique class name for each class in a *.module.scss
 * file. The implementation does the same thing that NextJS does to support the
 * [name].module.css pattern. We want this: A class/style rule like `.root {}`
 * defined inside a file named `AboutUs.module.css` will be exported as class
 * `AboutUs_root__2oFM9`. See:
 * node_modules/next/dist/build/webpack/config/blocks/css/loaders/getCssModuleLocalIdent
 */
module.exports = function getLocalIdentLikeNext(
  context,
  localIdentName,
  localName,
  options,
) {
  const relativePath = path
    .relative(context.rootContext, context.resourcePath)
    .replace(/\\+/g, '/');
  const regexLikeIndexModule = /(?<!pages[\\/])index\.module\.scss$/;

  // Generate a more meaningful name (parent folder) when the user names the
  // file `index.module.css`.
  const fileNameOrFolder = regexLikeIndexModule.test(relativePath)
    ? '[folder]'
    : '[name]';

  // Generate a hash to make the class name unique.
  const hash = loaderUtils.getHashDigest(
    Buffer.from(`filePath:${relativePath}#className:${localName}`),
    'md5',
    'base64',
    5,
  );

  // Combine the pieces, interpolate the actual names from context, and format
  const template = `${fileNameOrFolder}_${localName}__${hash}`;
  const interpolated = loaderUtils.interpolateName(context, template, options);
  const output = interpolated
    .replace(
      // Webpack name interpolation returns `About.module_root__2oFM9` for
      // `.root {}` inside a file named `About.module.css`. Let's simplify
      // this.
      /\.module_/,
      '_',
    )
    .replace(
      // Replace invalid symbols with underscores instead of escaping
      // https://mathiasbynens.be/notes/css-escapes#identifiers-strings
      /[^a-zA-Z0-9-_]/g,
      '_',
    )
    .replace(
      // "they cannot start with a digit, two hyphens, or a hyphen followed by a
      // digit [sic]" https://www.w3.org/TR/CSS21/syndata.html#characters
      /^(\d|--|-\d)/,
      '__$1',
    );

  return output;
};
