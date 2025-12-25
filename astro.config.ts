import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkSectionize from "remark-sectionize";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
    layout: "constrained",
  },

  devToolbar: {
    enabled: false,
  },

  vite: {
    // @ts-expect-error weird plugin type incompatibility
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkSectionize],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "prepend",
          content: {
            type: "text",
            // Zero Width Space character to provide clickable area without visible content
            value: "\u200B",
          },
          properties: {
            className: "heading-anchor",
          },
        },
      ],
    ],
  },

  integrations: [mdx()],
});
