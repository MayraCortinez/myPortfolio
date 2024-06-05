import { renderers } from './renderers.mjs';
import { manifest } from './manifest_nxzpF4jU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BS2GOXiN.mjs');
const _page1 = () => import('./chunks/cv_BsuVnRP_.mjs');
const _page2 = () => import('./chunks/_slug__B671keQY.mjs');
const _page3 = () => import('./chunks/index_DtNb3hi_.mjs');
const _page4 = () => import('./chunks/_tag__aIlE9VVY.mjs');
const _page5 = () => import('./chunks/index_DB1RiHqx.mjs');
const _page6 = () => import('./chunks/index_BBu183UM.mjs');
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
    "middlewareSecret": "5fbde055-3bb0-49ac-baa3-9241e9a9fa6b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
