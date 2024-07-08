import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"softSkill-7","title":"Gestión del tiempo.","img":{"url":"/softSkill7.jpg","alt":"Imágen foco, idea, colores, creatividad."},"description":"Establecer prioridades claras, adaptarme rápidamente a cambios, manejar múltiples proyectos simultáneamente."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/softSkills/softSkill-7.md";
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
