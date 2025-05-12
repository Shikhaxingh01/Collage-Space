// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate ,useParams } from "react-router-dom";

// const BookingForm = () => {
//   const { eventId } = useParams();
//   const [user, setUser] = useState(null); // Initially null to indicate loading
//   const [name, setName] = useState("");
//   const [rollNumber, setRollNumber] = useState("");
//   const [email, setEmail] = useState("");

  
//   const navigate = useNavigate();

       
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await axios.post(
//         "http://localhost:5000/api/bookEvent/bookanevent",
//         { name, rollNumber, eventId,email },
//       );
//       alert("Booking Successful!");
//       navigate("/events");
//     } catch (error) {
//       console.log(error);
//       alert("Something went wrong! Please try again.");
//     }
//   };

 

//   return (
//     <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
//       <h2 className="text-2xl font-bold mb-4 text-center">Book Your Event</h2>
//       <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//           className="px-3 py-2 bg-gray-700 rounded"
//         />
//         <input
//           type="text"
//           placeholder="Roll Number"
//           value={rollNumber}
//           onChange={(e) => setRollNumber(e.target.value)}
//           required
//           className="px-3 py-2 bg-gray-700 rounded"
//         />
//         <input
//           type="email"
//           placeholder="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//           className="px-3 py-2 bg-gray-700 rounded"
//         />
       
//         <input
//           type="Text"
//           value={eventId}
//           readOnly
//           className="px-3 py-2 bg-gray-700 rounded cursor-not-allowed"
//         />
//         <button
//           type="submit"
//           className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
//         >
//           Book Now
//         </button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;



import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const BookingForm = () => {
  const { eventId } = useParams();
  const [email, setEmail] = useState(""); // Prefilled email
  const [name, setName] = useState(""); // User input
  const [rollNumber, setRollNumber] = useState(""); // User input
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserEmail = async () => {
      const token = localStorage.getItem("authToken");

      if (!token) {
        navigate(`/auth?redirect=/bookingform/${eventId}`);
        return;
      }

      try {
        const response = await axios.get(`http://localhost:5000/protected-route`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.status === 200) {
          setEmail(response.data.user.email); // Prefill email
        } else {
          navigate(`/auth?redirect=/bookingform/${eventId}`);
        }
      } catch (error) {
        console.error("Authentication error:", error);
        navigate(`/auth?redirect=/bookingform/${eventId}`);
      }
    };

    fetchUserEmail();
  }, [eventId, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `http://localhost:5000/api/bookEvent/bookanevent`,
        { name, rollNumber, eventId, email },
        { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } }
      );
      alert("Booking Successful!");
      navigate("/event");
    } catch (error) {
      console.error(error);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-5 bg-gray-800 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Book Your Event</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="px-3 py-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
          required
          className="px-3 py-2 bg-gray-700 rounded"
        />
        <input
          type="email"
          value={email}
          readOnly
          className="px-3 py-2 bg-gray-700 rounded cursor-not-allowed"
        />
        <input
          type="text"
          value={eventId}
          readOnly
          className="px-3 py-2 bg-gray-700 rounded cursor-not-allowed"
        />
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition-all duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;

