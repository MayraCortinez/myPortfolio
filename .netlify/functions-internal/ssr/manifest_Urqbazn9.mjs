import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DsCov2XV.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"cv/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/MarkdownProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal.jsx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/projects/ProjectList.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CZaDb7wH.mjs","\u0000@astrojs-manifest":"manifest_Urqbazn9.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CmFZrBFD.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_DuYxcwc3.mjs","\u0000@astro-page:src/pages/cv@_@astro":"chunks/cv_BTaN6oXr.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__FLWpLrLQ.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_4T_uPdpP.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__CAXM5GUt.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_Bo8G8HRP.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_AYk2jSCg.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroContentCollectionEntry=true":"_astro/diploma-1.B6p7xFhY.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroContentCollectionEntry=true":"_astro/diploma-2.DcMrtzmQ.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroContentCollectionEntry=true":"_astro/diploma-3.DOTYTjTs.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroContentCollectionEntry=true":"_astro/diploma-4.rXgddj4v.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroContentCollectionEntry=true":"_astro/diploma-5.CuWxykT2.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroContentCollectionEntry=true":"_astro/diploma-6.BLcvvwNb.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroContentCollectionEntry=true":"_astro/diploma-7.BPbs99su.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroContentCollectionEntry=true":"_astro/diploma-8.BsArAOTD.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroContentCollectionEntry=true":"_astro/project-1.D048pyWi.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroContentCollectionEntry=true":"_astro/project-2.C1yUQ8V8.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroContentCollectionEntry=true":"_astro/project-3.BtjDgI6v.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroContentCollectionEntry=true":"_astro/project-4.BoTjGCBW.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroPropagatedAssets":"_astro/diploma-1.DxrNBMe6.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroPropagatedAssets":"_astro/diploma-2.CjA8pM4x.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroPropagatedAssets":"_astro/diploma-3.fHJfCBK2.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroPropagatedAssets":"_astro/diploma-4.Dd7ZEZns.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroPropagatedAssets":"_astro/diploma-5.DPPFTQq6.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroPropagatedAssets":"_astro/diploma-6.c39IUq5h.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroPropagatedAssets":"_astro/diploma-7.CoTTB0Ce.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroPropagatedAssets":"_astro/diploma-8.Xznz7NHR.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroPropagatedAssets":"_astro/project-1.BwO5jmTA.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroPropagatedAssets":"_astro/project-2.BTM68Oww.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroPropagatedAssets":"_astro/project-3.BsUo9cKL.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroPropagatedAssets":"_astro/project-4.Dh50YfVQ.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md":"_astro/diploma-1.Dc8cCkaK.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md":"_astro/diploma-2.D5tXqrjz.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md":"_astro/diploma-3.BsLLZB_t.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md":"_astro/diploma-4.BJ-KRtcw.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md":"_astro/diploma-5.vs303HJi.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md":"_astro/diploma-6.BmCG_y-n.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md":"_astro/diploma-7.BL4ehS2T.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md":"_astro/diploma-8.DsAymLTZ.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md":"_astro/project-1.CcKhcYgk.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md":"_astro/project-2.yPzK2E9O.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md":"_astro/project-3.D6dslykF.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md":"_astro/project-4.DINj5fqV.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal":"_astro/DiplomaModal.C0MQnTiQ.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","/astro/hoisted.js?q=0":"_astro/hoisted.CiOIxJAR.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/me2.kdQ0LBqC.png","/_astro/_slug_.Dc3_8vbj.css","/_astro/about.YN8_6-Q1.css","/650c6cc436d4b956acb9dca1_Bootstrap_logo-minimal-min.svg","/about2.jpg","/bg.svg","/bg2.svg","/cert1.png","/cert2.png","/cert3.png","/cert4.png","/cert5.png","/cert7.png","/cert8.png","/code.png","/favicon.svg","/gallery1.gif","/gallery2.gif","/gallery3.gif","/icon1.png","/icon10.svg","/icon2.png","/icon3.png","/icon4.png","/icon5.png","/icon6.png","/icon7.png","/icon8.png","/icon9.png","/imgBack.png","/index.jpg","/mc1.jpg","/MC5.jpeg","/me.jpg","/me2.png","/parallax.jpeg","/parallax2.jpg","/project1.png","/project2.png","/project3.png","/project4.png","/wave.svg","/_astro/client.BIGLHmRd.js","/_astro/diploma-1.B6p7xFhY.js","/_astro/diploma-1.Dc8cCkaK.js","/_astro/diploma-1.DxrNBMe6.js","/_astro/diploma-2.CjA8pM4x.js","/_astro/diploma-2.D5tXqrjz.js","/_astro/diploma-2.DcMrtzmQ.js","/_astro/diploma-3.BsLLZB_t.js","/_astro/diploma-3.DOTYTjTs.js","/_astro/diploma-3.fHJfCBK2.js","/_astro/diploma-4.BJ-KRtcw.js","/_astro/diploma-4.Dd7ZEZns.js","/_astro/diploma-4.rXgddj4v.js","/_astro/diploma-5.CuWxykT2.js","/_astro/diploma-5.DPPFTQq6.js","/_astro/diploma-5.vs303HJi.js","/_astro/diploma-6.BLcvvwNb.js","/_astro/diploma-6.BmCG_y-n.js","/_astro/diploma-6.c39IUq5h.js","/_astro/diploma-7.BL4ehS2T.js","/_astro/diploma-7.BPbs99su.js","/_astro/diploma-7.CoTTB0Ce.js","/_astro/diploma-8.BsArAOTD.js","/_astro/diploma-8.DsAymLTZ.js","/_astro/diploma-8.Xznz7NHR.js","/_astro/DiplomaModal.C0MQnTiQ.js","/_astro/DiplomaModal.CrYAp7_9.js","/_astro/hoisted.CiOIxJAR.js","/_astro/index.DhYZZe0J.js","/_astro/project-1.BwO5jmTA.js","/_astro/project-1.CcKhcYgk.js","/_astro/project-1.D048pyWi.js","/_astro/project-2.BTM68Oww.js","/_astro/project-2.C1yUQ8V8.js","/_astro/project-2.yPzK2E9O.js","/_astro/project-3.BsUo9cKL.js","/_astro/project-3.BtjDgI6v.js","/_astro/project-3.D6dslykF.js","/_astro/project-4.BoTjGCBW.js","/_astro/project-4.Dh50YfVQ.js","/_astro/project-4.DINj5fqV.js","/about/index.html","/cv/index.html","/projects/index.html","/tags/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
