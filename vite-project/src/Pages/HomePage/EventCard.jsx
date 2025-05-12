import React from "react";

export const EventCard = ({ title, date, image, category }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gray-800 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 font-semibold rounded-full text-sm bg-yellow-400 text-gray-900  mb-2">
          {category}
        </span>
        <h3 className="text-xl font-semibold text-white mb-2 ">
          {title}
        </h3>
        <p className="text-gray-400 ">{date}</p>
      </div>
    </div>
  );
};
