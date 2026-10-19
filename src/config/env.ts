/**
 * MapleCodix Environment Configuration & Secrets Management
 * All client-exposed variables must be prefixed with VITE_
 */

export interface EnvConfig {
  // AI & External APIs
  geminiApiKey: string
  apiBaseUrl: string

  // Contact & Support Hotline
  whatsappPhone: string
  supportEmail: string
  supportPhone: string
  web3formsAccessKey: string

  // Cryptography & Security
  encryptionKey: string
  encryptionEnabled: boolean

  // General Application
  siteUrl: string
  isProduction: boolean
  isDevelopment: boolean
}

export const ENV: EnvConfig = {
  geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY || "",
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "https://api.maplecodix.com/v1",
  whatsappPhone: import.meta.env.VITE_WHATSAPP_PHONE || "15063124135",
  supportEmail: import.meta.env.VITE_SUPPORT_EMAIL || "support@maplecodix.com",
  supportPhone: import.meta.env.VITE_SUPPORT_PHONE || "+1 (506) 312-4135",
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "",
  encryptionKey:
    import.meta.env.VITE_DATA_ENCRYPTION_KEY ||
    "mc_sec_8f93e2b17a04c5d6e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b9c0d1",
  encryptionEnabled:
    import.meta.env.VITE_ENABLE_ENCRYPTION !== "false", // enabled by default
  siteUrl: import.meta.env.VITE_SITE_URL || "https://maplecodix.com",
  isProduction: import.meta.env.PROD ?? false,
  isDevelopment: import.meta.env.DEV ?? true,
}

export default ENV
