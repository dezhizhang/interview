/*
 * :file description:
 * :name: /vite/vite.config.js
 * :author:张德志
 * :copyright: (c) 2024, Xiaozhi
 * :date created: 2024-10-01 10:29:00
 * :last editor: 张德志
 * :date last edited: 2024-10-01 16:17:46
 */
import path from "path";
import {
  defineConfig
} from "vite";
import legacy from '@vitejs/plugin-legacy'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    {
      enforce: 'pre',
      ...mdx()
    },
    react({
      include: /\.(mdx|js|jsx|ts|tsx)$/
    }),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames(assetInfo) {
          if (assetInfo.name.endsWith('css')) {
            return 'css/[name].[hash].css'
          }
          const imgExts = ['.png', '.jpg', 'jpeg', 'webp', '.svg', '.gif'];
          if (imgExts.some(ext => assetInfo.name.endsWith(ext))) {
            return 'img/[name].[hash][ext]'
          }

          return 'assets/[name].[hash][ext]'
        }
      }
    }
  },
});