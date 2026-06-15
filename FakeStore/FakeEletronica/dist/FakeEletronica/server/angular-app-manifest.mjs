
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
    'index.csr.html': {size: 1047, hash: 'b2ea4c6072ae3c70f1da7aabd88296b0aaaa1421901b1a36334c28fc098b61c0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1323, hash: '5f8830b62b034ec8ae44ef84c3aae8bece6387a090ddbde4bbc0a3851b1d048c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WH2A76WB.css': {size: 84963, hash: 'RwvD/gAjKI8', text: () => import('./assets-chunks/styles-WH2A76WB_css.mjs').then(m => m.default)}
  },
};
