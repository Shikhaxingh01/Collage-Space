import React from 'react'
import {TeamCard} from './TeamCard'
export const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Rohit Sharma',
      role: 'Captain',
      image:
        'https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1747&q=80',
      description:
        'Leading with passion and tactical brilliance, our captain inspires the team to excellence.',
    },
    {
      name: 'Virat Kohli',
      role: 'Vice-Captain',
      image:
        'https://images.unsplash.com/photo-1587385789097-0197a7fbd179?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        "A fierce competitor with unmatched determination and skill, supporting the captain's vision.",
    },
    {
      name: 'KL Rahul',
      role: 'Batsman',
      image:
        'https://images.unsplash.com/photo-1616031037011-8951f063be13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
      description:
        'Elegant stroke play and consistent performance make him a key player in our batting lineup.',
    },
    {
      name: 'Jasprit Bumrah',
      role: 'Bowler',
      image:
        'https://images.unsplash.com/photo-1629285483773-6b5cde7df927?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
      description:
        'Our pace spearhead with an unorthodox action and deadly yorkers that trouble the best batsmen.',
    },
  ]
  return (
    <section id="team" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Meet the talented players who represent SRMCEM Cricket Club with
            pride and passion
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
