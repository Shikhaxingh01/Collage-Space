import React from "react";
import { MessageSquare, Video, Calendar, Bot } from "lucide-react";
export const Features = () => {
  const features = [
    {
      icon: <MessageSquare className="h-6 w-6 text-yellow-400" />,
      title: "Real-time Chat",
      description: "Stay connected with instant messaging and group chats.",
    },
    {
      icon: <Video className="h-6 w-6 text-yellow-400" />,
      title: "Video Calls",
      description: "Host virtual meetings and collaborate face-to-face.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-yellow-400" />,
      title: "Event Management",
      description: "Organize and track club events effortlessly.",
    },
    {
      icon: <Bot className="h-6 w-6 text-yellow-400" />,
      title: "AI Support",
      description: "Get instant help with our AI-powered chatbot.",
    },
  ];
  return (
    <div className="bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl ">
            Powerful Features for Campus Life
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex justify-center items-center h-12 w-12 rounded-md bg-gray-800 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-white text-center">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-400 text-center">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
