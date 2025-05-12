import React from 'react'
import Button from './Button'
const competitions = [
  {
    name: 'IIIT Dance Fest',
    description:
      "First place in group choreography at IIIT's annual cultural fest.",
    image:
      'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    position: '1st Place',
    year: '2023',
  },
  {
    name: 'NIT Dance Battle',
    description:
      "Winners of the freestyle battle competition at NIT's cultural event.",
    image:
      'https://images.unsplash.com/photo-1516567727245-ad8c68f3ec93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    position: 'Winners',
    year: '2023',
  },
  {
    name: 'Lucknow Dance Championship',
    description: 'Second place in contemporary dance category at state level.',
    image:
      'https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80',
    position: '2nd Place',
    year: '2023',
  },
]
const IntercollegeSection = () => {
  return (
    <section id="competitions" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Competition </span>
            <span className="text-[#FACC15]">Achievements</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dancers have represented Step Cell at various prestigious
            competitions across the country.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {competitions.map((competition, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={competition.image}
                  alt={competition.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-white">
                    {competition.name}
                  </h3>
                  <span className="bg-[#FACC15]/20 text-[#FACC15] text-sm px-2 py-1 rounded">
                    {competition.position}
                  </span>
                </div>
                <p className="text-gray-400 mb-4">{competition.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">{competition.year}</span>
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button>View All Achievements</Button>
        </div>
      </div>
    </section>
  )
}
export default IntercollegeSection
