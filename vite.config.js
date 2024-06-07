import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: './',
    rollupOptions: {
      input: {
        index: "/index.html",
      },
    },
  },
  refresh: true,
});
