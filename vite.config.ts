import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "qrcodegenerator",
  server: {
    port: 3000,
  },
  preview: {
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
  plugins: [react()],
});
