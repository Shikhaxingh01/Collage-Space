import React from "react";
import { Users, Calendar } from "lucide-react";
export const About = () => {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-yellow-300">
              <Users className="w-6 h-6" />
              <span className="font-[Montserrat] text-lg">
                78 Active Members
              </span>
            </div>
            <div className="flex items-center space-x-3 text-yellow-300">
              <Calendar className="w-6 h-6" />
              <span className="font-[Montserrat] text-lg">
                Next Event: Annual Play - Dec 18
              </span>
            </div>
          </div>
          <div className="space-y-4 text-gray-300 font-[Inter]">
            <p>
              Welcome to Dracula, the heart of drama and theater on campus.
              Here, we breathe life into the stage, turning every rehearsal,
              every performance, and every story into an unforgettable
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
