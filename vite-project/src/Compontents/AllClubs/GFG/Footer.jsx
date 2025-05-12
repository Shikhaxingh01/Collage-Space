import React from "react";
import { Code, Github, Twitter, Linkedin, Mail } from "lucide-react";
export function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-[#FFD60A]" />
              <span className="ml-2 text-xl font-bold text-white ">
                GFG
              </span>
            </div>
            <p className="mt-4 text-gray-400 max-w-md">
              A community for programmers, developers, and tech enthusiasts to
              learn, share, and grow together.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 ">
                Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Resources
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 ">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Tutorials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-[#FFD60A] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="text-lg font-semibold text-white mb-4 ">
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
                <button className="bg-[#1F2937] hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm flex items-center">
                  <Mail size={16} className="mr-2" />
                  Subscribe to Newsletter
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2023 GFG. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm mr-4"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm mr-4"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD60A] text-sm"
            >
              Code of Conduct
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
