import { z, defineCollection } from 'astro:content';


const projectsCollection = defineCollection({
    type: 'content',
  schema: z.object({
    name: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
    date: z.string(),
  })
});

export const collections = {
  'projects': projectsCollection,
};
