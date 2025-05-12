import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon, ChevronLeftIcon } from 'lucide-react'
import Button from './Button'
import { NavLink } from 'react-router-dom'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-[#121212]/95 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-[#FACC15]">VIVA CELL</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-white hover:text-[#FACC15] transition-colors"
          >
            Home
          </a>
          <a
            href="#features"
            className="text-white hover:text-[#FACC15] transition-colors"
          >
            Features
          </a>
          <a
            href="#clubs"
            className="text-white hover:text-[#FACC15] transition-colors"
          >
            Clubs
          </a>
          <a
            href="#gallery"
            className="text-white hover:text-[#FACC15] transition-colors"
          >
            Gallery
          </a>
          <NavLink
            to="/clubs"
           href="#dashboard"
            className="flex items-center text-white hover:text-[#FACC15] transition-colors"
          >
            <ChevronLeftIcon size={18} className="mr-1" />
            Back to Dashboard
          </NavLink>
          <Button>Join Club</Button>
        </nav>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1a1a1a] absolute top-full left-0 w-full shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#home"
              className="text-white hover:text-[#FACC15] py-2 transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-white hover:text-[#FACC15] py-2 transition-colors"
            >
              Features
            </a>
            <a
              href="#clubs"
              className="text-white hover:text-[#FACC15] py-2 transition-colors"
            >
              Clubs
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-[#FACC15] py-2 transition-colors"
            >
              Gallery
            </a>
            <NavLink
            to="/clubs"
             
              className="flex items-center text-white hover:text-[#FACC15] py-2 transition-colors"
            >
              <ChevronLeftIcon size={18} className="mr-1" />
              Back to Dashboard
            </NavLink>
            <Button fullWidth>Join Club</Button>
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
