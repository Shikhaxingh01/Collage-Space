import React from "react";
import { Search, Bell, Settings, Moon, Sun, Menu, Home } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUser } from "@/hooks/useUser";

export const Navbar = ({ toggleSidebar, isDark, toggleTheme }) => {

  const {user , loading , error } = useUser()


  return (
    loading?"Loading...":
    
    <nav className="fixed top-0 w-full bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Left Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Menu className="h-5 w-5 text-gray-300" />
            </button>
            <NavLink to='/' className="text-yellow-400 text-xl font-bold">COLLEGE SPACE</NavLink>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl px-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search events, clubs, or members..."
                className="w-full bg-gray-800 text-gray-300 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Bell className="h-5 w-5 text-gray-300" />
            </button>
            <button className="p-2 rounded-lg hover:bg-gray-800 transition-colors">
              <Settings className="h-5 w-5 text-gray-300" />
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-gray-300" />
              ) : (
                <Moon className="h-5 w-5 text-gray-300" />
              )}
            </button>
            <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
              <span className="text-gray-900 font-medium">{"Jc"||user?.firstName[0]+user?.lastName[0]}</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
