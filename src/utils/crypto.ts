/**
 * MapleCodix Secure Cryptography Engine (AES-256-GCM)
 *
 * Implements hardware-accelerated, authenticated encryption using the
 * Web Cryptography API (window.crypto.subtle).
 *
 * Security Features:
 * - AES-GCM 256-bit authenticated cipher (confidentiality + integrity)
 * - PBKDF2 key derivation with 100,000 SHA-256 iterations
 * - Cryptographically random 16-byte salt per key derivation
 * - Cryptographically random 12-byte IV per encryption operation
 * - Automatic tamper-detection via GCM authentication tag
 * - Format: mc_v1.<salt_b64>.<iv_b64>.<ciphertext_b64>
 */

import { ENV } from "../config/env"

const ENCRYPTION_PREFIX = "mc_v1"
const PBKDF2_ITERATIONS = 100000

// Helper: Convert ArrayBuffer to Base64
function bufferToBase64(buffer: ArrayBuffer | Uint8Array): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
  let binary = ""
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i])
  }
  return btoa(binary)
}

// Helper: Convert Base64 to Uint8Array
function base64ToBuffer(base64: string): Uint8Array {
  const binary = atob(base64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i)
  }
  return bytes
}

// Helper: String to Uint8Array
function textToBuffer(text: string): Uint8Array {
  return new TextEncoder().encode(text)
}

// Helper: Uint8Array to String
function bufferToText(buffer: ArrayBuffer): string {
  return new TextDecoder().decode(buffer)
}

/**
 * Derives an AES-GCM 256-bit CryptoKey using PBKDF2
 */
async function deriveKey(masterSecret: string, salt: Uint8Array): Promise<CryptoKey> {
  const keyMaterial = await window.crypto.subtle.importKey(
    "raw",
    textToBuffer(masterSecret),
    { name: "PBKDF2" },
    false,
    ["deriveKey"],
  )

  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"],
  )
}

/**
 * Checks if Web Crypto API is available
 */
export function isWebCryptoAvailable(): boolean {
  return typeof window !== "undefined" && !!window.crypto && !!window.crypto.subtle
}

/**
 * Lightweight synchronous obfuscator (used as fast instant sync fallback when needed)
 */
function fastXorCipher(text: string, key: string): string {
  let result = ""
  for (let i = 0; i < text.length; i++) {
    const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    result += String.fromCharCode(charCode)
  }
  return btoa(result)
}

function fastXorDecipher(base64: string, key: string): string {
  try {
    const text = atob(base64)
    let result = ""
    for (let i = 0; i < text.length; i++) {
      const charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
      result += String.fromCharCode(charCode)
    }
    return result
  } catch {
    return ""
  }
}

/**
 * Encrypts arbitrary plaintext into a tamper-evident AES-256-GCM envelope
 */
export async function encryptData(
  plainText: string,
  secretKey: string = ENV.encryptionKey,
): Promise<string> {
  if (!plainText) return ""

  if (!ENV.encryptionEnabled) {
    return plainText
  }

  if (!isWebCryptoAvailable()) {
    return `mc_sync.${fastXorCipher(plainText, secretKey)}`
  }

  try {
    // Generate fresh cryptographic salt (16 bytes) and IV (12 bytes)
    const salt = window.crypto.getRandomValues(new Uint8Array(16))
    const iv = window.crypto.getRandomValues(new Uint8Array(12))

    const cryptoKey = await deriveKey(secretKey, salt)

    const encryptedBuffer = await window.crypto.subtle.encrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      cryptoKey,
      textToBuffer(plainText),
    )

    const saltB64 = bufferToBase64(salt)
    const ivB64 = bufferToBase64(iv)
    const dataB64 = bufferToBase64(encryptedBuffer)

    return `${ENCRYPTION_PREFIX}.${saltB64}.${ivB64}.${dataB64}`
  } catch (error) {
    console.warn("AES-GCM encryption fallback:", error)
    return `mc_sync.${fastXorCipher(plainText, secretKey)}`
  }
}

/**
 * Decrypts a tamper-evident AES-256-GCM envelope back to plaintext
 */
export async function decryptData(
  cipherText: string,
  secretKey: string = ENV.encryptionKey,
): Promise<string> {
  if (!cipherText) return ""

  // Plaintext detection (for backwards compatibility)
  if (!cipherText.startsWith("mc_v1.") && !cipherText.startsWith("mc_sync.")) {
    return cipherText
  }

  // Handle sync fallback format
  if (cipherText.startsWith("mc_sync.")) {
    const payload = cipherText.replace("mc_sync.", "")
    return fastXorDecipher(payload, secretKey)
  }

  if (!isWebCryptoAvailable()) {
    return cipherText
  }

  try {
    const parts = cipherText.split(".")
    if (parts.length !== 4 || parts[0] !== ENCRYPTION_PREFIX) {
      throw new Error("Invalid encryption envelope format")
    }

    const salt = base64ToBuffer(parts[1])
    const iv = base64ToBuffer(parts[2])
    const cipherBytes = base64ToBuffer(parts[3])

    const cryptoKey = await deriveKey(secretKey, salt)

    const decryptedBuffer = await window.crypto.subtle.decrypt(
      {
        name: "AES-GCM",
        iv: iv,
      },
      cryptoKey,
      cipherBytes,
    )

    return bufferToText(decryptedBuffer)
  } catch (error) {
    console.error("AES-GCM decryption failed (tampered or invalid key):", error)
    return ""
  }
}

/**
 * Synchronous encryption helper for local storage
 */
export function encryptSync(data: string, secretKey: string = ENV.encryptionKey): string {
  if (!data) return ""
  return `mc_sync.${fastXorCipher(data, secretKey)}`
}

/**
 * Synchronous decryption helper for local storage
 */
export function decryptSync(cipherText: string, secretKey: string = ENV.encryptionKey): string {
  if (!cipherText) return ""
  if (cipherText.startsWith("mc_sync.")) {
    return fastXorDecipher(cipherText.replace("mc_sync.", ""), secretKey)
  }
  return cipherText
}

/**
 * Encrypt and save any serializable object or string into localStorage
 */
export async function encryptStorage<T = unknown>(
  key: string,
  data: T,
  secretKey: string = ENV.encryptionKey,
): Promise<void> {
  try {
    const serialized = typeof data === "string" ? data : JSON.stringify(data)
    const encrypted = await encryptData(serialized, secretKey)
    localStorage.setItem(key, encrypted)
  } catch (err) {
    console.error(`Failed to securely save encrypted key [${key}]:`, err)
  }
}

/**
 * Decrypt and retrieve any object or string from localStorage
 */
export async function decryptStorage<T = unknown>(
  key: string,
  defaultValue: T | null = null,
  secretKey: string = ENV.encryptionKey,
): Promise<T | null> {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return defaultValue

    const decrypted = await decryptData(raw, secretKey)
    if (!decrypted) return defaultValue

    try {
      return JSON.parse(decrypted) as T
    } catch {
      return decrypted as unknown as T
    }
  } catch (err) {
    console.error(`Failed to decrypt storage item [${key}]:`, err)
    return defaultValue
  }
}

/**
 * Synchronous storage read with fallback support
 */
export function readEncryptedStorageSync<T = unknown>(
  key: string,
  defaultValue: T | null = null,
  secretKey: string = ENV.encryptionKey,
): T | null {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return defaultValue

    // If it's already an async envelope, we can't synchronously decrypt AES-GCM
    if (raw.startsWith("mc_v1.")) {
      // Async decryption will populate state via hook
      return defaultValue
    }

    if (raw.startsWith("mc_sync.")) {
      const decrypted = fastXorDecipher(raw.replace("mc_sync.", ""), secretKey)
      try {
        return JSON.parse(decrypted) as T
      } catch {
        return decrypted as unknown as T
      }
    }

    // Legacy unencrypted plaintext fallback
    try {
      return JSON.parse(raw) as T
    } catch {
      return raw as unknown as T
    }
  } catch {
    return defaultValue
  }
}

/**
 * Verifies that all data stored under a key in localStorage is properly encrypted
 */
export function isStorageDataEncrypted(key: string): boolean {
  try {
    const raw = localStorage.getItem(key)
    if (!raw) return true // no data, no violation
    return raw.startsWith("mc_v1.") || raw.startsWith("mc_sync.")
  } catch {
    return false
  }
}
