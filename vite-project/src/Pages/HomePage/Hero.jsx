// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export const Hero = () => {
//   return (
//     <div className="bg-gray-900 min-h-[600px] flex items-center">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
//             <span className="block">Seamless Campus</span>
//             <span className="block text-yellow-400">
//               Interaction Starts Here
//             </span>
//           </h1>
//           <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl ">
//             Connect, collaborate, and create with your college community. Join
//             clubs, attend events, and make the most of your campus life.
//           </p>
//           <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
//             <div className="rounded-md shadow">

//             <NavLink to="/auth">
//               <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
//                 Get Started <ArrowRight className="ml-2 h-5 w-5" />
//               </button>
//               </NavLink>
//             </div>
//             <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
//             <NavLink to="/clubs"> 
//               <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
//                 Explore Clubs
//               </button>
//             </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// import React from "react";
// import { ArrowRight } from "lucide-react";
// import { NavLink } from "react-router-dom";

// export const Hero = () => {
//   return (
//     <div 
//       className="min-h-[600px] flex items-center bg-gray-900 bg-cover bg-center bg-no-repeat" 
//       style={{  backgroundImage: "url('/downloadcollege Image.jpg')" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center bg-black bg-opacity-50 p-6 rounded-lg">
//           <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
//             <span className="block">Seamless Campus</span>
//             <span className="block text-yellow-400">
//               Interaction Starts Here
//             </span>
//           </h1>
//           <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
//             Connect, collaborate, and create with your college community. Join
//             clubs, attend events, and make the most of your campus life.
//           </p>
//           <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
//             <div className="rounded-md shadow">
//               <NavLink to="/auth">
//                 <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
//                   Get Started <ArrowRight className="ml-2 h-5 w-5" />
//                 </button>
//               </NavLink>
//             </div>
//             <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
//               <NavLink to="/clubs">
//                 <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
//                   Explore Clubs
//                 </button>
//               </NavLink>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center bg-gray-900">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat  opacity-20" 
        style={{ backgroundImage: "url('/downloadcollege Image.jpg')" }}
      ></div>

      {/* Content with overlay effect to remain clear */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl tracking-tight font-bold text-white sm:text-5xl md:text-6xl">
            <span className="block">Seamless Campus</span>
            <span className="block text-yellow-400">
              Interaction Starts Here
            </span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Connect, collaborate, and create with your college community. Join
            clubs, attend events, and make the most of your campus life.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <NavLink to="/auth">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 md:py-4 md:text-lg md:px-10">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
              </NavLink>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <NavLink to="/clubs">
                <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10">
                  Explore Clubs
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
