import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react()
  ],
  base: (process.env.NODE_ENV === "production") ? "/momentum/" : "",
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      $components: path.resolve("src/components"),
      $internal: path.resolve("src/internal"),
      $pages: path.resolve("src/pages")
    }
  }
});
