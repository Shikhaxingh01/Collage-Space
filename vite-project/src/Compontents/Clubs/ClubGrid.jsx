// import { 
//     SearchIcon,
//     UsersIcon,
//     CalendarIcon,
//     ChevronRightIcon,
//     BookIcon,
//     MusicIcon,
//     FootprintsIcon,
//     HeartIcon,
//     CodeIcon,
//     BrainIcon,
//   } from "lucide-react";
//   import React, { useState } from "react";
  
//   function ClubGrid() {
//     const [searchQuery, setSearchQuery] = useState("");
    
//     const clubs = [
//       {
//         name: "Viva",
//         href:"/literati",icon: <HeartIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Cultural and social activities club bringing campus life to the fullest",
//         members: 156,
//         nextEvent: "Cultural Night - Dec 15",
//       },
//       {
//         name: "Literati",
//         href:"/literati",icon: <BookIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Literary society for book lovers and creative writers",
//         members: 89,
//         nextEvent: "Poetry Slam - Dec 10",
//       },
//       {
//         name: "Euphony",
//         href:"/literati",icon: <MusicIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Music club for aspiring singers and musicians",
//         members: 120,
//         nextEvent: "Winter Concert - Dec 20",
//       },
//       {
//         name: "Step",
//         href:"/literati",icon: <FootprintsIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Dance club celebrating various dance forms",
//         members: 95,
//         nextEvent: "Dance Workshop - Dec 12",
//       },
//       {
//         name: "Dracula",
//         href:"/literati",icon: <HeartIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Drama and theater arts society",
//         members: 78,
//         nextEvent: "Annual Play - Dec 18",
//       },
//       {
//         name: "GFG",
//         href:"/literati",icon: <CodeIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Coding and programming community",
//         members: 245,
//         nextEvent: "Hackathon - Dec 16",
//       },
//       {
//         name: "Decoder",
//         href:"/literati",icon: <BrainIcon className="w-8 h-8 text-yellow-400" />,
//         description: "Problem-solving and analytical thinking club",
//         members: 167,
//         nextEvent: "Logic Games - Dec 14",
//       },
//     ];
  
//     const filteredClubs = clubs.filter((club) =>
//       club.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
  
//     return (
//       <div className="w-full min-h-screen bg-gray-900">
//         {/* Header Section */}
//         <header className="w-full px-6 py-4 bg-gray-800 border-b border-gray-700">
//           <div className="max-w-7xl mx-auto">
//             <h1 className="text-2xl font-bold text-white">Campus Clubs Dashboard</h1>
//             <nav className="mt-4">
//               <ul className="flex space-x-6 text-gray-300">
//                 <li className="hover:text-yellow-400 cursor-pointer">Clubs</li>
//                 <li className="hover:text-yellow-400 cursor-pointer">Events</li>
//                 <li className="hover:text-yellow-400 cursor-pointer">Members</li>
//                 <li className="hover:text-yellow-400 cursor-pointer">Resources</li>
//               </ul>
//             </nav>
//           </div>
//         </header>
  
//         {/* Search & Cards */}
//         <main className="max-w-7xl mx-auto px-6 py-8">
//           {/* Search Input */}
//           <div className="relative mb-8">
//             <input
//               type="text"
//               placeholder="Search clubs..."
//               className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <SearchIcon className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
//           </div>
  
//           {/* Club Cards */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filteredClubs.map((club) => (
//               <div
//                 key={club.name}
//                 className="bg-gray-800 rounded-xl shadow-md border border-gray-700 hover:shadow-lg hover:border-yellow-400 transition-all duration-300"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div className="text-white">{club.href:"/literati",icon}</div>
//                     <span className="flex items-center text-sm text-gray-300">
//                       <UsersIcon className="w-4 h-4 mr-1" />
//                       {club.members}
//                     </span>
//                   </div>
//                   <h3 className="text-xl font-semibold mb-2 text-white">{club.name}</h3>
//                   <p className="text-gray-400 text-sm mb-4">{club.description}</p>
//                   <div className="flex items-center text-sm text-gray-300 mb-4">
//                     <CalendarIcon className="w-4 h-4 mr-1" />
//                     {club.nextEvent}
//                   </div>
//                   <div className="flex space-x-3">
//                     <button className="flex-1 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
//                       Join Club
//                     </button>
//                     <button className="flex items-center justify-center px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-yellow-400 transition-colors">
//                       <span className="mr-1">Details</span>
//                       <ChevronRightIcon className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     );
//   }
  
//   export default ClubGrid;
  
import { NavLink } from "react-router-dom";

import { 
    SearchIcon,
    UsersIcon,
    CalendarIcon,
    ChevronRightIcon,
    BookIcon,
    MusicIcon,
    FootprintsIcon,
    HeartIcon,
    CodeIcon,
    BrainIcon,
    TrophyIcon,
    BotIcon,
    ClipboardIcon,
    PuzzleIcon
   
  } from "lucide-react";
  import React, { useState } from "react";
  
  function ClubGrid() {
    const [searchQuery, setSearchQuery] = useState("");
    
    const clubs = [
      { name: "Viva",href:"/viva",icon: <HeartIcon className="w-8 h-8 text-yellow-400" />, description: "Cultural and social activities club", members: 156, nextEvent: "Cultural Night - Dec 15" },
      { name: "Literati",href:"/literati",icon: <BookIcon className="w-8 h-8 text-yellow-400" />, description: "Literary society for book lovers", members: 89, nextEvent: "Poetry Slam - Dec 10" },
      { name: "Grobots", href:"/grobotics",icon: <BotIcon className="w-8 h-8 text-yellow-400" />, description: "Robotics club, participates in IITs/NITs", members: 130, nextEvent: "Robo Tournament - Feb 5" },
     
      { name: "Euphony",href:"/euphoney",icon: <MusicIcon className="w-8 h-8 text-yellow-400" />, description: "Music club for musicians", members: 120, nextEvent: "Winter Concert - Dec 20" },
      { name: "Step", href:"/step",icon: <FootprintsIcon className="w-8 h-8 text-yellow-400" />, description: "Dance club", members: 95, nextEvent: "Dance Workshop - Dec 12" },
      { name: "GFG", href:"/gfg",icon: <CodeIcon className="w-8 h-8 text-yellow-400" />, description: "Coding and programming community", members: 245, nextEvent: "Hackathon - Dec 16" },
      { name: "Decoder", href:"/decoder",icon: <BrainIcon className="w-8 h-8 text-yellow-400" />, description: "Problem-solving club", members: 167, nextEvent: "Logic Games - Dec 14" },
      { name: "Alogozenith", href:"/algozenith",icon: <CodeIcon className="w-8 h-8 text-yellow-400" />, description: "Competitive programming club", members: 180, nextEvent: "Coding Challenge - Dec 22" },
      { name: "GDSC", href:"/gdsc",icon: <CodeIcon className="w-8 h-8 text-yellow-400" />, description: "Focuses on development and open-source", members: 210, nextEvent: "Tech Meetup - Dec 18" },
      { name: "Sports", href:"/sports",icon: <TrophyIcon className="w-8 h-8 text-yellow-400" />, description: "Organizes sports events - Spardha", members: 190, nextEvent: "Annual Sports Day - Jan 5" },
      { name: "Table Tennis", href:"/tabletennis",icon: <TrophyIcon className="w-8 h-8 text-yellow-400" />, description: "For table tennis enthusiasts", members: 80, nextEvent: "TT Tournament - Jan 10" },
      { name: "Basketball Club", href:"/basketball",icon: <TrophyIcon className="w-8 h-8 text-yellow-400" />, description: "For basketball lovers", members: 110, nextEvent: "Intercollege Match - Jan 12" },
      { name: "SRMCEM Cricket Team", href:"/cricket",icon: <TrophyIcon className="w-8 h-8 text-yellow-400" />, description: "Participates & conducts SRMPL", members: 150, nextEvent: "SRMPL Finals - Jan 8" },
      { name: "Coding Ninja", href:"/codingninja",icon: <CodeIcon className="w-8 h-8 text-yellow-400" />, description: "DSA & Interview Prep", members: 230, nextEvent: "Mock Interview - Jan 15" },
      { name: "Managements", href:"/management",icon: <ClipboardIcon className="w-8 h-8 text-yellow-400" />, description: "Event organization and volunteering", members: 140, nextEvent: "Event Planning Workshop - Jan 20" },
      { name: "Chess Club", href:"/chess",icon: <PuzzleIcon className="w-8 h-8 text-yellow-400" />,description: "An independent chess club that participates in off-campus events.", members: 80, nextEvent: "Chess Championship - Jan 10",
      }
   
    ];
  
    const filteredClubs = clubs.filter((club) =>
      club.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    return (
      <div className="w-full min-h-screen bg-gray-900 px-6 py-8">
        <header className="mb-8">
          <h1 className="text-2xl font-bold text-white">Campus Clubs Dashboard</h1>
          <input
            type="text"
            placeholder="Search clubs..."
            className="w-full px-4 py-2 mt-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-yellow-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredClubs.map((club) => (
            <div key={club.name} className="bg-gray-800 rounded-xl shadow-md border border-gray-700 hover:shadow-lg hover:border-yellow-400 transition-all p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="text-white">{club.icon}</div>
                <span className="flex items-center text-sm text-gray-300">
                  <UsersIcon className="w-4 h-4 mr-1" />
                  {club.members}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{club.name}</h3>
              <p className="text-gray-400 text-sm mb-4">{club.description}</p>
              <div className="flex items-center text-sm text-gray-300 mb-4">
                <CalendarIcon className="w-4 h-4 mr-1" />
                {club.nextEvent}
              </div>
              
              
                 <div className="flex space-x-3 justify-center">
                 <NavLink to={club.href}>
                   <button className="flex font-semibold px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-colors">
                       Join Club
                     </button>
                    </NavLink>
                     <NavLink to={club.href}>
                     <button className="flex font-semibold items-center justify-center px-4 py-2 border border-gray-600 text-white rounded-lg hover:border-yellow-400 transition-colors">
                       <span className="mr-1 ">Details</span>
                       <ChevronRightIcon className="w-4 h-4" />
                     </button>
                     </NavLink>
                   </div>      
              
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default ClubGrid;
  