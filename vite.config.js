import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// This is required for Vite to work correctly with CodeSandbox
const server = {
    port: 5174, // ✅ Set the port to 5174
    strictPort: true,
};

// https://vitejs.dev/config/
export default defineConfig({
    server: server,
    resolve: {
        alias: {
            '@src': resolve(__dirname, './src'),
        },
    },
    plugins: [react()],
});
