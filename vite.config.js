
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@app': path.resolve(__dirname, './src/app'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/components'),
      '@config': path.resolve(__dirname, './src/config'),
      '@constant': path.resolve(__dirname, './src/constant'),
      '@context': path.resolve(__dirname, './src/context'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@layout': path.resolve(__dirname, './src/layout'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@private': path.resolve(__dirname, './src/private'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@service': path.resolve(__dirname, './src/service'),
      '@store': path.resolve(__dirname, './src/store'),
      '@styles': path.resolve(__dirname, './src/style'),
      '@util': path.resolve(__dirname, './src/util'),
      '@validator': path.resolve(__dirname, './src/validator')
    },
    extensions: [
      '.js', '.jsx', '.ts', '.tsx', '.json', '.mjs', '.css', '.scss', '.sass', '.less',
      '.csv', '.svg', '.png', '.jpg', '.jpeg', '.gif', '.tiff', '.bmp', '.webp',
      '.ttf', '.otf', '.woff', '.woff2', '.eot'
    ]
  },
  build: {
    outDir: 'build'
  }
});
