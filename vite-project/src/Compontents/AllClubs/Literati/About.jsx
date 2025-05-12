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
                89 Active Members
              </span>
            </div>
            <div className="flex items-center space-x-3 text-yellow-300">
              <Calendar className="w-6 h-6" />
              <span className=" text-lg">
                Next Event: Poetry Slam - Dec 10
              </span>
            </div>
          </div>
          <div className="space-y-4 text-gray-300">
            <p>
              Literati is a sanctuary for book lovers, poets, and creative minds
              who find solace in the rhythm of words and the power of
              storytelling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
