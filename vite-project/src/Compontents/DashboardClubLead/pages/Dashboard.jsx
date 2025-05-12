import React, { useState } from 'react'
import Navbar from '../components/Layout/Navbar'
import Sidebar from '../components/Layout/Sidebar'
import RightSidebar from '../components/Layout/RightSidebar'
import FunctionalitiesPanel from '../components/Dashboard/FunctionalitiesPanel'
const Dashboard = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }
  return (
    <div className="flex flex-col h-screen bg-slate-900 text-white">
      <Navbar toggleSidebar={toggleSidebar} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar isCollapsed={isSidebarCollapsed} />
        <main className="flex-1 overflow-y-auto p-6 bg-gradient-to-br from-slate-900 to-slate-800">
          <FunctionalitiesPanel />
        </main>
        <RightSidebar />
      </div>
    </div>
  )
}
export default Dashboard
