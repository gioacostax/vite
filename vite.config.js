/**
 * This file can be used to define Vite configuration,
 * more info in https://vitejs.dev/config/
 */

import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';

import httpsViteConfig from './shared/config/vite/https.vite.config.js';
import sharedReactConfig from './shared/config/vite/react.vite.config.js';
import sharedConfig from './shared/config/vite/vite.config.js';

/**
 * Vite config dependencies
 * - vite
 */
export default mergeConfig(
  sharedConfig,
  mergeConfig(
    sharedReactConfig,
    mergeConfig(
      defineConfig({
        publicDir: 'static',
        resolve: {
          alias: {
            '@': resolve(__dirname, './src/'),
            '@shared': resolve(__dirname, './shared/'),
            '@static': resolve(__dirname, './static/'),
          },
        },
      }),
      defineConfig({
        server: httpsViteConfig('giorgio.local'),
      }),
    ),
  ),
);
