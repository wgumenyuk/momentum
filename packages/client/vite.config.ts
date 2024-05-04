import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    outDir: "build"
  },
  resolve: {
    alias: {
      $components: path.resolve("src/components"),
      $views: path.resolve("src/views")
    }
  }
});