import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const ImageUrl = z.string().url();

const Image = ImageUrl.or(
  z.object({
    src: ImageUrl,
    alt: z.string({
      description:
        "Alternative text for the image used when the image cannot be displayed and by screen readers",
    }),
  }),
);

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: z.string(),
    }),
  }),
};
