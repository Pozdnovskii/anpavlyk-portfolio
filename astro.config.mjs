import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://apavlyk.cc",
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
    layout: "constrained",
  },
  trailingSlash: "always",

  experimental: {
    svgo: true,

    fonts: [
      {
        provider: fontProviders.local(),
        name: "NeueMetana",
        cssVariable: "--font-neue-metana",
        fallbacks: ["sans-serif"],
        options: {
          variants: [
            {
              weight: 400,
              style: "normal",
              src: ["./src/assets/fonts/NeueMetana-Regular.woff2"],
            },
            {
              weight: 700,
              style: "normal",
              src: ["./src/assets/fonts/NeueMetana-Bold.woff2"],
            },
          ],
        },
      },
      {
        provider: fontProviders.local(),
        name: "Geist",
        cssVariable: "--font-geist",
        fallbacks: ["sans-serif"],
        options: {
          variants: [
            {
              weight: "100 900",
              style: "normal",
              src: ["./src/assets/fonts/Geist-VariableFont_wght.woff2"],
            },
          ],
        },
      },
    ],
  },
});
