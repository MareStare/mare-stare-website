import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const Image = z.object({
  src: z.string().url(),
  alt: z.string(),
});

const Video = z.object({
  src: z.string().url(),
  type: z.enum(["video/webm"]),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
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
      video: Video.optional(),
    }),
  }),
};
