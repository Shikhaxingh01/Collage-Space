import React from 'react'
import { TrophyIcon, CalendarIcon, StarIcon } from 'lucide-react'
export const CompetitionsSection = () => {
  const competitions = [
    {
      icon: <TrophyIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Zonal Championships',
      description:
        'Compete at the highest level in university zonal tournaments.',
    },
    {
      icon: <CalendarIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Regular Tournaments',
      description:
        'Monthly internal competitions to keep skills sharp and competitive.',
    },
    {
      icon: <StarIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Inter-College Events',
      description:
        'Represent the club in prestigious inter-college championships.',
    },
  ]
  return (
    <section id="competitions" className="py-20 bg-[#0F1623]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competitions</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Showcasing excellence through competitive events and tournaments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {competitions.map((comp, index) => (
            <div
              key={index}
              className="bg-[#1F2937] p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{comp.icon}</div>
              <h3 className="text-xl font-bold mb-4">{comp.title}</h3>
              <p className="text-[#9CA3AF]">{comp.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#1F2937] rounded-lg p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">Championship Success</h3>
              <p className="text-[#9CA3AF] mb-6">
                Our players consistently excel in competitions, bringing home
                trophies and medals from various tournaments. Join us to be part
                of this winning legacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    20+
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Medals</span>
                </div>
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    8
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Tournaments</span>
                </div>
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    3
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Zonal Titles</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1611251135345-18c56206b863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="Table Tennis Tournament"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
