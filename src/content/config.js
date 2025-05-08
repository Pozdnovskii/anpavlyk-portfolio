import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

// const works = defineCollection({
//   loader: glob({ pattern: "*.md", base: "src/content/works" }),

//   schema: z.object({
//     title: z.string(),
//     tags: z.array(z.string()),
//     img: z.string(),
//     //
//   }),
// });

const works = defineCollection({
  loader: glob({ pattern: "*.md", base: "src/content/works" }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      tags: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      behanceUrl: z.string().optional(),
    }),
});

export const collections = { works };
