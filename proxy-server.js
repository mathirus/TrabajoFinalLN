const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', createProxyMiddleware({
  target: 'https://tpfinal.store',
  changeOrigin: true,
  onProxyRes: function (proxyRes, req, res) {
    // Remove duplicate CORS headers
    delete proxyRes.headers['access-control-allow-origin'];
    delete proxyRes.headers['access-control-allow-methods'];
    delete proxyRes.headers['access-control-allow-headers'];
  }
}));

app.listen(3000, () => {
  console.log('Proxy running on http://localhost:3000');
});