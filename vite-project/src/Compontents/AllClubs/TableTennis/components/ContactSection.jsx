import React from 'react'
import {
  InstagramIcon,
  TwitterIcon,
  FacebookIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from 'lucide-react'
export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-[#0F1623]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Get in touch with us for inquiries, collaborations, or to join our
            club
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-[#1F2937] rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <MailIcon className="h-5 w-5 text-[#FACC15] mr-3" />
                  <span>contact@srmcemcricket.com</span>
                </div>
                <div className="flex items-center">
                  <PhoneIcon className="h-5 w-5 text-[#FACC15] mr-3" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-5 w-5 text-[#FACC15] mr-3" />
                  <span>SRMCEM Campus, Lucknow, UP, India</span>
                </div>
              </div>
              <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-[#111827] hover:bg-[#FACC15] hover:text-[#111827] transition-colors duration-300 p-3 rounded-full"
                >
                  <InstagramIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-[#111827] hover:bg-[#FACC15] hover:text-[#111827] transition-colors duration-300 p-3 rounded-full"
                >
                  <TwitterIcon className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="bg-[#111827] hover:bg-[#FACC15] hover:text-[#111827] transition-colors duration-300 p-3 rounded-full"
                >
                  <FacebookIcon className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-[#1F2937] rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form>
                <div className="mb-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-[#111827] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#FACC15]"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-[#111827] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#FACC15]"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-[#111827] border border-gray-700 rounded px-4 py-2 focus:outline-none focus:border-[#FACC15]"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-[#FACC15] text-[#111827] font-bold py-2 px-6 rounded hover:bg-opacity-90 transition-colors duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <footer className="mt-16 text-center text-[#9CA3AF]">
            <p>
              © {new Date().getFullYear()} SRMCEM Cricket Club. All rights
              reserved.
            </p>
          </footer>
        </div>
      </div>
    </section>
  )
}
