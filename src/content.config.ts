import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const Image = z.object({
  src: z.string().url(),
  alt: z.string(),
});

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.mdx", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: Image,
    }),
  }),
};
