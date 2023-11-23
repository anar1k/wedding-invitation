import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),

    eslint(),

    AutoImport({
      dts: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    }),

    Components({
      dts: true,
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass',
        }),
      ],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      extensions: ['vue', 'md'],
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
