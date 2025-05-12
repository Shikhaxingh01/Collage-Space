import React, { useState } from 'react'

import { NavLink } from 'react-router-dom'

import {
  CalendarPlusIcon,
  MegaphoneIcon,
  VideoIcon,
  ClipboardListIcon,
  PlusIcon,
  SendIcon,
  UsersIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from 'lucide-react'
import { Announcement } from './Announcement'
const FunctionalitiesPanel = () => {
  const [activeTab, setActiveTab] = useState('event')
  const tabs = [
    {
      id: 'event',
      label: 'Add Event',
      icon: <CalendarPlusIcon size={18} />,
    },
    {
      id: 'announcement',
      label: 'Add Announcement',
      icon: <MegaphoneIcon size={18} />,
    },
    {
      id: 'meeting',
      label: 'Start Meeting',
      icon: <VideoIcon size={18} />,
    },
    {
      id: 'attendance',
      label: 'Provide Attendance',
      icon: <ClipboardListIcon size={18} />,
    },
  ]
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Functionalities</h2>
        <span className="text-xs bg-indigo-500 text-white px-2 py-1 rounded-lg">
          Club Lead
        </span>
      </div>
      <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700 rounded-2xl overflow-hidden shadow-lg">
        <div className="flex border-b border-slate-700">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`flex items-center px-5 py-3 text-sm font-medium ${activeTab === tab.id ? 'text-teal-400 border-b-2 border-teal-400' : 'text-slate-400 hover:text-white'}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-6">
          {activeTab === 'event' && (
            <div className="space-y-5">
              <h3 className="text-lg font-medium text-white">
                Create New Event
              </h3>
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Event Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                      placeholder="Enter event name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Date & Time
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="relative">
                        <input
                          type="date"
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        />
                        <CalendarIcon
                          size={16}
                          className="absolute right-3 top-3 text-slate-400"
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="time"
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        />
                        <ClockIcon
                          size={16}
                          className="absolute right-3 top-3 text-slate-400"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        placeholder="Enter location"
                      />
                      <MapPinIcon
                        size={16}
                        className="absolute right-3 top-3 text-slate-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Description
                    </label>
                    <textarea
                      className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500 h-32"
                      placeholder="Describe your event"
                    ></textarea>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Event Type
                    </label>
                    <select className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500">
                      <option>Workshop</option>
                      <option>Competition</option>
                      <option>Meetup</option>
                      <option>Conference</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
              </div> */}
              <div className="flex justify-end space-x-3 pt-3">
                <button className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors">
                  Cancel
                </button>
                <NavLink to="/addEvent">

                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white hover:from-teal-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-teal-500/20">
                  Create Event
                </button>
                </NavLink>
              </div>
            </div>
          )}
            {activeTab === 'announcement' && (<Announcement/>)}
          {activeTab === 'meeting' && (
            <div className="space-y-5">
              <h3 className="text-lg font-medium text-white">
                Start or Schedule Meeting
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-slate-700/30 border border-slate-600 rounded-2xl p-5 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto">
                    <VideoIcon size={28} />
                  </div>
                  <h4 className="text-lg font-medium text-white">
                    Start Instant Meeting
                  </h4>
                  <p className="text-sm text-slate-400">
                    Start an immediate video meeting with your team members
                  </p>
                  <button className="px-6 py-3 w-full rounded-xl bg-indigo-500 text-white hover:bg-indigo-600 transition-all shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center">
                    <VideoIcon size={18} className="mr-2" />
                    Start Now
                  </button>
                </div>
                <div className="bg-slate-700/30 border border-slate-600 rounded-2xl p-5 space-y-4">
                  <h4 className="text-lg font-medium text-white">
                    Schedule Meeting
                  </h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-1">
                        Meeting Title
                      </label>
                      <input
                        type="text"
                        className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        placeholder="Enter meeting title"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Date
                        </label>
                        <input
                          type="date"
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-300 mb-1">
                          Time
                        </label>
                        <input
                          type="time"
                          className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="px-4 py-2 w-full rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white hover:from-teal-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-teal-500/20">
                    Schedule
                  </button>
                </div>
              </div>
            </div>
          )}
          {activeTab === 'attendance' && (
            <div className="space-y-5">
              <h3 className="text-lg font-medium text-white">
                Provide Attendance to Faculty
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Select Event
                    </label>
                    <select className="bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500">
                      <option>Weekly Club Meeting - Oct 10</option>
                      <option>Workshop: UI/UX Basics - Oct 5</option>
                      <option>Guest Lecture: AI Ethics - Sep 28</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-1">
                      Faculty
                    </label>
                    <select className="bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500">
                      <option>Dr. Sarah Johnson</option>
                      <option>Prof. Michael Lee</option>
                      <option>Dr. Emma Rodriguez</option>
                    </select>
                  </div>
                </div>
                <div className="bg-slate-700/30 border border-slate-600 rounded-2xl overflow-hidden">
                  <div className="p-4 bg-slate-700/50 border-b border-slate-600 flex justify-between items-center">
                    <h4 className="font-medium text-white">Attendance List</h4>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-slate-400">22 Members</span>
                      <button className="p-1 rounded-md hover:bg-slate-600 text-slate-400 hover:text-white">
                        <PlusIcon size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="max-h-64 overflow-y-auto">
                    <table className="w-full">
                      <thead className="bg-slate-700/30 border-b border-slate-600">
                        <tr>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-400">
                            Name
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-400">
                            ID
                          </th>
                          <th className="py-2 px-4 text-left text-xs font-medium text-slate-400">
                            Status
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            name: 'Alex Kim',
                            id: 'S12345',
                            present: true,
                          },
                          {
                            name: 'Sarah Chen',
                            id: 'S12346',
                            present: true,
                          },
                          {
                            name: 'Mike Johnson',
                            id: 'S12347',
                            present: false,
                          },
                          {
                            name: 'Lisa Wong',
                            id: 'S12348',
                            present: true,
                          },
                          {
                            name: 'David Park',
                            id: 'S12349',
                            present: true,
                          },
                          {
                            name: 'Emma Lee',
                            id: 'S12350',
                            present: false,
                          },
                        ].map((student, index) => (
                          <tr key={index} className="border-b border-slate-700">
                            <td className="py-3 px-4 text-sm text-white">
                              {student.name}
                            </td>
                            <td className="py-3 px-4 text-sm text-slate-300">
                              {student.id}
                            </td>
                            <td className="py-3 px-4">
                              <select
                                className={`text-xs rounded-full px-3 py-1 ${student.present ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'} border-0 focus:ring-0`}
                              >
                                <option
                                  value="present"
                                  selected={student.present}
                                >
                                  Present
                                </option>
                                <option
                                  value="absent"
                                  selected={!student.present}
                                >
                                  Absent
                                </option>
                              </select>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-3 pt-3">
                <button className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors">
                  Save Draft
                </button>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white hover:from-teal-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-teal-500/20 flex items-center">
                  <SendIcon size={16} className="mr-2" />
                  Submit to Faculty
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
// Additional icons needed
const ListIcon = ({ size = 24, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="8" y1="6" x2="21" y2="6"></line>
      <line x1="8" y1="12" x2="21" y2="12"></line>
      <line x1="8" y1="18" x2="21" y2="18"></line>
      <line x1="3" y1="6" x2="3.01" y2="6"></line>
      <line x1="3" y1="12" x2="3.01" y2="12"></line>
      <line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  )
}
const ListOrderedIcon = ({ size = 24, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="10" y1="6" x2="21" y2="6"></line>
      <line x1="10" y1="12" x2="21" y2="12"></line>
      <line x1="10" y1="18" x2="21" y2="18"></line>
      <path d="M4 6h1v4"></path>
      <path d="M4 10h2"></path>
      <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"></path>
    </svg>
  )
}
export default FunctionalitiesPanel
