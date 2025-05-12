import React from 'react'
import Button from './Button'
import { Trophy, Users, Calendar } from 'lucide-react'
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#1a1a1a] z-0"></div>
      {/* Dynamic background image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2090&q=80')] bg-fixed bg-cover opacity-20 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Where Champions </span>
                <span className="text-[#FACC15]">Are Made</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
                Join our elite basketball program and be part of a winning
                tradition. Train, compete, and excel with the best.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Join The Team</Button>
                <Button variant="secondary" size="lg">
                  View Schedule
                </Button>
              </div>
              <div className="mt-12 flex flex-wrap gap-6">
                <div className="flex items-center">
                  <div className="bg-[#FACC15]/20 p-2 rounded-full mr-3">
                    <Trophy size={20} className="text-[#FACC15]" />
                  </div>
                  <div>
                    <span className="block text-white font-bold">15+</span>
                    <span className="text-gray-400 text-sm">Championships</span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FACC15]/20 p-2 rounded-full mr-3">
                    <Users size={20} className="text-[#FACC15]" />
                  </div>
                  <div>
                    <span className="block text-white font-bold">200+</span>
                    <span className="text-gray-400 text-sm">
                      Active Players
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FACC15]/20 p-2 rounded-full mr-3">
                    <Calendar size={20} className="text-[#FACC15]" />
                  </div>
                  <div>
                    <span className="block text-white font-bold">30+</span>
                    <span className="text-gray-400 text-sm">Events/Year</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#FACC15] rounded-full absolute -top-4 -left-4 blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Basketball player dunking"
                className="rounded-lg shadow-2xl relative z-10 max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl">
                <p className="text-[#FACC15] font-bold">Next Tournament</p>
                <p className="text-gray-400 text-sm">
                  March 15th - State Championships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
