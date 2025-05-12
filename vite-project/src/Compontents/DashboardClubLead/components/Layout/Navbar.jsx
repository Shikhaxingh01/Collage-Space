import React from 'react';
import { SearchIcon, BellIcon, Settings2Icon, MenuIcon } from 'lucide-react';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-slate-800/80 backdrop-blur-md border-b border-slate-700 px-4 py-3 flex items-center justify-between shadow-md">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="mr-4 text-slate-400 hover:text-teal-400 transition-colors"
        >
          <MenuIcon size={22} />
        </button>
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-yellow-300 to-amber-500 flex items-center justify-center mr-3">
            <span className="font-bold text-sm">CL</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-yellow-300 to-amber-500 bg-clip-text text-transparent">
            COLLEGE SPACE
          </h1>
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search events, clubs, or members..."
            className="w-full bg-slate-700/50 border border-slate-600 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
          />
          <SearchIcon
            size={18}
            className="absolute left-3 top-2.5 text-slate-400"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-slate-300 hover:text-teal-400 transition-all relative">
          <BellIcon size={20} />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-indigo-500 rounded-full flex items-center justify-center text-xs">
            3
          </span>
        </button>
        <button className="text-slate-300 hover:text-teal-400 transition-all">
          <Settings2Icon size={20} />
        </button>

        <div className="relative group">
          <button className="h-9 w-9 rounded-full bg-gradient-to-br from-yellow-100 to-amber-500 p-0.5">
            <div className="h-full w-full rounded-full bg-slate-800 flex items-center justify-center text-yellow-100 font-semibold overflow-hidden">
              JS
            </div>
          </button>
          <div className="absolute z-100 right-0 mt-2 w-48 bg-slate-800 border border-slate-700 rounded-xl shadow-lg py-2 hidden group-hover:block">
            <div className="px-4 z-100 py-2 border-b border-slate-700">
              <p className="font-medium text-white">John Smith</p>
              <p className="text-xs text-slate-400">Club Lead • Tech Club</p>
            </div>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              Profile Settings
            </a>
            <a
              href="#"
              className="block px-4 py-2 text-sm hover:bg-slate-700 text-slate-300 hover:text-white"
            >
              Log out
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
