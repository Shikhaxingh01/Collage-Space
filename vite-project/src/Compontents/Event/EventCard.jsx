import React from "react";
import { Calendar, MapPin } from "lucide-react";

const EventCard = ({
  image_url,
  category,
  title,
  date,
  location,
  price,
  categoryColor = "bg-cyan-500",
  onRegister,
}) => {

 


  return (
    <div className="rounded-lg  overflow-hidden  hover:shadow-2xl  bg-gray-800 border-x-[1px] border-b-[1px] border-gray-900 hover:border-yellow-400 ">
      <div className="relative ">
        <img src={image_url} alt={title} className="w-full h-48 object-cover" />
        <span
          className={`absolute top-3 right-3 ${categoryColor} text-white text-xs font-sans  font-bold px-3 py-1 rounded`}
        >
          {category}
        </span>
      </div>
      <div className="p-4 border-gray-700 rounded-b-lg  ">
        <h3 className="font-bold text-lg mb-2 text-white font-sans ">{title}</h3>
        <div className="flex items-center text-gray-400 mb-2">
          <Calendar className="h-4 w-4 mr-2 font-bold" />
          <span className="text-sm font-sans font-bold">{date}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm font-sans font-bold">{location}</span>
        </div>
        <div className="flex  justify-between items-center text-sm rounded-md p-2 bg-yellow-400">
          {price && (
            <span className="text-gray-900 font-roboto-condensed font-semibold">
             {price==="Free"||price==="free"||price==="FREE"?"FREE":`₹${price} ONWARDS `} 
              
            </span>
          )} 
          <button 
          onClick={onRegister}
          className="text-black font-roboto-condensed font-semibold border-l border-black px-1  hover:bg-blue-50 transition">
           REGISTER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
