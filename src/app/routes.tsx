import { useEffect } from "react"
import { createBrowserRouter, Outlet, useLocation } from "react-router"
import Home from "../pages/Home"
import Services from "../pages/Services"
import Packages from "../pages/Packages"
import About from "../pages/About"
import Careers from "../pages/Careers"
import NotFound from "../pages/NotFound"
import ScrollProgress from "../components/ScrollProgress"
import ScrollToTop from "../components/ScrollToTop"
import WhatsAppButton from "../components/WhatsAppButton"
import AIChatBot from "../components/AIChatBot"

function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return (
    <>
      <ScrollProgress />
      <Outlet />
      <AIChatBot />
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
      { path: "*", Component: NotFound },
    ],
  },
])

export default router
