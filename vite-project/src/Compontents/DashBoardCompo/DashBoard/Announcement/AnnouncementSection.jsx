import React, { useEffect, useState } from 'react';
import { AnnouncementCard } from './AnnouncementCard';
import axios from 'axios';

export function AnnouncementSection() {
  const [activeTab, setActiveTab] = useState('all');
  const [announcements, setAnnouncements] = useState([]);
   useEffect(()=>{fetch()},[]);

  async function fetch(){
  // Sample announcement data
  try{
    const response = await axios('http://localhost:5000/api/announcement/announcement');
     setAnnouncements(response.data.announcements)
    console.log(response);
  }catch(e)
  {console.log("error in Fetching ",e) }

}

 

  // Filter announcements based on active tab
  const filteredAnnouncements =
    activeTab === 'all'
      ? announcements
      : announcements.filter(
          (announcement) => ( announcement.category === activeTab)
        );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6 text-white">Announcements</h2>
        {/* Filter Tabs */}
        <div className="flex border-b border-[#1E293B] mb-6">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-2 px-4 font-medium ${
              activeTab === 'all'
                ? 'text-white border-b-2 border-[#FACC15]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveTab('news')}
            className={`pb-2 px-4 font-medium ${
              activeTab === 'news'
                ? 'text-white border-b-2 border-[#FACC15]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            News
          </button>
          <button
            onClick={() => setActiveTab('activities')}
            className={`pb-2 px-4 font-medium ${
              activeTab === 'activities'
                ? 'text-white border-b-2 border-[#FACC15]'
                : 'text-gray-400 hover:text-gray-300'
            }`}
          >
            Activities
          </button>
        </div>
        {/* Announcement Cards */}
        <div className="space-y-4 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
          {filteredAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              timestamp={announcement.timestamp}
              description={announcement.content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
