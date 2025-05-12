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
              <span className=" text-lg">
                120 Active Members
              </span>
            </div>
            <div className="flex items-center space-x-3 text-yellow-300">
              <Calendar className="w-6 h-6" />
              <span className=" text-lg">
                Next Event: Winter Concert - Dec 20
              </span>
            </div>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Euphony is a haven for aspiring singers, musicians, and all those
              who breathe music. Whether you are a vocalist, an instrumentalist,
              or simply someone who finds joy in melodies, this club is where
              your passion meets harmony.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
