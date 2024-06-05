import { d as createComponent, g as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import 'clsx';

const html = "<p>Aplicación de tareas con autenticación, desarrollada en el marco del curso “Refuerzo en React”, brindado por Fundación Formar.</p>";

				const frontmatter = {"slug":"project-2","title":"My Project Manager","tags":["JavaScript","Express","React","Vite","Axios","MERN","MongoDB","TailwindCSS","React-Bootstrap","JWT"],"img":{"url":"/project2.png","alt":"Logo My Project Manager"},"date":"2023-02-02T00:00:00.000Z"};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\nAplicación de tareas con autenticación, desarrollada en el marco del curso \"Refuerzo en React\", brindado por Fundación Formar.";
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
