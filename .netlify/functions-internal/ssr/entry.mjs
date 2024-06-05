import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CXH9pS3A.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CZ5nIxI2.mjs');
const _page1 = () => import('./chunks/cv_C3eaWc8O.mjs');
const _page2 = () => import('./chunks/_slug__DiMVvtDn.mjs');
const _page3 = () => import('./chunks/index_CMkEtapb.mjs');
const _page4 = () => import('./chunks/_tag__D61_KuaU.mjs');
const _page5 = () => import('./chunks/index_CMlHwvVj.mjs');
const _page6 = () => import('./chunks/index_TpcTR9AT.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/cv.astro", _page1],
    ["src/pages/projects/[slug].astro", _page2],
    ["src/pages/projects/index.astro", _page3],
    ["src/pages/tags/[tag].astro", _page4],
    ["src/pages/tags/index.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "e2bbe279-bdb0-4617-8fae-aa645baef942"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
