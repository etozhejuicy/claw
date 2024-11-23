import { defineConfig } from "vite";

export default defineConfig({
  base: "./",
  root: "./",
  build: {
    rollupOptions: {
      fallback: "/error.html",
      input: {
        index: "/index.html",
        installation: "/installation.html",
        components: "/components/index.html",
        utilities: "/utilities.html",
        about: "/about.html",
        demo: "/demo.html",
      },
      output: {
        errorFile: "/error.html",
      },
    },
  },
  refresh: true,
});
