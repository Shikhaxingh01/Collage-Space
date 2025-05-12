import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import EventCard from "./EventCard";

export default function EventGrid() {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/event/getevent`);
        setEvents(response.data.events); // Assuming your API returns { events: [] }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleRegisterNow = (id) => {
    navigate(`/event/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <EventCard
          key={event.id}
          image_url={event.image_url}
          title={event.title}
          date={new Date(event.date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
          })}
          location={event.location}
          price={event.price}
          category={event.category}
          categoryColor="bg-cyan-500"
          onRegister={() => handleRegisterNow(event.id)}
        />
      ))}
    </div>
  );
}


