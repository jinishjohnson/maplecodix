import type React from "react"

export type IconName = "arrow" | "code" | "commerce" | "globe" | "marketing" | "mobile" | "pen" | "search" | "spark"

export interface IconProps {
  name: IconName
  className?: string
}

export function Icon({ name, className = "size-5" }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    code: (
      <>
        <path d="m8 9-4 3 4 3" />
        <path d="m16 9 4 3-4 3" />
        <path d="m14 5-4 14" />
      </>
    ),
    commerce: (
      <>
        <circle cx="9" cy="20" r="1" />
        <circle cx="19" cy="20" r="1" />
        <path d="M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 8H6" />
      </>
    ),
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),
    marketing: (
      <>
        <path d="m3 11 18-5v12L3 14v-3Z" />
        <path d="M11.6 16v4H7.5L6 14.7" />
      </>
    ),
    mobile: (
      <>
        <rect width="12" height="20" x="6" y="2" rx="2" />
        <path d="M11 18h2" />
      </>
    ),
    pen: (
      <>
        <path d="m15 5 4 4" />
        <path d="M13 7 4 16l-1 5 5-1 9-9a2.8 2.8 0 1 0-4-4Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    spark: (
      <path d="m12 3-1.8 5.2L5 10l5.2 1.8L12 17l1.8-5.2L19 10l-5.2-1.8L12 3ZM5 17l-.7 2.3L2 20l2.3.7L5 23l.7-2.3L8 20l-2.3-.7L5 17Z" />
    ),
  }

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  )
}

export default Icon
