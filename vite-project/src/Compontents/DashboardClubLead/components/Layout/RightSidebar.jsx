import React from 'react'
import {
  BarChartIcon,
  CalendarIcon,
  ClockIcon,
  BellRingIcon,
} from 'lucide-react'
const RightSidebar = () => {
  return (
    <aside className="w-80 z-10 bg-slate-800/80 backdrop-blur-md border-l border-slate-700 p-4 overflow-y-auto hidden lg:block">
      <div className="space-y-6">
        {/* Quick Stats */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 shadow-lg">
          <div className="flex items-center mb-3">
            <BarChartIcon size={18} className="text-teal-400 mr-2" />
            <h3 className="text-white font-medium">Quick Stats</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-xs text-slate-400">Events Hosted</p>
              <p className="text-xl font-semibold text-white">12</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-xs text-slate-400">Pending Tasks</p>
              <p className="text-xl font-semibold text-white">5</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-xs text-slate-400">Active Members</p>
              <p className="text-xl font-semibold text-white">24</p>
            </div>
            <div className="bg-slate-700/50 rounded-xl p-3">
              <p className="text-xs text-slate-400">New Messages</p>
              <p className="text-xl font-semibold text-white">7</p>
            </div>
          </div>
        </div>
        {/* Team Chat Preview */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center">
              <MessageIcon size={18} className="text-indigo-400 mr-2" />
              <h3 className="text-white font-medium">Team Chat</h3>
            </div>
            <span className="text-xs bg-indigo-500 rounded-full px-2 py-0.5">
              3 new
            </span>
          </div>
          <div className="space-y-3">
            {[
              {
                name: 'Alex Kim',
                message: 'When is the next meeting?',
                time: '5m',
                avatar: 'AK',
                color: 'from-pink-500 to-purple-500',
              },
              {
                name: 'Sarah Chen',
                message: "I've uploaded the designs",
                time: '25m',
                avatar: 'SC',
                color: 'from-amber-500 to-orange-500',
              },
              {
                name: 'Mike Johnson',
                message: 'Can we discuss the budget?',
                time: '1h',
                avatar: 'MJ',
                color: 'from-emerald-500 to-teal-500',
              },
            ].map((chat, index) => (
              <div key={index} className="flex items-start space-x-2">
                <div
                  className={`h-8 w-8 rounded-full bg-gradient-to-br ${chat.color} flex items-center justify-center text-xs font-medium`}
                >
                  {chat.avatar}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium text-white">
                      {chat.name}
                    </p>
                    <span className="text-xs text-slate-400">{chat.time}</span>
                  </div>
                  <p className="text-xs text-slate-300 truncate">
                    {chat.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-3 py-2 text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
            View All Messages
          </button>
        </div>
        {/* Upcoming Deadlines */}
        <div className="bg-slate-800/50 rounded-2xl p-4 border border-slate-700 shadow-lg">
          <div className="flex items-center mb-3">
            <CalendarIcon size={18} className="text-teal-400 mr-2" />
            <h3 className="text-white font-medium">Upcoming Events</h3>
          </div>
          <div className="space-y-3">
            {[
              {
                title: 'Budget Submission',
                date: 'Oct 15',
                urgent: true,
              },
              {
                title: 'Team Meeting',
                date: 'Oct 18',
                urgent: false,
              },
              {
                title: 'Event Proposal',
                date: 'Oct 22',
                urgent: false,
              },
            ].map((event, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-700/30 border border-slate-700/50"
              >
                <div className="flex items-center">
                  <div className="mr-3 p-2 rounded-lg bg-slate-700/50">
                    <ClockIcon
                      size={16}
                      className={
                        event.urgent ? 'text-rose-400' : 'text-indigo-400'
                      }
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">
                      {event.title}
                    </p>
                    <p className="text-xs text-slate-400">Due {event.date}</p>
                  </div>
                </div>
                {event.urgent && (
                  <span className="text-xs bg-rose-500/20 text-rose-400 rounded-full px-2 py-0.5">
                    Urgent
                  </span>
                )}
              </div>
            ))}
          </div>
          <button className="w-full mt-3 flex items-center justify-center py-2 rounded-xl bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 transition-all text-sm">
            <BellRingIcon size={16} className="mr-1" />
            Send Reminder
          </button>
        </div>
      </div>
    </aside>
  )
}
// Message icon component since it's not directly available in lucide-react
const MessageIcon = ({ size = 24, className = '' }) => {
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
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  )
}
export default RightSidebar
