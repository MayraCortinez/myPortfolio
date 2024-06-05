import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>E-commerce Sustentable de Zapatillas Deportivas.\r\nTrabajo final integrador del curso “Especialización en React” del programa Codo a Codo 4.0</p>\n<p><a href=\"https://github.com/MayraCortinez/CAC-ZUS\">Repositorio</a>\r\n<a href=\"https://reactjsgrupo5-43e69.web.app\">Deploy</a></p>";

				const frontmatter = {"slug":"project-3","title":"Ecommerce ZUS","tags":["Vite","React","Firebase","React-Bootstrap","FormSubmit","SweetAlert2"],"img":{"url":"/project3.png","alt":"Página de inicio Ecommerce ZUS"},"date":"2023-03-03T00:00:00.000Z"};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nE-commerce Sustentable de Zapatillas Deportivas.\r\nTrabajo final integrador del curso \"Especialización en React\" del programa Codo a Codo 4.0\r\n\r\n\r\n[Repositorio](https://github.com/MayraCortinez/CAC-ZUS)\r\n[Deploy](https://reactjsgrupo5-43e69.web.app)\r\n";
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
