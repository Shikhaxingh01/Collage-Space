import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  Github,
} from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#0e1525] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-1 md:col-span-2">
              <motion.div
                className="flex items-center mb-4"
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
              >
                <div className="w-10 h-10 rounded-full bg-[#FFD60A] flex items-center justify-center mr-3">
                  <span className="text-[#111827] font-bold text-lg">G</span>
                </div>
                <h3 className="text-2xl font-bold">
                  Grobotics
                </h3>
              </motion.div>
              <motion.p
                className="text-gray-400 mb-6 "
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.1,
                }}
              >
                Where innovation meets automation, and machines come to life.
                Join our community of 112 passionate robotics and automation
                enthusiasts.
              </motion.p>
              <motion.div
                className="flex space-x-4"
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                }}
              >
                {[
                  <Instagram size={20} />,
                  <Twitter size={20} />,
                  <Youtube size={20} />,
                  <Github size={20} />,
                ].map((icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-[#1F2937] flex items-center justify-center text-gray-300 hover:bg-[#FFD60A] hover:text-[#111827] transition-all"
                    whileHover={{
                      y: -3,
                    }}
                  >
                    {icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>
            <motion.div
              className="space-y-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
            >
              <h4 className="text-lg font-bold mb-4">
                Quick Links
              </h4>
              {["About Us", "Events", "Projects", "Join", "Blog"].map(
                (item, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block text-gray-400 hover:text-[#FFD60A] transition-colors "
                  >
                    {item}
                  </a>
                ),
              )}
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <h4 className="text-lg font-bold mb-4">
                Contact Us
              </h4>
              <div className="flex items-start space-x-3 text-gray-400 ">
                <MapPin className="w-5 h-5 text-[#FFD60A] mt-0.5" />
                <span>123 Tech Avenue, Innovation District, CA 94103</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 ">
                <Mail className="w-5 h-5 text-[#FFD60A]" />
                <span>info@grobotics.tech</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400 ">
                <Phone className="w-5 h-5 text-[#FFD60A]" />
                <span>(123) 456-7890</span>
              </div>
            </motion.div>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-500  text-sm">
            <p>© 2023 Grobotics. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
