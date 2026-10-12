import { useEffect } from "react"
import { createBrowserRouter, Outlet, useLocation } from "react-router"
import Home from "../pages/Home"
import {
  AboutPage,
  CareersPage,
  NotFoundPage,
  PackagesPage,
  ServicesPage,
} from "../pages/InnerPages"

import ScrollProgress from "../components/ScrollProgress"
import ScrollToTop from "../components/ScrollToTop"

function RootLayout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" })
  }, [pathname])

  return (
    <>
      <ScrollProgress />
      <Outlet />
      <ScrollToTop />
    </>
  )
}

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/services", Component: ServicesPage },
      { path: "/packages", Component: PackagesPage },
      { path: "/about", Component: AboutPage },
      { path: "/careers", Component: CareersPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
