import { defineConfig } from "vite";

export default defineConfig({
  base: '/',
  server: {
    port: '8080'
  },
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
      },
    },
  },
  refresh: true,
});
