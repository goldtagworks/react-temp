import { defineConfig, Plugin, PluginOption } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';


// https://vite.dev/config/
export default defineConfig(({}) => {
    return {
        base: './',
        plugins: [react(), tsconfigPaths()] as (Plugin | PluginOption)[],
        build: {
            emptyOutDir: true
        }
    };
});
