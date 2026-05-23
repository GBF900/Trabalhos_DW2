
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
    'index.csr.html': {size: 1052, hash: '64c99fc6b40290426752edc0ec617da8b91b57f93f3557d66dd6488b51c7fe1e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1371, hash: '2ef81249a33a4f0e823cae8387c01b111a12f69f64ee5293fd05f55ed7d0244e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 261, hash: '0ff076e0e8a24fea93233f22b59f414724d2403f48a4f10177da4b7cb1279592', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'apresentacao/index.html': {size: 5367, hash: 'a0335e1067012dcf61d1941094edece06eff76591fbe108a7ef9d89a739fad70', text: () => import('./assets-chunks/apresentacao_index_html.mjs').then(m => m.default)},
    'modelo/index.html': {size: 19922, hash: '846fa453a387818ead4c431924a4433b250037483900dac5bc9ed41bf58fbd19', text: () => import('./assets-chunks/modelo_index_html.mjs').then(m => m.default)},
    'styles-5IAT37DC.css': {size: 69, hash: 'qQvJWTnbK+4', text: () => import('./assets-chunks/styles-5IAT37DC_css.mjs').then(m => m.default)}
  },
};
