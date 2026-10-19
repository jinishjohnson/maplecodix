import { useEffect, lazy, Suspense } from "react"
import { createBrowserRouter, Outlet, useLocation } from "react-router"
import Home from "../pages/Home"
import ScrollProgress from "../components/ScrollProgress"
import ScrollToTop from "../components/ScrollToTop"
import WhatsAppButton from "../components/WhatsAppButton"

// Modern Dynamic Code-Splitting: Lazy load secondary routes & heavy widgets
const Services = lazy(() => import("../pages/Services"))
const Packages = lazy(() => import("../pages/Packages"))
const About = lazy(() => import("../pages/About"))
const Careers = lazy(() => import("../pages/Careers"))
const Contact = lazy(() => import("../pages/Contact"))
const NotFound = lazy(() => import("../pages/NotFound"))
const AIChatBot = lazy(() => import("../components/AIChatBot"))

// Minimalist, high-performance loading fallback (no layout shifts)
function PageFallbackLoader() {
  return (
    <div
      aria-label="Loading page content"
      className="flex min-h-[60vh] w-full items-center justify-center py-20"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="size-8 animate-spin rounded-full border-2 border-slate-200 border-t-[#c91f26]" />
        <span className="font-mono text-xs font-semibold tracking-wider text-[#86868b]">
          MapleCodix Studio
        </span>
      </div>
    </div>
  )
}

function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return (
    <>
      <ScrollProgress />
      <Suspense fallback={<PageFallbackLoader />}>
        <Outlet />
      </Suspense>
      <Suspense fallback={null}>
        <AIChatBot />
      </Suspense>
      <WhatsAppButton />
      <ScrollToTop />
    </>
  )
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/services", Component: Services },
      { path: "/packages", Component: Packages },
      { path: "/about", Component: About },
      { path: "/careers", Component: Careers },
      { path: "/contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
])

export default router
