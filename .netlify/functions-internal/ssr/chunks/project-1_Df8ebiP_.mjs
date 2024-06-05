import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Blog desarrollado con Astro, el potente framework de JavaScript.\r\nComponentes - Layouts - Páginas - Modos de renderizado - Páginas dinámicas - Markdown - Islas - ViewTransitions - Autenticación.</p>";

				const frontmatter = {"slug":"project-1","title":"My blog Astro","tags":["JavaScript","React","Astro","HTML","CSS","TailwindCSS","astro-auth","OAuth"],"img":{"url":"/project1.png","alt":"Página de inicio My blog Astro"},"date":"2024-05-02T00:00:00.000Z"};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-1.md";
				const url = undefined;
				function rawContent() {
					return "\r\nBlog desarrollado con Astro, el potente framework de JavaScript.\r\n Componentes - Layouts - Páginas - Modos de renderizado - Páginas dinámicas - Markdown - Islas - ViewTransitions - Autenticación.\r\n";
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
