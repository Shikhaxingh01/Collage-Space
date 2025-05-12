import React from 'react';

export function AnnouncementCard({ title, timestamp, description }) {
  return (
    <div className="bg-[#1E293B] rounded-lg p-5 transition-all duration-200 hover:shadow-md hover:shadow-[#FACC15]/10">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-bold text-[#F9FAFB] text-lg">{title}</h3>
        <span className="text-sm text-[#94A3B8]">{timestamp}</span>
      </div>
      <p className="text-[#E5E7EB] mb-4">{description}</p>
      <button className="text-[#111827] bg-[#FACC15] px-4 py-2 rounded font-medium hover:bg-[#FACC15]/90 transition-colors">
        Read More
      </button>
    </div>
  );
}
