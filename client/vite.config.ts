import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        host: true,
        strictPort: true,
        port: 9000,
    },

    plugins: [react()],
});

//TODO: look into: plugins: [reactRefresh()]
