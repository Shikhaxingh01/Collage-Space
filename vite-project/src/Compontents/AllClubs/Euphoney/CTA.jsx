import React from "react";
import { ArrowRight } from "lucide-react";
export const CTA = () => {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 ">
          Join Our Musical Community
        </h2>
        <button className="bg-yellow-300 text-gray-900 px-8 py-3 rounded-lg font-bold inline-flex items-center space-x-2 hover:bg-yellow-400 transition-colors duration-300 ">
          <span>Join Now</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
