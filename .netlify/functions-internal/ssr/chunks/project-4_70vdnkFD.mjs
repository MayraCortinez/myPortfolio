import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"project-4","title":"ViveBio","tags":["JavaScript","NodeJs","Express","HTML","CSS","MySQL","MVC","Scrum","Trello","Workbench"],"img":{"url":"/project4.png","alt":"Imágen producto ViveBio"},"date":"2022-01-01T00:00:00.000Z","video":{"url":"https://drive.google.com/file/d/1nzS2eELukH8Q2yyFUzKRp0TNvkLCfeqp/preview","alt":"video presentación en grupo de trabajo final ViveBio curso Digital House"},"repo":{"url":"https://github.com/DiCerso/grupo_5_Vive-Bio/tree/develop","alt":"repositorio ViveBio en GitHub"},"description":"ViveBio es un e-commerce que permite a los usuarios registrar y gestionar información sobre productos de higiene personal, de origen natural, orgánicos, biodegradables y veganos. Desarrollado en un equipo de trabajo de 5 personas, utilizando el framework Express.js, conectado a una base de datos MySQL, y siguiendo el patrón de diseño MVC (Model-View-Controller). Utilizamos Scrum como metodología de trabajo y Trello para la gestión de tareas y seguimiento del proyecto.."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-4.md";
				const url = undefined;
				function rawContent() {
					return "\r\n\r\n";
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
