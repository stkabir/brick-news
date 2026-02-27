// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
    adapter: node({ mode: 'standalone' }),
    integrations: [react(), markdoc()],
    vite: {
        plugins: [tailwindcss()],
    },
});
