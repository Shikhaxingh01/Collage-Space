import React from "react";
import { Pen, Users, Sparkles } from "lucide-react";
const activities = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Stage Productions",
    description: "Perform in grand theatrical shows",
  },
  {
    icon: <Pen className="w-6 h-6" />,
    title: "Script Writing",
    description: "Craft compelling narratives",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Acting Workshops",
    description: "Master the art of performance",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Theater Groups",
    description: "Join themed performance teams",
  },
];
export const Activities = () => {
  return (
    <section className="w-full bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center ">
          Events & Activities
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gray-900 hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="text-yellow-300 mb-4 group-hover:scale-110 transition-transform duration-300">
                {activity.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {activity.title}
              </h3>
              <p className="text-gray-400 font-[Inter]">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
