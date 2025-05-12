

import { Navbar } from '../Compontents/common/NavBar'
import { Outlet } from 'react-router-dom'


export function HomePg() {

  return (
    <>

     <div className="min-h-screen bg-gray-900">
      <Navbar/>
      <Outlet/>
     </div>
 
    </>
  )
}


