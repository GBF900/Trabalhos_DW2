
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1153, hash: 'e29716de8fdd5347edef317a6c8e079c3cff260e19a14ec4479246fb60400b3f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1477, hash: 'b2a28bc09c53b84426cd3d5972d1ca50b5955213effb40aa6f73fbf283709adf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 10112, hash: 'f36b4bd3abcf86b99f81c4575ac4ec8066cc8f43ea40b76bc2e3233b3098e585', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-UOSB4G2O.css': {size: 64, hash: 't+7OQf5MM20', text: () => import('./assets-chunks/styles-UOSB4G2O_css.mjs').then(m => m.default)}
  },
};
