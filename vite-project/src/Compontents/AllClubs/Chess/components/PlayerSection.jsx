import React from 'react'
import { TeamCard } from './TeamCard'
export const PlayersSection = () => {
  const players = [
    {
      name: 'Magnus Anderson',
      role: 'Club Champion - FIDE Master',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        'National champion with a FIDE rating of 2300+. Specializes in dynamic positional play.',
    },
    {
      name: 'Sarah Chen',
      role: 'Vice Captain - FIDE Master',
      image:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      description:
        'Known for tactical brilliance and aggressive play style. Multiple international tournament winner.',
    },
    {
      name: 'David Kumar',
      role: 'Senior Player - Candidate Master',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        'Endgame specialist with remarkable tournament success in rapid chess formats.',
    },
    {
      name: 'Emily Zhang',
      role: 'Rising Star - National Master',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        'Youngest club member to achieve National Master title. Exceptional in middle game positions.',
    },
  ]
  return (
    <section id="players" className="relative py-20 bg-[#111827]">
      <div className="absolute inset-0 grid grid-cols-8 opacity-5">
        {Array.from({
          length: 8,
        }).map((_, i) => (
          <div
            key={i}
            className={`h-full ${i % 2 === 0 ? 'bg-gray-700' : 'bg-gray-800'}`}
          />
        ))}
      </div>
      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Players</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Meet our distinguished players who represent excellence in chess
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {players.map((player, index) => (
            <TeamCard
              key={index}
              name={player.name}
              role={player.role}
              image={player.image}
              description={player.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
