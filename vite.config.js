import { defineConfig } from "vite";

export default defineConfig({
  // This tells Vite to use the current folder as the root
  root: "./",
  build: {
    // This will create the 'dist' folder in your project's root
    outDir: "dist",
  },
  server: {
    port: 8080,
  },
  // Your other CSS settings can remain the same
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
});
