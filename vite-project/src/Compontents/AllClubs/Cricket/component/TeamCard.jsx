import React from 'react';

export const TeamCard = ({ name, role, image, description }) => {
  return (
    <div className="bg-[#1F2937] rounded-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-[#FACC15]/20">
      <div className="h-64 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-[#FACC15] font-semibold mb-4">{role}</p>
        <p className="text-[#9CA3AF] text-sm">{description}</p>
      </div>
    </div>
  );
};


