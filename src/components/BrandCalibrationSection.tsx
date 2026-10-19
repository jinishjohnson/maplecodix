import { useState, useRef, useEffect } from "react"
import { ScrollReveal } from "./ScrollReveal"
import siteData from "../data/data.json"

export type ServiceCategory = "logo-design" | "website-design" | "digital-marketing" | "mobile-apps" | "marketing-collateral"

interface ServiceCardItem {
  id: string
  title: string
  iconSvg: React.ReactNode
}

interface CategoryConfig {
  id: ServiceCategory
  label: string
  subtitle: string
  icon: React.ReactNode
  items: ServiceCardItem[]
}

export function BrandCalibrationSection() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("logo-design")
  const [selectedCardId, setSelectedCardId] = useState<string>("iconic-logo")
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false)
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true)
  const calibration = siteData.brandCalibrationSection

  const categories: CategoryConfig[] = [
    {
      id: "logo-design",
      label: "Logo Design",
      subtitle: "8 iconic identity styles",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m12 19 7-7 3 3-7 7-3-3z" />
          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
          <circle cx="11" cy="11" r="2" />
        </svg>
      ),
      items: [
        {
          id: "iconic-logo",
          title: "Iconic Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              {/* Drafting grid lines */}
              <line
                x1="20"
                y1="32"
                x2="100"
                y2="32"
                stroke="#164f86"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <line
                x1="20"
                y1="88"
                x2="100"
                y2="88"
                stroke="#164f86"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <line
                x1="36"
                y1="16"
                x2="36"
                y2="104"
                stroke="#164f86"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <line
                x1="84"
                y1="16"
                x2="84"
                y2="104"
                stroke="#164f86"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                opacity="0.8"
              />
              <line
                x1="31"
                y1="32"
                x2="41"
                y2="32"
                stroke="#164f86"
                strokeWidth="2"
              />
              <line
                x1="79"
                y1="32"
                x2="89"
                y2="32"
                stroke="#164f86"
                strokeWidth="2"
              />
              <line
                x1="31"
                y1="88"
                x2="41"
                y2="88"
                stroke="#164f86"
                strokeWidth="2"
              />
              <line
                x1="79"
                y1="88"
                x2="89"
                y2="88"
                stroke="#164f86"
                strokeWidth="2"
              />
              <path
                d="M60 22 L36 94"
                stroke="#071d35"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <path
                d="M60 22 L84 94"
                stroke="#071d35"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <rect
                x="40"
                y="62"
                width="40"
                height="12"
                rx="3"
                fill="#c91f26"
                stroke="#071d35"
                strokeWidth="2.5"
              />
              <line
                x1="48"
                y1="62"
                x2="48"
                y2="74"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1="56"
                y1="62"
                x2="56"
                y2="74"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1="64"
                y1="62"
                x2="64"
                y2="74"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <line
                x1="72"
                y1="62"
                x2="72"
                y2="74"
                stroke="#ffffff"
                strokeWidth="1.5"
              />
              <circle cx="60" cy="22" r="3.5" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "typographic-logo",
          title: "Typographic Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="typog-brand-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c91f26" />
                  <stop offset="50%" stopColor="#e24a50" />
                  <stop offset="100%" stopColor="#164f86" />
                </linearGradient>
              </defs>
              <path
                d="M48 28 H62 C78 28 88 38 88 60 C88 82 78 92 62 92 H48 Z"
                fill="none"
                stroke="url(#typog-brand-grad)"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M32 60 H76"
                stroke="#071d35"
                strokeWidth="8"
                strokeLinecap="round"
              />
              <path
                d="M42 48 L28 60 L42 72"
                stroke="#071d35"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M58 48 L86 86"
                stroke="#c91f26"
                strokeWidth="7"
                strokeLinecap="round"
              />
              <circle cx="86" cy="86" r="4.5" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "illustrative-logo",
          title: "Illustrative Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="illust-brand-tip"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c91f26" />
                  <stop offset="100%" stopColor="#e24a50" />
                </linearGradient>
              </defs>
              <path
                d="M26 80 C40 46 72 40 92 48"
                stroke="#164f86"
                strokeWidth="4.5"
                strokeLinecap="round"
              />
              <circle
                cx="26"
                cy="80"
                r="5"
                fill="#164f86"
                stroke="#ffffff"
                strokeWidth="2"
              />
              <line
                x1="26"
                y1="80"
                x2="36"
                y2="58"
                stroke="#164f86"
                strokeWidth="2"
                strokeDasharray="2 2"
              />
              <rect x="33" y="55" width="6" height="6" fill="#164f86" />
              <g transform="translate(62, 42)">
                <path
                  d="M0 0 L26 12 L16 32 L8 22 L0 0Z"
                  fill="url(#illust-brand-tip)"
                  stroke="#071d35"
                  strokeWidth="2.5"
                />
                <circle cx="12" cy="12" r="2.5" fill="#ffffff" />
              </g>
              <circle
                cx="92"
                cy="48"
                r="5"
                fill="#c91f26"
                stroke="#ffffff"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          id: "animated-logo",
          title: "Animated Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="ribbon-red-1"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c91f26" />
                  <stop offset="100%" stopColor="#e24a50" />
                </linearGradient>
                <linearGradient
                  id="ribbon-navy-2"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#164f86" />
                  <stop offset="100%" stopColor="#071d35" />
                </linearGradient>
              </defs>
              <path
                d="M42 32 C42 32 68 34 78 44 C88 54 84 72 70 82 L42 90 Z"
                fill="url(#ribbon-red-1)"
              />
              <path
                d="M42 32 L60 52 L42 90 L34 60 Z"
                fill="url(#ribbon-navy-2)"
                opacity="0.95"
              />
              <polygon
                points="56,54 70,62 56,70"
                fill="#ffffff"
                opacity="0.9"
              />
            </svg>
          ),
        },
        {
          id: "3d-logo",
          title: "3D Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <polygon
                points="60,24 88,40 88,72 60,88 32,72 32,40"
                stroke="#c91f26"
                strokeWidth="8"
                strokeLinejoin="round"
                fill="none"
              />
              <polygon
                points="60,40 76,50 76,66 60,76 44,66 44,50"
                fill="#071d35"
              />
              <line
                x1="68"
                y1="72"
                x2="84"
                y2="88"
                stroke="#164f86"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "wordmark-logo",
          title: "Wordmark Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle cx="36" cy="36" r="4.5" fill="#c91f26" />
              <circle cx="52" cy="36" r="4.5" fill="#164f86" />
              <circle cx="68" cy="36" r="4.5" fill="#164f86" />
              <circle cx="84" cy="36" r="4.5" fill="#c91f26" />
              <text
                x="60"
                y="78"
                textAnchor="middle"
                fontFamily="system-ui, -apple-system, sans-serif"
                fontWeight="900"
                fontSize="34"
                fill="#071d35"
                letterSpacing="-0.04em"
              >
                Word
              </text>
            </svg>
          ),
        },
        {
          id: "emblem-logo",
          title: "Emblem Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <defs>
                <linearGradient
                  id="emblem-brand-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#c91f26" />
                  <stop offset="50%" stopColor="#e24a50" />
                  <stop offset="100%" stopColor="#f59e0b" />
                </linearGradient>
              </defs>
              <circle cx="60" cy="68" r="28" fill="url(#emblem-brand-grad)" />
              <circle
                cx="60"
                cy="68"
                r="25"
                stroke="#ffffff"
                strokeWidth="1.5"
                strokeDasharray="3 2"
                fill="none"
              />
              <polygon
                points="60,54 63,63 72,63 65,68 68,77 60,72 52,77 55,68 48,63 57,63"
                fill="#ffffff"
              />
              <path
                d="M32 40 C42 26 78 26 88 40"
                stroke="#071d35"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <text
                x="60"
                y="34"
                textAnchor="middle"
                fontSize="8.5"
                fontWeight="900"
                fill="#071d35"
                letterSpacing="0.14em"
              >
                EMBLEM LOGO
              </text>
            </svg>
          ),
        },
        {
          id: "2d-logo",
          title: "2D Logo",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="30"
                y="28"
                width="16"
                height="16"
                rx="4"
                fill="#164f86"
              />
              <path
                d="M38 34 C36 32 34 34 34 36 C34 39 38 41 38 41 C38 41 42 39 42 36 C42 34 40 32 38 34Z"
                fill="#ffffff"
              />
              <rect
                x="74"
                y="28"
                width="16"
                height="16"
                rx="4"
                fill="#c91f26"
              />
              <polygon
                points="82,32 83.5,35.5 87,35.5 84,37.5 85.5,41 82,39 78.5,41 80,37.5 77,35.5 80.5,35.5"
                fill="#ffffff"
              />
              <text x="32" y="74" fontSize="26" fontWeight="900" fill="#071d35">
                L
              </text>
              <circle cx="60" cy="65" r="14" fill="#c91f26" />
              <circle cx="55" cy="62" r="2.5" fill="#ffffff" />
              <circle cx="65" cy="62" r="2.5" fill="#ffffff" />
              <path
                d="M54 68 Q60 74 66 68"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <text x="76" y="74" fontSize="26" fontWeight="900" fill="#071d35">
                L
              </text>
            </svg>
          ),
        },
      ],
    },
    {
      id: "website-design",
      label: "Website Design",
      subtitle: "8 web platform formats",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      ),
      items: [
        {
          id: "responsive-web",
          title: "Responsive Web",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="22"
                y="24"
                width="76"
                height="52"
                rx="6"
                stroke="#164f86"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect
                x="22"
                y="24"
                width="76"
                height="14"
                fill="#164f86"
                opacity="0.15"
              />
              <circle cx="30" cy="31" r="2" fill="#c91f26" />
              <circle cx="37" cy="31" r="2" fill="#164f86" />
              <circle cx="44" cy="31" r="2" fill="#164f86" />
              <rect
                x="66"
                y="50"
                width="28"
                height="42"
                rx="4"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#f8fafc"
              />
              <circle cx="80" cy="86" r="1.5" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "ecommerce-store",
          title: "E-Commerce Store",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="36"
                width="64"
                height="52"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <path
                d="M44 36 V28 C44 20 76 20 76 28 V36"
                stroke="#c91f26"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <circle
                cx="60"
                cy="58"
                r="10"
                stroke="#164f86"
                strokeWidth="2.5"
                fill="#fbeaec"
              />
              <path
                d="M57 58 L59 60 L64 55"
                stroke="#c91f26"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "saas-platform",
          title: "SaaS Platform",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="22"
                y="24"
                width="76"
                height="68"
                rx="8"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect x="22" y="24" width="22" height="68" fill="#f1f5f9" />
              <line
                x1="28"
                y1="36"
                x2="38"
                y2="36"
                stroke="#c91f26"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="28"
                y1="46"
                x2="38"
                y2="46"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="52"
                y="34"
                width="38"
                height="20"
                rx="4"
                fill="#fbeaec"
                stroke="#c91f26"
                strokeWidth="1.5"
              />
              <line
                x1="52"
                y1="64"
                x2="88"
                y2="64"
                stroke="#e2e8f0"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "landing-page",
          title: "Landing Page",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="30"
                y="22"
                width="60"
                height="76"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="40"
                y1="36"
                x2="80"
                y2="36"
                stroke="#c91f26"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="40"
                y1="46"
                x2="70"
                y2="46"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="40"
                y="62"
                width="40"
                height="16"
                rx="4"
                fill="#071d35"
              />
              <line
                x1="48"
                y1="70"
                x2="72"
                y2="70"
                stroke="#ffffff"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "cms-portal",
          title: "CMS Portal",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="24"
                y="26"
                width="32"
                height="30"
                rx="4"
                stroke="#164f86"
                strokeWidth="2.5"
                fill="#f8fafc"
              />
              <rect
                x="64"
                y="26"
                width="32"
                height="30"
                rx="4"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#ffffff"
              />
              <rect
                x="24"
                y="64"
                width="32"
                height="30"
                rx="4"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#ffffff"
              />
              <rect
                x="64"
                y="64"
                width="32"
                height="30"
                rx="4"
                stroke="#c91f26"
                strokeWidth="2.5"
                fill="#fbeaec"
              />
            </svg>
          ),
        },
        {
          id: "corporate-portal",
          title: "Corporate Portal",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="36"
                y="22"
                width="48"
                height="76"
                rx="4"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect x="44" y="32" width="8" height="8" rx="1" fill="#164f86" />
              <rect x="56" y="32" width="8" height="8" rx="1" fill="#164f86" />
              <rect x="68" y="32" width="8" height="8" rx="1" fill="#164f86" />
              <rect x="44" y="46" width="8" height="8" rx="1" fill="#c91f26" />
              <rect x="56" y="46" width="8" height="8" rx="1" fill="#c91f26" />
              <rect x="68" y="46" width="8" height="8" rx="1" fill="#c91f26" />
              <rect x="54" y="74" width="12" height="24" fill="#071d35" />
            </svg>
          ),
        },
        {
          id: "pwa-app",
          title: "Progressive Web App",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle
                cx="60"
                cy="60"
                r="36"
                stroke="#164f86"
                strokeWidth="3"
                strokeDasharray="4 3"
              />
              <path
                d="M50 60 L57 67 L72 52"
                stroke="#c91f26"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          id: "portfolio-site",
          title: "Creative Portfolio",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="26"
                y="28"
                width="68"
                height="50"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <polygon
                points="34,68 50,46 64,62 76,52 86,68"
                fill="#fbeaec"
                stroke="#c91f26"
                strokeWidth="2"
              />
              <circle cx="44" cy="40" r="4" fill="#164f86" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "digital-marketing",
      label: "Digital Marketing",
      subtitle: "8 growth & ROI channels",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
          <polyline points="16 7 22 7 22 13" />
        </svg>
      ),
      items: [
        {
          id: "seo-optimization",
          title: "SEO Optimization",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle cx="54" cy="54" r="24" stroke="#164f86" strokeWidth="4" />
              <line
                x1="72"
                y1="72"
                x2="94"
                y2="94"
                stroke="#071d35"
                strokeWidth="5"
                strokeLinecap="round"
              />
              <polyline
                points="42 56 50 48 58 54 66 44"
                stroke="#c91f26"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          id: "ppc-campaigns",
          title: "PPC Campaigns",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle cx="60" cy="60" r="32" stroke="#071d35" strokeWidth="3" />
              <circle
                cx="60"
                cy="60"
                r="20"
                stroke="#c91f26"
                strokeWidth="3"
                strokeDasharray="5 3"
              />
              <circle cx="60" cy="60" r="8" fill="#164f86" />
            </svg>
          ),
        },
        {
          id: "social-ads",
          title: "Social Media Ads",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="30"
                y="26"
                width="60"
                height="68"
                rx="8"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <circle cx="60" cy="50" r="14" fill="#c91f26" />
              <path
                d="M54 50 L58 54 L68 44"
                stroke="#ffffff"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="42"
                y1="74"
                x2="78"
                y2="74"
                stroke="#164f86"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "content-strategy",
          title: "Content Strategy",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="24"
                width="64"
                height="72"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="40"
                y1="40"
                x2="80"
                y2="40"
                stroke="#164f86"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <line
                x1="40"
                y1="52"
                x2="72"
                y2="52"
                stroke="#94a3b8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="40"
                y1="64"
                x2="76"
                y2="64"
                stroke="#94a3b8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="40"
                y1="76"
                x2="60"
                y2="76"
                stroke="#c91f26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "email-marketing",
          title: "Email Marketing",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="26"
                y="32"
                width="68"
                height="52"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <polyline
                points="28 36 60 62 92 36"
                stroke="#c91f26"
                strokeWidth="3"
              />
            </svg>
          ),
        },
        {
          id: "influencer-outreach",
          title: "Influencer Outreach",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle
                cx="60"
                cy="44"
                r="14"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <path
                d="M38 84 C38 68 50 64 60 64 C70 64 82 68 82 84"
                stroke="#071d35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polygon
                points="76,32 80,40 88,40 82,44 84,52 76,47 68,52 70,44 64,40 72,40"
                fill="#c91f26"
              />
            </svg>
          ),
        },
        {
          id: "conversion-rate",
          title: "Conversion CRO",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <polyline
                points="28 84 50 62 66 74 92 36"
                stroke="#164f86"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="92" cy="36" r="5" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "analytics-roi",
          title: "Growth Analytics",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="28"
                width="64"
                height="64"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect x="38" y="60" width="8" height="22" rx="2" fill="#164f86" />
              <rect x="52" y="46" width="8" height="36" rx="2" fill="#c91f26" />
              <rect x="66" y="38" width="8" height="44" rx="2" fill="#071d35" />
            </svg>
          ),
        },
      ],
    },
    {
      id: "mobile-apps",
      label: "Mobile Apps",
      subtitle: "8 native & hybrid formats",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="14" height="20" x="5" y="2" rx="3" ry="3" />
          <path d="M12 18h.01" />
        </svg>
      ),
      items: [
        {
          id: "ios-native",
          title: "iOS Native App",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="38"
                y="20"
                width="44"
                height="80"
                rx="10"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect x="50" y="24" width="20" height="4" rx="2" fill="#c91f26" />
              <circle cx="60" cy="90" r="3.5" fill="#164f86" />
            </svg>
          ),
        },
        {
          id: "android-native",
          title: "Android Native App",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="36"
                y="24"
                width="48"
                height="74"
                rx="8"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="48"
                y1="18"
                x2="44"
                y2="24"
                stroke="#c91f26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="72"
                y1="18"
                x2="76"
                y2="24"
                stroke="#c91f26"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="48" cy="38" r="2" fill="#071d35" />
              <circle cx="72" cy="38" r="2" fill="#071d35" />
            </svg>
          ),
        },
        {
          id: "cross-platform",
          title: "Cross-Platform App",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="28"
                width="38"
                height="66"
                rx="6"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#ffffff"
              />
              <rect
                x="54"
                y="28"
                width="38"
                height="66"
                rx="6"
                stroke="#c91f26"
                strokeWidth="2.5"
                fill="#ffffff"
              />
              <circle cx="47" cy="61" r="8" fill="#164f86" opacity="0.8" />
            </svg>
          ),
        },
        {
          id: "mobile-prototyping",
          title: "UI/UX Prototyping",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="34"
                y="22"
                width="52"
                height="76"
                rx="8"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <circle
                cx="60"
                cy="54"
                r="12"
                stroke="#c91f26"
                strokeWidth="2.5"
                fill="#fbeaec"
              />
              <path
                d="M60 54 L68 62"
                stroke="#071d35"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "app-store-optimization",
          title: "App Store Optimization",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <polygon
                points="60,24 70,44 92,44 74,58 80,78 60,66 40,78 46,58 28,44 50,44"
                fill="#c91f26"
                stroke="#071d35"
                strokeWidth="2"
              />
            </svg>
          ),
        },
        {
          id: "enterprise-mobility",
          title: "Enterprise Mobility",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="30"
                y="24"
                width="60"
                height="74"
                rx="6"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect
                x="46"
                y="44"
                width="28"
                height="22"
                rx="3"
                fill="#164f86"
              />
              <path
                d="M52 44 V36 C52 32 68 32 68 36 V44"
                stroke="#c91f26"
                strokeWidth="2.5"
                fill="none"
              />
            </svg>
          ),
        },
        {
          id: "wearable-apps",
          title: "Wearable & IoT App",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="42"
                y="36"
                width="36"
                height="48"
                rx="8"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <rect x="50" y="20" width="20" height="16" fill="#94a3b8" />
              <rect x="50" y="84" width="20" height="16" fill="#94a3b8" />
              <circle cx="60" cy="60" r="8" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "mobile-api-backend",
          title: "Cloud & APIs",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M34 68 C26 68 20 62 20 54 C20 46 26 40 34 40 C36 30 46 24 58 24 C70 24 80 32 82 42 C90 42 98 48 98 56 C98 64 90 68 82 68 Z"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="60"
                y1="68"
                x2="60"
                y2="92"
                stroke="#c91f26"
                strokeWidth="3.5"
                strokeLinecap="round"
              />
              <polyline
                points="52 84 60 92 68 84"
                stroke="#c91f26"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
      ],
    },
    {
      id: "marketing-collateral",
      label: "Marketing Collateral",
      subtitle: "8 tangible print assets",
      icon: (
        <svg
          className="size-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
          <path d="M6 6h10" />
          <path d="M6 10h10" />
        </svg>
      ),
      items: [
        {
          id: "brand-guidelines",
          title: "Brand Style Guide",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="32"
                y="22"
                width="56"
                height="76"
                rx="4"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="42"
                y1="36"
                x2="78"
                y2="36"
                stroke="#c91f26"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="42"
                y1="46"
                x2="68"
                y2="46"
                stroke="#94a3b8"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <circle cx="50" cy="66" r="6" fill="#c91f26" />
              <circle cx="68" cy="66" r="6" fill="#164f86" />
            </svg>
          ),
        },
        {
          id: "business-cards",
          title: "Business Cards",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="24"
                y="34"
                width="72"
                height="46"
                rx="4"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <circle cx="40" cy="54" r="6" fill="#c91f26" />
              <line
                x1="52"
                y1="50"
                x2="80"
                y2="50"
                stroke="#071d35"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <line
                x1="52"
                y1="58"
                x2="72"
                y2="58"
                stroke="#94a3b8"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          ),
        },
        {
          id: "pitch-decks",
          title: "Pitch Decks",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="24"
                y="28"
                width="72"
                height="50"
                rx="4"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="42"
                y1="78"
                x2="34"
                y2="94"
                stroke="#071d35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="78"
                y1="78"
                x2="86"
                y2="94"
                stroke="#071d35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <polyline
                points="36 56 50 44 64 50 78 38"
                stroke="#c91f26"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ),
        },
        {
          id: "brochures-flyers",
          title: "Brochures & Flyers",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="24"
                width="22"
                height="70"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#ffffff"
              />
              <rect
                x="50"
                y="24"
                width="22"
                height="70"
                stroke="#071d35"
                strokeWidth="2.5"
                fill="#f8fafc"
              />
              <rect
                x="72"
                y="24"
                width="22"
                height="70"
                stroke="#c91f26"
                strokeWidth="2.5"
                fill="#fbeaec"
              />
            </svg>
          ),
        },
        {
          id: "product-packaging",
          title: "Product Packaging",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <polygon
                points="60,24 88,38 88,74 60,88 32,74 32,38"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="60"
                y1="24"
                x2="60"
                y2="88"
                stroke="#071d35"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <polygon
                points="60,38 78,48 60,58 42,48"
                fill="#c91f26"
                opacity="0.85"
              />
            </svg>
          ),
        },
        {
          id: "trade-show-booths",
          title: "Trade Show Booths",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="24"
                y="24"
                width="72"
                height="60"
                rx="3"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
              />
              <line
                x1="24"
                y1="84"
                x2="16"
                y2="96"
                stroke="#071d35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <line
                x1="96"
                y1="84"
                x2="104"
                y2="96"
                stroke="#071d35"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="60" cy="50" r="14" fill="#c91f26" />
            </svg>
          ),
        },
        {
          id: "social-media-kit",
          title: "Social Media Kits",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <rect
                x="28"
                y="28"
                width="28"
                height="28"
                rx="4"
                fill="#c91f26"
              />
              <rect
                x="64"
                y="28"
                width="28"
                height="28"
                rx="4"
                fill="#164f86"
              />
              <rect
                x="28"
                y="64"
                width="28"
                height="28"
                rx="4"
                fill="#071d35"
              />
              <rect
                x="64"
                y="64"
                width="28"
                height="28"
                rx="4"
                fill="#f59e0b"
              />
            </svg>
          ),
        },
        {
          id: "branded-merch",
          title: "Merchandise & Swag",
          iconSvg: (
            <svg
              className="h-24 w-24 transition-transform duration-300 group-hover:scale-105 sm:h-28 sm:w-28"
              viewBox="0 0 120 120"
              fill="none"
            >
              <path
                d="M44 26 L30 38 L40 50 L44 46 V92 H76 V46 L80 50 L90 38 L76 26 C72 32 48 32 44 26Z"
                stroke="#071d35"
                strokeWidth="3"
                fill="#ffffff"
                strokeLinejoin="round"
              />
              <circle cx="60" cy="56" r="5" fill="#c91f26" />
            </svg>
          ),
        },
      ],
    },
  ]

  const currentCategory =
    categories.find((cat) => cat.id === activeTab) || categories[0]

  const updateScrollState = () => {
    if (!carouselRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setCanScrollLeft(scrollLeft > 20)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 20)

    const cardWidth = 340 + 20
    const idx = Math.min(
      Math.max(0, Math.round(scrollLeft / cardWidth)),
      currentCategory.items.length - 1,
    )
    setActiveIndex(idx)
  }

  useEffect(() => {
    const el = carouselRef.current
    if (!el) return
    el.addEventListener("scroll", updateScrollState, { passive: true })
    updateScrollState()
    return () => el.removeEventListener("scroll", updateScrollState)
  }, [activeTab])

  const handleTabChange = (tabId: ServiceCategory) => {
    setActiveTab(tabId)
    const targetCat = categories.find((c) => c.id === tabId)
    setSelectedCardId(targetCat?.items[0]?.id || "")
    setActiveIndex(0)
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" })
    }
  }

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return
    const cardWidth = 340 + 20
    carouselRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    })
  }

  const scrollToIndex = (index: number) => {
    if (!carouselRef.current) return
    const cardWidth = 340 + 20
    carouselRef.current.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    })
    setActiveIndex(index)
  }

  return (
    <section
      id="brand-calibration"
      className="relative overflow-hidden border-b border-slate-200/90 bg-[#ffffff] py-24 text-[#1d1d1f] md:py-32"
    >
      {/* Precision ambient light glows */}
      <div className="pointer-events-none absolute -left-28 top-10 size-[36rem] rounded-full bg-gradient-to-br from-[#c91f26]/8 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 size-[32rem] rounded-full bg-gradient-to-tr from-[#0066cc]/8 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        {/* Header Block with Eyebrow and Precision Branding */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ScrollReveal animation="fade-down" delay={60} duration={600}>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c91f26] shadow-xs">
              <span className="size-2 rounded-full bg-[#c91f26] animate-pulse" />
              {calibration.eyebrow}
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-down" delay={90} duration={600}>
            <span className="font-mono text-xs font-semibold tracking-wider text-[#86868b]">
              02 / Brand Systems
            </span>
          </ScrollReveal>
        </div>

        <div className="mt-6 max-w-3xl">
          <ScrollReveal animation="fade-up" delay={120} duration={700}>
            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-[#1d1d1f] sm:text-5xl md:text-6xl leading-[1.04]">
              {calibration.headingPrefix}
              <span className="text-[#c91f26]">
                {calibration.headingHighlight1}
              </span>
              {calibration.headingMiddle}
              <span className="text-[#c91f26]">
                {calibration.headingHighlight2}
              </span>
              {calibration.headingSuffix}
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={180} duration={700}>
            <p className="mt-5 text-base leading-relaxed text-[#6e6e73] md:text-lg">
              {calibration.description}
            </p>
          </ScrollReveal>
        </div>

        {/* 
          APPLE-STYLE CATEGORY TABS (ROUNDED-FULL PILLS)
        */}
        <ScrollReveal animation="fade-up" delay={240} duration={700}>
          <div
            className="mt-12 flex items-center gap-2.5 overflow-x-auto pb-2 no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => {
              const isActive = activeTab === cat.id
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => handleTabChange(cat.id)}
                  className={`group flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5 text-left transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-[#0f172a] text-white shadow-sm ring-1 ring-[#0f172a]"
                      : "bg-[#f1f5f9] text-[#475569] border border-slate-200/60 hover:bg-[#e2e8f0] hover:text-[#0f172a]"
                  }`}
                >
                  <span
                    className={`grid size-6 place-items-center rounded-full transition-colors ${
                      isActive
                        ? "text-[#ff4d4f]"
                        : "text-[#1d1d1f] group-hover:text-[#c91f26]"
                    }`}
                  >
                    {cat.icon}
                  </span>
                  <span className="text-xs font-semibold tracking-tight whitespace-nowrap">
                    {cat.label}
                  </span>
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* 
          CAROUSEL CONTROLS BAR
        */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.06] pb-4">
          <div className="flex items-center gap-3">
            <span className="size-2 rounded-full bg-[#c91f26]" />
            <span className="text-sm font-semibold text-[#1d1d1f]">
              {currentCategory.label} Variations
            </span>
            <span className="rounded-full bg-[#f5f5f7] px-2.5 py-0.5 text-xs font-medium text-[#86868b]">
              8 Curated Formats
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs font-semibold text-[#86868b]">
              {String(activeIndex + 1).padStart(2, "0")} / 08
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollCarousel("left")}
                disabled={!canScrollLeft}
                aria-label="Previous slide"
                className={`grid size-9 place-items-center rounded-full border transition-all ${
                  canScrollLeft
                    ? "border-black/10 bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                    : "border-black/5 bg-[#f5f5f7] text-black/20 cursor-not-allowed"
                }`}
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              <button
                type="button"
                onClick={() => scrollCarousel("right")}
                disabled={!canScrollRight}
                aria-label="Next slide"
                className={`grid size-9 place-items-center rounded-full border transition-all ${
                  canScrollRight
                    ? "border-black/10 bg-white text-[#1d1d1f] hover:bg-[#f5f5f7] hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                    : "border-black/5 bg-[#f5f5f7] text-black/20 cursor-not-allowed"
                }`}
              >
                <svg
                  className="size-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 
          HORIZONTAL INTERACTIVE CAROUSEL DECK
          Apple White Cards with Soft Ambient Shadows
        */}
        <div
          ref={carouselRef}
          className="mt-8 flex gap-5 overflow-x-auto pb-6 pt-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {currentCategory.items.map((item, index) => {
            const isSelected = selectedCardId === item.id

            return (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => setSelectedCardId(item.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setSelectedCardId(item.id)
                  }
                }}
                className={`group relative flex min-w-[280px] sm:min-w-[320px] md:min-w-[340px] shrink-0 snap-start cursor-pointer flex-col items-center justify-between rounded-[2rem] border bg-white p-8 text-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isSelected
                    ? "border-[#c91f26] ring-2 ring-[#c91f26]/20 shadow-[0_24px_50px_rgba(201,31,38,0.12)] -translate-y-2 bg-gradient-to-b from-white to-[#fff8f8]"
                    : "border-slate-200/90 shadow-[0_6px_25px_rgba(15,23,42,0.05)] hover:-translate-y-1.5 hover:border-slate-300 hover:shadow-[0_24px_60px_-12px_rgba(15,23,42,0.1)]"
                }`}
              >
                {/* Index tag & Active Pill */}
                <div className="flex w-full items-center justify-between text-xs font-mono font-medium text-[#86868b]">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {isSelected && (
                    <span className="flex items-center gap-1 rounded-full bg-[#fbeaec] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#c91f26]">
                      Selected
                    </span>
                  )}
                </div>

                {/* Centered Graphic Artwork */}
                <div className="flex h-36 w-full items-center justify-center py-2 transition-transform duration-500 ease-out group-hover:scale-105">
                  {item.iconSvg}
                </div>

                {/* Clean Title Underneath */}
                <div className="mt-4 w-full">
                  <h3
                    className={`text-base font-semibold tracking-tight transition-colors sm:text-lg ${
                      isSelected
                        ? "text-[#c91f26]"
                        : "text-[#1d1d1f] group-hover:text-[#c91f26]"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
              </div>
            )
          })}
        </div>

        {/* 
          BOTTOM PAGINATION TRACK & CALLOUT
        */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border-t border-black/[0.06] pt-6">
          {/* Interactive Navigation Dots */}
          <div className="flex items-center gap-2">
            {currentCategory.items.map((item, index) => {
              const isActive = activeIndex === index
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-8 bg-[#c91f26]"
                      : "w-2 bg-black/15 hover:bg-black/30"
                  }`}
                />
              )
            })}
          </div>

          {/* Quick Action Button */}
          <div className="flex items-center gap-4">
            <span className="text-xs text-[#6e6e73]">
              {calibration.note}
            </span>
            <a
              href={calibration.actionHref}
              className="group inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-5 py-2.5 text-xs font-semibold text-white shadow-xs transition hover:bg-[#c91f26] hover:scale-[1.02]"
            >
              <span>{calibration.actionLabel}</span>
              <svg
                className="size-3.5 transition-transform group-hover:translate-x-0.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14" />
                <path d="m13 6 6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandCalibrationSection
