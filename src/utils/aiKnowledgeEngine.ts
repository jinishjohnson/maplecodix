import siteData from "../data/data.json"
import { ENV } from "../config/env"

export type AIMode = "advisor" | "architect" | "growth"

export interface MessageAction {
  label: string
  actionType: "navigate" | "prompt" | "whatsapp" | "email"
  value: string
}

export interface AIResponseOutput {
  text: string
  actions?: MessageAction[]
  followUps?: string[]
}

export interface ChatMessage {
  id: string
  sender: "user" | "assistant" | "system"
  text: string
  timestamp: string
  actions?: MessageAction[]
  mode?: AIMode
}

const SYSTEM_CONTEXT = `
You are Codix AI, the official Senior AI Technology & Design Consultant for MapleCodix.
MapleCodix is a full-service digital studio specializing in:
1. Website Development: Fast, responsive websites with clean React 19, TypeScript, and Tailwind CSS v4. PageSpeed 90+ guaranteed.
2. E-Commerce Solutions: Shopify Plus, custom headless stores, Stripe API integration.
3. Web Applications & SaaS: Full-stack applications with Node.js, Python, Supabase, PostgreSQL, REST/GraphQL.
4. Mobile Applications: Cross-platform iOS and Android apps using React Native and Flutter.
5. Technical SEO: Core Web Vitals optimization, JSON-LD schema, keyword strategy (+280% organic reach).
6. Digital Marketing: Meta Ads, Google Ads, GA4, 4.2x average ROAS.
7. Creative Copywriting: Distinct brand voice and conversion-focused copy.

Pricing Packages:
- Websites:
  • Startup Website: $99 (special offer, normally $399). 3 static pages, responsive design, 1 year free hosting, 5-day delivery.
  • Standard Plan: $399 (normally $699). Up to 10 static pages, basic SEO, 5 banners, 1 year free hosting.
  • Elite Package: $999 (normally $1199). Dynamic pages (up to 10), appointment booking system, payment gateway, mobile tuning.
  • Elite Plus Marketing: $1399 (normally $1699). Full custom dynamic build, CMS, Meta Ads setup, 15 Reels promotion, Google Analytics.
- Web Applications (SaaS & Portals):
  • Web App MVP: $999 (normally $1499). React 19 / Next.js, user auth, PostgreSQL/Supabase database, CRUD dashboard.
  • Growth SaaS Platform: $1899 (normally $2499). Stripe recurring subscriptions, multi-tenancy, real-time WebSockets.
  • Business Portal Pro: $2699 (normally $3499). CRM/ERP integrations, Redis background jobs, automated PDFs.
  • Enterprise Cloud Suite: $3499 (normally $4499). AI pipelines, high-concurrency, SOC-2 security, 24/7 SLA.
- Mobile Applications (iOS & Android):
  • Mobile App MVP: $1299 (normally $1899). iOS & Android cross-platform React Native/Flutter, native device access, push notifications.
  • Pro Mobile App: $2199 (normally $2999). In-app purchases, offline sync, 60fps animations, App Store & Google Play approval.
  • Mobile + Web Suite: $2999 (normally $3999). Mobile apps + connected Web Admin Portal + real-time chat.
  • Flagship Mobile Ecosystem: $3999 (normally $5499). AI smart features, biometric security vault, 90-day SLA.
- Marketing:
  • Social Starter: $199 (normally $499). 2 channels (Meta FB & IG), 8 posts, copy & hashtags.
  • Growth Accelerator: $499 (normally $899). Multi-channel paid ads, short-form reels, audience targeting.
  • Scale Pro Marketer: $999 (normally $1499). Google + Meta ads, 8 reels, email retargeting.
  • Enterprise Brand Suite: $1699 (normally $2199). Full funnel machine, SEO, CRM integration.

Studio Contact & 24*7 Support:
- 24*7 Helpline & WhatsApp: +1 (506) 312-4135 (5063124135)
- Email: support@maplecodix.com
- Address: 20th Floor, 770 Main St, Moncton, NB E1C 1E7, Canada
- Support SLA: 24*7 around the clock, typically replies within 15 mins.
- Turnaround: 2-4 weeks for standard websites; 4-10 weeks for custom web apps/mobile platforms.
`

export async function generateAIResponse(
  userQuery: string,
  history: ChatMessage[],
  mode: AIMode = "advisor",
  apiKey?: string,
): Promise<AIResponseOutput> {
  const query = userQuery.trim().toLowerCase()

  // Check for API key in user settings or .env configuration
  const effectiveApiKey =
    apiKey && apiKey.trim().length > 10
      ? apiKey.trim()
      : (ENV.geminiApiKey || "").trim()

  // 1. If user provided a Gemini API Key or configured in .env, query Google Gemini directly over HTTPS
  if (effectiveApiKey && effectiveApiKey.length > 10) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${effectiveApiKey}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                role: "user",
                parts: [
                  {
                    text: `${SYSTEM_CONTEXT}\n\nCurrent mode: ${mode}.\nPlease answer the user query professionally, formatted with bullet points and bold headers if helpful. Keep answers concise, actionable, and friendly.\nUser Query: ${userQuery}`,
                  },
                ],
              },
            ],
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 600,
            },
          }),
        },
      )

      if (response.ok) {
        const data = await response.json()
        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text
        if (candidate) {
          return {
            text: candidate,
            actions: [
              {
                label: "📦 View Packages",
                actionType: "navigate",
                value: "/packages",
              },
              {
                label: "💬 Message on WhatsApp",
                actionType: "whatsapp",
                value: "",
              },
              {
                label: "✉️ Email Studio",
                actionType: "email",
                value: "support@maplecodix.com",
              },
            ],
            followUps: [
              "Can you give me a price breakdown?",
              "What tech stack do you recommend?",
              "How fast can we launch?",
            ],
          }
        }
      }
    } catch {
      // Fall through to local intelligent engine if fetch fails
      console.warn(
        "Gemini API call failed, falling back to local intelligence.",
      )
    }
  }

  // 2. Local Intelligent Response Engine (Instant, robust, context-aware)
  await new Promise((resolve) => setTimeout(resolve, 600 + Math.random() * 400))

  // Intent: Pricing & Packages
  if (
    query.includes("price") ||
    query.includes("cost") ||
    query.includes("package") ||
    query.includes("pricing") ||
    query.includes("how much") ||
    query.includes("quote") ||
    query.includes("fee")
  ) {
    // Specific: Mobile App Pricing
    if (query.includes("mobile") || query.includes("ios") || query.includes("android") || query.includes("flutter")) {
      return {
        text:
          `Here is our transparent Mobile Application Pricing lineup (iOS & Android):\n\n` +
          `📱 **Mobile App MVP — $1,299** (Promo, Reg. $1,899)\n` +
          `• Cross-platform iOS & Android codebase (React Native / Flutter)\n` +
          `• User auth (Apple, Google, Biometrics), Supabase cloud database, push notifications, 4-week delivery.\n\n` +
          `⚡ **Pro Mobile App — $2,199** (Reg. $2,999)\n` +
          `• In-App purchases, offline-first SQLite sync, 60fps animations, guaranteed App Store & Google Play approval.\n\n` +
          `🌐 **Mobile + Web Suite — $2,999** (Reg. $3,999)\n` +
          `• Consumer iOS/Android mobile app paired with a connected staff Web Admin Portal & real-time chat.\n\n` +
          `🏆 **Flagship Mobile Ecosystem — $3,999** (Reg. $5,499)\n` +
          `• Enterprise architecture with AI features, biometric security vault, CI/CD store pipelines, 90-day warranty.\n\n` +
          `Would you like to scope your mobile app features or book a discovery call?`,
        actions: [
          { label: "📦 View All Packages", actionType: "navigate", value: "/packages" },
          { label: "💬 Scoping on WhatsApp", actionType: "whatsapp", value: "" },
        ],
        followUps: [
          "What is included in the $1,299 Mobile MVP?",
          "Can you build for both iOS and Android?",
          "Do you handle Apple App Store submission?",
        ],
      }
    }

    // Specific: Web Application / SaaS Pricing
    if (query.includes("saas") || query.includes("web app") || query.includes("webapp") || query.includes("portal") || query.includes("custom software")) {
      return {
        text:
          `Here is our transparent Web Application & SaaS Pricing lineup:\n\n` +
          `🚀 **Web App MVP — $999** (Promo, Reg. $1,499)\n` +
          `• React 19 / Next.js frontend, PostgreSQL / Supabase architecture, user auth, core CRUD dashboard, 3-week delivery.\n\n` +
          `💼 **Growth SaaS Platform — $1,899** (Reg. $2,499)\n` +
          `• Multi-tenant architecture, Stripe recurring subscription billing, real-time WebSockets, transactional emails.\n\n` +
          `🏢 **Business Portal Pro — $2,699** (Reg. $3,499)\n` +
          `• Custom ERP/CRM integrations, automated background job queues (Redis), audit logs, automated PDF generation.\n\n` +
          `🔥 **Enterprise Cloud Suite — $3,499** (Reg. $4,499)\n` +
          `• AI pipeline integration (OpenAI/Gemini), microservices, SOC-2 security, zero-downtime CI/CD, priority 24/7 SLA.\n\n` +
          `Which architecture tier best matches your software roadmap?`,
        actions: [
          { label: "📦 View All Packages", actionType: "navigate", value: "/packages" },
          { label: "✉️ Request Technical Scope", actionType: "email", value: "support@maplecodix.com" },
        ],
        followUps: [
          "How long does the Web App MVP take?",
          "Can you integrate Stripe subscriptions?",
          "Do you provide custom SaaS architecture?",
        ],
      }
    }

    return {
      text:
        `MapleCodix offers transparent, fixed-price packages across 4 core disciplines:\n\n` +
        `🌐 **Websites (from $99):**\n` +
        `• Startup ($99) · Standard ($399) · Elite ($999) · Elite Plus Marketing ($1,399)\n\n` +
        `🚀 **Web Applications & SaaS (from $999):**\n` +
        `• Web App MVP ($999) · Growth SaaS ($1,899) · Business Portal Pro ($2,699) · Enterprise Cloud Suite ($3,499)\n\n` +
        `📱 **Mobile Applications (from $1,299):**\n` +
        `• Mobile MVP ($1,299) · Pro Mobile ($2,199) · Mobile + Web Suite ($2,999) · Flagship Ecosystem ($3,999)\n\n` +
        `📈 **Digital Marketing (from $199):**\n` +
        `• Social Starter ($199) · Growth Accelerator ($499) · Scale Pro ($999) · Enterprise Brand Suite ($1,699)\n\n` +
        `Which category would you like to explore in detail?`,
      actions: [
        {
          label: "📦 Compare All Packages",
          actionType: "navigate",
          value: "/packages",
        },
        {
          label: "💬 WhatsApp Us for a Quote",
          actionType: "whatsapp",
          value: "",
        },
      ],
      followUps: [
        "Tell me more about Web App packages",
        "Tell me more about Mobile App packages",
        "What is included in the $99 Startup plan?",
      ],
    }
  }

  // Intent: Web Apps / SaaS / Custom Software
  if (
    query.includes("saas") ||
    query.includes("web app") ||
    query.includes("webapp") ||
    query.includes("dashboard") ||
    query.includes("full stack") ||
    query.includes("custom software") ||
    query.includes("backend") ||
    query.includes("database")
  ) {
    return {
      text:
        `We engineer production-grade custom Web Applications & SaaS platforms with bulletproof scalability:\n\n` +
        `• **Frontend Engine:** React 19, TypeScript, Tailwind CSS v4, Next.js / Vite for ultra-snappy reactive interfaces.\n` +
        `• **Backend & APIs:** Node.js, Python, Fast-API / Express, REST & GraphQL pipelines.\n` +
        `• **Data Architecture:** PostgreSQL, Supabase, Redis caching, robust schema migrations.\n` +
        `• **Pricing Packages:** Web App MVP ($999), Growth SaaS ($1,899), Business Portal Pro ($2,699), Enterprise Cloud ($3,499).\n` +
        `• **Estimated Timeline:** 3 to 8 weeks across iterative agile sprints.\n\n` +
        `Would you like to review architecture recommendations for your specific idea?`,
      actions: [
        {
          label: "📦 Compare Web App Packages",
          actionType: "navigate",
          value: "/packages",
        },
        {
          label: "✉️ Request Technical Scope",
          actionType: "email",
          value: "support@maplecodix.com",
        },
      ],
      followUps: [
        "Can you integrate Stripe billing?",
        "What database do you recommend for SaaS?",
        "How do you handle user authentication?",
      ],
    }
  }

  // Intent: Friendly Greetings
  if (
    query === "hi" ||
    query === "hello" ||
    query === "hey" ||
    query.startsWith("hi ") ||
    query.startsWith("hello ") ||
    query.startsWith("hey ") ||
    query.includes("good morning") ||
    query.includes("good afternoon") ||
    query.includes("good evening")
  ) {
    return {
      text:
        `Hello! 👋 Glad to connect with you. I am **Codix AI**, MapleCodix's intelligent assistant.\n\n` +
        `Whether you're exploring a new website, looking to launch a SaaS web app, comparing our packages (from $99), or need tech advice, I'm here to help!\n\n` +
        `What can I assist you with today?`,
      actions: [
        { label: "📦 Packages & Pricing", actionType: "navigate", value: "/packages" },
        { label: "🛠️ Capabilities & Tech", actionType: "navigate", value: "/services" },
        { label: "💬 Chat on WhatsApp", actionType: "whatsapp", value: "" },
      ],
      followUps: [
        "Which package is best for my startup?",
        "How much does a custom web app cost?",
        "Can you build iOS and Android apps?",
      ],
    }
  }

  // Intent: Who are you / About MapleCodix
  if (
    query.includes("who are you") ||
    query.includes("what are you") ||
    query.includes("about maplecodix") ||
    query.includes("what is maplecodix") ||
    query.includes("what can you do")
  ) {
    return {
      text:
        `I am **Codix AI**, the virtual consultant for **MapleCodix**!\n\n` +
        `MapleCodix is a full-service digital craft studio. We bring strategy, modern design, and robust software engineering together under one roof:\n\n` +
        `• **High-speed Websites:** React 19, TypeScript, Tailwind CSS v4, achieving 90+ PageSpeed.\n` +
        `• **Full-Stack Web Apps:** Scalable SaaS platforms with Node.js, Python, PostgreSQL, and Supabase.\n` +
        `• **Mobile Ecosystems:** Fluid iOS and Android applications with React Native & Flutter.\n` +
        `• **Growth & SEO:** Proven technical optimization (+280% organic reach) and ROI-focused marketing.\n\n` +
        `How can we help accelerate your project?`,
      actions: [
        { label: "📖 About Our Studio", actionType: "navigate", value: "/about" },
        { label: "📦 View Packages", actionType: "navigate", value: "/packages" },
        { label: "✉️ Email Us Directly", actionType: "email", value: "support@maplecodix.com" },
      ],
      followUps: [
        "What packages do you offer?",
        "How do you approach website speed?",
        "Can I speak with a human on WhatsApp?",
      ],
    }
  }

  // Intent: Mobile App Development
  if (
    query.includes("mobile") ||
    query.includes("ios") ||
    query.includes("android") ||
    query.includes("mobile app") ||
    query.includes("flutter") ||
    query.includes("react native")
  ) {
    return {
      text:
        `We design and develop high-fidelity mobile applications across iOS and Android:\n\n` +
        `📱 **Tech Frameworks:** React Native and Flutter for cost-effective cross-platform parity with native 60fps fluidity.\n` +
        `✨ **Native Capabilities:** Push notifications, biometric auth (FaceID/Fingerprint), offline sync, location services, and Apple/Google Pay.\n` +
        `📦 **Transparent Pricing Packages:**\n` +
        `• **Mobile App MVP ($1,299):** Cross-platform iOS/Android app, auth, Supabase, push notifications.\n` +
        `• **Pro Mobile App ($2,199):** In-App purchases, offline sync, 60fps micro-interactions, store approval.\n` +
        `• **Mobile + Web Suite ($2,999):** Mobile apps paired with staff Web Admin Portal & real-time chat.\n` +
        `• **Flagship Ecosystem ($3,999):** AI features, biometric security, CI/CD store pipelines, 90-day SLA.\n` +
        `⏱️ **Turnaround:** 4 to 8 weeks with TestFlight staging builds.\n\n` +
        `Are you targeting both iOS and Android, or starting with one?`,
      actions: [
        {
          label: "📦 Compare Mobile Packages",
          actionType: "navigate",
          value: "/packages",
        },
        { label: "💬 Chat on WhatsApp", actionType: "whatsapp", value: "" },
      ],
      followUps: [
        "Should I choose Flutter or React Native?",
        "What is included in the $1,299 Mobile MVP?",
        "Do you handle App Store submission?",
      ],
    }
  }

  // Intent: Performance / PageSpeed / SEO
  if (
    query.includes("speed") ||
    query.includes("seo") ||
    query.includes("pagespeed") ||
    query.includes("performance") ||
    query.includes("core web vitals") ||
    query.includes("google rank")
  ) {
    return {
      text:
        `Performance is an engineering requirement at MapleCodix, not an afterthought:\n\n` +
        `⚡ **90+ PageSpeed Target:** We achieve industry-leading Core Web Vitals by avoiding bloated WordPress themes and heavy plugins. Every site is built with clean TypeScript, Vite/Next.js tree-shaking, and modern CSS.\n` +
        `🔍 **Technical SEO Built-in:** Clean semantic HTML5, JSON-LD Schema structured data, auto-generated XML sitemaps, and optimized OpenGraph cards.\n` +
        `📈 **Proven Impact:** Our clients average a **+280% increase in organic reach** and **4x faster loading speeds**, slashing bounce rates.\n\n` +
        `Would you like us to run a complimentary performance audit on your existing website?`,
      actions: [
        {
          label: "🔍 View SEO Services",
          actionType: "navigate",
          value: "/services",
        },
        {
          label: "✉️ Request Free Audit",
          actionType: "email",
          value: "support@maplecodix.com",
        },
      ],
      followUps: [
        "What is your SEO strategy for new domains?",
        "How do you optimize images and fonts?",
        "Do you provide ongoing monthly SEO?",
      ],
    }
  }

  // Intent: E-Commerce
  if (
    query.includes("ecommerce") ||
    query.includes("e-commerce") ||
    query.includes("store") ||
    query.includes("shop") ||
    query.includes("shopify") ||
    query.includes("stripe") ||
    query.includes("payment")
  ) {
    return {
      text:
        `We build conversion-obsessed e-commerce stores that turn visitors into loyal customers:\n\n` +
        `🛍️ **Platforms:** Shopify Plus, custom headless storefronts, or bespoke React checkouts.\n` +
        `💳 **Payments:** Multi-currency Stripe, PayPal, Apple Pay, Google Pay, and localized gateways.\n` +
        `🚀 **Conversion Optimization:** 1-click checkouts, abandoned cart recovery, intelligent product filtering, and instant search.\n` +
        `📊 **Inventory & CRM:** Synchronization with HubSpot, Klaviyo email marketing, and warehouse logistics.\n\n` +
        `How many products are in your catalog, and what payment gateways do you plan to accept?`,
      actions: [
        {
          label: "🛍️ E-Commerce Solutions",
          actionType: "navigate",
          value: "/services",
        },
        {
          label: "💬 Discuss Store on WhatsApp",
          actionType: "whatsapp",
          value: "",
        },
      ],
      followUps: [
        "Headless Shopify vs standard Shopify?",
        "Can you migrate my existing store?",
        "How do you optimize checkout conversion?",
      ],
    }
  }

  // Intent: Project Estimator / Scoping
  if (
    query.includes("estimate") ||
    query.includes("i want a website") ||
    query.includes("i need a") ||
    query.includes("build me") ||
    query.includes("my project")
  ) {
    return {
      text:
        `I'd love to help scope and estimate your project! Let's tailor the best approach:\n\n` +
        `📋 **Project Scoping Blueprint:**\n` +
        `1. **Type of Product:** Marketing Website, SaaS Web App, Mobile App, or E-Commerce?\n` +
        `2. **Key Capabilities:** User accounts, payment processing, booking calendar, or dynamic CMS?\n` +
        `3. **Target Launch Date:** Urgent (< 2 weeks), Standard (3-4 weeks), or Flexible?\n` +
        `4. **Budget Range:** Starter ($99-$399), Growth ($999-$1399), or Custom Enterprise?\n\n` +
        `Feel free to share details about your business and goals, and I'll recommend the ideal package and architecture right now!`,
      actions: [
        {
          label: "📦 View Website Packages",
          actionType: "navigate",
          value: "/packages",
        },
        {
          label: "💬 Quick WhatsApp Scoping",
          actionType: "whatsapp",
          value: "",
        },
      ],
      followUps: [
        "I need a 5-page business site with booking",
        "I need a SaaS dashboard with Stripe billing",
        "What is the turnaround time for a website?",
      ],
    }
  }

  // Intent: Timeline / Turnaround
  if (
    query.includes("timeline") ||
    query.includes("turnaround") ||
    query.includes("delivery") ||
    query.includes("how long") ||
    query.includes("deadline") ||
    query.includes("when will")
  ) {
    return {
      text:
        `Here is our standard project delivery timeline:\n\n` +
        `⚡ **Startup Website ($99):** Delivered in **5 business days**.\n` +
        `💻 **Bespoke Standard & Elite Sites:** Delivered in **2 to 4 weeks**.\n` +
        `🚀 **Custom SaaS Web Apps:** Delivered in **4 to 8 weeks** across sprint phases.\n` +
        `📱 **Native Mobile Apps:** Delivered in **6 to 12 weeks** including App Store review.\n\n` +
        `Every project includes transparent weekly staging demos, proactive milestone updates, and zero unexpected delays.`,
      actions: [
        {
          label: "📦 Check Packages",
          actionType: "navigate",
          value: "/packages",
        },
        {
          label: "✉️ Book a Discovery Date",
          actionType: "email",
          value: "support@maplecodix.com",
        },
      ],
      followUps: [
        "What does your development process look like?",
        "Can we fast-track an urgent launch?",
        "Do you offer maintenance after launch?",
      ],
    }
  }

  // Intent: Tech Stack
  if (
    query.includes("tech stack") ||
    query.includes("technology") ||
    query.includes("react") ||
    query.includes("typescript") ||
    query.includes("tailwind") ||
    query.includes("framework")
  ) {
    return {
      text:
        `Our core engineering stack is chosen for speed, reliability, and developer happiness:\n\n` +
        `• **Frontend:** React 19, TypeScript, Tailwind CSS v4, Next.js, Vite\n` +
        `• **Backend:** Node.js, Python, Express, FastAPI, REST & GraphQL\n` +
        `• **Databases & Cloud:** PostgreSQL, Supabase, Redis, AWS, Vercel\n` +
        `• **Mobile:** React Native, Flutter, iOS Swift, Android Kotlin\n` +
        `• **Tooling & Analytics:** Google Analytics 4, Meta Pixel, Semrush, Looker Studio\n\n` +
        `Need advice on choosing the right stack for your next software initiative?`,
      actions: [
        {
          label: "🛠️ Capabilities & Services",
          actionType: "navigate",
          value: "/services",
        },
        {
          label: "💬 Discuss Stack with Engineers",
          actionType: "whatsapp",
          value: "",
        },
      ],
      followUps: [
        "Why React 19 and Tailwind v4?",
        "Do you support Next.js SSR?",
        "Can you integrate existing REST APIs?",
      ],
    }
  }

  // Intent: Contact / Support / Hire / Start
  if (
    query.includes("contact") ||
    query.includes("support") ||
    query.includes("help") ||
    query.includes("24*7") ||
    query.includes("24/7") ||
    query.includes("address") ||
    query.includes("location") ||
    query.includes("moncton") ||
    query.includes("canada") ||
    query.includes("hire") ||
    query.includes("start") ||
    query.includes("email") ||
    query.includes("phone") ||
    query.includes("call") ||
    query.includes("whatsapp") ||
    query.includes("meeting")
  ) {
    return {
      text:
        `We provide **24*7 Support** and would love to assist you anytime!\n\n` +
        `📞 **24*7 Phone & WhatsApp Hotline:** [+1 (506) 312-4135](tel:+15063124135)\n` +
        `📬 **24*7 Dedicated Support Email:** [support@maplecodix.com](mailto:support@maplecodix.com)\n` +
        `📍 **Studio Headquarters:**\n20th Floor, 770 Main St, Moncton, NB E1C 1E7, Canada\n\n` +
        `⚡ **Response Guarantee:** 24*7 live support — average response under 15 minutes.\n\n` +
        `How would you like to connect right now?`,
      actions: [
        { label: "💬 WhatsApp (+1 506-312-4135)", actionType: "whatsapp", value: "" },
        { label: "📍 24*7 Support Page", actionType: "navigate", value: "/contact" },
        { label: "✉️ Send Email", actionType: "email", value: "support@maplecodix.com" },
        { label: "📦 Pricing Packages", actionType: "navigate", value: "/packages" },
      ],
      followUps: [
        "What is your 24*7 support response time?",
        "Can I get a project estimate?",
        "Where is your office in Moncton?",
      ],
    }
  }

  // Mode-specific fallback handling
  if (mode === "architect") {
    return {
      text:
        `As your Technical Architect at MapleCodix, I can help analyze your software requirements, microservices architecture, state management, or database design.\n\n` +
        `What technical aspect would you like to explore? (e.g. Server-Side Rendering vs SPA, API schema design, database partitioning, or frontend performance tuning)`,
      actions: [
        {
          label: "🛠️ View Full Stack Services",
          actionType: "navigate",
          value: "/services",
        },
        { label: "💬 WhatsApp Tech Lead", actionType: "whatsapp", value: "" },
      ],
      followUps: [
        "How do you structure React 19 apps?",
        "What is the best DB for high concurrency?",
        "How do you implement secure JWT auth?",
      ],
    }
  }

  if (mode === "growth") {
    return {
      text:
        `In Growth & Marketing mode, I specialize in conversion funnel optimization, SEO visibility, and paid acquisition.\n\n` +
        `• **SEO:** Audit crawl errors, JSON-LD schema, keyword intent targeting.\n` +
        `• **Paid Ads:** High-converting Meta FB/IG and Google Search ad copy & ROAS tuning.\n` +
        `• **Conversion Rate (CRO):** Landing page copy, social proof placement, and friction elimination.\n\n` +
        `What growth challenge are you working on right now?`,
      actions: [
        {
          label: "📈 Marketing Services",
          actionType: "navigate",
          value: "/services",
        },
        {
          label: "📦 Growth Packages",
          actionType: "navigate",
          value: "/packages",
        },
      ],
      followUps: [
        "How can I improve my website conversion rate?",
        "What is included in the $199 Social Starter?",
        "How do you run A/B ad creative tests?",
      ],
    }
  }

  // Default friendly advisor response
  return {
    text:
      `Hello! I'm **Codix AI**, your MapleCodix digital assistant.\n\n` +
      `I can help you with:\n` +
      `• 📦 **Website & Marketing Packages** (Starting from $99)\n` +
      `• 🛠️ **Custom Web Apps & SaaS Engineering** (React 19, TypeScript, Supabase)\n` +
      `• 📱 **Mobile App Development** (React Native & Flutter for iOS & Android)\n` +
      `• ⚡ **Speed & SEO Optimization** (90+ PageSpeed guarantee)\n` +
      `• 💡 **Instant Project Scoping & Cost Estimates**\n\n` +
      `What would you like to build or explore today?`,
    actions: [
      {
        label: "📦 View Pricing Packages",
        actionType: "navigate",
        value: "/packages",
      },
      {
        label: "🛠️ Explore Services",
        actionType: "navigate",
        value: "/services",
      },
      { label: "💬 Chat on WhatsApp", actionType: "whatsapp", value: "" },
    ],
    followUps: [
      "Which package is best for my startup?",
      "Estimate my web application project",
      "How fast can you build my website?",
      "What is your tech stack?",
    ],
  }
}
