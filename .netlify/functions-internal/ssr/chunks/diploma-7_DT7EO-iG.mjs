import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"title":"English for developers & IT professionals","img":{"url":"cert7.png","alt":"Diploma English for developers & IT professionals"},"description":"Desafío Latama & DigiSpeak"};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/diplomas/diploma-7.md";
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
