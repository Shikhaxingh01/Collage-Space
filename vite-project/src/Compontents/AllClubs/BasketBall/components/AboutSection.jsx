import React from 'react'
import { Trophy, Users, Target, Medal } from 'lucide-react'
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Building </span>
              <span className="text-[#FACC15]">Champions</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Since 2010, our basketball club has been developing elite players
              and fostering a culture of excellence. From beginners to advanced
              players, we provide comprehensive training and competitive
              opportunities for all skill levels.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <Trophy className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1 text-2xl">15+</h3>
                <p className="text-gray-400 text-sm">Tournament Victories</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <Users className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1 text-2xl">4</h3>
                <p className="text-gray-400 text-sm">Professional Teams</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <Target className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1 text-2xl">50+</h3>
                <p className="text-gray-400 text-sm">Expert Coaches</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <Medal className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1 text-2xl">1000+</h3>
                <p className="text-gray-400 text-sm">Alumni Players</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'State-of-the-art training facilities',
                'Professional coaching staff',
                'Regular tournaments and competitions',
                'Youth development programs',
              ].map((item, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="h-2 w-2 bg-[#FACC15] rounded-full mr-3"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-[#FACC15] rounded-full absolute -top-4 -left-4 blur-3xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Basketball team practice"
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl">
                <p className="text-[#FACC15] font-bold">Training Sessions</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 4 PM - 8 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
