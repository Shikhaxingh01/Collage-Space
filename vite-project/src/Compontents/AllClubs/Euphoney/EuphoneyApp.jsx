import React from "react";
import { ChevronLeft, Facebook, Twitter, Instagram } from "lucide-react";
import { Hero } from "./Hero";
import { About } from "./About";
import { Activities } from "./Activities";
import { CTA } from "./CTA";
import { NavLink } from "react-router-dom";
import ScrollToTop from "../ScrollToTop";

export default function EuphoneyApp() {
  return (
    <main className="w-full min-h-screen bg-gray-900">
      <ScrollToTop></ScrollToTop>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <NavLink to="/clubs">
          <button className="text-white inline-flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300 ">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button>
          </NavLink>
          <div className="flex items-center space-x-4">
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>
      <Hero />
      <About />
      <Activities />
      <CTA />
    </main>
  );
}
