/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GEMINI_API_KEY?: string
  readonly VITE_API_BASE_URL?: string
  readonly VITE_WHATSAPP_PHONE?: string
  readonly VITE_SUPPORT_EMAIL?: string
  readonly VITE_SUPPORT_PHONE?: string
  readonly VITE_DATA_ENCRYPTION_KEY?: string
  readonly VITE_ENABLE_ENCRYPTION?: string
  readonly VITE_SITE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
