
import { z, defineCollection } from 'astro:content';


const projectsCollection = defineCollection({
    type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    img: z.object({
      url: z.string(),
      alt: z.string()
    }), 
    date: z.date(),
  })
});

const diplomasCollection = defineCollection({
  type: 'content',
  schema: z.object({
  title: z.string(),
  description: z.string(),
  img: z.object({
    url: z.string(),
    alt: z.string()
  })
})
});

export const collections = {
  'projects': projectsCollection,
  'diplomas': diplomasCollection,
};
