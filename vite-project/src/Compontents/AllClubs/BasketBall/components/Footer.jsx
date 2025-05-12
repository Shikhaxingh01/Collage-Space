import React from 'react'
import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from 'lucide-react'
const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FACC15]">Viva Cell</h3>
            <p className="text-gray-400 mb-6">
              Empowering individuals to master the art of public speaking and
              anchoring through expert training and supportive community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
              >
                <FacebookIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
              >
                <TwitterIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#FACC15] transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-400 hover:text-[#FACC15] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-[#FACC15] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#clubs"
                  className="text-gray-400 hover:text-[#FACC15] transition-colors"
                >
                  Clubs
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-400 hover:text-[#FACC15] transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#dashboard"
                  className="text-gray-400 hover:text-[#FACC15] transition-colors"
                >
                  Back to Dashboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MailIcon
                  size={20}
                  className="text-[#FACC15] mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">contact@vivacell.com</span>
              </li>
              <li className="flex items-start">
                <PhoneIcon
                  size={20}
                  className="text-[#FACC15] mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon
                  size={20}
                  className="text-[#FACC15] mr-2 mt-1 flex-shrink-0"
                />
                <span className="text-gray-400">
                  123 University Avenue, Campus Building, Room 456
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Meeting Schedule</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="text-[#FACC15]">Monday:</span> 5:00 PM - 7:00
                PM
              </li>
              <li className="text-gray-400">
                <span className="text-[#FACC15]">Wednesday:</span> 4:30 PM -
                6:30 PM
              </li>
              <li className="text-gray-400">
                <span className="text-[#FACC15]">Saturday:</span> 10:00 AM -
                12:00 PM
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Viva Cell. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-500 hover:text-[#FACC15] text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#FACC15] text-sm transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#FACC15] text-sm transition-colors"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
