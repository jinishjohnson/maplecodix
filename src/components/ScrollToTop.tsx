import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY
          const totalHeight =
            document.documentElement.scrollHeight - window.innerHeight

          setVisible(scrollY > 320)

          if (totalHeight > 0) {
            const progress = (scrollY / totalHeight) * 100
            setScrollProgress(Math.min(100, Math.max(0, progress)))
          }
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const radius = 18
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset =
    circumference - (scrollProgress / 100) * circumference

  return (
    <div
      className={`fixed bottom-6 right-6 z-40 transition-all duration-300 md:bottom-8 md:right-8 ${
        visible
          ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-90 opacity-0"
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        className="group relative flex size-12 items-center justify-center rounded-full bg-[#071d35] text-white shadow-[0_10px_25px_rgba(7,29,53,0.3)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c91f26] hover:shadow-[0_12px_28px_rgba(201,31,38,0.4)] focus:outline-none focus:ring-2 focus:ring-[#c91f26] focus:ring-offset-2"
        aria-label="Scroll back to top"
      >
        {/* Circular progress meter */}
        <svg
          className="absolute inset-0 size-12 -rotate-90"
          viewBox="0 0 44 44"
          aria-hidden="true"
        >
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="2.5"
          />
          <circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="text-[#c91f26] transition-[stroke-dashoffset] duration-100 group-hover:text-white"
          />
        </svg>

        {/* Up arrow icon */}
        <svg
          aria-hidden="true"
          className="relative size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}

export default ScrollToTop
