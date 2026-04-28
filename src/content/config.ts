import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    topic: z.string().default('notes'),
    author: z.string().default('NSIETeam'),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};
