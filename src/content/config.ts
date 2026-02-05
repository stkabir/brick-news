import { defineCollection, z } from 'astro:content';

const categories = defineCollection({
  type: 'content',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
    descriptionEn: z.string(),
    descriptionEs: z.string(),
    nav: z.boolean().default(true),
    accentColor: z.string().optional(),
  }),
});

const sections = defineCollection({
  type: 'content',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
    descriptionEn: z.string().optional(),
    descriptionEs: z.string().optional(),
    layout: z.enum(['hero', 'grid', 'list', 'sidebar']),
    categories: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
    summaryEn: z.string(),
    summaryEs: z.string(),
    image: z.string().url(),
    category: z.string(),
    author: z.string(),
    date: z.string(),
    featured: z.boolean().default(false),
    priority: z.number().default(0),
  }),
});

export const collections = {
  categories,
  sections,
  articles,
};
