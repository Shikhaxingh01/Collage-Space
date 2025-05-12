import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Clock, Users } from "lucide-react";
const EventsSection = () => {
  return (
    <section
      id="events"
      className="py-20 bg-[#0e1525] relative overflow-hidden"
    >
      {/* Background circuit pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern
            id="circuit"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 50 H100 M50 0 V100 M25 25 L75 75 M75 25 L25 75"
              stroke="#FFD60A"
              strokeWidth="1"
              fill="none"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 ">
              Upcoming <span className="text-[#FFD60A]">Events</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD60A] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto  text-lg">
              Join us for exciting robotics events and competitions where
              innovation comes alive
            </p>
          </motion.div>
          <motion.div
            className="bg-gradient-to-br from-[#1F2937] to-[#111827] rounded-3xl overflow-hidden shadow-2xl border border-gray-700 hover:border-[#FFD60A] transition-all"
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
            whileHover={{
              boxShadow: "0 0 30px rgba(255, 214, 10, 0.15)",
            }}
          >
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Robot Wars Competition"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-[#FFD60A] text-[#111827] px-4 py-2 rounded-lg  font-bold">
                  Featured Event
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-[#FFD60A] mr-2" />
                  <span className="text-gray-300 ">
                    December 22, 2023
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 ">
                  Robot Wars Competition
                </h3>
                <p className="text-gray-300 mb-6 ">
                  Witness the power of robotics in action as our creations face
                  off in a thrilling battle of engineering brilliance. Join us
                  and see cutting-edge robots compete for the championship
                  title!
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 text-[#FFD60A] mr-2" />
                    <span className="text-gray-300  text-sm">
                      Tech Innovation Center
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 text-[#FFD60A] mr-2" />
                    <span className="text-gray-300  text-sm">
                      6:00 PM - 9:00 PM
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5 text-[#FFD60A] mr-2" />
                    <span className="text-gray-300  text-sm">
                      Limited to 50 participants
                    </span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    className="bg-[#FFD60A] text-[#111827] px-6 py-3 rounded-full  font-medium hover:shadow-[0_0_15px_rgba(255,214,10,0.5)] transition-all"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    Register Now
                  </motion.button>
                  <motion.button
                    className="bg-transparent text-white border border-gray-600 px-6 py-3 rounded-full  font-medium hover:border-[#FFD60A] hover:text-[#FFD60A] transition-all"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.95,
                    }}
                  >
                    Learn More
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {[
              {
                title: "AI in Robotics Workshop",
                date: "January 15, 2024",
                image:
                  "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
              },
              {
                title: "Automation Hackathon",
                date: "February 3-5, 2024",
                image:
                  "https://images.unsplash.com/photo-1573496358961-3c82861ab8f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
              },
              {
                title: "Drone Racing League",
                date: "March 12, 2024",
                image:
                  "https://images.unsplash.com/photo-1506947411487-a56738267384?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
              },
            ].map((event, index) => (
              <motion.div
                key={index}
                className="bg-[#1F2937] rounded-xl overflow-hidden border border-gray-700 hover:border-[#FFD60A] group transition-all"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 25px -5px rgba(255, 214, 10, 0.1)",
                }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-4 h-4 text-[#FFD60A] mr-2" />
                    <span className="text-gray-300 text-sm ">
                      {event.date}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 group-hover:text-[#FFD60A] transition-colors">
                    {event.title}
                  </h4>
                  <motion.button
                    className="mt-4 text-[#FFD60A] font-medium flex items-center"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    View details
                    <span className="ml-2">→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <motion.button
              className="bg-transparent text-white border border-gray-600 px-8 py-3 rounded-full font-medium hover:border-[#FFD60A] hover:text-[#FFD60A] transition-all"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              View All Events
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default EventsSection;
