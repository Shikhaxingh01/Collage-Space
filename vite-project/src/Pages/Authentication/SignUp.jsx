// import React, { useState } from "react";
// import { Eye, EyeOff } from "lucide-react";
// import { FormInput } from "./FormInput";
// import { FormDropDown } from "./FormDropDown";
// import { PasswordStrength } from "./PasswordStrength";
// export const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   return (
//     <form className="space-y-6">
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         Create Account
//       </h1>
//       <div className="grid grid-cols-2 gap-4">
//         <FormInput label="First Name" type="text" placeholder="John" id="first1" name="firstName" required autocomplete="true" />
//         <FormInput label="Last Name" type="text" placeholder="Doe" id="last1" name="lastName" required autocomplete="true" />
//       </div>
//       <FormInput
//         label="E-mail"
//         type="email"
//         placeholder="Choose a username"
//         id="email1"
//         name="email"
//         autocomplete="true"
//         required
//       />
//       <FormInput
//         label="College Roll Number"
//         type="text"
//         placeholder="Enter your roll number"
//         id="rollnumber1"
//         name="rollnumber"
//         autocomplete="true"
//         required
//       />
//       <FormDropDown
//        label="Select Your Role"
//        options={["Student", "Club Lead"]}
//        type="dropbox"
//        placeholder="Select"
//        id="selectRoll"
//        name="selectRoll"
//       />
//       <div className="relative">
//         <FormInput
//           label="Password"
//           type={showPassword ? "text" : "password"}
//           placeholder="Choose a strong password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           id="password1"
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
//       <PasswordStrength password={password} />
//       <FormInput
//         label="Confirm Password"
//         type={showPassword ? "text" : "password"}
//         placeholder="Confirm your password"
//         id="confirmPass"
//         name="confirmpassword"
//         required
//       />
//       <button
       
//         type="submit"
//         className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-montserrat font-semibold hover:bg-yellow-300 transition-colors"
//       >
//         Create Account
//       </button>
//     </form>
//   );
// };





// import React, { useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { FormInput } from "./FormInput";
// import { FormDropDown } from "./FormDropDown";
// import { PasswordStrength } from "./PasswordStrength";

// export const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     rollNumber: "",
//     role: "Student",
//     password: "",
//   });
  
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     if (password !== confirmPassword) {
//       alert("Passwords do not match");
//       return;
//     }

//     try {
//       const response = await axios.post("http://localhost:5000/register", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true, 
//       });
      
//       alert(response.data.message);
//     } catch (error) {
//       alert(error.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <form className="space-y-6" onSubmit={handleSubmit}>
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         Create Account
//       </h1>
//       <div className="grid grid-cols-2 gap-4">
//         <FormInput label="First Name" type="text" placeholder="John" id="first1" name="firstName" required autoComplete="true" onChange={handleChange} />
//         <FormInput label="Last Name" type="text" placeholder="Doe" id="last1" name="lastName" required autoComplete="true" onChange={handleChange} />
//       </div>
//       <FormInput label="E-mail" type="email" placeholder="Enter your email" id="email1" name="email" required autoComplete="true" onChange={handleChange} />
//       <FormInput label="College Roll Number" type="text" placeholder="Enter your roll number" id="rollnumber1" name="rollNumber" required autoComplete="true" onChange={handleChange} />
//       <FormDropDown label="Select Your Role" options={["Student", "Club Lead"]} name="role" id="selectRoll" onChange={handleChange} />
//       <div className="relative">
//         <FormInput label="Password" type={showPassword ? "text" : "password"} placeholder="Choose a strong password" id="password1" name="password" required onChange={(e) => { setPassword(e.target.value); handleChange(e); }} />
//         <button type="button" className="absolute right-3 top-[38px] text-gray-400 hover:text-white" onClick={() => setShowPassword(!showPassword)}>
//           {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//         </button>
//       </div>
//       <PasswordStrength password={password} />
//       <FormInput label="Confirm Password" type={showPassword ? "text" : "password"} placeholder="Confirm your password" id="confirmPass" name="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)} />
//       <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-montserrat font-semibold hover:bg-yellow-300 transition-colors">
//         Create Account
//       </button>
//     </form>
//   );
// };





// import React, { useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { FormInput } from "./FormInput";
// import { FormDropDown } from "./FormDropDown";
// import { PasswordStrength } from "./PasswordStrength";
// import { toast } from "react-toastify";

// export const SignUp = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [loading, setLoading] = useState(false);
  
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     rollNumber: "",
//     role: "Student",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignUp = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }
//     setLoading(true);
//     try {
//       await axios.post("http://localhost:5000/register", formData, {
//         headers: { "Content-Type": "application/json" },
//         withCredentials: true,
//       });
//       handleOtpSend();
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Registration failed");
//       setLoading(false);
//     }
//   };

//   const handleOtpSend = async () => {
//     try {
//       await axios.post(`http://localhost:5000/send-otp`, { email: formData.email });
//       setIsOtpSent(true);
//       toast.success("OTP sent successfully");
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Error sending OTP");
//       setLoading(false);
//     }
//   };

//   const handleOtpVerify = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await axios.post(`http://localhost:5000/verify-otp`, { email: formData.email, otp });
//       toast.success("OTP verified successfully");
//       setLoading(false);
//     } catch (error) {
//       toast.error(error.response?.data?.message || "OTP verification failed");
//       setLoading(false);
//     }
//   };

//   return (
//     <form className="space-y-6" onSubmit={isOtpSent ? handleOtpVerify : handleSignUp}>
//       <h1 className="text-2xl font-poppins font-bold text-white text-center mb-8">
//         {isOtpSent ? "Verify OTP" : "Create Account"}
//       </h1>

//       {!isOtpSent ? (
//         <>
//           <div className="grid grid-cols-2 gap-4">
//             <FormInput label="First Name" type="text" name="firstName" required onChange={handleChange} />
//             <FormInput label="Last Name" type="text" name="lastName" required onChange={handleChange} />
//           </div>
//           <FormInput label="E-mail" type="email" name="email" required onChange={handleChange} />
//           <FormInput label="College Roll Number" type="text" name="rollNumber" required onChange={handleChange} />
//           <FormDropDown label="Select Your Role" options={["Student", "Club Lead"]} name="role" onChange={handleChange} />
//           <div className="relative">
//             <FormInput label="Password" type={showPassword ? "text" : "password"} name="password" required onChange={(e) => { setPassword(e.target.value); handleChange(e); }} />
//             <button type="button" className="absolute right-3 top-[38px] text-gray-400 hover:text-white" onClick={() => setShowPassword(!showPassword)}>
//               {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//             </button>
//           </div>
//           <PasswordStrength password={password} />
//           <FormInput label="Confirm Password" type={showPassword ? "text" : "password"} name="confirmPassword" required onChange={(e) => setConfirmPassword(e.target.value)} />
//           <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors" disabled={loading}>
//             {loading ? "Processing..." : "Sign Up & Send OTP"}
//           </button>
//         </>
//       ) : (
//         <>
//           <FormInput label="Enter OTP" type="text" name="otp" required onChange={(e) => setOtp(e.target.value)} />
//           <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-400 transition-colors" disabled={loading}>
//             {loading ? "Verifying..." : "Verify OTP"}
//           </button>
//         </>
//       )}
//     </form>
//   );
// };




import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { FormInput } from "./FormInput";
import { FormDropDown } from "./FormDropDown";
import { PasswordStrength } from "./PasswordStrength";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    rollNumber: "",
    role: "Student",
    password: "",
  });
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match",{
        position:'bottom-right'
      });
      return;
    }
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/register", formData, {
        headers: { "Content-Type": "application/json" },
      });
      toast.success("Registered successfully. Sending OTP...",{
        position:'bottom-right'
      });
      sendOtp();
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed",
        {
          position:'bottom-right'
        }
      );
      setLoading(false);
    }
  };

  const sendOtp = async () => {
    try {
      await axios.post("http://localhost:5000/send-otp", { email: formData.email });
      setIsOtpSent(true);
      toast.success("OTP sent successfully",
        {
          position:'bottom-right'
        }
      );
      setLoading(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Error sending OTP",{
        position:'bottom-right'
      });
      setLoading(false);
    }
  };

  const verifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post("http://localhost:5000/verify-otp", { email: formData.email, otp });
      toast.success("OTP verified successfully",{
        position:'bottom-right'
      });
      navigate(formData.role === "Student" ? "/studentdashboard" : "/club-leaddashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "OTP verification failed",{
        position:'bottom-right'
      });
    }
    setLoading(false);
  };

  return (
    <form className="space-y-6" onSubmit={!isOtpSent ? handleSubmit : verifyOtp}>
      <h1 className="text-2xl font-bold text-white text-center mb-8">
        {isOtpSent ? "Verify OTP" : "Create Account"}
      </h1>
      {!isOtpSent ? (
        <>
          <div className="grid grid-cols-2 gap-4">
            <FormInput label="First Name" type="text" name="firstName" onChange={handleChange} required />
            <FormInput label="Last Name" type="text" name="lastName" onChange={handleChange} required />
          </div>
          <FormInput label="E-mail" type="email" name="email" onChange={handleChange} required />
          <FormInput label="College Roll Number" type="text" name="rollNumber" onChange={handleChange} required />
          <FormDropDown label="Select Your Role" options={["Student", "Club-Lead"]} name="role" onChange={handleChange} />
          <div className="relative">
            <FormInput label="Password" type={showPassword ? "text" : "password"} name="password" onChange={(e) => { setPassword(e.target.value); handleChange(e); }} required />
            <button type="button" className="absolute right-3 top-[38px] text-gray-400 hover:text-white" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <PasswordStrength password={password} />
          <FormInput label="Confirm Password" type={showPassword ? "text" : "password"} name="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} required />
          <button type="submit" className="w-full bg-yellow-400 text-gray-900 py-3 rounded-md font-semibold hover:bg-yellow-300 transition-colors">
            {loading ? "Processing..." : "Create Account"}
          </button>
        </>
      ) : (
        <>
          <FormInput label="Enter OTP" type="text" name="otp" value={otp} onChange={(e) => setOtp(e.target.value)} required />
          <button type="submit" className="w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-400 transition-colors">
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}
    </form>
  );
};
