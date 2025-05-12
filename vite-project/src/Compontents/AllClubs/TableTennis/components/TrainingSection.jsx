import React from 'react'
import { Target, Users, Clock, Award } from 'lucide-react'
export const TrainingSection = () => {
  const trainingPrograms = [
    {
      icon: <Target className="h-8 w-8 text-[#FACC15]" />,
      title: "Beginner's Program",
      description:
        'Master the fundamentals of table tennis with structured training sessions.',
      duration: '8 weeks',
      schedule: 'Mon, Wed, Fri',
    },
    {
      icon: <Users className="h-8 w-8 text-[#FACC15]" />,
      title: 'Advanced Training',
      description:
        'Intensive coaching for competitive players aiming for tournament success.',
      duration: '12 weeks',
      schedule: 'Tue, Thu, Sat',
    },
    {
      icon: <Clock className="h-8 w-8 text-[#FACC15]" />,
      title: 'Personal Coaching',
      description:
        'One-on-one sessions with experienced coaches to refine your technique.',
      duration: 'Flexible',
      schedule: 'By appointment',
    },
    {
      icon: <Award className="h-8 w-8 text-[#FACC15]" />,
      title: 'Tournament Prep',
      description:
        'Specialized training focused on match strategy and mental preparation.',
      duration: '4 weeks',
      schedule: 'Weekend intensive',
    },
  ]
  return (
    <section id="training" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Training Programs
          </h2>
          <div className="w-20 h-1 bg-[#FACC15] mx-auto mb-6"></div>
          <p className="text-[#9CA3AF] max-w-2xl mx-auto">
            Comprehensive training programs designed to develop your skills and
            technique
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trainingPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-[#1F2937] rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-[#111827] rounded-lg">
                  {program.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                  <p className="text-[#9CA3AF] mb-4">{program.description}</p>
                  <div className="flex space-x-4 text-sm">
                    <span className="text-[#FACC15]">{program.duration}</span>
                    <span className="text-[#9CA3AF]">|</span>
                    <span className="text-[#FACC15]">{program.schedule}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block bg-[#FACC15] text-[#111827] font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors duration-300"
          >
            Join a Program
          </a>
        </div>
      </div>
    </section>
  )
}
