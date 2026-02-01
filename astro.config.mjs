import { defineConfig } from "astro/config";

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
    fonts: [
      {
        provider: "local",
        name: "NeueMetana",
        cssVariable: "--font-neue-metana",
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

        fallbacks: ["sans-serif"],
      },
      {
        provider: "local",
        name: "Geist",
        cssVariable: "--font-geist",
        variants: [
          {
            weight: "100 900",
            style: "normal",
            src: ["./src/assets/fonts/Geist-VariableFont_wght.woff2"],
          },
        ],

        fallbacks: ["sans-serif"],
      },
    ],
  },
});
