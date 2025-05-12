import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#111827] shadow-lg' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-[#FACC15]">
           Chess Club
          </h1>
        </div>
        <nav className="hidden md:flex space-x-8">
          {[
            'Home',
            'Players',
            'Competitions',
            'Training',
            'Gallery',
            'Contact',
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-[#FACC15] transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#1F2937] py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            {[
              'Home',
              'Players',
              'Competitions',
              'Training',
              'Gallery',
              'Contact',
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#FACC15] transition-colors duration-200 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
