import React, { useState } from "react";
import { Menu, X ,ChevronLeft } from "lucide-react";
import { NavLink } from "react-router-dom";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-[#111827] border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="h-8 w-8 text-[#FFD60A]" />
            <span className="ml-2 text-xl font-bold text-white font-[Poppins]">
              Decoder
            </span>
          </div>

          <NavLink to="/clubs">
          <button className="text-white inline-flex items-center space-x-2 pt-5 hover:text-yellow-300 transition-colors duration-300 ">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button> 

          </ NavLink>
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              href="#"
              className="text-gray-300 hover:text-[#FFD60A] transition-colors font-[Inter]"
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              className="text-gray-300 hover:text-[#FFD60A] transition-colors font-[Inter]"
            >
              About
            </NavLink>
            <NavLink
              href="#"
              className="text-gray-300 hover:text-[#FFD60A] transition-colors font-[Inter]"
            >
              Events
            </NavLink>
            <NavLink
              href="resources"
              className="text-gray-300 hover:text-[#FFD60A] transition-colors font-[Inter]"
            >
              Resources
            </NavLink>
            <NavLink
              href="#contact"
              className="text-gray-300 hover:text-[#FFD60A] transition-colors font-[Inter]"
            >
              Contact
            </NavLink>
            <button className="bg-[#FFD60A] hover:bg-yellow-400 text-[#111827] px-4 py-2 rounded-md font-medium transition-colors font-[Montserrat]">
              Join Now
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#1F2937] border-t border-gray-800">
            <NavLink
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md font-[Inter]"
            >
              Home
            </NavLink>
            <NavLink
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md font-[Inter]"
            >
              About
            </NavLink>
            <NavLink
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md font-[Inter]"
            >
              Events
            </NavLink>
            <NavLink
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md font-[Inter]"
            >
              Resources
            </NavLink>
            <NavLink
              href="#"
              className="block px-3 py-2 text-base font-medium text-white hover:bg-gray-700 rounded-md font-[Inter]"
            >
              Contact
            </NavLink>
            <button className="w-full text-center mt-3 bg-[#FFD60A] hover:bg-yellow-400 text-[#111827] px-4 py-2 rounded-md font-medium transition-colors font-[Montserrat]">
              Join Now
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
