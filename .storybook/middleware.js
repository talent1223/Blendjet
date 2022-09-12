const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function expressMiddleware(router) {
  router.use(
    '/static-489c224a/strhx3d94c40',
    createProxyMiddleware({
      target: 'https://images.ctfassets.net',
      changeOrigin: true,
      pathRewrite: {
        '^/static-489c224a/strhx3d94c40': '/strhx3d94c40', // remove base path
      },
    }),
  );
  router.use(
    '/static-489c224a',
    createProxyMiddleware({
      target: 'https://storage.googleapis.com',
      changeOrigin: true,
    }),
  );
};
