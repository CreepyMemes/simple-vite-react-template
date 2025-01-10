import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslint({
      failOnError: true, // Stop build on ESLint errors
      failOnWarning: false, // (Optional) Stop build on warnings
    }),
  ],
  resolve: {
    alias: [
      { find: '@/*', replacement: path.resolve(__dirname, './src') },
      { find: '@components', replacement: path.resolve(__dirname, './src/components') },
      { find: '@assets', replacement: path.resolve(__dirname, './src/assets') },
      { find: '@data', replacement: path.resolve(__dirname, './src/data') },
    ],
  },
});
