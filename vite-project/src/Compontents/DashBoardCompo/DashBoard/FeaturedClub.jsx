import React from "react";
import { Users, ArrowRight, ArrowLeft } from "lucide-react";
const clubs = [
  {
    name: "Coding Club",
    members: 120,
    description: "Join fellow developers and build amazing projects together",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Photography Club",
    members: 85,
    description: "Capture moments and share your creative vision",
    image:
      "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Dance Club",
    members: 150,
    description: "Express yourself through movement and rhythm",
    image:
      "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
  },
];
export const FeaturedClubs = () => {
  return (
    <div className="p-6">
    <div className="relative">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-100">Featured Clubs</h2>
        <div className="flex gap-2">
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <ArrowLeft className="h-5 w-5 text-gray-300" />
          </button>
          <button className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
            <ArrowRight className="h-5 w-5 text-gray-300" />
          </button>
        </div>
      </div>
      <div className="flex gap-6 overflow-x-auto pb-4 -mx-4 px-4">
        {clubs.map((club, index) => (
          <div
            key={index}
            className="min-w-[300px] bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-yellow-400 transition-all"
          >
            <img
              src={club.image}
              alt={club.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-100">
                {club.name}
              </h3>
              <div className="flex items-center text-gray-400 mt-1">
                <Users className="h-4 w-4 mr-1" />
                <span className="text-sm">{club.members} members</span>
              </div>
              <p className="text-gray-400 mt-2 text-sm">{club.description}</p>
              <button className="mt-4 w-full bg-yellow-400 text-gray-900 py-2 rounded-lg font-medium hover:bg-yellow-500 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};
