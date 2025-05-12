import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, Zap, Cpu } from "lucide-react";
const AboutSection = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-[#FFD60A]" />,
      title: "Community",
      description:
        "Join a network of 112+ robotics enthusiasts sharing knowledge and skills",
    },
    {
      icon: <Globe className="w-6 h-6 text-[#FFD60A]" />,
      title: "Innovation",
      description:
        "Explore cutting-edge robotics technologies and automation solutions",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#FFD60A]" />,
      title: "Hands-on Learning",
      description:
        "Participate in workshops, hackathons, and collaborative projects",
    },
    {
      icon: <Cpu className="w-6 h-6 text-[#FFD60A]" />,
      title: "Tech Access",
      description:
        "Get access to state-of-the-art equipment and development tools",
    },
  ];
  return (
    <section id="about" className="py-20 bg-[#111827]">
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
              About <span className="text-[#FFD60A]">Grobotics</span>
            </h2>
            <div className="w-20 h-1 bg-[#FFD60A] mx-auto mb-6"></div>
            <p className="text-gray-300 max-w-3xl mx-auto  text-lg">
              The ultimate playground for all things robotics and automation.
              Whether you're an aspiring engineer, a tech enthusiast, or someone
              who wants to learn about the future of technology.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700 hover:border-[#FFD60A] transition-all"
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 214, 10, 0.1)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 ">
                Our Mission
              </h3>
              <p className="text-gray-300 mb-6 ">
                Grobotics focuses on creating innovative solutions through
                robotics, from designing intelligent robots to building fully
                automated systems. We aim to foster a community where technology
                enthusiasts can collaborate, learn, and push the boundaries of
                what's possible.
              </p>
              <div className="flex items-center text-[#FFD60A]  font-medium">
                Learn more about us
                <span className="ml-2 text-lg">→</span>
              </div>
            </motion.div>
            <motion.div
              className="bg-[#1F2937] rounded-2xl p-8 border border-gray-700 hover:border-[#FFD60A] transition-all"
              initial={{
                opacity: 0,
                x: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(255, 214, 10, 0.1)",
              }}
            >
              <h3 className="text-2xl font-bold mb-4 ">
                What We Offer
              </h3>
              <p className="text-gray-300 mb-6 ">
                Our club provides a platform for members to develop technical
                skills, work on real-world projects, and network with
                like-minded individuals. From beginners to experts, everyone has
                a place at Grobotics to grow and contribute.
              </p>
              <div className="flex items-center text-[#FFD60A]  font-medium">
                Explore our activities
                <span className="ml-2 text-lg">→</span>
              </div>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-[#1F2937]/50 rounded-xl p-6 border border-gray-700 hover:border-[#FFD60A] transition-all"
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
                  backgroundColor: "rgba(31, 41, 55, 0.8)",
                }}
              >
                <div className="w-12 h-12 rounded-full bg-[#FFD60A]/10 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 ">
                  {feature.title}
                </h4>
                <p className="text-gray-400 ">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
