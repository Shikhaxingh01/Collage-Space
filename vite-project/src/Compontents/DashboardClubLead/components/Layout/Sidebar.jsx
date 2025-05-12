import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  LayoutDashboardIcon,
  CalendarIcon,
  UsersIcon,
  MessageSquareIcon,
  SettingsIcon,
} from 'lucide-react';

const Sidebar = ({ isCollapsed }) => {
  const menuItems = [
    {
      icon: <LayoutDashboardIcon size={22} />,
      label: 'Dashboard',
      active: false,
      href:"/club-leaddashboard"
    },
    {
      icon: <CalendarIcon size={22} />,
      label: 'Events',
      active: false,
      href:"/event"
    },
    {
      icon: <UsersIcon size={22} />,
      label: 'Clubs',
      active: false,
      href:"/clubs"
    },
    {
      icon: <MessageSquareIcon size={22} />,
      label: 'Announcement',
      active: false,

      href:"/announcemnet"
    },
    {
      icon: <SettingsIcon size={22} />,
      label: 'Functionalities',
      active: true,
      badge: true,
    },
  ];

  return (
    <aside
      className={`bg-slate-800/80 backdrop-blur-md border-r border-slate-700 transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.href}
                className={`flex items-center p-3 rounded-xl transition-all duration-200 group relative ${
                  item.active
                    ? 'bg-gradient-to-r from-teal-500/20 to-indigo-500/20 text-white'
                    : 'text-slate-400 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span
                  className={`${
                    item.active
                      ? 'text-teal-400'
                      : 'text-slate-400 group-hover:text-teal-400'
                  }`}
                >
                  {item.icon}
                </span>
                {!isCollapsed && (
                  <span className={`ml-3 ${item.active ? 'font-medium' : ''}`}>
                    {item.label}
                  </span>
                )}
                {item.badge && (
                  <span
                    className={`${
                      isCollapsed ? 'absolute -top-1 -right-1' : 'ml-auto'
                    } flex h-5 w-5 items-center justify-center rounded-full bg-indigo-500 text-xs font-semibold`}
                  >
                    2
                  </span>
                )}
                {isCollapsed && (
                  <div className="absolute left-14 z-10 w-auto p-2 m-2 min-w-max rounded-md shadow-md text-white bg-slate-800 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100">
                    {item.label}
                  </div>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
