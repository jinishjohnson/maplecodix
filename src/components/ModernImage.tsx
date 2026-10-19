import { useState, type ImgHTMLAttributes } from "react"

export interface ModernImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string
  alt: string
  priority?: boolean
  aspectRatio?: string
  fallbackSrc?: string
  containerClassName?: string
}

export function ModernImage({
  src,
  alt,
  priority = false,
  aspectRatio,
  fallbackSrc,
  className = "",
  containerClassName = "",
  ...rest
}: ModernImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  const activeSrc = hasError && fallbackSrc ? fallbackSrc : src

  return (
    <div
      className={`relative overflow-hidden ${containerClassName}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      {/* Skeleton / Blur placeholder while loading to eliminate Cumulative Layout Shift (CLS) */}
      {!isLoaded && !hasError && (
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-slate-200/60 dark:bg-slate-800/60 animate-pulse"
        />
      )}

      {!hasError ? (
        <img
          src={activeSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
          {...rest}
        />
      ) : (
        /* Graceful fallback if image is missing */
        <div
          role="img"
          aria-label={alt}
          className="flex h-full w-full items-center justify-center bg-slate-100 p-4 text-center text-slate-400"
        >
          <svg
            className="size-10 stroke-slate-300"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      )}
    </div>
  )
}

export default ModernImage
