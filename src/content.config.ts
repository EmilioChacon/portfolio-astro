import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    githubUrl: z.string().url(),
    tags: z.array(z.string()),
    order: z.number()
  })
});

export const collections = {
  'projects': projectsCollection,
};
