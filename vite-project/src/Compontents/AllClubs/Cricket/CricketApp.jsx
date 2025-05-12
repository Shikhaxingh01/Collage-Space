import React from 'react'
import { Navbar } from './component/Navbar'
import { HeroSection } from './component/HeroSection'
import { TeamSection } from './component/TeamSection'
import { SRMPLSection } from './component/SRMPLSection'
import { GallerySection } from './component/GallerySection'
import { ContactSection } from './component/ContactSection'
import ScrollToTop from '../ScrollToTop'

export default function CricketApp() {
  return (
    <div className="bg-[#111827] text-white min-h-screen">
      <ScrollToTop/>
      <Navbar />
      <main>
        <HeroSection />
        <TeamSection />
        <SRMPLSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  )
}
