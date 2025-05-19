import { defineCollection, z } from "astro:content";
import { file } from "astro/loaders";

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

// const works = defineCollection({
//   loader: glob({ pattern: "*.md", base: "src/content/works" }),

//   schema: ({ image }) =>
//     z.object({
//       title: z.string(),
//       tags: z.array(z.string()),
//       cover: image(),
//       coverAlt: z.string(),
//       behanceUrl: z.string().optional(),
//     }),
// });

export const collections = { works };
