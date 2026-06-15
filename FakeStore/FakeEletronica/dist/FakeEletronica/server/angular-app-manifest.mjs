
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
    'index.csr.html': {size: 1047, hash: '474b454337976bfed403a1f7fb64fd812015a00d89917bb3c02904fefe98ac6a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1323, hash: '0f45f21c50dbb76391ee38e0f432c4e5470a86007e7ba749393138ac6e89843b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WH2A76WB.css': {size: 84963, hash: 'RwvD/gAjKI8', text: () => import('./assets-chunks/styles-WH2A76WB_css.mjs').then(m => m.default)}
  },
};
