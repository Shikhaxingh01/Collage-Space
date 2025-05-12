import React from 'react'
import { MicIcon, UsersIcon, PresentationIcon, AwardIcon } from 'lucide-react'
const features = [
  {
    icon: <MicIcon size={32} className="text-[#FACC15]" />,
    title: 'Speech Training',
    description:
      'Master the art of public speaking through our comprehensive training programs designed for all skill levels.',
  },
  {
    icon: <PresentationIcon size={32} className="text-[#FACC15]" />,
    title: 'Stage Presence',
    description:
      'Learn to command attention and project confidence on stage with our specialized workshops.',
  },
  {
    icon: <UsersIcon size={32} className="text-[#FACC15]" />,
    title: 'Event Hosting',
    description:
      'Develop professional anchoring skills for hosting events, ceremonies, and public gatherings.',
  },
  {
    icon: <AwardIcon size={32} className="text-[#FACC15]" />,
    title: 'Competitions',
    description:
      'Participate in speaking competitions to showcase your skills and gain valuable experience.',
  },
]
const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-[#161616]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-[#FACC15]">Our </span>
            <span className="text-white">Features</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover the comprehensive range of programs and activities we offer
            to help you become a confident and effective communicator.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg transition-transform duration-300 hover:transform hover:scale-105 hover:shadow-xl border border-gray-800"
            >
              <div className="bg-[#FACC15]/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-[#1a1a1a] rounded-xl p-8 md:p-12 shadow-xl border border-gray-800">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-8 md:mb-0 md:pr-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-white">Ready to transform your </span>
                <span className="text-[#FACC15]">speaking skills?</span>
              </h3>
              <p className="text-gray-400 mb-6">
                Join our workshops and practice sessions to overcome stage
                fright, improve vocal delivery, and master the art of engaging
                your audience.
              </p>
              <ul className="space-y-3">
                {[
                  'Weekly practice sessions',
                  'Expert feedback',
                  'Personalized coaching',
                  'Networking opportunities',
                ].map((item, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <span className="h-2 w-2 bg-[#FACC15] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/3">
              <img
                src="https://images.unsplash.com/photo-1556761175-129418cb2dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                alt="Public speaking workshop"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default FeaturesSection
