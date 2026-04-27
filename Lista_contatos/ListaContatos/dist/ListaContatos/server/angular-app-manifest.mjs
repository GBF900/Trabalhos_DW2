
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
    'index.csr.html': {size: 580, hash: '5ba41ddc07683c8fcdd93950abaf6ca75c4bf77e6e2307b89db5a715db1e3c2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 951, hash: '768f7d262a9874aa1ad020f2e989d915ef377f0e63e2f1139154969ea94f582e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 4195, hash: '5b9509067c5ba0dcd44f675c35818bfe9275c99aad80dd5ebb5895c1ef61ad01', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZCLJ63CI.css': {size: 17, hash: 'tiI1kDfe7tY', text: () => import('./assets-chunks/styles-ZCLJ63CI_css.mjs').then(m => m.default)}
  },
};
