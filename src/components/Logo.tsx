import { useState } from "react"
import { Link } from "react-router"
import logoSrc from "../assets/maplecodix-logo.jpg"

export interface LogoProps {
  inverse?: boolean
  className?: string
}

export function Logo({ inverse = false, className = "" }: LogoProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <Link
      className={`group inline-flex items-center gap-3 ${className}`}
      to="/"
      aria-label="MapleCodix home"
    >
      <span className="relative flex size-11 items-center justify-center overflow-hidden rounded-xl bg-white shadow-[0_6px_16px_rgba(5,38,73,0.14)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105">
        {!imgError ? (
          <img
            className="absolute left-1/2 top-[-0.55rem] w-[5.25rem] max-w-none -translate-x-1/2 select-none"
            src={logoSrc}
            alt="MapleCodix emblem"
            loading="eager"
            decoding="async"
            onError={() => setImgError(true)}
          />
        ) : (
          /* High-fidelity Vector Fallback */
          <svg
            className="size-7"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M20 5L24 13L28 9L27 17L33 16L29 23L35 25L28 30L20 37L12 30L5 25L11 23L7 16L13 17L12 9L16 13L20 5Z"
              fill="#071d35"
            />
            <path
              d="M20 5L24 13L28 9L25 15L20 12L15 15L12 9L16 13L20 5Z"
              fill="#c91f26"
            />
            <path
              d="M16 17V27H19V22H21V27H24V17H21V20H19V17H16Z"
              fill="white"
            />
          </svg>
        )}
      </span>
      <span
        className={`text-xl font-extrabold tracking-[-0.04em] transition ${
          inverse ? "text-white" : "text-[#071d35]"
        }`}
      >
        Maple<span className="text-[#c91f26]">Codix</span>
      </span>
    </Link>
  )
}

export default Logo
