import React from 'react'
import { Trophy, Calendar, Star, Clock, Award, Target } from 'lucide-react'
import { ChessPiece } from './ChessPiece'
export const TournamentsSection = () => {
  const tournaments = [
    {
      title: 'Grand Masters Open',
      date: 'December 15-20, 2023',
      description:
        'Premier tournament featuring international masters and grandmasters',
      status: 'Upcoming',
      prize: '₹100,000',
    },
    {
      title: 'Rapid Chess Championship',
      date: 'November 5, 2023',
      description: 'Fast-paced tournament with 15|10 time control',
      status: 'Registration Open',
      prize: '₹50,000',
    },
    {
      title: 'Inter-College Championship',
      date: 'October 1-2, 2023',
      description: 'Annual collegiate championship for university students',
      status: 'Completed',
      prize: '₹75,000',
    },
  ]
  return (
    <section id="tournaments" className="py-20 bg-[#0F1623] relative">
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              'linear-gradient(45deg, #1F2937 25%, transparent 25%), linear-gradient(-45deg, #1F2937 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #1F2937 75%), linear-gradient(-45deg, transparent 75%, #1F2937 75%)',
            backgroundSize: '20px 20px',
            backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tournaments</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Compete in prestigious chess tournaments and prove your strategic
            prowess
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="bg-[#1F2937] rounded-lg p-6 hover:transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center mb-4">
                <ChessPiece
                  piece={
                    index === 0 ? 'king' : index === 1 ? 'queen' : 'knight'
                  }
                  className="text-[#FACC15] mr-3"
                />
                <h3 className="text-xl font-bold">{tournament.title}</h3>
              </div>
              <div className="space-y-3 text-[#9CA3AF]">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-[#FACC15]" />
                  <span>{tournament.date}</span>
                </div>
                <p>{tournament.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-[#FACC15] font-semibold">
                    {tournament.status}
                  </span>
                  <span className="text-white font-bold">
                    {tournament.prize}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#1F2937] rounded-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-[#FACC15] mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">15+</h4>
              <p className="text-[#9CA3AF]">Annual Tournaments</p>
            </div>
            <div className="text-center">
              <Target className="h-12 w-12 text-[#FACC15] mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">500+</h4>
              <p className="text-[#9CA3AF]">Participating Players</p>
            </div>
            <div className="text-center">
              <Trophy className="h-12 w-12 text-[#FACC15] mx-auto mb-4" />
              <h4 className="text-xl font-bold mb-2">₹250K+</h4>
              <p className="text-[#9CA3AF]">Prize Pool</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
