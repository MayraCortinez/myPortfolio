import { renderers } from './renderers.mjs';
import { manifest } from './manifest_Urqbazn9.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_CmFZrBFD.mjs');
const _page1 = () => import('./chunks/about_DuYxcwc3.mjs');
const _page2 = () => import('./chunks/cv_BTaN6oXr.mjs');
const _page3 = () => import('./chunks/_slug__FLWpLrLQ.mjs');
const _page4 = () => import('./chunks/index_4T_uPdpP.mjs');
const _page5 = () => import('./chunks/_tag__CAXM5GUt.mjs');
const _page6 = () => import('./chunks/index_Bo8G8HRP.mjs');
const _page7 = () => import('./chunks/index_AYk2jSCg.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/cv.astro", _page2],
    ["src/pages/projects/[slug].astro", _page3],
    ["src/pages/projects/index.astro", _page4],
    ["src/pages/tags/[tag].astro", _page5],
    ["src/pages/tags/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "b0ec782e-a935-410d-ba64-7ece828ae9ee"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
