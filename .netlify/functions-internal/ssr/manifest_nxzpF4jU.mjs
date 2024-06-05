import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_BgaGJTu6.mjs';
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

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"cv/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/cv","isIndex":false,"type":"page","pattern":"^\\/cv\\/?$","segments":[[{"content":"cv","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cv.astro","pathname":"/cv","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":true,"type":"page","pattern":"^\\/projects\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/index.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal.jsx",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/projects/ProjectList.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/MarkdownProjectLayout.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/[slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/projects/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/Header.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_gtsIgJ0v.mjs","\u0000@astrojs-manifest":"manifest_nxzpF4jU.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BS2GOXiN.mjs","\u0000@astro-page:src/pages/cv@_@astro":"chunks/cv_BsuVnRP_.mjs","\u0000@astro-page:src/pages/projects/[slug]@_@astro":"chunks/_slug__B671keQY.mjs","\u0000@astro-page:src/pages/projects/index@_@astro":"chunks/index_DtNb3hi_.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"chunks/_tag__aIlE9VVY.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_DB1RiHqx.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BBu183UM.mjs","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroContentCollectionEntry=true":"_astro/diploma-1.BklfH8a7.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroContentCollectionEntry=true":"_astro/diploma-2.DcMrtzmQ.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroContentCollectionEntry=true":"_astro/diploma-3.DOTYTjTs.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroContentCollectionEntry=true":"_astro/diploma-4.rXgddj4v.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroContentCollectionEntry=true":"_astro/diploma-5.CuWxykT2.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroContentCollectionEntry=true":"_astro/diploma-6.BLcvvwNb.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroContentCollectionEntry=true":"_astro/diploma-7.BPbs99su.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroContentCollectionEntry=true":"_astro/diploma-8.BsArAOTD.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroContentCollectionEntry=true":"_astro/project-1.C0eqfGdR.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroContentCollectionEntry=true":"_astro/project-2.CTWnRn2L.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroContentCollectionEntry=true":"_astro/project-3.CFJcB9XL.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroContentCollectionEntry=true":"_astro/project-4.BmcxP-UG.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md?astroPropagatedAssets":"_astro/diploma-1.BSH8cU3b.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md?astroPropagatedAssets":"_astro/diploma-2.BRk_c1lq.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md?astroPropagatedAssets":"_astro/diploma-3.Dd_vvZof.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md?astroPropagatedAssets":"_astro/diploma-4.NOMVEA3N.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md?astroPropagatedAssets":"_astro/diploma-5.DiRVa6fP.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md?astroPropagatedAssets":"_astro/diploma-6.CgNjqPAV.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md?astroPropagatedAssets":"_astro/diploma-7.BKh9OaM_.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md?astroPropagatedAssets":"_astro/diploma-8.BKlK4Iwa.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md?astroPropagatedAssets":"_astro/project-1.CuGE2OXy.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md?astroPropagatedAssets":"_astro/project-2.m1JPIoCo.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md?astroPropagatedAssets":"_astro/project-3.CPBbkGk2.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md?astroPropagatedAssets":"_astro/project-4.h1Vej4VY.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-1.md":"_astro/diploma-1.Bp9ZtEWi.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-2.md":"_astro/diploma-2.CzAEe_xk.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-3.md":"_astro/diploma-3.dDo3CGOh.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-4.md":"_astro/diploma-4.Ct9GWb6S.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-5.md":"_astro/diploma-5.DHb43TeU.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-6.md":"_astro/diploma-6.CATI6xt9.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md":"_astro/diploma-7.BRTdU0mX.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-8.md":"_astro/diploma-8.BWJbdgSm.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md":"_astro/project-1.BhpsahZm.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md":"_astro/project-2.CNVcblOG.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md":"_astro/project-3.CaB31UQu.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md":"_astro/project-4.D8vYpFhm.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/AnimatedElement":"_astro/AnimatedElement.udNm8lHK.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/Navbar.jsx":"_astro/Navbar.DbHmCPIr.js","/astro/hoisted.js?q=0":"_astro/hoisted.BW7WfQgK.js","C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal":"_astro/DiplomaModal.BNlS0GhA.js","@astrojs/react/client.js":"_astro/client.BIGLHmRd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.DCl4mQs8.css","/_astro/cv.C0DmGvuV.css","/650c6cc436d4b956acb9dca1_Bootstrap_logo-minimal-min.svg","/about2.jpg","/bg.svg","/bg2.svg","/cert1.png","/cert2.png","/cert3.png","/cert4.png","/cert5.png","/cert7.png","/cert8.png","/code.png","/code1.png","/favicon.svg","/gallery1.gif","/gallery2.gif","/gallery3.gif","/icon1.png","/icon10.svg","/icon2.png","/icon3.png","/icon4.png","/icon5.png","/icon6.png","/icon7.png","/icon8.png","/icon9.png","/index.jpg","/mc1.jpg","/MC5.jpeg","/parallax.jpeg","/parallax2.jpg","/project1.png","/project2.png","/project3.png","/project4.png","/_astro/AnimatedElement.udNm8lHK.js","/_astro/client.BIGLHmRd.js","/_astro/diploma-1.BklfH8a7.js","/_astro/diploma-1.Bp9ZtEWi.js","/_astro/diploma-1.BSH8cU3b.js","/_astro/diploma-2.BRk_c1lq.js","/_astro/diploma-2.CzAEe_xk.js","/_astro/diploma-2.DcMrtzmQ.js","/_astro/diploma-3.dDo3CGOh.js","/_astro/diploma-3.Dd_vvZof.js","/_astro/diploma-3.DOTYTjTs.js","/_astro/diploma-4.Ct9GWb6S.js","/_astro/diploma-4.NOMVEA3N.js","/_astro/diploma-4.rXgddj4v.js","/_astro/diploma-5.CuWxykT2.js","/_astro/diploma-5.DHb43TeU.js","/_astro/diploma-5.DiRVa6fP.js","/_astro/diploma-6.BLcvvwNb.js","/_astro/diploma-6.CATI6xt9.js","/_astro/diploma-6.CgNjqPAV.js","/_astro/diploma-7.BKh9OaM_.js","/_astro/diploma-7.BPbs99su.js","/_astro/diploma-7.BRTdU0mX.js","/_astro/diploma-8.BKlK4Iwa.js","/_astro/diploma-8.BsArAOTD.js","/_astro/diploma-8.BWJbdgSm.js","/_astro/DiplomaModal.BNlS0GhA.js","/_astro/DiplomaModal.BtbHKmyO.js","/_astro/hoisted.BW7WfQgK.js","/_astro/index.DhYZZe0J.js","/_astro/jsx-runtime.7faW4zRM.js","/_astro/Navbar.DbHmCPIr.js","/_astro/project-1.BhpsahZm.js","/_astro/project-1.C0eqfGdR.js","/_astro/project-1.CuGE2OXy.js","/_astro/project-2.CNVcblOG.js","/_astro/project-2.CTWnRn2L.js","/_astro/project-2.m1JPIoCo.js","/_astro/project-3.CaB31UQu.js","/_astro/project-3.CFJcB9XL.js","/_astro/project-3.CPBbkGk2.js","/_astro/project-4.BmcxP-UG.js","/_astro/project-4.D8vYpFhm.js","/_astro/project-4.h1Vej4VY.js","/_astro/router.nTnAVDTI.js","/cv/index.html","/projects/index.html","/tags/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false});

export { manifest };
