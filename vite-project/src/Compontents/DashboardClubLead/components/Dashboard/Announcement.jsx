// import React from 'react'

// import {
//   CalendarPlusIcon,
//   MegaphoneIcon,
//   VideoIcon,
//   ClipboardListIcon,
//   PlusIcon,
//   SendIcon,
//   UsersIcon,
//   CalendarIcon,
//   ClockIcon,
//   MapPinIcon,
//   ListIcon,
//   ListOrderedIcon
// } from 'lucide-react'
// export function Announcement(){
//     return (
    
//                     <div className="space-y-5">
//                       <h3 className="text-lg font-medium text-white">
//                         Create Announcement
//                       </h3>
//                       <div className="space-y-4">
//                         <div>
//                           <label className="block text-sm font-medium text-slate-300 mb-1">
//                             Title
//                           </label>
//                           <input
//                             type="text"
//                             className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
//                             placeholder="Announcement title"
//                           />
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-slate-300 mb-1">
//                             Content
//                           </label>
//                           <div className="border border-slate-600 rounded-xl overflow-hidden">
//                             <div className="bg-slate-700 border-b border-slate-600 px-3 py-2 flex items-center">
//                               <button className="p-1 text-slate-400 hover:text-white">
//                                 B
//                               </button>
//                               <button className="p-1 text-slate-400 hover:text-white ml-1">
//                                 I
//                               </button>
//                               <button className="p-1 text-slate-400 hover:text-white ml-1">
//                                 U
//                               </button>
//                               <div className="h-4 mx-2 border-r border-slate-600"></div>
//                               <button className="p-1 text-slate-400 hover:text-white">
//                                 <ListIcon size={16} />
//                               </button>
                             
//                             </div>
//                             <textarea
//                               className="w-full bg-slate-700/50 p-3 text-white focus:outline-none h-40"
//                               placeholder="Write your announcement here..."
//                             ></textarea>
//                           </div>
//                         </div>
//                         <div>
//                           <label className="block text-sm font-medium text-slate-300 mb-1">
//                             Send To
//                           </label>
//                           <div className="relative">
//                             <select className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500">
//                               <option>All Club Members</option>
//                               <option>Executive Team Only</option>
//                               <option>Event Participants</option>
//                               <option>All Members</option>
//                             </select>
//                             <UsersIcon
//                               size={16}
//                               className="absolute right-3 top-3 text-slate-400"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex justify-end space-x-3 pt-3">
//                         <button className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors">
//                           Save Draft
//                         </button>
//                         <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white hover:from-teal-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-teal-500/20">
//                           Publish
//                         </button>
//                       </div>
//                     </div>
//     )
// }



import React, { useState } from 'react';
import {
  ListIcon,
  UsersIcon
} from 'lucide-react';
import axios from 'axios';

export function Announcement() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('news');
  const [sendTo, setSendTo] = useState('All Club Members');

  const handleSubmit = async () => {
    if (!title || !content || !category) {
      alert("Please fill in all required fields.");
      return;
    }

    const announcementData = {
      title,
      content,
      category,
       // You can change format if needed
    };

    try {
      await axios.post('http://localhost:5000/api/announcement/addannouncement', announcementData);
      alert("Announcement Published!");
      setTitle('');
      setContent('');
      setCategory('news');
    } catch (e) {
      console.error("Error creating announcement:", e);
      alert("Failed to publish announcement.");
    }
  };

  return (
    <div className="space-y-5">
      <h3 className="text-lg font-medium text-white">Create Announcement</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
            placeholder="Announcement title"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Content</label>
          <div className="border border-slate-600 rounded-xl overflow-hidden">
            <div className="bg-slate-700 border-b border-slate-600 px-3 py-2 flex items-center">
              <button className="p-1 text-slate-400 hover:text-white">B</button>
              <button className="p-1 text-slate-400 hover:text-white ml-1">I</button>
              <button className="p-1 text-slate-400 hover:text-white ml-1">U</button>
              <div className="h-4 mx-2 border-r border-slate-600"></div>
              <button className="p-1 text-slate-400 hover:text-white">
                <ListIcon size={16} />
              </button>
            </div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-slate-700/50 p-3 text-white focus:outline-none h-40"
              placeholder="Write your announcement here..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
          >
            <option value="news">News</option>
            <option value="activities">Activities</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-1">Send To</label>
          <div className="relative">
            <select
              value={sendTo}
              onChange={(e) => setSendTo(e.target.value)}
              className="w-full bg-slate-700/50 border border-slate-600 rounded-xl py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500"
            >
              <option>All Club Members</option>
              <option>Executive Team Only</option>
              <option>Event Participants</option>
              <option>All Members</option>
            </select>
            <UsersIcon size={16} className="absolute right-3 top-3 text-slate-400" />
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-3 pt-3">
        <button className="px-4 py-2 rounded-xl border border-slate-600 text-slate-300 hover:bg-slate-700 transition-colors">
          Save Draft
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-500 to-indigo-500 text-white hover:from-teal-600 hover:to-indigo-600 transition-all shadow-lg hover:shadow-teal-500/20"
        >
          Publish
        </button>
      </div>
    </div>
  );
}
