/* eslint-disable @typescript-eslint/triple-slash-reference */
/**
 * This file can be used to define Global Typescript types
 */

/// <reference types="vite/client" />
/// <reference types="vitest/globals" />
/// <reference path="shared/config/global" />

interface ImportMetaEnv {
  readonly SITE: string;
  readonly VITE_API_URL: string;
  readonly VITE_APP_NAME: string;
  readonly VITE_GITHUB_WORKFLOW_SHA: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
