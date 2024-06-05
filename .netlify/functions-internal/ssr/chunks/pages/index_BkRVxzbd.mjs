/* empty css                       */
import { d as createComponent, g as renderTemplate, h as renderComponent, m as maybeRenderHead, i as addAttribute } from '../astro_CPQ37Ys2.mjs';
import 'kleur/colors';
import { g as getCollection, a as $$ProjectList, $ as $$BaseLayout, A as AnimatedElement } from './_slug__qchNFBO4.mjs';
import { g as getUniqueTags } from './_tag__Ct6Y4E2B.mjs';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
import 'clsx';

const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  await getCollection("projects");
  const pageTitle = "\xCDndice de proyectos";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "ProjectList", $$ProjectList, {})} ` })}`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/index.astro", void 0);

const $$file$2 = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/projects/index.astro";
const $$url$2 = "/projects";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index$2,
   file: $$file$2,
   url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  const uniqueTags = await getUniqueTags(allProjects);
  const pageTitle = "\xCDndice de tecnolog\xEDas";
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy> ${uniqueTags.map(
    (tag) => renderTemplate`<p class="tag" data-astro-cid-os4i7owy><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`
  )} </div> ` })} `;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/index.astro", void 0);

const $$file$1 = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/tags/index.astro";
const $$url$1 = "/tags";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index$1,
   file: $$file$1,
   url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const Modal = ({ isOpen, onClose, imageUrl }) => {
  const modalClasses = isOpen ? "pointer-events-auto visible opacity-100 translate-y-0 scale-100" : "pointer-events-none invisible opacity-0 scale-90";
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        type: "checkbox",
        id: "tw-modal",
        className: "peer fixed appearance-none opacity-0",
        checked: isOpen,
        onChange: onClose
      }
    ),
    /* @__PURE__ */ jsx(
      "label",
      {
        htmlFor: "tw-modal",
        className: `fixed inset-0 flex items-center justify-center overflow-hidden bg-black/90 transition-all duration-200 ease-in-out ${modalClasses}`,
        onClick: onClose,
        children: /* @__PURE__ */ jsx(
          "label",
          {
            className: "max-h-[calc(100vh - 5em)] h-fit max-w-lg overflow-y-auto rounded-md bg-orange-300/10 p-6 text-black shadow-2xl",
            htmlFor: "",
            onClick: (e) => e.stopPropagation(),
            children: /* @__PURE__ */ jsx("img", { src: imageUrl, alt: "Diploma", className: "max-w-full h-auto" })
          }
        )
      }
    )
  ] });
};

const diplomas = await getCollection("diplomas");
const DiplomaModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState("");
  const openModal = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImageUrl("");
  };
  return /* @__PURE__ */ jsxs("section", { className: "text-white h-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-lg text-center mb-6", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold sm:text-4xl pb-12", children: "Cursos certificados" }),
        /* @__PURE__ */ jsx("div", { className: "cube pb-8", children: /* @__PURE__ */ jsxs("ul", { className: "ul-cube", children: [
          /* @__PURE__ */ jsx("li", { children: '"Formación continua' }),
          /* @__PURE__ */ jsx("li", { children: "construyendo" }),
          /* @__PURE__ */ jsx("li", { children: "un camino" }),
          /* @__PURE__ */ jsx("li", { children: 'de oportunidades"' })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 gap-8 md:grid-cols-4 lg:grid-cols-4", children: diplomas.map((diploma) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex-col mt-8 rounded-xl border cursor-pointer backdrop-blur-2xl border-gray-200/20 p-8 shadow-xl transition hover:border-orange-500/10 hover:shadow-orange-400/10",
          onClick: () => openModal(diploma.data.img.url),
          children: [
            /* @__PURE__ */ jsx("div", { id: "scroll-container", children: /* @__PURE__ */ jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "size-10 text-orange-500 svg-diploma rounded-xl",
                id: "animated-div",
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                children: [
                  /* @__PURE__ */ jsx("path", { d: "M12 14l9-5-9-5-9 5 9 5z" }),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "path",
                    {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "2",
                      d: "M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    }
                  )
                ]
              }
            ) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-bold text-white", children: diploma.data.title }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-gray-300", children: diploma.data.description })
            ] })
          ]
        },
        diploma.id
      )) })
    ] }),
    /* @__PURE__ */ jsx(Modal, { isOpen: isModalOpen, onClose: closeModal, imageUrl: selectedImageUrl })
  ] });
};

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="sobre-mi" class="text-white py-16 px-8"> <div class="container mx-auto"> <h2 class="text-4xl font-bold mb-8 text-center" data-aos="fade-up">Sobre mí</h2> <div class="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="200"> <div class="md:w-1/2 mb-8 md:mb-0 md:mr-8" data-aos="zoom-in"> <img src="/parallax.jpeg" alt="Mi Foto" class="rounded-full shadow-lg mx-auto"> </div> <div class="md:w-1/2" data-aos="fade-left" data-aos-delay="400"> <p class="text-lg leading-relaxed text-gray-300">
¡Hola! Soy [Tu Nombre], un [tu ocupación] con pasión por [tus intereses]. Tengo experiencia en [tus habilidades o campos de experiencia]. Me encanta trabajar en proyectos que involucren [tus intereses profesionales], y siempre estoy buscando nuevas oportunidades para aprender y crecer.
</p> <p class="text-lg leading-relaxed text-gray-300 mt-4">
En mi tiempo libre, disfruto [tus hobbies o actividades favoritas]. Siempre estoy dispuesto a conectar con personas que compartan mis intereses o que tengan proyectos interesantes en los que pueda colaborar.
</p> <a href="/contact" class="mt-4 inline-block border-b border-orange-400 text-white  hover:bg-orange-700 py-2 px-4 rounded" data-aos="fade-up" data-aos-delay="600">
Conectar conmigo
</a> </div> </div> </div> </section> <section id="sobre-mi" class="text-white py-16 px-8"> <div class="container mx-auto"> <h2 class="text-4xl font-bold mb-8 text-center" data-aos="fade-up"></h2> <div class="flex flex-col md:flex-row items-center" data-aos="fade-up" data-aos-delay="200"> <div class="md:w-1/2" data-aos="fade-left" data-aos-delay="400"> <p class="text-lg leading-relaxed text-gray-300">
¡Hola! Soy [Tu Nombre], un [tu ocupación] con pasión por [tus intereses]. Tengo experiencia en [tus habilidades o campos de experiencia]. Me encanta trabajar en proyectos que involucren [tus intereses profesionales], y siempre estoy buscando nuevas oportunidades para aprender y crecer.
</p> <p class="text-lg leading-relaxed text-gray-300 mt-4">
En mi tiempo libre, disfruto [tus hobbies o actividades favoritas]. Siempre estoy dispuesto a conectar con personas que compartan mis intereses o que tengan proyectos interesantes en los que pueda colaborar.
</p> <a href="/contact" class="border-b border-orange-400 mt-4 inline-block text-white  hover:bg-orange-700 py-2 px-4 rounded" data-aos="fade-up" data-aos-delay="600">
Conectar conmigo
</a> </div> <div class="md:w-1/2 mb-8 md:mb-0 md:mr-8" data-aos="zoom-in"> <img src="/about2.jpg" alt="Mi Foto" class="rounded-full shadow-lg mx-auto"> </div> </div> </div> </section> <section> <div class=" grid grid-rows-3 grid-cols-6 gap-4 p-4 h-screen"> <div class="row-span-3 col-span-2 flex justify-center items-center border border-black"> <iframe class="w-full h-full" src="/public/gallery1.gif">
        </div>
        <div class="row-span-1 col-span-4 box border border-black">
          <iframe class="w-full h-full" src="/public/gallery2.gif">
        </div>
        <div class="row-span-2 col-span-4 box border border-black">
          <iframe class="w-full h-full" src="/public/gallery3.gif">
        </div>
        <div class="row-span-3 box border border-black ">Box 4</div>
        <div class="row-span-3 box border border-black ">Box 5</div>
    </div>
    </section></iframe></div></div></section>`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/About.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="intro" id="intro"> <div> <div class="cube-01"></div> <div class="cube-02"></div> <div class="cube-03"></div> <div class="cube-04"></div> <div class="cube-05"></div> </div> ${renderComponent($$result2, "AnimatedElement", AnimatedElement, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/AnimatedElement", "client:component-export": "default" }, { "default": ($$result3) => renderTemplate` <section class="text-center pt-36 backdrop:blur-md"> <h1 class="text-4xl font-bold text-white z-10">Bienvenida/o a mi Portafolio</h1> <p class="text-lg text-white mt-4 pb-16 z-10">Soy una desarrolladora web Full Stack especializada en JavaScript y React.</p> </section> ` })} </div> <section class="h-auto"> ${renderComponent($$result2, "About", $$About, {})} </section> <section class=" h-auto "> ${renderComponent($$result2, "DiplomaModal", DiplomaModal, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/components/diploma/DiplomaModal", "client:component-export": "default" })} </section> ` })}`;
}, "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/index.astro", void 0);

const $$file = "C:/Users/Mayra/OneDrive/Escritorio/ASTRO/myPortfolio/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
   __proto__: null,
   default: $$Index,
   file: $$file,
   url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
