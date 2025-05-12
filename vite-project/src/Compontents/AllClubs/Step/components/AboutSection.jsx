import React from 'react'
import Button from './Button'
import { Music2Icon, UsersIcon, TrophyIcon } from 'lucide-react'
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-white">Where Rhythm Meets </span>
              <span className="text-[#FACC15]">Excellence</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Step Cell is more than just a dance club - it's a community of
              passionate dancers who push the boundaries of artistic expression.
              Founded in 2015, we've grown into one of the most dynamic dance
              communities in the college circuit.
            </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Button size="lg">Join Viva Cell</Button>
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </div>
                

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <Music2Icon className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1">15+</h3>
                <p className="text-gray-400 text-sm">Dance Styles</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <UsersIcon className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1">100+</h3>
                <p className="text-gray-400 text-sm">Active Members</p>
              </div>
              <div className="bg-[#1a1a1a] p-4 rounded-lg border border-gray-800">
                <TrophyIcon className="text-[#FACC15] mb-2" size={24} />
                <h3 className="font-bold mb-1">25+</h3>
                <p className="text-gray-400 text-sm">Competition Wins</p>
              </div>
            </div>
            <ul className="space-y-3">
              {[
                'Professional choreographers and instructors',
                'State-of-the-art dance studio facilities',
                'Regular workshops and masterclasses',
                'Opportunities to perform at major events',
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
                src="https://images.unsplash.com/photo-1547153760-18fc86324498?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                alt="Dance performance"
                className="rounded-lg shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-[#1a1a1a] p-6 rounded-lg border border-gray-800 shadow-xl">
                <p className="text-[#FACC15] font-bold">
                  Join Our Next Workshop
                </p>
                <p className="text-gray-400 text-sm">Every Saturday at 4 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection
