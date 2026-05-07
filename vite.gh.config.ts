import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwind from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwind()],
  base: "/rassrochka-auto/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/web"),
    },
  },
  build: {
    outDir: "dist-gh",
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
          vendor: ["react", "react-dom", "wouter"],
          ui: ["lucide-react"],
        },
      },
    },
  },
});
