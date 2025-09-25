// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://www.sscc.org.uk/",
  integrations: [mdx(), sitemap()],
  adapter: cloudflare({
    imageService: "passthrough",
    platformProxy: {
      enabled: true,
      configPath: "wrangler.jsonc",
    },
  }),
  // Ensure asset handling
  vite: {
    define: {
      "process.env.NODE_ENV": JSON.stringify(
        process.env.NODE_ENV || "production",
      ),
    },
  },
});
