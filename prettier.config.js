/**
 * This file can be used to define Prettier configuration,
 * more info in https://prettier.io/docs/en/configuration/
 */

import sharedConfig from './shared/config/prettier/prettier.config.js';
import sharedTailwindConfig from './shared/config/prettier/tailwind.prettier.config.js';

/** @type {import("prettier").Options} */
export default {
  ...sharedConfig,
  ...sharedTailwindConfig,
  plugins: [...sharedConfig.plugins, ...sharedTailwindConfig.plugins],
};
