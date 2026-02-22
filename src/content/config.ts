import { defineCollection, z } from 'astro:content';

const categories = defineCollection({
  type: 'data',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
  }),
});

const sections = defineCollection({
  type: 'data',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
    descriptionEn: z.string().optional(),
    descriptionEs: z.string().optional(),
    sectionLayout: z.enum(['hero', 'grid', 'list', 'sidebar']),
    categories: z.array(z.string()),
    order: z.number().default(0),
  }),
});

const articles = defineCollection({
  type: 'data',
  schema: z.object({
    titleEn: z.string(),
    titleEs: z.string(),
    summaryEn: z.string(),
    summaryEs: z.string(),
    image: z.string().url(),
    category: z.string(),
    author: z.string(),
    date: z.coerce.string(),
    featured: z.boolean().default(false),
    priority: z.number().default(0),
  }),
});

export const collections = {
  categories,
  sections,
  articles,
};
