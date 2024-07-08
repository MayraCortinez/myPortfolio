import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"softSkill-2","title":"Colaboración en equipo","img":{"url":"/softSkill2.jpg","alt":"Imágen trabajo en equipo"},"description":"Comunicación efectiva, flexibilidad y adaptabilidad, roles definidos y responsabilidades claras, resolución de conflictos constructiva, apoyo mutuo y reconocimiento."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/softSkills/softSkill-2.md";
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
