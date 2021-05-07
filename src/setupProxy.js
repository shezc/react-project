const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware(
      '/api', {
        target: 'http://localhost:5000',/*这里写自己的代理地址*/
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    ),
    createProxyMiddleware(
      '/service', {
        target: 'http://localhost:5001',
        changeOrigin: true,
        pathRewrite: {
          '^/service': ''
        }
      }
    )
  )
}