import React from 'react'
import { Music2Icon, UsersIcon, StarIcon, ZapIcon } from 'lucide-react'
import Button from './Button'
const activities = [
  {
    icon: <Music2Icon size={32} className="text-[#FACC15]" />,
    title: 'Dance Workshops',
    description:
      'Weekly workshops covering various dance styles from hip-hop to contemporary, led by professional choreographers.',
  },
  {
    icon: <StarIcon size={32} className="text-[#FACC15]" />,
    title: 'Choreography Sessions',
    description:
      'Learn and create original choreographies for performances and competitions.',
  },
  {
    icon: <UsersIcon size={32} className="text-[#FACC15]" />,
    title: 'Group Performances',
    description:
      'Regular opportunities to perform at college events and cultural festivals.',
  },
  {
    icon: <ZapIcon size={32} className="text-[#FACC15]" />,
    title: 'Freestyle Practice',
    description:
      'Dedicated sessions for improving improvisation and freestyle dance skills.',
  },
]
const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FACC15]">Our </span>
            <span className="text-white">Activities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the diverse range of dance activities and training programs
            we offer to help you become a versatile dancer.
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
                <span className="text-[#FACC15]">start dancing?</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Join our dynamic community of dancers and express yourself
                through movement. No prior experience needed - just bring your
                enthusiasm!
              </p>
              <Button size="lg">Join Step Cell Today</Button>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Dance workshop"
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
