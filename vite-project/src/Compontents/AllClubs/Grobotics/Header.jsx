import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft,Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom"
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#111827]/90 backdrop-blur-md py-2 shadow-lg" : "bg-transparent py-4"}`}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          whileHover={{
            scale: 1.05,
          }}
        >
          <div className="w-10 h-10 rounded-full bg-[#FFD60A] flex items-center justify-center mr-2">
            <span className="text-[#111827] font-bold text-lg">G</span>
          </div>
          <h1 className="text-xl font-bold ">Grobotics</h1>

         
        </motion.div>

        <motion.div>
            <NavLink to="/clubs">
          <button className="text-white inline-flex items-center space-x-2 hover:text-yellow-300 transition-colors duration-300 ">
            <ChevronLeft className="w-5 h-5" />
            <span>Back to Dashboard</span>
          </button> 

          </ NavLink>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {["About", "Events", "Activities", "Join"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white hover:text-[#FFD60A] transition-colors text-sm"
              whileHover={{
                scale: 1.1,
                textShadow: "0 0 8px rgba(255, 214, 10, 0.8)",
              }}
            >
              {item}
            </motion.a>
          ))}
          <motion.button
            className="bg-[#FFD60A] text-[#111827] px-6 py-2 rounded-full  font-medium text-sm hover:shadow-[0_0_15px_rgba(255,214,10,0.5)] transition-all"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
          >
            Join Now
          </motion.button>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-[#1F2937] absolute top-full left-0 right-0 p-4"
          initial={{
            opacity: 0,
            height: 0,
          }}
          animate={{
            opacity: 1,
            height: "auto",
          }}
          exit={{
            opacity: 0,
            height: 0,
          }}
          transition={{
            duration: 0.3,
          }}
        >
            
          <div className="flex flex-col space-y-4">
            {["About", "Events", "Activities", "Join"].map((item) => (
              <NavLink
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-[#FFD60A] transition-colors  text-sm py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </NavLink>
            ))}
            <button
              className="bg-[#FFD60A] text-[#111827] px-6 py-2 rounded-full  font-medium text-sm hover:shadow-[0_0_15px_rgba(255,214,10,0.5)] transition-all"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join Now
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
export default Header;
