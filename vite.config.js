import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgLoader()],
  optimizeDeps: {
    /**
     * This is required only because we use "npm link" for
     * testing purposes. See `dependencies` in `package.json`.
     */
    include: ["@ckeditor/ckeditor5-vue", "@ckeditor/ckeditor5-build-classic"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
