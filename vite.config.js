import { defineConfig } from 'vite';
import { fileURLToPath } from 'url';
import path from 'path';

// Define __dirname for ES modules
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      'react-player': path.resolve(__dirname, 'node_modules/react-player'),
    },
  },
});
