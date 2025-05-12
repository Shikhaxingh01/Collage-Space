import React from 'react'
import Button from './Button'
import { MicIcon, UsersIcon } from 'lucide-react'
const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212] to-[#1a1a1a] z-0"></div>
      {/* Animated background dots */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519750783826-e2420f4d687f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80')] bg-fixed bg-cover opacity-10 z-0"></div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-10 md:mb-0">
            <div className="animate-fadeIn">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-white">Speak with </span>
                <span className="text-[#FACC15]">Confidence</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-lg">
                Viva Cell is your gateway to mastering the art of public
                speaking and anchoring.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Join Viva Cell</Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
              <div className="mt-12 flex items-center space-x-6">
                <div className="flex items-center">
                  <div className="bg-[#FACC15]/20 p-2 rounded-full mr-3">
                    <MicIcon size={20} className="text-[#FACC15]" />
                  </div>
                  <span className="text-gray-300">Expert Training</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-[#FACC15]/20 p-2 rounded-full mr-3">
                    <UsersIcon size={20} className="text-[#FACC15]" />
                  </div>
                  <span className="text-gray-300">Supportive Community</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#FACC15] rounded-full absolute -top-4 -left-4 blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Public speaker on stage"
                className="rounded-lg shadow-2xl relative z-10 max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default HeroSection
