import React from "react";
import { Mic, Book, PenTool, Users } from "lucide-react";
const activities = [
  {
    icon: <Mic className="w-6 h-6" />,
    title: "Poetry Slams",
    description: "Express yourself through spoken word",
  },
  {
    icon: <Book className="w-6 h-6" />,
    title: "Book Readings",
    description: "Dive deep into literary masterpieces",
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "Writing Workshops",
    description: "Craft your stories with guidance",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Literary Discussions",
    description: "Engage in thoughtful dialogue",
  },
];
export const Activities = () => {
  return (
    <section className="w-full bg-gray-800 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">
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
              <p className="text-gray-400 ">
                {activity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
