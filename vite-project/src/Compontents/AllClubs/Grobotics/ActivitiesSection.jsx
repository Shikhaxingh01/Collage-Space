import React from "react";
import { motion } from "framer-motion";
import { Cpu, Layers, Zap } from "lucide-react";
const ActivitiesSection = () => {
  const activities = [
    {
      icon: <div className="w-8 h-8 text-[#FFD60A]" />,
      title: "Robot Design & Build",
      description:
        "Design and construct robots from scratch using cutting-edge components and techniques",
      image:
        "https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Cpu className="w-8 h-8 text-[#FFD60A]" />,
      title: "Programming & AI",
      description:
        "Learn programming languages and AI concepts specifically for robotics applications",
      image:
        "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#FFD60A]" />,
      title: "3D Printing & Prototyping",
      description:
        "Create custom parts and prototypes using our state-of-the-art 3D printing lab",
      image:
        "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Zap className="w-8 h-8 text-[#FFD60A]" />,
      title: "Competitions & Challenges",
      description:
        "Participate in local and national robotics competitions to test your skills",
      image:
        "https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
  ];
  return (
    <section id="activities" className="py-20 bg-[#111827]">
      <div className="container mx-auto px-4">
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
              Activities & <span className="text-[#FFD60A]">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD60A] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto  text-lg">
              Explore our diverse range of activities and hands-on projects that
              bring robotics to life
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-8">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="flex flex-col md:flex-row gap-6 group"
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
              >
                <div className="w-full md:w-2/5 h-64 rounded-xl overflow-hidden relative">
                  <motion.img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    whileHover={{
                      scale: 1.1,
                    }}
                    transition={{
                      duration: 0.5,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-[#1F2937]/80 backdrop-blur-sm p-3 rounded-lg">
                    {activity.icon}
                  </div>
                </div>
                <div className="w-full md:w-3/5">
                  <h3 className="text-2xl font-bold mb-3  group-hover:text-[#FFD60A] transition-colors">
                    {activity.title}
                  </h3>
                  <p className="text-gray-300 mb-4 ">
                    {activity.description}
                  </p>
                  <ul className="space-y-2 mb-5">
                    {[1, 2, 3].map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center text-gray-400 "
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] mr-2"></span>
                        <span>Activity feature {item}</span>
                      </li>
                    ))}
                  </ul>
                  <motion.button
                    className="text-[#FFD60A]  font-medium flex items-center"
                    whileHover={{
                      x: 5,
                    }}
                  >
                    Learn more about {activity.title.split(" ")[0]}
                    <span className="ml-2">→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="mt-16 bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-2xl p-10 border border-gray-700 relative overflow-hidden"
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
            {/* Background circuit pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg
                width="100%"
                height="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <pattern
                  id="circuit-small"
                  x="0"
                  y="0"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0 25 H50 M25 0 V50"
                    stroke="#FFD60A"
                    strokeWidth="1"
                    fill="none"
                  />
                </pattern>
                <rect
                  x="0"
                  y="0"
                  width="100%"
                  height="100%"
                  fill="url(#circuit-small)"
                />
              </svg>
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 ">
                Ready to join our{" "}
                <span className="text-[#FFD60A]">robotics community</span>?
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-8 ">
                Become a part of this tech-savvy community and start your
                journey into the world of robotics. No prior experience needed -
                just bring your curiosity and enthusiasm!
              </p>
              <motion.button
                className="bg-[#FFD60A] text-[#111827] px-8 py-3 rounded-full  font-medium text-lg flex items-center gap-2 mx-auto hover:shadow-[0_0_20px_rgba(255,214,10,0.5)] transition-all"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
              >
                Join Grobotics Today
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default ActivitiesSection;
