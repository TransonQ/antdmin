/// <reference types="vite/client" />

interface ImportMetaEnv {
  // 更多环境变量...
  readonly VITE_APP_API_BASE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
