import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ActivitiesSection from './components/ActivitiesSection'
import IntercollegeSection from './components/IntercollegeSection'
import GallerySection from './components/GallerySection'
import Footer from './components/Footer'
import ScrollToTop from '../ScrollToTop'

export default function BasketBallApp() {
  return (
    <div className="bg-[#121212] text-white min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ActivitiesSection />
        <IntercollegeSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  )
}
