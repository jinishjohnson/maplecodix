import { Link } from "react-router"

export interface LogoProps {
  inverse?: boolean
}

export function Logo({ inverse = false }: LogoProps) {
  return (
    <Link
      className="group inline-flex items-center gap-3"
      to="/"
      aria-label="MapleCodix home"
    >
      <span className="relative size-11 overflow-hidden rounded-lg bg-white shadow-[0_6px_16px_rgba(5,38,73,0.14)] ring-1 ring-black/5 transition duration-300 group-hover:scale-105">
        <img
          className="absolute left-1/2 top-[-0.55rem] w-[5.25rem] max-w-none -translate-x-1/2"
          src="/maplecodix-logo.jpg"
          alt=""
        />
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
