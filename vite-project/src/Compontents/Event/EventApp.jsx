import React from "react";
import  EventGrid  from "./EventGrid";

export default function EventApp() {
  return (
    <div className="min-h-screen bg-gray-900 w-full">
      
        {/* <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Events in Lucknow</h1>
        </div> */}
     
      <main className="container mx-auto px-4 py-8 flex flex-col justify-center items-center">
        <h2 className="text-2xl font-bold mb-6 text-yellow-400">Upcoming Events</h2>
        <EventGrid />
      </main>
    </div>
  );
}
