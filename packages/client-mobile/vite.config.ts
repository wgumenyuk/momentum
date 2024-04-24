import path from "node:path";
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  build: {
    outDir: "build"
  },
  plugins: [
    react()
  ],
  resolve: {
    alias: {
      "$components": path.resolve("src/components")
    }
  }
});