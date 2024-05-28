
import { z, defineCollection } from 'astro:content';


const projectsCollection = defineCollection({
    type: 'content',
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
/*     image: z.object({
      url: z.string(),
      alt: z.string()
    }), */
    date: z.date(),
  })
});

export const collections = {
  'projects': projectsCollection,
};
