import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

import tsconfig from './tsconfig.json';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({
      mode: [Mode.HTML, Mode.MARKDOWN, Mode.REACT],
    })
  ],
  define: {
    global: 'window',
  },
  build: {
    modulePreload: false,
    target: "esnext",
    assetsDir: 'assets',
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
  },
  resolve: {
    alias: Object.entries(tsconfig.compilerOptions.paths).map(([key, [value]]) => ({
      find: key,
      replacement: path.resolve(__dirname, value),
    }))
  }
})
