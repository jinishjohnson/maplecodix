import React, { useEffect, useRef, useState } from "react"

export type AnimationType = "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "fade"

interface ScrollRevealProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  animation?: AnimationType
  delay?: number
  duration?: number
  threshold?: number
  rootMargin?: string
  once?: boolean
  as?: React.ElementType
}

export function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  threshold = 0.12,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  as: Component = "div",
  className = "",
  style = {},
  ...rest
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            setIsVisible(false)
          }
        })
      },
      {
        threshold,
        rootMargin,
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [threshold, rootMargin, once])

  const animationClass = `reveal-${animation}`
  const activeClass = isVisible ? "reveal-active" : ""

  return (
    <Component
      ref={ref}
      className={`reveal-init ${animationClass} ${activeClass} ${className}`.trim()}
      style={{
        ...style,
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

interface ScrollStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  staggerDelay?: number
  initialDelay?: number
  animation?: AnimationType
  duration?: number
  threshold?: number
  className?: string
  itemClassName?: string
}

export function ScrollStagger({
  children,
  staggerDelay = 90,
  initialDelay = 0,
  animation = "fade-up",
  duration = 650,
  threshold = 0.1,
  className = "",
  itemClassName = "",
  ...rest
}: ScrollStaggerProps) {
  const childArray = React.Children.toArray(children)

  return (
    <div className={className} {...rest}>
      {childArray.map((child, index) => (
        <ScrollReveal
          key={index}
          animation={animation}
          delay={initialDelay + index * staggerDelay}
          duration={duration}
          threshold={threshold}
          className={itemClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  )
}

export default ScrollReveal
