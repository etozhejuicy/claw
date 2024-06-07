import { defineConfig } from "vite";

export default defineConfig({
  root: 'public',
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
      },
    },
  },
  refresh: true,
});
