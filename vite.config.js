import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  build: {
    rollupOptions: {
      input: {
        index: "/index.html",
        installation: "/installation.html",
        components: "/components.html",
        utilities: "/utilities.html",
        about: "/about.html",
      },
      output: {
        errorFile: '/error.html',
      },
    },
  },
  refresh: true,
});
