/* empty css                       */
import { A as AstroError, c as UnknownContentCollectionError, d as createComponent, r as renderUniqueStylesheet, e as renderScriptElement, f as createHeadAndContent, g as renderTemplate, h as renderComponent, u as unescapeHTML, m as maybeRenderHead, i as addAttribute, j as createAstro, k as renderTransition, s as slide, l as renderSlot, n as renderHead } from '../astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import pLimit from 'p-limit';
import { prependForwardSlash } from '@astrojs/internal-helpers/path';
import 'clsx';
/* empty css                           */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": undefined, "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diplomas/diploma-1.md": () => import('../diploma-1_CtUt83Vs.mjs'),"/src/content/diplomas/diploma-2.md": () => import('../diploma-2_BUzAZ66S.mjs'),"/src/content/diplomas/diploma-3.md": () => import('../diploma-3_BGChPjr0.mjs'),"/src/content/diplomas/diploma-4.md": () => import('../diploma-4_CwibNXov.mjs'),"/src/content/diplomas/diploma-5.md": () => import('../diploma-5_C7fNnJj1.mjs'),"/src/content/diplomas/diploma-6.md": () => import('../diploma-6_B2yX-jOV.mjs'),"/src/content/diplomas/diploma-7.md": () => import('../diploma-7_l4HdYtRw.mjs'),"/src/content/diplomas/diploma-8.md": () => import('../diploma-8_CdnMGGbM.mjs'),"/src/content/projects/project-1.md": () => import('../project-1_DeA_dIvR.mjs'),"/src/content/projects/project-2.md": () => import('../project-2_D-woLtOZ.mjs'),"/src/content/projects/project-3.md": () => import('../project-3_v7hitG25.mjs'),"/src/content/projects/project-4.md": () => import('../project-4_C8hP3dO6.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"diplomas":{"type":"content","entries":{"diploma-2":"/src/content/diplomas/diploma-2.md","diploma-1":"/src/content/diplomas/diploma-1.md","diploma-3":"/src/content/diplomas/diploma-3.md","diploma-4":"/src/content/diplomas/diploma-4.md","diploma-5":"/src/content/diplomas/diploma-5.md","diploma-6":"/src/content/diplomas/diploma-6.md","diploma-7":"/src/content/diplomas/diploma-7.md","diploma-8":"/src/content/diplomas/diploma-8.md"}},"projects":{"type":"content","entries":{"project-1":"/src/content/projects/project-1.md","project-2":"/src/content/projects/project-2.md","project-3":"/src/content/projects/project-3.md","project-4":"/src/content/projects/project-4.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/diplomas/diploma-1.md": () => import('../diploma-1_B8amjj3g.mjs'),"/src/content/diplomas/diploma-2.md": () => import('../diploma-2_C5O5iIh1.mjs'),"/src/content/diplomas/diploma-3.md": () => import('../diploma-3_BnplS1Bq.mjs'),"/src/content/diplomas/diploma-4.md": () => import('../diploma-4_BuVmRA8E.mjs'),"/src/content/diplomas/diploma-5.md": () => import('../diploma-5_CMnBqNmv.mjs'),"/src/content/diplomas/diploma-6.md": () => import('../diploma-6_1JyQCgPk.mjs'),"/src/content/diplomas/diploma-7.md": () => import('../diploma-7_pgeVkjJQ.mjs'),"/src/content/diplomas/diploma-8.md": () => import('../diploma-8_BO118ZOX.mjs'),"/src/content/projects/project-1.md": () => import('../project-1_C4jkTLoE.mjs'),"/src/content/projects/project-2.md": () => import('../project-2_CWOIHKmP.mjs'),"/src/content/projects/project-3.md": () => import('../project-3_jX43sMz8.mjs'),"/src/content/projects/project-4.md": () => import('../project-4_ytKO4K3i.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const $$ProjectList = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<ul class="text-white p-3 center items-center text-center m-auto flex gap-4 justify-center border-b"> ${projects.map((project) => renderTemplate`<li> <a class="p-2 hover:text-orange-200 hover:shadow-lg hover:shadow-orange-500/10 rounded-2xl"${addAttribute(`/projects/${project.slug}`, "href")}>${project.data.title}</a> </li>`)} </ul>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/projects/ProjectList.astro", void 0);

let navigateOnServerWarned = false;
async function navigate(href, options) {
  {
    if (!navigateOnServerWarned) {
      const warning = new Error(
        "The view transitions client API was called during a server side render. This may be unintentional as the navigate() function is expected to be called in response to user interactions. Please make sure that your usage is correct."
      );
      warning.name = "Warning";
      console.warn(warning);
      navigateOnServerWarned = true;
    }
    return;
  }
}

function Navbar() {
  return /* @__PURE__ */ jsxs(
    "select",
    {
      onChange: (e) => navigate(e.target.value),
      className: "bg-black text-white block appearance-none border border-orange-300 hover:border-orange-400 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline",
      children: [
        /* @__PURE__ */ jsx("option", { value: "/about" }),
        /* @__PURE__ */ jsx("option", { value: "/#about", children: "Sobre mí" }),
        /* @__PURE__ */ jsx("option", { value: "/projects", children: "Proyectos" }),
        /* @__PURE__ */ jsx("option", { value: "/tags", children: "Habilidades" })
      ]
    }
  );
}

const $$Astro$3 = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(renderTransition($$result, "l7r54iwe", slide({ duration: "0.4s" })), "data-astro-transition-scope")}> <div class="container mx-auto flex justify-between p-4"> <a href="/"> <div class="flex row-span-4"> <img src="code.png" alt="Logo" class="h-8 w-auto"> <h1 class="text-orange-600 text-xl pl-3">Cortinez Mayra</h1> </div> </a> ${renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/nav/Navbar.jsx", "client:component-export": "default" })} </div> </header>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/Header.astro", "self");

const $$ContactForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ContactRing relative w-auto h-auto flex justify-center items-center"> <i class="absolute inset-0 border-2 border-white transition duration-500" style="--clr:#ff5500;"></i> <i class="absolute inset-0 border-2 border-white transition duration-500 animate-spin" style="--clr:#fff700;"></i> <i class="absolute inset-0 border-2 border-white transition duration-500 animate-spin-reverse" style="--clr:#ffba44;"></i> <div class="ContactName absolute w-full max-w-lg p-8 rounded-lg text-white"> <h2 class="text-2xl mb-4">Contacto</h2> <div class="inputBx mb-4"> <input type="text" placeholder="Nombre" class="w-full py-2 px-4 bg-transparent border-2 border-white rounded-full text-white placeholder-white focus:outline-none focus:ring focus:border-orange-500"> </div> <div class="inputBx mb-4"> <input type="email" placeholder="E-mail" class="w-full py-2 px-4 bg-transparent border-2 border-white rounded-full text-white placeholder-white focus:outline-none focus:ring focus:border-orange-500"> </div> <div class="inputBx mb-4"> <textarea maxlength="300" placeholder="Mensaje" class="w-full py-2 px-4 bg-transparent border-2 border-white rounded-lg text-white placeholder-white resize-none focus:outline-none focus:ring focus:border-orange-500"></textarea> </div> <div class="inputBx"> <input type="submit" value="Enviar" class="w-full py-2 px-4 bg-gradient-to-r from-red-500 to-orange-500 border-none rounded-full cursor-pointer text-white"> </div> </div> </div>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/ContactForm.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer id="Footer" class=" text-white w-full m-auto h-full mt-48"> <section class="lg:grid lg:grid-cols-2 bg-content"> <div class="px-4 pl-8 sm:px-6 lg:row-span-6 lg:px-8 m-auto"> ${renderComponent($$result, "ContactForm", $$ContactForm, {})} </div> <div class="px-4 py-16 sm:px-6 lg:row-span-3 lg:px-8 grid-col-end"> <div> <p> <span class="text-xs uppercase tracking-wide text-gray-500"> Llamadas al: </span> <a href="#" class="block text-2xl font-medium text-gray-600 hover:opacity-75 sm:text-3xl">
01121617937
</a> </p> <ul class="mt-8 flex gap-6"> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75"> <span class="sr-only">Facebook</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75"> <span class="sr-only">Instagram</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75"> <span class="sr-only">Twitter</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75"> <span class="sr-only">GitHub</span> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path> </svg> </a> </li> <li> <a href="#" rel="noreferrer" target="_blank" class="text-gray-700 transition hover:opacity-75"> <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"> <path fill-rule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clip-rule="evenodd"></path> </svg> </a> </li> </ul> </div> <div class="grid grid-cols-1 gap-4 sm:grid-cols-1"></div> </div> <div class="mt-12 border-t border-gray-100 pt-12"> <div class="sm:flex sm:items-center sm:justify-between"> <p class="mt-8 text-xs text-gray-500 sm:mt-0">
&copy; 2024 Cortinez Mayra Desarrolladora Web.
</p> </div> </div> </section> </footer>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/Footer.astro", void 0);

const AnimatedElement = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: `scroll-animated ${isVisible ? "visible" : ""}`,
      children
    }
  );
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/code.png"><meta name="viewport" content="width=device-width"><meta name="generator"', "><title>Mi Portafolio</title>", "", '</head> <body class="min-h-screen flex flex-col"> ', " <main> ", ' <script src="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js" defer><\/script>  </main> ', " </body></html>"])), addAttribute(Astro2.generator, "content"), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}), renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "AnimatedElement", AnimatedElement, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/AnimatedElement", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Footer", $$Footer, {})} ` }));
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro();
const $$MarkdownProjectLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MarkdownProjectLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "ProjectList", $$ProjectList, {})} ${maybeRenderHead()}<section class="flex flex-col-3 md:flex-col-3 shadow-lg rounded-lg overflow-hidden mt-12 ml-4"> <div class="tags text-white p-6"> <h3 class="text-white p-2">Tecnologías</h3> ${frontmatter.tags.map((tag) => renderTemplate`<p class="tag hover:shadow-lg hover:shadow-orange-500/10 rounded-2xl px-2"> <a${addAttribute(`/tags/${tag}`, "href")}>${tag}</a> </p>`)} </div> <article class="flex  transition"> <div class="flex flex-col md:flex-row shadow-lg rounded-lg overflow-hidden"> <div class="md:w-auto"> <img class="w-auto h-auto object-cover md:h-full"${addAttribute(frontmatter.img.url, "src")}${addAttribute(frontmatter.img.alt, "alt")}> </div> <div class="p-6 md:w-1/2 backdrop-blur-lg text-white"> <h2 class="text-2xl font-bold mb-2">${frontmatter.title}</h2> <p class="text-white mb-4"></p> ${renderSlot($$result2, $$slots["default"])} </div> </div> </article> </section> <br> ` })}`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/layouts/MarkdownProjectLayout.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const allProjects = await getCollection("projects");
  return allProjects.map((project) => ({
    params: { slug: project.slug },
    props: { project }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { project } = Astro2.props;
  const { Content } = await project.render();
  if (!project) {
    throw new Error(`Project not found for slug: ${Astro2.params.slug}`);
  }
  return renderTemplate`${renderComponent($$result, "MarkdownProjectLayout", $$MarkdownProjectLayout, { "frontmatter": project.data }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Content", Content, {})} ` })}`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/[slug].astro", void 0);

const $$file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/[slug].astro";
const $$url = "/projects/[slug]";

const _slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, AnimatedElement as A, _slug_ as _, $$ProjectList as a, getCollection as g };
