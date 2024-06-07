import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
      },
      output: {
        outDir: '.',
        publicDir: 'public',
        assetsDir: 'assets',
      }
    },
  },
  refresh: true,
});
