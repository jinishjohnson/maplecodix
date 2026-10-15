export interface ServiceIllustrationProps {
  id: string
  className?: string
}

export function ServiceIllustration({
  id,
  className = "w-full h-48",
}: ServiceIllustrationProps) {
  switch (id) {
    case "website-development":
    case "01":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Browser Window Frame */}
          <rect
            x="20"
            y="20"
            width="320"
            height="160"
            rx="12"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="2"
          />
          {/* Header Bar */}
          <rect x="20" y="20" width="320" height="30" rx="12" fill="#071d35" />
          <rect x="20" y="38" width="320" height="12" fill="#071d35" />
          {/* Window Controls */}
          <circle cx="38" cy="35" r="4" fill="#e24a50" />
          <circle cx="50" cy="35" r="4" fill="#f59e0b" />
          <circle cx="62" cy="35" r="4" fill="#10b981" />
          {/* URL Bar */}
          <rect
            x="85"
            y="28"
            width="170"
            height="14"
            rx="7"
            fill="#ffffff"
            opacity="0.15"
          />
          <text
            x="95"
            y="39"
            fill="#ffffff"
            fontSize="8"
            fontFamily="monospace"
            opacity="0.75"
          >
            https://maplecodix.com
          </text>
          {/* Layout Content: Hero Grid */}
          <rect x="36" y="66" width="130" height="16" rx="4" fill="#071d35" />
          <rect
            x="36"
            y="88"
            width="90"
            height="8"
            rx="3"
            fill="#526273"
            opacity="0.4"
          />
          <rect
            x="36"
            y="100"
            width="110"
            height="8"
            rx="3"
            fill="#526273"
            opacity="0.25"
          />
          {/* CTA Button */}
          <rect x="36" y="118" width="48" height="16" rx="4" fill="#c91f26" />
          {/* Right Visual Card */}
          <rect
            x="185"
            y="66"
            width="135"
            height="95"
            rx="8"
            fill="#edf3f7"
            stroke="#cfe1f0"
            strokeWidth="1.5"
          />
          <path
            d="M205 135 L225 105 L245 125 L275 85 L300 115"
            stroke="#164f86"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="275" cy="85" r="4" fill="#c91f26" />
          {/* Speed Badge */}
          <rect
            x="195"
            y="76"
            width="46"
            height="18"
            rx="9"
            fill="#10b981"
            fillOpacity="0.15"
          />
          <text
            x="202"
            y="89"
            fill="#10b981"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            ⚡ 99/100
          </text>
        </svg>
      )

    case "ecommerce-solutions":
    case "02":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Storefront Checkout Dashboard */}
          <rect
            x="25"
            y="25"
            width="310"
            height="150"
            rx="12"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="2"
          />
          {/* Left: Product Showcase */}
          <rect x="42" y="42" width="100" height="116" rx="8" fill="#edf3f7" />
          <circle cx="92" cy="85" r="24" fill="#164f86" fillOpacity="0.1" />
          <path
            d="M80 85 L88 93 L104 77"
            stroke="#c91f26"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect x="52" y="120" width="80" height="8" rx="4" fill="#071d35" />
          <rect
            x="52"
            y="134"
            width="45"
            height="12"
            rx="3"
            fill="#c91f26"
            fillOpacity="0.15"
          />
          <text x="58" y="143" fill="#c91f26" fontSize="9" fontWeight="bold">
            $399.00
          </text>
          {/* Right: Payment & Cart Flow */}
          <rect x="160" y="42" width="155" height="42" rx="8" fill="#071d35" />
          <text x="174" y="60" fill="#ffffff" fontSize="11" fontWeight="bold">
            Stripe &amp; Shopify Sync
          </text>
          <text x="174" y="74" fill="#ffffff" opacity="0.6" fontSize="9">
            Instant 1-Click Checkout
          </text>
          <circle cx="295" cy="63" r="10" fill="#10b981" />
          <path
            d="M291 63 L294 66 L299 61"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Conversion Lift Badge */}
          <rect
            x="160"
            y="96"
            width="155"
            height="62"
            rx="8"
            fill="#fbeaec"
            stroke="#f5c2c7"
            strokeWidth="1"
          />
          <text x="174" y="118" fill="#c91f26" fontSize="10" fontWeight="bold">
            Conversion Optimization
          </text>
          <text
            x="174"
            y="142"
            fill="#071d35"
            fontSize="20"
            fontWeight="900"
            fontFamily="monospace"
          >
            +142% ROAS
          </text>
        </svg>
      )

    case "web-applications":
    case "03":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Web App Terminal & Data Pipeline */}
          <rect
            x="20"
            y="20"
            width="320"
            height="160"
            rx="12"
            fill="#071d35"
            stroke="#164f86"
            strokeWidth="2"
          />
          {/* Terminal Titlebar */}
          <circle cx="38" cy="36" r="4" fill="#e24a50" />
          <circle cx="50" cy="36" r="4" fill="#f59e0b" />
          <circle cx="62" cy="36" r="4" fill="#10b981" />
          <text
            x="85"
            y="40"
            fill="#ffffff"
            opacity="0.5"
            fontSize="9"
            fontFamily="monospace"
          >
            maplecodix-app: ~/production-cluster
          </text>
          {/* Code Window */}
          <g fontFamily="monospace" fontSize="9">
            <text x="36" y="68" fill="#e24a50">
              const
            </text>
            <text x="70" y="68" fill="#ffffff">
              workflow = new WebApp()
            </text>
            <text x="36" y="86" fill="#10b981">
              ✓ API Gateway: 200 OK (12ms)
            </text>
            <text x="36" y="104" fill="#93c5fd">
              ✓ Database: PostgreSQL Pool Connected
            </text>
            <text x="36" y="122" fill="#f59e0b">
              ✓ Auth: JWT Secure Multi-Tenant
            </text>
            <text x="36" y="140" fill="#ffffff" opacity="0.8">
              &gt; Deploying cluster to production...
            </text>
          </g>
          {/* Floating Live Metric Card */}
          <rect
            x="225"
            y="110"
            width="100"
            height="55"
            rx="8"
            fill="#ffffff"
            stroke="#c91f26"
            strokeWidth="1.5"
          />
          <text
            x="235"
            y="128"
            fill="#071d35"
            fontSize="9"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            System Uptime
          </text>
          <text
            x="235"
            y="150"
            fill="#c91f26"
            fontSize="18"
            fontWeight="900"
            fontFamily="monospace"
          >
            99.98%
          </text>
        </svg>
      )

    case "mobile-applications":
    case "04":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Mobile Devices Showcase */}
          {/* Primary Phone */}
          <rect
            x="130"
            y="15"
            width="100"
            height="170"
            rx="18"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="3"
          />
          {/* Dynamic Island Notch */}
          <rect x="160" y="24" width="40" height="7" rx="3.5" fill="#071d35" />
          {/* Screen Content */}
          <rect x="142" y="42" width="76" height="24" rx="6" fill="#071d35" />
          <circle cx="154" cy="54" r="5" fill="#c91f26" />
          <rect x="164" y="51" width="44" height="6" rx="3" fill="#ffffff" />
          {/* Content Cards */}
          <rect x="142" y="74" width="76" height="34" rx="6" fill="#edf3f7" />
          <circle cx="156" cy="91" r="8" fill="#164f86" opacity="0.3" />
          <rect x="170" y="85" width="40" height="5" rx="2" fill="#071d35" />
          <rect
            x="170"
            y="93"
            width="28"
            height="4"
            rx="2"
            fill="#526273"
            opacity="0.5"
          />
          {/* Bottom Feed */}
          <rect x="142" y="115" width="76" height="34" rx="6" fill="#fbeaec" />
          <circle cx="156" cy="132" r="8" fill="#c91f26" opacity="0.3" />
          <rect x="170" y="126" width="38" height="5" rx="2" fill="#c91f26" />
          {/* Home Indicator */}
          <rect x="165" y="174" width="30" height="3" rx="1.5" fill="#071d35" />
          {/* Left Accent Badge */}
          <rect
            x="32"
            y="65"
            width="80"
            height="50"
            rx="8"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="1.5"
            className="shadow-sm"
          />
          <text x="42" y="85" fill="#071d35" fontSize="10" fontWeight="bold">
            iOS &amp; Android
          </text>
          <text
            x="42"
            y="100"
            fill="#c91f26"
            fontSize="9"
            fontWeight="extrabold"
          >
            React Native / Flutter
          </text>
          {/* Right Accent Badge */}
          <rect
            x="248"
            y="85"
            width="80"
            height="50"
            rx="8"
            fill="#071d35"
            stroke="#164f86"
            strokeWidth="1.5"
          />
          <text x="258" y="105" fill="#ffffff" fontSize="10" fontWeight="bold">
            60 FPS Fluid
          </text>
          <text
            x="258"
            y="120"
            fill="#10b981"
            fontSize="9"
            fontWeight="extrabold"
          >
            Native Touch
          </text>
        </svg>
      )

    case "seo-services":
    case "05":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* SEO Search Console & SERP Ranking */}
          <rect
            x="25"
            y="25"
            width="310"
            height="150"
            rx="12"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="2"
          />
          {/* Search Bar */}
          <rect
            x="45"
            y="42"
            width="270"
            height="28"
            rx="14"
            fill="#f7f9fb"
            stroke="#cbd5e1"
            strokeWidth="1.5"
          />
          <circle cx="62" cy="56" r="5" stroke="#c91f26" strokeWidth="2" />
          <line
            x1="66"
            y1="60"
            x2="71"
            y2="65"
            stroke="#c91f26"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <text
            x="78"
            y="60"
            fill="#071d35"
            fontSize="10"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            best high performance web agency
          </text>
          {/* Result #1 Badge */}
          <rect
            x="245"
            y="48"
            width="60"
            height="16"
            rx="8"
            fill="#10b981"
            fillOpacity="0.15"
          />
          <text x="255" y="60" fill="#10b981" fontSize="9" fontWeight="bold">
            ★ Rank #1
          </text>
          {/* Organic Climbing Graph */}
          <path
            d="M50 145 C90 135, 120 120, 160 100 C200 80, 240 85, 295 65"
            stroke="#c91f26"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          <path
            d="M50 145 C90 135, 120 120, 160 100 C200 80, 240 85, 295 65 L295 155 L50 155 Z"
            fill="#c91f26"
            fillOpacity="0.08"
          />
          <circle cx="295" cy="65" r="5" fill="#c91f26" />
          {/* Stat Pill */}
          <rect x="50" y="95" width="105" height="45" rx="8" fill="#071d35" />
          <text x="62" y="112" fill="#ffffff" opacity="0.7" fontSize="9">
            Organic Traffic
          </text>
          <text
            x="62"
            y="131"
            fill="#ffffff"
            fontSize="16"
            fontWeight="bold"
            fontFamily="monospace"
          >
            +280%
          </text>
        </svg>
      )

    case "digital-marketing":
    case "06":
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Marketing Acquisition Funnel */}
          <rect
            x="25"
            y="25"
            width="310"
            height="150"
            rx="12"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="2"
          />
          {/* Funnel Stage 1: Top of Funnel */}
          <polygon points="50,45 310,45 280,75 80,75" fill="#071d35" />
          <text x="145" y="63" fill="#ffffff" fontSize="10" fontWeight="bold">
            Impressions &amp; Reach
          </text>
          {/* Funnel Stage 2: Middle */}
          <polygon points="82,80 278,80 250,110 110,110" fill="#164f86" />
          <text x="142" y="98" fill="#ffffff" fontSize="10" fontWeight="bold">
            Engagement &amp; Clicks
          </text>
          {/* Funnel Stage 3: Conversion */}
          <polygon points="112,115 248,115 220,145 140,145" fill="#c91f26" />
          <text x="143" y="133" fill="#ffffff" fontSize="10" fontWeight="bold">
            Qualified Leads &amp; ROI
          </text>
          {/* Bottom Outcome Pill */}
          <rect x="145" y="152" width="70" height="14" rx="7" fill="#10b981" />
          <text x="153" y="162" fill="#ffffff" fontSize="8" fontWeight="bold">
            Sales Closed
          </text>
        </svg>
      )

    case "creative-copywriting":
    case "07":
    default:
      return (
        <svg
          viewBox="0 0 360 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
        >
          {/* Editorial Brand Copy Canvas */}
          <rect
            x="25"
            y="25"
            width="310"
            height="150"
            rx="12"
            fill="#ffffff"
            stroke="#071d35"
            strokeWidth="2"
          />
          {/* Quote Mark */}
          <text
            x="45"
            y="80"
            fill="#c91f26"
            fontSize="54"
            fontWeight="bold"
            fontFamily="serif"
            opacity="0.3"
          >
            “
          </text>
          <text
            x="75"
            y="65"
            fill="#071d35"
            fontSize="14"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            Words that build trust.
          </text>
          <text
            x="75"
            y="85"
            fill="#c91f26"
            fontSize="14"
            fontWeight="800"
            fontFamily="sans-serif"
          >
            Stories that earn customers.
          </text>
          <rect
            x="75"
            y="102"
            width="220"
            height="6"
            rx="3"
            fill="#526273"
            opacity="0.3"
          />
          <rect
            x="75"
            y="114"
            width="180"
            height="6"
            rx="3"
            fill="#526273"
            opacity="0.2"
          />
          {/* Tone Dial Tags */}
          <rect x="75" y="132" width="55" height="18" rx="9" fill="#edf3f7" />
          <text x="85" y="144" fill="#071d35" fontSize="8" fontWeight="bold">
            Bold Tone
          </text>
          <rect x="136" y="132" width="62" height="18" rx="9" fill="#fbeaec" />
          <text x="144" y="144" fill="#c91f26" fontSize="8" fontWeight="bold">
            SEO Copy
          </text>
          <rect x="204" y="132" width="68" height="18" rx="9" fill="#071d35" />
          <text x="212" y="144" fill="#ffffff" fontSize="8" fontWeight="bold">
            Conversion
          </text>
        </svg>
      )
  }
}

export default ServiceIllustration
