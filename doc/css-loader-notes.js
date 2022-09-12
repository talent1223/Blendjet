// https://github.com/webpack-contrib/css-loader#modules

const rule = {
  test: /\.css$/i,
  loader: 'css-loader',
  options: {
    esModule: true, // default true, so omit it. Set to false for CommonJS modules syntax
    exportType: 'array', // default 'array', which is fine, just omit it
    import___: true, // or an object to filter url,
    importLoaders: 0, // number of loaders before css-loader to act on @import rules
    modules: {
      auto: undefined, // default undefined, omit it, probably don't want true
      exportLocalsConvention: 'asIs', // use 'camelCase' for flexibility. Must
      // be 'camelCaseOnly' to use namedExports: true
      exportGlobals: false, // export global class names, so you can use them as local name
      exportOnlyLocals: false,
      localIdentContext: path.resolve(__dirname, 'src'),
      localIdentHashSalt: 'my-custom-hash',
      localIdentName: '[path][name]__[local]--[hash:base64:5]',
      namedExport: true, // default false. Set to true for easier consumption in .tsx!
      // but namedExport: true means we can't use kebab-case class names
      mode: 'local', // default is local, just omit it
    },
    sourceMap: true, // default depends on compiler.devtool
    url: true, // or an object to filter url
  },
};
