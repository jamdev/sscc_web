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
    imageService: "noop",
    platformProxy: {
      enabled: true,
      configPath: "wrangler.jsonc",
      persist: {
        path: "./.cache/wrangler/v3",
      },
    },
  }),
});
