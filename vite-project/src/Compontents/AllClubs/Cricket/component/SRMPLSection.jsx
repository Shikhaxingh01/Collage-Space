import React from 'react'
import { TrophyIcon, UsersIcon, CoinsIcon } from 'lucide-react'
export const SRMPLSection = () => {
  const features = [
    {
      icon: <TrophyIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Inter-College Competition',
      description:
        'Teams from various colleges compete for glory in this prestigious tournament.',
    },
    {
      icon: <UsersIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Faculty Participation',
      description:
        'Experience the thrill of seeing your professors showcase their cricket skills.',
    },
    {
      icon: <CoinsIcon className="h-10 w-10 text-[#FACC15]" />,
      title: 'Cash Prizes',
      description:
        'Substantial rewards for winners, runners-up, and outstanding performers.',
    },
  ]
  return (
    <section id="srmpl" className="py-20 bg-[#0F1623]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            SRMCEM Premier League
          </h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Our flagship cricket tournament that brings together talent,
            passion, and competition
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#1F2937] p-8 rounded-lg text-center transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-[#9CA3AF]">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 bg-[#1F2937] rounded-lg p-8 md:p-12">
          <div className="md:flex items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4">
                The Ultimate Cricket Experience
              </h3>
              <p className="text-[#9CA3AF] mb-6">
                SRMPL is more than just a tournament; it's a celebration of
                cricket culture at SRMCEM. With professional organization, live
                commentary, and an electric atmosphere, it's an experience you
                don't want to miss.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    16
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Teams</span>
                </div>
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    30+
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Matches</span>
                </div>
                <div className="bg-[#111827] px-4 py-2 rounded">
                  <span className="block text-[#FACC15] font-bold text-2xl">
                    ₹50K
                  </span>
                  <span className="text-sm text-[#9CA3AF]">Prize Pool</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="SRMPL Tournament"
                className="rounded-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
