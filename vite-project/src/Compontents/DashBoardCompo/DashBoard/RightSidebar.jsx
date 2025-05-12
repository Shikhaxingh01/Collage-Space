import React from "react";
import { NavLink } from "react-router-dom";
import { Bot, Video, MessageCircle } from "lucide-react";
export const RightSidebar = () => {


  const item = [
    {
      href:"/studentdashboard/ai_assistant",
      label:"",
    },
    {
      href:"",
      label:"",
    },
    {
      href:"",
      label:"",
    }
  ]
  return (
    <aside className="fixed right-0 top-16 w-64 h-[calc(100vh-4rem)] bg-gray-900 border-l border-gray-800 p-4">
      <div className="space-y-4">
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Bot className="h-5 w-5 text-yellow-400" />
            <h3 className="text-gray-100 font-medium">AI Assistant</h3>
          </div>
          <NavLink to="/studentdashboard/ai_assistant">
          <button className="w-full bg-gray-700 text-gray-300 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
            Ask for Help
          </button></NavLink>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Video className="h-5 w-5 text-yellow-400" />
            <h3 className="text-gray-100 font-medium">Quick Meeting</h3>
          </div>
          <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer">
          <button className="w-full bg-gray-700 text-gray-300 py-2 rounded-lg text-sm hover:bg-gray-600 transition-colors">
            Start Video Call
          </button>
          </a>
        </div>
        <div className="bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="h-5 w-5 text-yellow-400" />
            <h3 className="text-gray-100 font-medium">Recent Chats</h3>
          </div>
          <div className="space-y-2">
            {["Coding Club", "Photography Team", "Event Committee"].map(
              (chat, index) => (
                <button
                  key={index}
                  className="w-full text-left text-gray-300 text-sm py-2 px-3 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  {chat}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </aside>
  );
};
