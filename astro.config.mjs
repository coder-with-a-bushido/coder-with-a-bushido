import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://coder-with-a-bushido.in/",
  adapter: vercel({
    analytics: true,
  }),
  redirects: {
    "/meet": "https://bushi.app.100ms.live/meeting/bet-herx-yse",
    "/book": "https://cal.com/coder-with-a-bushido",
    "/resume": "https://drive.google.com/file/d/1mRPCr5pvXpC6i0Krx2Txa_HsHwaTMjYB/view",
  },
  experimental: {
    redirects: true,
  },
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    react(),
    sitemap(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
    extendDefaultPlugins: true,
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
