// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    appType: 'mpa',
    base: './',
    root: '.',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about/index.html'),
                install: resolve(__dirname, 'install/index.html'),
                installHelp: resolve(__dirname, 'install/help.html'),
                components: resolve(__dirname, 'components/index.html'),
                componentsButtons: resolve(__dirname, 'components/buttons.html'),
                componentsCards: resolve(__dirname, 'components/cards.html'),
                componentsCheckboxes: resolve(__dirname, 'components/checkboxes.html'),
                utilities: resolve(__dirname, 'utilities/index.html'),
                utilitiesApi: resolve(__dirname, 'utilities/api.html'),
            },
        },
    },
    refresh: true,
});
