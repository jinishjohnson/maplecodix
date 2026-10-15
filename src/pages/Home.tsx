import SiteHeader from "../components/SiteHeader"
import HeroSection from "../components/HeroSection"
import TickerSection from "../components/TickerSection"
import ServicesSection, { services } from "../components/ServicesSection"
import { BrandCalibrationSection } from "../components/BrandCalibrationSection"
import AboutSection from "../components/AboutSection"
import ProcessSection, {
  processSteps as process,
} from "../components/ProcessSection"
import CtaSection from "../components/CtaSection"
import SiteFooter from "../components/SiteFooter"
import Icon from "../components/Icon"
import Logo from "../components/Logo"
import SEO from "../components/SEO"
import siteData from "../data/data.json"

// Re-export shared components and data for backwards-compatibility
export { Icon, Logo, services, process, SiteHeader }

function Home() {
  const seo = siteData.seo.home

  return (
    <div
      id="top"
      className="min-h-screen overflow-hidden bg-[#f7f9fb] text-[#071d35]"
    >
      <SEO
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        canonicalPath={seo.canonicalPath}
      />

      <SiteHeader />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Marquee Ticker */}
        <TickerSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Brand Calibration & Digital Solutions Section */}
        <BrandCalibrationSection />

        {/* About Section */}
        <AboutSection />

        {/* Process / Approach Section */}
        <ProcessSection />

        {/* CTA Section */}
        <CtaSection />
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}

export default Home
