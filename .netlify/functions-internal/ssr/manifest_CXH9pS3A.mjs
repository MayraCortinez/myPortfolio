import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_CPQ37Ys2.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"}],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BW7WfQgK.js"}],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"},{"type":"external","src":"/_astro/_slug_.BtQvEso1.css"}],"routeData":{"route":"/projects/[slug]","isIndex":false,"type":"page","pattern":"^\\/projects\\/([^/]+?)\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/projects/[slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BW7WfQgK.js"}],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"},{"type":"external","src":"/_astro/_slug_.BtQvEso1.css"}],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BW7WfQgK.js"}],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"},{"type":"external","src":"/_astro/_slug_.BtQvEso1.css"}],"routeData":{"route":"/tags/[tag]","isIndex":false,"type":"page","pattern":"^\\/tags\\/([^/]+?)\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}]],"params":["tag"],"component":"src/pages/tags/[tag].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BW7WfQgK.js"}],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"},{"type":"external","src":"/_astro/_slug_.BtQvEso1.css"},{"type":"inline","content":"a[data-astro-cid-os4i7owy]{color:#000911}.tags[data-astro-cid-os4i7owy]{display:flex;flex-wrap:wrap}.tag[data-astro-cid-os4i7owy]{margin:.25em;border:dotted 1px #f74e06;border-radius:.5em;padding:.5em 1em;font-size:1.15em;background-color:#efedea;font-weight:700}\n"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BW7WfQgK.js"}],"styles":[{"type":"external","src":"/_astro/cv.yNoosz_Y.css"},{"type":"external","src":"/_astro/_slug_.BtQvEso1.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal.jsx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/projects/ProjectList.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/MarkdownProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/cv.astro":"chunks/pages/cv_DfRuCoqz.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_Dy8WNl49.mjs","\u0000@astrojs-manifest":"manifest_CXH9pS3A.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CZ5nIxI2.mjs","\u0000@astro-page:src/pages/cv@_@astro":"chunks/cv_C3eaWc8O.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__DiMVvtDn.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_CMkEtapb.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__D61_KuaU.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_CMlHwvVj.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_TpcTR9AT.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroContentCollectionEntry=true":"_astro/diploma-1.BklfH8a7.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroContentCollectionEntry=true":"_astro/diploma-2.DcMrtzmQ.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroContentCollectionEntry=true":"_astro/diploma-3.DOTYTjTs.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroContentCollectionEntry=true":"_astro/diploma-4.rXgddj4v.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroContentCollectionEntry=true":"_astro/diploma-5.CuWxykT2.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroContentCollectionEntry=true":"_astro/diploma-6.BLcvvwNb.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroContentCollectionEntry=true":"_astro/diploma-7.BPbs99su.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroContentCollectionEntry=true":"_astro/diploma-8.BsArAOTD.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroContentCollectionEntry=true":"_astro/project-1.C0eqfGdR.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroContentCollectionEntry=true":"_astro/project-2.CTWnRn2L.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroContentCollectionEntry=true":"_astro/project-3.CFJcB9XL.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroContentCollectionEntry=true":"_astro/project-4.BmcxP-UG.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroPropagatedAssets":"_astro/diploma-1.D6531tFV.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroPropagatedAssets":"_astro/diploma-2.1SRfi5mK.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroPropagatedAssets":"_astro/diploma-3.CLt4nmfo.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroPropagatedAssets":"_astro/diploma-4.Cltp-9mz.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroPropagatedAssets":"_astro/diploma-5.DZE4F1sV.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroPropagatedAssets":"_astro/diploma-6.Bm0reMml.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroPropagatedAssets":"_astro/diploma-7.CwF_CiOq.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroPropagatedAssets":"_astro/diploma-8.CxyjiVus.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroPropagatedAssets":"_astro/project-1.CHoRkDLF.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroPropagatedAssets":"_astro/project-2.CyWamDgR.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroPropagatedAssets":"_astro/project-3.DrdEnYQM.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroPropagatedAssets":"_astro/project-4.C2tE-VqR.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md":"_astro/diploma-1.CbhZ2Xhv.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md":"_astro/diploma-2.DFBDyxT7.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md":"_astro/diploma-3.CahC_QK4.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md":"_astro/diploma-4.CIpCLR-B.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md":"_astro/diploma-5.DzSZ93Zv.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md":"_astro/diploma-6.DbtXzcxt.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md":"_astro/diploma-7.CqZzmKML.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md":"_astro/diploma-8.DLc0rdPt.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md":"_astro/project-1.BFfDFZ9r.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md":"_astro/project-2.QkNy8olH.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md":"_astro/project-3.Bz2iJQo0.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md":"_astro/project-4.pwHrqxFY.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/AnimatedElement":"_astro/AnimatedElement.udNm8lHK.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/Navbar.jsx":"_astro/Navbar.DbHmCPIr.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal":"_astro/DiplomaModal.BQddGRNv.js","/astro/hoisted.js?q=0":"_astro/hoisted.BW7WfQgK.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BtQvEso1.css","/_astro/cv.yNoosz_Y.css","/650c6cc436d4b956acb9dca1_Bootstrap_logo-minimal-min.svg","/about2.jpg","/bg.svg","/bg2.svg","/cert1.png","/cert2.png","/cert3.png","/cert4.png","/cert5.png","/cert7.png","/cert8.png","/code.png","/code1.png","/favicon.svg","/gallery1.gif","/gallery2.gif","/gallery3.gif","/icon1.png","/icon10.svg","/icon2.png","/icon3.png","/icon4.png","/icon5.png","/icon6.png","/icon7.png","/icon8.png","/icon9.png","/index.jpg","/mc1.jpg","/MC5.jpeg","/parallax.jpeg","/project1.png","/project2.png","/project3.png","/project4.png","/_astro/AnimatedElement.udNm8lHK.js","/_astro/client.BIGLHmRd.js","/_astro/diploma-1.BklfH8a7.js","/_astro/diploma-1.CbhZ2Xhv.js","/_astro/diploma-1.D6531tFV.js","/_astro/diploma-2.1SRfi5mK.js","/_astro/diploma-2.DcMrtzmQ.js","/_astro/diploma-2.DFBDyxT7.js","/_astro/diploma-3.CahC_QK4.js","/_astro/diploma-3.CLt4nmfo.js","/_astro/diploma-3.DOTYTjTs.js","/_astro/diploma-4.CIpCLR-B.js","/_astro/diploma-4.Cltp-9mz.js","/_astro/diploma-4.rXgddj4v.js","/_astro/diploma-5.CuWxykT2.js","/_astro/diploma-5.DZE4F1sV.js","/_astro/diploma-5.DzSZ93Zv.js","/_astro/diploma-6.BLcvvwNb.js","/_astro/diploma-6.Bm0reMml.js","/_astro/diploma-6.DbtXzcxt.js","/_astro/diploma-7.BPbs99su.js","/_astro/diploma-7.CqZzmKML.js","/_astro/diploma-7.CwF_CiOq.js","/_astro/diploma-8.BsArAOTD.js","/_astro/diploma-8.CxyjiVus.js","/_astro/diploma-8.DLc0rdPt.js","/_astro/DiplomaModal.bAAd3CIw.js","/_astro/DiplomaModal.BQddGRNv.js","/_astro/hoisted.BW7WfQgK.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Navbar.DbHmCPIr.js","/_astro/project-1.BFfDFZ9r.js","/_astro/project-1.C0eqfGdR.js","/_astro/project-1.CHoRkDLF.js","/_astro/project-2.CTWnRn2L.js","/_astro/project-2.CyWamDgR.js","/_astro/project-2.QkNy8olH.js","/_astro/project-3.Bz2iJQo0.js","/_astro/project-3.CFJcB9XL.js","/_astro/project-3.DrdEnYQM.js","/_astro/project-4.BmcxP-UG.js","/_astro/project-4.C2tE-VqR.js","/_astro/project-4.pwHrqxFY.js","/_astro/router.nTnAVDTI.js"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
