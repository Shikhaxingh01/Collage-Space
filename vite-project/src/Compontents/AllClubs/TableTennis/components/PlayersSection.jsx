import React from 'react'
import { TeamCard } from './TeamCard'
export const PlayersSection = () => {
  const players = [
    {
      name: 'Alex Chen',
      role: 'Team Captain',
      image:
        'https://images.unsplash.com/photo-1534158914592-062992fbe900?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80',
      description:
        'National level player with exceptional leadership skills and tactical gameplay.',
    },
    {
      name: 'Sarah Kim',
      role: 'Vice Captain',
      image:
        'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80',
      description:
        'Known for her aggressive playing style and consistent performance in tournaments.',
    },
    {
      name: 'Mike Zhang',
      role: 'Senior Player',
      image:
        'https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        'Technical specialist with multiple zonal championships under his belt.',
    },
    {
      name: 'Emma Liu',
      role: 'Rising Star',
      image:
        'https://images.unsplash.com/photo-1584713503693-bb386ec95cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      description:
        'Youngest team member with remarkable progress and potential.',
    },
  ]
  return (
    <section id="players" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Players</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Meet our talented players who represent the club with dedication and
            skill
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
