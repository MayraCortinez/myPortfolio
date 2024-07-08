import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"softSkill-3","title":"Consciencia ecológica","img":{"url":"/softSkill3.jpg","alt":"Imágen consciencia ecológica"},"description":"Minimización del consumo energético, optimización de recursos, reducción de la huella de carbono, promoción de prácticas verdes."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/softSkills/softSkill-3.md";
				const url = undefined;
				function rawContent() {
					return "";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
