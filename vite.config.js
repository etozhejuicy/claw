import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        js: "/app.js",
        css: "/src/scss/app.scss",
      },
    },
  },
  refresh: true,
});
