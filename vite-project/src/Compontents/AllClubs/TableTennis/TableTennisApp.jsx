import React from 'react'
import { Navbar } from './components/Navbar'
import { HeroSection } from './components/HeroSection'
import { PlayersSection } from './components/PlayersSection'
import { CompetitionsSection } from './components/CompetitionsSection'
import { TrainingSection } from './components/TrainingSection'
import { GallerySection } from './components/GallerySection'
import { ContactSection } from './components/ContactSection'
import ScrollToTop from '../ScrollToTop'
export default function TableTennisApp() {
  return (
    <div className="bg-[#111827] text-white min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Navbar />
      <main>
        <HeroSection />
        <PlayersSection />
        <CompetitionsSection />
        <TrainingSection />
        <GallerySection />
        <ContactSection />
      </main>
    </div>
  )
}
