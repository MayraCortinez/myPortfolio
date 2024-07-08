import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"project-3","title":"E-commerce ZUS","tags":["Vite","React","Firebase","React-Bootstrap","FormSubmit","SweetAlert2"],"img":{"url":"/project3.png","alt":"Página de inicio E-commerce ZUS"},"date":"2023-03-03T00:00:00.000Z","video":{"url":"https://drive.google.com/file/d/10sYwTqZ9XCUBfSsghVaREpH3VLNztL-7/preview","alt":"Presentación documentación trabajo integrador Codo a Codo - React"},"repo":{"url":"https://github.com/MayraCortinez/CAC-ZUS","alt":"Repositorio de E-commerce ZUS en GitHub"},"deploy":{"url":"https://reactjsgrupo5-43e69.web.app","alt":"Deploy de E-commerce ZUS en Netlify"},"description":"E-commerce Sustentable de Zapatillas Deportivas. Esta aplicación utiliza React con Vite como bundler para el desarrollo del front-end y Firebase para el alojamiento y almacenamiento de datos. Validaciones frontend con React-Bootstrap. Validaciones backend códigos de errores de Firebase."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-3.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
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
