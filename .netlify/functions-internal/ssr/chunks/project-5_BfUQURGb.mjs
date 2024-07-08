import { e as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from './astro_DsCov2XV.mjs';
import 'kleur/colors';
import 'clsx';

const html = "";

				const frontmatter = {"slug":"project-5","title":"Utopía salvaje","tags":["DeepBrain AI","ChatGPT"],"date":"2023-06-11T00:00:00.000Z","img":{"url":"/project5.jpeg","alt":"Imágen producto ViveBio"},"video":{"url":"https://drive.google.com/file/d/1yy61QdXUSf1sxHOwG64EkSmPAK6KUlkw/preview","alt":"video presentación uTOPÍA SALVAJE"},"description":"Proyecto presentado para la intervención artística Abri Tempo, de la artista canadiense Forteza Camila. Texto creado por ChatGPT, en respuesta a la solicitud de consejos para la humanidad y su esencia natural. El video fue realizado utilizando DeepBrain AI. Durante la proyección se transplantaron más de cien especies de fauna, que luego fueron obsequiadas entre los presentes."};
				const file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/content/projects/project-5.md";
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
