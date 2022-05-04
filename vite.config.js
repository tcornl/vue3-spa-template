import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // For deployment to GitHub Pages, set base to "/<REPO>/" when deploying to https://<USERNAME>.github.io/<REPO>/
  // https://vitejs.dev/guide/static-deploy.html#github-pages
  base: "/vue3-spa-template/",
  test: {
    environment: "jsdom",
    reporter: "verbose",
    // https://vitest.dev/guide/features.html#coverage
    // https://github.com/bcoe/c8
    coverage: {
      reporter: ["text", "json", "html"],
      all: true,
      src: ["./src"],
      extension: [".js", ".vue"],
    },
  },
});
