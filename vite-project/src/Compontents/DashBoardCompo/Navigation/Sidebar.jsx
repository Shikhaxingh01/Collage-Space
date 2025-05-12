// import React from "react";
// import {
//   Home,
//   Calendar,
//   Users,
//   Bell,
//   MessageSquare,
//   ChevronRight,
// } from "lucide-react";
// import { href,NavLink } from "react-router-dom";

// export const Sidebar = ({ isOpen }) => {
//   const menuItems = [
//     {
//       icon: Home,
//       label: "Home",
//       href:"/"
    
//     },
//     {
//       icon: Calendar,
//       label: "Events",
//       href:"/event"
//     },
//     {
//       icon: Users,
//       label: "Clubs",
//       href:"/clubs"
//     },
//     {
//       icon: Bell,
//       label: "Announcements",
//       href:"/studentdashboard/announcement"
//     },
//     {
//       icon: MessageSquare,
//       label: "Messages",
//       href:"/messages"
//     },
//   ];

//   return (
//     <aside
//       className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 transition-all duration-300 ${
//         isOpen ? "w-64" : "w-16"
//       }`}
//     >
//       <div className="py-4">
//         {menuItems.map((item, index) => (
//           <NavLink
            
//             to={item.href}
//             key={index}
//             className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 transition-colors"
//           >
//             <item.icon className="h-5 w-5 min-w-[20px]" />
//             {isOpen && <span className="ml-4">{item.label}</span>}


//             {/* Hover text (tooltip-style) */}
//   <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
//     {`Go to ${item.label}`}
//   </span>

//           </NavLink>
//         ))}
//       </div>
//     </aside>
//   );
// };





import React from "react";
import {
  Home,
  Calendar,
  Users,
  Bell,
  MessageSquare,
  Bot,
  Video,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

export const Sidebar = ({ isOpen }) => {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Calendar, label: "Events", href: "/event" },
    { icon: Users, label: "Clubs", href: "/clubs" },
    { icon: Bell, label: "Announcements", href: "/studentdashboard/announcement" },
    { icon: MessageSquare, label: "Messages", href: "/messages" },
  ];

  const bottomItems = [
    { icon: Bot, label: "AI Assistant", href: "/studentdashboard/ai_assistant" },
    { icon: Video, label: "Video Call", href: "/videocall" },
    { icon: MessageCircle, label: "Club Chats", href: "/clubchats" },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-gray-900 border-r border-gray-800 transition-all duration-300 flex flex-col justify-between ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      {/* Top Menu */}
      <div className="py-4">
        {menuItems.map((item, index) => (
          <NavLink
            to={item.href}
            key={index}
            className="w-full flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800 transition-colors relative group"
          >
            <item.icon className="h-5 w-5 min-w-[20px]" />
            {isOpen && <span className="ml-4">{item.label}</span>}
            <span className="absolute left-full ml-2  top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {`${item.label}`}
            </span>
          </NavLink>
        ))}
      </div>

      {/* Bottom Menu (only on small screens) */}
      <div className="lg:hidden pb-4">
        {bottomItems.map((item, index) => (
          <NavLink
            to={item.href}
            key={`bottom-${index}`}
            className="w-full flex items-center px-4 py-3 text-yellow-400 hover:bg-gray-800 transition-colors relative group"
          >
            <item.icon className="h-5 w-5 min-w-[20px]" />
            {isOpen && <span className="ml-4">{item.label}</span>}
            <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 bg-gray-900 text-yellow-400 text-sm px-2 py-1 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
              {`Open ${item.label}`}
            </span>
          </NavLink>
        ))}
      </div>
    </aside>
  );
};

