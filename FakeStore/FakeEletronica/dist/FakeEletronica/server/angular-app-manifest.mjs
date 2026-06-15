
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "route": "/"
  },
  {
    "renderMode": 0,
    "route": "/login"
  },
  {
    "renderMode": 0,
    "route": "/home"
  },
  {
    "renderMode": 0,
    "route": "/produto/*"
  },
  {
    "renderMode": 0,
    "route": "/meusProdutos"
  },
  {
    "renderMode": 0,
    "route": "/perfil"
  },
  {
    "renderMode": 0,
    "route": "/cadastro"
  },
  {
    "renderMode": 0,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1047, hash: '5a9883988213b528b1b2bb9322f34883719ad08c4d1a7094b292e584f12cf9fb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1323, hash: '2774b3c42593b153941510acc682f6efd2a5950d3fd0e4a32f135ef9b155ec13', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WH2A76WB.css': {size: 84963, hash: 'RwvD/gAjKI8', text: () => import('./assets-chunks/styles-WH2A76WB_css.mjs').then(m => m.default)}
  },
};
