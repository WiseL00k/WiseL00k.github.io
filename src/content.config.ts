import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.preprocess((v) => (v == null ? [] : [v].flat()), z.array(z.string())),
    description: z.string().optional(),
    cover: z.string().optional(),
    abbrlink: z.coerce.string().optional(),
    project: reference('projects').optional(),
    comments: z.boolean().default(true),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string(),
      stack: z.array(z.string()).default([]),
      repo: z.url().optional(),
      demo: z.url().optional(),
      video: z.string().optional(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      status: z.enum(['active', 'maintained', 'completed', 'archived']).default('active'),
      date: z.coerce.date(),
    }),
});

export const collections = { posts, projects };
