const path = require('path');
const getLocalIdentLikeNext = require('./getLocalIdentLikeNext');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = {
  typescript: {
    check: true,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: [
    '../src/stories/**/*.stories.js',
    '../src/stories/**/*.stories.tsx',
  ],
  logLevel: 'debug',
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-viewport',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: [/\.stories\.js$/],
      use: [require.resolve('@storybook/source-loader')],
      include: [path.resolve(__dirname, '../src')],
      enforce: 'pre',
    });

    // Add a rule for all SCSS files *except* modules
    config.module.rules.push({
      test: /\.scss$/i,
      exclude: /\.module\.scss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS
        {
          loader: 'css-loader',
          options: {
            sourceMap: isDevelopment,
            // we use a middleware proxy to resolve fonts to GCP
            // this is required so it doesn't try locally
            url: false,
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    });

    // Add a rule for SCSS modules (CSS Modules using SASS)
    config.module.rules.push({
      test: /\.module\.scss$/i,
      use: [
        // Creates `style` nodes from JS strings
        'style-loader',
        // Translates CSS into CommonJS. See `css-loader` doc here:
        // https://github.com/webpack-contrib/css-loader
        {
          loader: 'css-loader',
          options: {
            esModule: true,
            modules: {
              // exportLocalsConvention: 'camelCase',
              // Example of how to compile class names differently for dev vs prod
              getLocalIdent: isDevelopment ? getLocalIdentLikeNext : undefined,
              localIdentName: isDevelopment ? undefined : '[hash:base64:8]',
              // namedExport: true, // if true, exportLocalsConvention *must* be 'camelCaseOnly'
            },
            sourceMap: isDevelopment,
            // we use a middleware proxy to resolve fonts to GCP. So `url:
            // false` is required so it doesn't try locally.
            url: false,
          },
        },
        // Compiles Sass to CSS
        'sass-loader',
      ],
    });
    return config;
  },
  core: {
    builder: 'webpack5',
  },
};
