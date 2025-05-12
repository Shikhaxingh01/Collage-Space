import React from 'react'
import Header from './component/Header'
import HeroSection from './component/HeroSection'
import FeaturesSection from './component/FeaturesSection'
import ClubFeatureSection from './component/ClubFeatureSection'
import GallerySection from './component/GallerySection'
import Footer from './component/Footer'
import ScrollToTop from '../ScrollToTop'

export default function ViviApp() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ClubFeatureSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
