/* empty css                       */
import { d as createComponent, g as renderTemplate, h as renderComponent, j as createAstro, m as maybeRenderHead, i as addAttribute } from '../astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import { g as getCollection, $ as $$BaseLayout } from './_slug__qchNFBO4.mjs';

async function getUniqueTags(projects) {
    return [...new Set(projects.flatMap(project => project.data.tags))];
  }

const $$Astro = createAstro();
async function getStaticPaths() {
  const allProjects = await getCollection("projects");
  const uniqueTags = await getUniqueTags(allProjects);
  return uniqueTags.map((tag) => ({
    params: { tag },
    props: { projects: allProjects.filter((project) => project.data.tags.includes(tag)) }
  }));
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { projects } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-white">Projectos en los que se ha utilizado ${tag}</h1> <ul class="tag-list text-white"> ${projects.map((project) => renderTemplate`<li> <a${addAttribute(`/projects/${project.slug}`, "href")}>${project.data.title}</a> </li>`)} </ul> ` })}`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { _tag_ as _, getUniqueTags as g };
