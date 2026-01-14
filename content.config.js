import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { file } from "astro/loaders";
import { glob } from "astro/loaders";

const works = defineCollection({
  loader: file("src/content/works.json"),

  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      behanceUrl: z.string().optional(),
    }),
});

const testimonials = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "src/content/testimonials",
  }),
  schema: z.object({
    author: z.string(),
    role: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = { works, testimonials };
