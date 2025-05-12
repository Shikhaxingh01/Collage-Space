import React from 'react'
import { Target, Users, Zap, Trophy } from 'lucide-react'
import Button from './Button'
const activities = [
  {
    icon: <Target size={32} className="text-[#FACC15]" />,
    title: 'Skills Training',
    description:
      'Comprehensive training programs focusing on dribbling, shooting, and defensive techniques.',
  },
  {
    icon: <Users size={32} className="text-[#FACC15]" />,
    title: 'Team Practice',
    description:
      'Regular team practice sessions to build chemistry and develop game strategies.',
  },
  {
    icon: <Zap size={32} className="text-[#FACC15]" />,
    title: 'Conditioning',
    description:
      'Specialized fitness programs designed for basketball players of all levels.',
  },
  {
    icon: <Trophy size={32} className="text-[#FACC15]" />,
    title: 'Competitions',
    description:
      'Regular tournaments and matches against top teams in the region.',
  },
]
const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FACC15]">Our </span>
            <span className="text-white">Programs</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From beginners to advanced players, our comprehensive training
            programs are designed to elevate your game to the next level.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-800"
            >
              <div className="bg-[#FACC15]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {activity.title}
              </h3>
              <p className="text-gray-400">{activity.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-[#1a1a1a] rounded-xl p-8 md:p-12 shadow-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white">Ready to </span>
                <span className="text-[#FACC15]">join the team?</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Whether you're a beginner or an experienced player, we have
                programs designed to help you achieve your basketball goals.
              </p>
              <Button size="lg">Join Our Team Today</Button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
                alt="Basketball training session"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ActivitiesSection
