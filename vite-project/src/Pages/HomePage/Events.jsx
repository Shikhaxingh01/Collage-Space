import React from "react";
import { EventCard } from "./EventCard";
export const Events = () => {
  const events = [
    {
      title: "Abhivyakti 2024",
      date: "March 15-17, 2024",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      category: "Annual Fest",
    },
    {
      title: "Spardha",
      date: "April 5-10, 2024",
      image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
      category: "Sports",
    },
    {
      title: "Gantavya",
      date: "February 28, 2024",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: "Technical",
    },
  ];
  return (
    <section id="events" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12  text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};
