import React from "react";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 text-[#FFD60A]" />
              <span className="ml-2 text-xl font-bold text-white font-[Poppins]">
                Decoder
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md font-[Inter]">
              A community for problem solvers, analytical thinkers, and puzzle
              enthusiasts to learn, challenge themselves, and grow together.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">
                Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors font-[Inter]"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 font-[Poppins]">
                Connect
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <div className="mt-4">
                <button className="bg-[#1F2937] hover:bg-gray-700 text-white px-4 py-2 rounded-md font-[Inter] text-sm flex items-center">
                  <Mail size={16} className="mr-2" />
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-[Inter]">
            © 2023 GFG. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm mr-4 font-[Inter]"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm mr-4 font-[Inter]"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm font-[Inter]"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
