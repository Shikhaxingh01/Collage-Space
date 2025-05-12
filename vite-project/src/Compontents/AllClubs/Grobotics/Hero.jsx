import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#111827] flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background grid pattern */}
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10">
        {Array(144)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="border-[0.5px] border-gray-700"></div>
          ))}
      </div>
      {/* Animated glowing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-[#FFD60A]/10 filter blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/3 w-60 h-60 rounded-full bg-blue-500/10 filter blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          <div className="inline-block mb-4">
            <motion.div
              className="px-4 py-1 bg-[#1F2937] rounded-full border border-gray-700 flex items-center"
              whileHover={{
                scale: 1.05,
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD60A] mr-2 animate-pulse"></span>
              <span className="text-sm  text-gray-300">
                112 passionate members
              </span>
            </motion.div>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold mb-4  leading-tight">
            <motion.span
              className="inline-block"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.8,
              }}
            >
              🤖 Grobotics
            </motion.span>
            <br />
            <motion.span
              className="inline-block text-xl md:text-3xl text-gray-400 font-normal mt-2"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
            >
              Robotics & Automation Enthusiast Club
            </motion.span>
          </h1>
          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 "
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.6,
              duration: 0.8,
            }}
          >
            "Where innovation meets automation, and machines come to life."
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.8,
            }}
          >
            <motion.button
              className="bg-[#FFD60A] text-[#111827] px-8 py-3 rounded-full font-medium text-lg flex items-center gap-2 hover:shadow-[0_0_20px_rgba(255,214,10,0.5)] transition-all"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Join Now <ChevronDown className="w-5 h-5" />
            </motion.button>
            <motion.button
              className="bg-transparent text-white border border-gray-600 px-8 py-3 rounded-full font-['Montserrat'] font-medium hover:border-[#FFD60A] hover:text-[#FFD60A] transition-all"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              Explore Events
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
      >
        <ChevronDown className="text-gray-400 w-8 h-8" />
      </motion.div>
    </section>
  );
};
export default Hero;
