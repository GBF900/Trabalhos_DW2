
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
    'index.csr.html': {size: 1077, hash: '397ad5407d3df1ccb374c0c94ecf79db792d599571b1b8404de95ea55e8e23cc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1396, hash: '6cde0f9c654dc5adcba48461c327c12b79674431781f96a5c64c5bf40c7701b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 12465, hash: '665fe2e528f12ec59dd2f876091fddafaf525b4afc253579cf3d65a7f6ded1c6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-KVTLG42W.css': {size: 69, hash: 'maBLerLDwPY', text: () => import('./assets-chunks/styles-KVTLG42W_css.mjs').then(m => m.default)}
  },
};
