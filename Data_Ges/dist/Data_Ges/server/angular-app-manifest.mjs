
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 1,
    "route": "/"
  },
  {
    "renderMode": 1,
    "route": "/login"
  },
  {
    "renderMode": 1,
    "route": "/produtos"
  },
  {
    "renderMode": 1,
    "route": "/produtos/novo"
  },
  {
    "renderMode": 1,
    "route": "/produtos/*"
  },
  {
    "renderMode": 1,
    "route": "/categorias"
  },
  {
    "renderMode": 1,
    "route": "/categorias/nova"
  },
  {
    "renderMode": 1,
    "route": "/categorias/*"
  },
  {
    "renderMode": 1,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5122, hash: '686ffe11e5a10e271c18784250f55bda1da4bc27bc6f31cf0e0a617024c65da0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '11e9d478bdecb3d7214efd6638f40b268d16ede1051ed6a151e1ecea6df9f92d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6BZQM2J2.css': {size: 315808, hash: 'UP41VANKZKo', text: () => import('./assets-chunks/styles-6BZQM2J2_css.mjs').then(m => m.default)}
  },
};
