import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ViteCSSExportPlugin from 'vite-plugin-css-export';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react(), ViteCSSExportPlugin()],
});
