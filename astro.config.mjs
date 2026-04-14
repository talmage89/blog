// @ts-check
import { defineConfig } from "astro/config";
import { rehypeBaseUrl } from "./src/plugins/rehype-base-url.mjs";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/blog",
  markdown: {
    rehypePlugins: [[rehypeBaseUrl, { base: "/blog" }]],
  },
});
