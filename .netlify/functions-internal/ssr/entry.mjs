import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DA0PMBGb.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BIAhLWO9.mjs');
const _page1 = () => import('./chunks/about_DGiCRlwE.mjs');
const _page2 = () => import('./chunks/cv_DvY8QL1B.mjs');
const _page3 = () => import('./chunks/_slug__CXOTGxnj.mjs');
const _page4 = () => import('./chunks/index_rjYgPctt.mjs');
const _page5 = () => import('./chunks/_tag__ZnqI3ORR.mjs');
const _page6 = () => import('./chunks/index_D4ArmqX0.mjs');
const _page7 = () => import('./chunks/index_BoL8inl4.mjs');
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
    "middlewareSecret": "5047e862-1a31-43ed-9e23-aa726c273602"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
