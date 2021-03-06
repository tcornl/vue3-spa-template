/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVE_DOMAIN: string;
  readonly VITE_BUILD_DOMAIN: string;
  readonly VITE_GH_PAGES_DOMAIN: string;
  readonly VITE_SENTRY_DSN: string;
  readonly VITE_SOURCE_CODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
