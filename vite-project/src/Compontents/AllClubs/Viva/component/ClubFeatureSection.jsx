import React from 'react'
import Button from './Button'
const clubs = [
  {
    name: 'Debate Club',
    description:
      'Sharpen your argumentative skills and learn to present compelling viewpoints.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    members: 32,
    events: 12,
  },
  {
    name: 'Toastmasters',
    description:
      'Practice prepared and impromptu speeches in a supportive environment.',
    image:
      'https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    members: 45,
    events: 24,
  },
  {
    name: 'Radio Club',
    description:
      'Learn voice modulation and radio presenting techniques from professionals.',
    image:
      'https://images.unsplash.com/photo-1593697821252-0c9137d9fc45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    members: 28,
    events: 8,
  },
]
const ClubFeatureSection = () => {
  return (
    <section id="clubs" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-[#FACC15]">Clubs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore our partner clubs and expand your communication skills
            through diverse speaking environments.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clubs.map((club, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-800"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={club.image}
                  alt={club.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white">
                  {club.name}
                </h3>
                <p className="text-gray-400 mb-4">{club.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <div className="text-sm text-gray-500">
                    <span className="text-[#FACC15]">{club.members}</span>{' '}
                    Members
                  </div>
                  <div className="text-sm text-gray-500">
                    <span className="text-[#FACC15]">{club.events}</span>{' '}
                    Events/Year
                  </div>
                </div>
                <Button variant="secondary" fullWidth>
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button>Explore All Clubs</Button>
        </div>
      </div>
    </section>
  )
}
export default ClubFeatureSection
