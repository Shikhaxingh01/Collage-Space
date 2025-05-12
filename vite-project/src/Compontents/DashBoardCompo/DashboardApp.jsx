import React, { useState } from "react";
import { Navbar } from "./Navigation/Navbar";
import { Sidebar } from "./Navigation/Sidebar";
import { FeaturedClubs } from "./DashBoard/FeaturedClub";
import { RightSidebar } from "./DashBoard/RightSidebar";
import { AnnouncementSection } from "./DashBoard/Announcement/AnnouncementSection";
import { Announcement } from "./DashBoard/Announcement/Announcement";
import { Outlet } from "react-router-dom";


export default function DashboardApp() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isDark, setIsDark] = useState(true);
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar
        toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        isDark={isDark}
        toggleTheme={() => setIsDark(!isDark)}
      />
      <Sidebar isOpen={sidebarOpen} />
      <main
        className={`pt-16 transition-all duration-300 ${sidebarOpen ? "ml-64" : "ml-16"} lg:mr-64`}
      >
        {/* <div className="p-6"> */}
          {/* <FeaturedClubs /> */}
          {/* Additional dashboard sections will be added here */}
        {/* </div> */}

        {/* <main className="flex-1 overflow-y-auto p-6">
          <AnnouncementSection />
        </main> */}
       <div className="">
       <Outlet></Outlet>
       </div>
    
      </main>
      <div className="lg:block hidden">
      <RightSidebar />
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import { Navbar } from "./Navigation/Navbar";
// import { Sidebar } from "./Navigation/Sidebar";
// import { RightSidebar } from "./DashBoard/RightSidebar";
// import { Outlet } from "react-router-dom";

// export default function DashboardApp() {
//   const [sidebarOpen, setSidebarOpen] = useState(false); // default closed on mobile
//   const [isDark, setIsDark] = useState(true);

//   return (
//     <div className="min-h-screen bg-gray-900 text-white">
//       {/* Navbar */}
//       <Navbar
//         toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
//         isDark={isDark}
//         toggleTheme={() => setIsDark(!isDark)}
//       />

//       {/* Sidebar */}
//       {/* Desktop Sidebar (md and up) */}
//       <div className="hidden md:block">
//         <Sidebar isOpen={true} />
//       </div>

//       {/* Mobile Sidebar (less than md) - overlay style */}
//       {sidebarOpen && (
//         <div className="md:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
//           <Sidebar isOpen={true} />
//           <button
//             className="absolute top-4 right-4 text-white text-xl"
//             onClick={() => setSidebarOpen(false)}
//           >
//             ✕
//           </button>
//         </div>
//       )}

//       {/* Main Content */}
//       <main
//         className={`pt-16 transition-all duration-300 md:ml-64 lg:mr-64`}
//       >
//         <div>
//           <Outlet />
//         </div>
//       </main>

//       {/* Right Sidebar (hidden on small screens) */}
//       <div className="hidden lg:block">
//         <RightSidebar />
//       </div>
//     </div>
//   );
// }
