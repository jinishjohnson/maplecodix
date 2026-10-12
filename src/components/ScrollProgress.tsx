import { useEffect, useState } from "react"

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight
          if (totalHeight > 0) {
            const currentProgress = (window.scrollY / totalHeight) * 100
            setProgress(Math.min(100, Math.max(0, currentProgress)))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className="pointer-events-none fixed left-0 top-0 z-[100] h-[3px] w-full bg-transparent"
      aria-hidden="true"
    >
      <div
        className="h-full bg-gradient-to-r from-[#c91f26] via-[#e24a50] to-[#f46e74] shadow-[0_0_12px_rgba(201,31,38,0.7)] transition-[width] duration-150 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ScrollProgress
