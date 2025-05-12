import React, { useEffect } from "react";
import {
  Code,
  Users,
  Calendar,
  ExternalLink,
  ChevronRight,
  Github,
  Terminal,
  Database,
  Globe,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import ScrollToTop from "../ScrollToTop";

export default  function GfgApp() {
  // Simple animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
        }
      });
    }, observerOptions);
    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    return () => {
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  return (
    <div className="bg-[#111827] text-white min-h-screen">
      <ScrollToTop></ScrollToTop>
      <Navbar />
      {/* Hero Section */}
      <section className="w-full px-4 py-20 md:py-32 flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#111827] to-[#1F2937]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 flex justify-center">
            <Code size={64} className="text-[#FFD60A]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 ">
            GFG - Coding & Programming Community
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            "Code, create, and innovate—the world of programming awaits."
          </p>
          <button className="bg-[#FFD60A] hover:bg-yellow-400 text-[#111827] font-bold py-3 px-8 rounded-md text-lg transition duration-300  flex items-center mx-auto">
            Join Now
            <ChevronRight className="ml-2" size={20} />
          </button>
        </div>
      </section>
      {/* Community Stats */}
      <section className="w-full py-16 bg-[#1F2937]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            <div className="flex flex-col items-center animate-on-scroll opacity-0">
              <Users size={40} className="text-[#FFD60A] mb-2" />
              <h3 className="text-3xl font-bold ">245</h3>
              <p className="text-gray-300">Community Members</p>
            </div>
            <div
              className="flex flex-col items-center animate-on-scroll opacity-0"
              style={{
                animationDelay: "0.2s",
              }}
            >
              <Terminal size={40} className="text-[#FFD60A] mb-2" />
              <h3 className="text-3xl font-bold ">4</h3>
              <p className="text-gray-300">Focus Areas</p>
            </div>
            <div
              className="flex flex-col items-center animate-on-scroll opacity-0"
              style={{
                animationDelay: "0.4s",
              }}
            >
              <Calendar size={40} className="text-[#FFD60A] mb-2" />
              <h3 className="text-3xl font-bold ">12</h3>
              <p className="text-gray-300">Events Per Year</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Section */}
      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
            About Our Community
          </h2>
          <div className="bg-[#1F2937] p-8 rounded-lg shadow-xl animate-on-scroll opacity-0">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Welcome to GFG, the coding and programming hub for curious minds
              and tech aficionados. Whether you're a beginner learning your
              first lines of code or an experienced developer seeking
              collaboration, GFG is the community to bring your coding skills to
              new heights.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With 245 members passionate about programming, our club focuses on
              everything from web development to algorithms, data structures,
              and software engineering.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <div className="bg-[#111827] p-4 rounded-md flex flex-col items-center">
                <Globe className="text-[#FFD60A] mb-2" size={24} />
                <p className="text-center  text-sm">
                  Web Development
                </p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md flex flex-col items-center">
                <Code className="text-[#FFD60A] mb-2" size={24} />
                <p className="text-center  text-sm">Algorithms</p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md flex flex-col items-center">
                <Database className="text-[#FFD60A] mb-2" size={24} />
                <p className="text-center  text-sm">
                  Data Structures
                </p>
              </div>
              <div className="bg-[#111827] p-4 rounded-md flex flex-col items-center">
                <Terminal className="text-[#FFD60A] mb-2" size={24} />
                <p className="text-center  text-sm">
                  Software Engineering
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Upcoming Event */}
      <section className="w-full py-20 px-4 bg-[#1F2937]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
            Upcoming Event
          </h2>
          <div className="bg-[#111827] p-8 rounded-lg shadow-xl border border-[#FFD60A]/20 animate-on-scroll opacity-0">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3">
                <div className="bg-[#FFD60A] text-[#111827] p-6 rounded-md text-center">
                  <h3 className="text-2xl font-bold ">DEC</h3>
                  <p className="text-4xl font-bold ">16</p>
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4  text-[#FFD60A]">
                  Hackathon
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Coders will come together to solve real-world problems, push
                  their limits, and create innovative solutions. Whether you're
                  participating or just watching, this event is a testament to
                  the power of coding in shaping the future.
                </p>
                <div className="flex gap-4">
                  <button className="bg-[#FFD60A] hover:bg-yellow-400 text-[#111827] font-bold py-2 px-6 rounded-md transition duration-300  text-sm">
                    Register Now
                  </button>
                  <button className="border border-[#FFD60A] text-[#FFD60A] hover:bg-[#FFD60A]/10 font-bold py-2 px-6 rounded-md transition duration-300  text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Past Events */}
      <section className="w-full py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center ">
            Past Events & Activities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-on-scroll opacity-0">
              <div className="h-48 bg-[#111827] rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Code Sprint"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 ">
                Code Sprint Challenge
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                A 48-hour coding marathon where participants built innovative
                web applications.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#FFD60A] text-sm">
                  November 5, 2023
                </span>
                <button className="text-[#FFD60A] hover:underline text-sm  flex items-center">
                  View Details <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
            <div
              className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-on-scroll opacity-0"
              style={{
                animationDelay: "0.2s",
              }}
            >
              <div className="h-48 bg-[#111827] rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                  alt="Algorithm Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 ">
                Algorithm Masterclass
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                An intensive workshop on advanced algorithms and problem-solving
                techniques.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#FFD60A] text-sm">
                  October 22, 2023
                </span>
                <button className="text-[#FFD60A] hover:underline text-sm  flex items-center">
                  View Details <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
            <div
              className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-on-scroll opacity-0"
              style={{
                animationDelay: "0.3s",
              }}
            >
              <div className="h-48 bg-[#111827] rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Web Dev Bootcamp"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 ">
                Web Dev Bootcamp
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                A two-day intensive bootcamp covering modern frontend and
                backend technologies.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#FFD60A] text-sm">
                  September 18, 2023
                </span>
                <button className="text-[#FFD60A] hover:underline text-sm  flex items-center">
                  View Details <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
            <div
              className="bg-[#1F2937] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all animate-on-scroll opacity-0"
              style={{
                animationDelay: "0.4s",
              }}
            >
              <div className="h-48 bg-[#111827] rounded-md mb-4 flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                  alt="Tech Talk"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 ">
                Tech Talk Series
              </h3>
              <p className="text-gray-300 mb-4 text-sm">
                Industry experts shared insights on emerging technologies and
                career growth.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-[#FFD60A] text-sm">
                  August 30, 2023
                </span>
                <button className="text-[#FFD60A] hover:underline text-sm  flex items-center">
                  View Details <ExternalLink size={14} className="ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Join Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-b from-[#1F2937] to-[#111827]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 ">
            Join Our Community Today
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Immerse yourself in the exciting world of programming. Connect with
            like-minded individuals and take your coding skills to new heights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-on-scroll opacity-0">
            <button className="bg-[#FFD60A] hover:bg-yellow-400 text-[#111827] font-bold py-3 px-8 rounded-md text-lg transition duration-300  flex items-center justify-center">
              Join Now <Users className="ml-2" size={20} />
            </button>
            <button className="border border-[#FFD60A] text-[#FFD60A] hover:bg-[#FFD60A]/10 font-bold py-3 px-8 rounded-md text-lg transition duration-300  flex items-center justify-center">
              View All Events <Calendar className="ml-2" size={20} />
            </button>
          </div>
        </div>
      </section>
      <Footer />
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?wght@400;500;600&fwght@600;700&fwght@600;700&display=swap");
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
