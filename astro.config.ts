import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ protocol: "https" }],
    responsiveStyles: true,
    layout: "constrained",
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    // @ts-expect-error weird plugin type incompatibility
    plugins: [tailwindcss()],
  },
});
