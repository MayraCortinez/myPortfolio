import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"project-2","title":"My Project Manager","tags":["JavaScript","Express","React","Vite","Axios","MERN","MongoDB","TailwindCSS","React-Bootstrap","JWT"],"img":{"url":"/project2.png","alt":"Logo My Project Manager"},"date":"2023-02-02T00:00:00.000Z","repo":{"url":"https://github.com/your-github-username/my-project-manager","alt":"Repositorio de My Project Manager en GitHub"},"description":"My Project Manager es una aplicación web de gestión de proyectos que te permite crear, editar y eliminar proyectos, así como asignar tareas. La aplicación utiliza tecnologías como React, Express, MongoDB y JWT para autenticar y autorizar a los usuarios."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-2.md";
				const url = undefined;
				function rawContent() {
					return "\r\n";
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
