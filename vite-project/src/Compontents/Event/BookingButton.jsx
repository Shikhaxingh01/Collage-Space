import axios from 'axios'

import { useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const BookingButton = ({ eventId }) => {
  const navigate = useNavigate();
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkRegistration = async () => {
      try {
        // Retrieve token from local storage
        const token = localStorage.getItem("authToken");
  
        if (!token) {
          setIsRegistered(false); // No token → User not logged in
          return;
        }
  
        // Fetch authenticated user's email from /protected-route
        const userResponse = await axios.get(`http://localhost:5000/protected-route`, {
          headers: { Authorization: `Bearer ${token}` },
        });
  
        const userEmail = userResponse.data.user.email; // Ensure backend sends 'user.email'
  
        if (!userEmail) {
          setIsRegistered(false); // If email is missing → Invalid session
          return;
        }
  
        // Check if the user is registered for the event
        const response = await axios.get(
          `http://localhost:5000/check?eventId=${eventId}&email=${userEmail}`
        );
  
        setIsRegistered(response.data.isRegistered);
      } catch (error) {
        console.error("Error checking registration:", error);
        setIsRegistered(false);
      }
    };
  
    checkRegistration();
  }, [eventId]);
  
  const handleBooking = async () => {
    setLoading(true);

    const token = localStorage.getItem("authToken"); // Retrieve token from localStorage

    if (!token) {
      // No token found, redirect to login
      navigate(`/auth?redirect=/bookingform/${eventId}`);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/protected-route`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      });

      if (response.ok) {
        navigate(`/bookingform/${eventId}`); // User is authenticated, proceed to booking form
      } else {
        navigate(`/auth?redirect=/bookingform/${eventId}`); // Redirect to login
      }
    } catch (error) {
      console.error("Error checking authentication:", error);
      navigate("/visit"); // Redirect to a fallback page if request fails
    } finally {
      setLoading(false);
    }
  };



  return (
    <button
      className="bg-yellow-500 hover:bg-yellow-600 text-base text-black font-semibold py-2 px-4 rounded-lg transition-all duration-300 disabled:bg-gray-400 disabled:cursor-not-allowed"
      onClick={handleBooking}
      disabled={isRegistered}
    >
      {isRegistered ? "Registered" : "BOOK TICKET"}
    </button>
  );
};

export default BookingButton;

