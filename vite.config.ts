import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";
import compression from "vite-plugin-compression";
import purgecss from "vite-plugin-purgecss";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/reyoni-hindi/lp3/" : "/",
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    tailwindcss(),
    visualizer({ open: true, gzipSize: true, brotliSize: true }),
    // purgecss({
    //   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
    // }),
    // Image Optimization
    viteImagemin({
      gifsicle: { optimizationLevel: 7, interlaced: false },
      optipng: { optimizationLevel: 7 },
      mozjpeg: { quality: 80 },
      pngquant: { quality: [0.8, 0.9], speed: 4 },
      svgo: {
        plugins: [{ name: "removeViewBox" }, { name: "removeEmptyAttrs", active: false }],
      },
    }),
    // Gzip Compression
    compression({
      algorithm: "gzip",
      ext: ".gz",
    }),
    // Brotli Compression (even better than Gzip)
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "reyoni-hindi/lp3",
    reportCompressedSize: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-ui": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-select",
            "@radix-ui/react-popover",
            "@radix-ui/react-tooltip",
            "lucide-react",
          ],
          "vendor-forms": ["react-hook-form", "zod", "@hookform/resolvers"],
          "vendor-charts": ["recharts"],
        },
      },
    },
  },
}));
