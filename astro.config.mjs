import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://apavlyk.cc/",
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
});
