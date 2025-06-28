
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
            '@services': path.resolve(__dirname, './src/services'),
            '@stores': path.resolve(__dirname, './src/stores'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@validators': path.resolve(__dirname, './src/validators')
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
