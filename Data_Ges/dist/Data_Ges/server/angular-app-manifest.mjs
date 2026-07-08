
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
    'index.csr.html': {size: 5122, hash: '2c8e133bb8297fb07d9553d793b71c85f65aa15a53347a1111f990129d546406', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 945, hash: '72c74467284ad11bb75fbe52a9595f2a429f8b9b4576fcb31988a64f75fea7d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-6BZQM2J2.css': {size: 315808, hash: 'UP41VANKZKo', text: () => import('./assets-chunks/styles-6BZQM2J2_css.mjs').then(m => m.default)}
  },
};
