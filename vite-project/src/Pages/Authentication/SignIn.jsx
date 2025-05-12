// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { FormInput } from "./FormInput";
// export const SignIn = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <form className="space-y-6">
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         Welcome Back
//       </h1>
//       <FormInput
//         label="Username or Roll Number"
//         type="text"
//         placeholder="Enter your username or roll number"
//         id="username2"
//         name="username2"
//         required
//       />
//       <div className="relative">
//         <FormInput
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter your password"
//           id="pass2"
//           name="password2"
//           required
//         />
//         <button
//           type="button"
//           className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>
//       <div className="flex items-center justify-between">
//         <label className="flex items-center space-x-2 cursor-pointer">
//           <input
//             type="checkbox"
//             className="w-4 h-4 rounded border-gray-600 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-800"
//           />
//           <span className="text-sm text-gray-300">Remember me</span>
//         </label>
//         <button
//           type="button"
//           className="text-sm text-yellow-400 hover:text-yellow-300 "
//         >
//           Forgot Password?
//         </button>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// };




// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { FormInput } from "./FormInput";

// export const SignIn = () => {
//   const [showPassword, setShowPassword] = useState(false);
  
//   return (
//     <form className="space-y-6">
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         Welcome Back
//       </h1>
//       <FormInput
//         label="Email"
//         type="email"
//         placeholder="Enter your email"
//         id="email"
//         name="email"
//         required
//       />
//       <div className="relative">
//         <FormInput
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter your password"
//           id="password"
//           name="password"
//           required
//         />
//         <button
//           type="button"
//           className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>
//       <div className="flex items-center justify-between">
//         <label className="flex items-center space-x-2 cursor-pointer">
//           <input
//             type="checkbox"
//             className="w-4 h-4 rounded border-gray-600 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-800"
//           />
//           <span className="text-sm text-gray-300">Remember me</span>
//         </label>
//         <button
//           type="button"
//           className="text-sm text-yellow-400 hover:text-yellow-300 "
//         >
//           Forgot Password?
//         </button>
//       </div>
//       <button
//         type="submit"
//         className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// };




// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { useNavigate } from "react-router-dom"; // For redirection
// import { FormInput } from "./FormInput";

// export const SignIn = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate(); // Hook for redirection

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(""); // Clear previous errors

//     try {
//       const response = await fetch("http://localhost:5000/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.message || "Login failed");
//       }

//       localStorage.setItem("token", data.token);
//       localStorage.setItem("userRole", data.user.role);

//       // Redirect based on role
//       if (data.user.role === "student") {
//         navigate("/studentdashboard");
//       } else if (data.user.role === "clublead") {
//         navigate("/clubleaddashboard");
//       } else {
//         navigate("/"); // Default route if role is unknown
//       }
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         Welcome Back
//       </h1>
      
//       {error && <p className="text-red-500 text-center">{error}</p>}

//       <FormInput
//         label="Email"
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       />

//       <div className="relative">
//         <FormInput
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Enter your password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button
//           type="button"
//           className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
//           onClick={() => setShowPassword(!showPassword)}
//         >
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>

//       <div className="flex items-center justify-between">
//         <label className="flex items-center space-x-2 cursor-pointer">
//           <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-800" />
//           <span className="text-sm text-gray-300">Remember me</span>
//         </label>
//         <button type="button" className="text-sm text-yellow-400 hover:text-yellow-300 ">
//           Forgot Password?
//         </button>
//       </div>

//       <button
//         type="submit"
//         className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
//       >
//         Sign In
//       </button>
//     </form>
//   );
// };


import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom"; // For redirection
import axios from "axios"; // Axios for API requests
import { FormInput } from "./FormInput";
import {toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for redirection

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post(
        "http://localhost:5000/login",
        { email, password },
       
      );

      const data = response.data;
      console.log(data)
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userRole", data.user.role);
      console.log(data.user.role)
      alert("Login Successfully")
      toast.success('Login Successfully 💚',{
        position:"bottom-right",
    }); 
    console.log("Toast Fired ");
  //  navigate("/studentdashboard")
    // setTimeout(()=>{ navigate("/studentdashboard"); },3000);
      // Redirect based on role
      if (data.user.role === "Student") {
        navigate("/studentdashboard");
      } else if (data.user.role === "Club-Lead") {
        navigate("/club-leaddashboard");
      } else {
        navigate("/"); // Default route if role is unknown
      }
    } catch (err) {
      console.log(err)
      alert("Login Failed")
      toast.error('Login Failed',{
        position:"bottom-right",
    });

      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
        Welcome Back
      </h1>
      
      {error && <p className="text-red-500 text-center">{error}</p>}

      <FormInput
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <div className="relative">
        <FormInput
          label="Password"
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="button"
          className="absolute right-3 top-[38px] text-gray-400 hover:text-white"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center space-x-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 rounded border-gray-600 text-yellow-400 focus:ring-yellow-400 focus:ring-offset-gray-800" />
          <span className="text-sm text-gray-300">Remember me</span>
        </label>
        <button type="button" className="text-sm text-yellow-400 hover:text-yellow-300 ">
          Forgot Password?
        </button>
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors"
      >
        Sign In
      </button>
    </form>
  );
};
