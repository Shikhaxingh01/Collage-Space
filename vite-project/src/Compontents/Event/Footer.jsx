import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import logo from '/logo.png';

const Footer = () => {
  return (
    <div className="bg-gray-900 text-gray-400">
      <div className="max-w-screen-lg px-4 sm:px-6 md:grid md:grid-cols-4 sm:grid-cols-2 mx-auto py-10">
        {/* Company Logo */}
        <div className="p-5 flex items-center">
          {/* <img 
            src={logo} 
            alt="Company Logo" 
            className="w-16 h-auto rounded-lg"
          /> */}
        </div>

        {/* Resources Section */}
        <div className="p-5">
          <h3 className="text-sm uppercase text-indigo-500 font-bold mb-3">Resources</h3>
          <a className="my-2 block hover:text-white transition duration-300" href="/#">Documentation</a>
          <a className="my-2 block hover:text-white transition duration-300" href="/#">Tutorials</a>
          <a className="my-2 block hover:text-white transition duration-300" href="/#">
            Support <span className="text-teal-400 text-xs p-1">New</span>
          </a>
        </div>

       

        {/* Contact Section */}
        <div className="p-5">
          <h3 className="text-sm uppercase text-indigo-500 font-bold mb-3">Contact Us</h3>
          <p className="my-2">XXX XXXX, Floor 4, San Francisco, CA</p>
          <p className="my-2">contact@company.com</p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="border-t border-gray-700 py-4">
        <div className="flex justify-center space-x-6">
          {/* Twitter */}
          <a href="/#" className="text-gray-500 hover:text-teal-400 transition-transform transform hover:scale-125 text-xl">
            <FaTwitter />
          </a>
          {/* Facebook */}
          <a href="/#" className="text-gray-500 hover:text-teal-400 transition-transform transform hover:scale-125 text-xl">
            <FaFacebookF />
          </a>
          {/* Instagram */}
          <a href="/#" className="text-gray-500 hover:text-teal-400 transition-transform transform hover:scale-125 text-xl">
            <FaInstagram />
          </a>
          {/* LinkedIn */}
          <a href="/#" className="text-gray-500 hover:text-teal-400 transition-transform transform hover:scale-125 text-xl">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm py-5 border-t border-gray-700">
        © {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
