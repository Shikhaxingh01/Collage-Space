import React from "react";
import { ArrowRight } from "lucide-react";

export const ClubCard = ({ name, description, imageUrl }) => {
  return (
    <div className="group relative h-96 bg-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10" />
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 relative z-20">
        <h3 className="text-xl font-semibold text-white mb-2 ">
          {name}
        </h3>
        <p className="text-gray-300 mb-4  text-sm">
          {description}
        </p>
        <button className="flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-yellow-300 hover:gap-3">
          Join Now
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};
