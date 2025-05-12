


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaMapMarkerAlt, FaGlobe, FaClock, FaChild, FaCalendarAlt, FaRupeeSign, FaBookmark, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import Footer from "./Footer"
import BookingButton from './BookingButton'


export default function EventDetails() {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchEventDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/event/getevent/${id}`);
        setEvent(response.data.event);
        console.log(" Event : ",event)
      } catch (error) {
        console.error("Error fetching event details:", error);
      }
    };

    fetchEventDetails();
  }, [id]);

  if (!event) {
    return <div className="text-center text-2xl font-semibold mt-20">Loading...</div>;
  }

  const formattedDate = new Date(event.date).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  })

  return (
    <div className="relative min-h-screen bg-slate-50 text-black">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 md:py-5 gap-6 md:px-10">
        {/* Event Image */}
        <div className="md:col-span-2">
          <img src={event.image_url} alt={event.title} className="w-full h-full sm:h-60 md:h-80 object-cover sm:rounded-lg" />
        </div>

        {/* Event Details Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div className="p-2">
            <h2 className="text-xl font-bold mb-4">{event.title}</h2>
  
            <div className="text-slate-800 flex items-center gap-4 mb-2 p-1 md:pt-0">
              <FaBookmark />
              <span>{event.category}</span>
            </div>

            <div className="text-slate-800 flex items-center gap-4 ">
              <FaCalendarAlt className="w-6" />
              <span >{formattedDate}</span>
            </div>

            <div className="text-slate-800 flex items-center gap-4 mb-2 p-1">
              <FaMapMarkerAlt />
              <span>{event.location}</span>
            </div>
          </div>

          <hr />

          <div className="hidden lg:flex font-bold items-center justify-center">
            {/* <div className="flex items-center">
              <FaRupeeSign />
              <span>{event.price}</span>
            </div> */}
            {/* <button className="bg-yellow-500 hover:bg-yellow-600 text-base text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300">
              BOOK TICKETS
            </button> */}
            <BookingButton eventId={event.id}/>

          </div>
        </div>
      </div>

      {/* About the Event */}
      <div className="max-w-4xl mx-auto mt-5 px-10 ">
        <h3 className="text-2xl font-bold mb-2 text-slate-800">About the Event</h3>
        <p className="text-gray-800">
          {event.about} <strong>{event.catchyLine} 🤩</strong>
        </p>
        {showMore && (
          <div className="text-gray-800 mt-4">
            <p><strong>Presented by:</strong> {event.presentedBy}</p>
            <p><strong>Organized by:</strong> {event.organizedBy}</p>

            <p className="mt-2">Event Highlights:</p>
            <ul className="list-disc pl-5">
            {event.eventHighlights.map((highlight, index) => (
                <li key={index}>{highlight}</li>
             ))}

              {/* <li>10-12 Well-known DJ Artists</li>
              <li>Live Bollywood Performances</li>
              <li>Traditional Dhol Beats</li>
              <li>Selfie Booth, Mehendi & Tattoo Booths</li>
              <li>Glamour Holi Fashion Show</li>
              <li>Kid Zone, Celebrity Appearances & Influencers</li>
              <li>Awards for Best Couple, Best Dress & Best Dance</li>
              <li>Flower Holi with Fragrant Blooms</li>
              <li>Holi Special Food Stalls</li> */}
            </ul>

            <p className="mt-4">And many more surprises waiting for you!</p>
          </div>
        )}
        <button
          onClick={() => setShowMore(!showMore)}
          className="text-slate-800 hover:text-slate-700 mt-4 transition-all duration-300"
        >
          {showMore ? (
            <div className="flex items-center font-semibold ">
              Show Less <FaChevronUp />
            </div>
          ) : (
            <div className="flex items-center font-semibold">
              Show More <FaChevronDown />
            </div>
          )}
        </button>
        <hr className="max-w-lg font-bold text-slate-700 my-5" />
      </div>

      {/* Event Guide */}
      <div className="max-w-4xl mx-auto mt-5 px-10">
        <h3 className="text-2xl font-semibold mb-2">Event Guide</h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center gap-2">
            <div className="border rounded-xl bg-slate-100 p-4">
              <FaGlobe className="text-slate-400 text-xl" />
            </div>
            <strong>Language:</strong> {event.language}
          </div>

          <div className="flex items-center gap-2">
            <div className="border rounded-xl bg-slate-100 p-4">
              <FaClock className="text-slate-400" />
            </div>
            <strong>Duration:</strong> {event.duration}
          </div>

          <div className="flex items-center gap-2">
            <div className="border rounded-xl bg-slate-100 p-4">
              <FaChild className="text-slate-400" />
            </div>
            <strong>Age Group:</strong> 
          </div>
        </div>
      </div>

      {/* Venue Section */}
      
        <div className="max-w-4xl mx-auto mt-10 px-10">
          <h3 className="text-2xl font-bold mb-2 text-slate-800">Venue</h3>
           
            <div className="md:mx-5 border rounded-xl p-4 my-5 mx-auto ">
               <h4 className="text-xl font-bold mb-2 text-gray-700">Vint Club</h4>
               <p className="text-gray-700 font-semibold p-1 text-sm md:text-base ">
                {event.detailedVenue}||
                      Block No -2 , IT Park-3, BBD NITM BBD Green City , FaizabadRoad
                       Lucknow , Uttar Pradesh 226030, India</p>
            </div>
            
             {/* Terms and Conditions */}
           <div className="md:mx-5 border rounded-xl p-4 my-5 mx-auto ">
              <h3 className="text-xl font-bold mb-2 text-gray-700">Terms & Conditions </h3>
             <ul className="text-gray-700 font-semibold px-5 list-disc text-sm md:text-base">
              {event.termsAndConditions.map((term, index) => (
              <li key={index}>{term}</li>
               ))}


                {/* <li>Student Must carry their own bottles </li>
                <li>Don't Create any rush  </li>
                <li>As the orgnizing team if you have any doubt  </li>
                <li>This event is not for children   </li>
                <li>No pets are allowed </li> */}

             </ul>
           </div>
         
        </div>
    
  
     


      {/* Sticky Bar */}
    
      <div className=" lg:hidden sticky bottom-0 w-full bg-white shadow-[0px_-5px_20px_rgba(0,0,0,0.1)] py-4 flex items-center justify-center px-4 sm:px-6 z-10 transition-all duration-300">
           {/* <div className="text-lg font-semibold text-gray-800">
           ₹{event.price} <span className="text-gray-500 text-sm"></span>
           </div> */}
       <BookingButton eventId={event.id}/>
     </div>


      {/* Footer */}
    <Footer></Footer>
    </div>
  );
}
