
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/apresentacao"
  },
  {
    "renderMode": 2,
    "route": "/modelo"
  },
  {
    "renderMode": 2,
    "redirectTo": "/404 ERROR",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1052, hash: '4d03116ae05f578b777c91cc2039891148c04c5b432c658a4628b31a0e15b2b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1371, hash: 'a51a9ebb3df34add1ba9c334123f1faa3bfa79258d7f7712c09dbff8fc0b5205', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 261, hash: '0ff076e0e8a24fea93233f22b59f414724d2403f48a4f10177da4b7cb1279592', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'apresentacao/index.html': {size: 5395, hash: '691ed6f8d752cc4f9438811832cf587f21989926d74c40b482cd71908d0c7660', text: () => import('./assets-chunks/apresentacao_index_html.mjs').then(m => m.default)},
    'modelo/index.html': {size: 20043, hash: '306733ce1487dcc12e63691e51988f0ea91a9d52a9f11c775d3a3f4706fefd5d', text: () => import('./assets-chunks/modelo_index_html.mjs').then(m => m.default)},
    'styles-5IAT37DC.css': {size: 69, hash: 'qQvJWTnbK+4', text: () => import('./assets-chunks/styles-5IAT37DC_css.mjs').then(m => m.default)}
  },
};
