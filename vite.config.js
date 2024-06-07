import { defineConfig } from "vite";

export default defineConfig({
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
      },
    },
  },
  refresh: true,
});
