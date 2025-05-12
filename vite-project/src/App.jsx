import { Children, useState } from 'react'

import { AuthPage } from './Pages/Authentication/AuthPage'
import { Navbar } from './Compontents/common/NavBar'
import { Hero } from './Pages/HomePage/Hero'
import { Features } from './Pages/HomePage/Feature'
import { Footer } from './Pages/HomePage/Footer'
import { Events } from './Pages/HomePage/Events'
import Applayout from './Pages/ClubCarusel/Applayout'
import {AboutUs} from './Pages/AboutUs'
import { element } from 'prop-types'
import {ContactUs} from './Pages/Contact/contactUs'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {HomePg} from './Pages/HomePg'
import NotFound from './Pages/NotFound'
import Body from "./Pages/Body"
import StudentDashBoard from './Pages/DashBoard/StudentDashBoard'
import ClubLeadDashBoard from './Pages/DashBoard/ClubLeadDashBoard'
import AdminPanel from './Pages/DashBoard/AdminPanel'
import ClubGrid from './Compontents/Clubs/ClubGrid'
import EuphoneyApp from './Compontents/AllClubs/Euphoney/EuphoneyApp'
import DraculaApp from './Compontents/AllClubs/Dracula/DraculaApp'
import LiteratiApp from './Compontents/AllClubs/Literati/LiteratiApp'
import GroboticsApp from './Compontents/AllClubs/Grobotics/GroboticsApp'
import GfgApp from "./Compontents/AllClubs/GFG/GfgApp"
import DecoderApp from './Compontents/AllClubs/Decoder/DecoderApp'
import EventApp from './Compontents/Event/EventApp'
import EventDetails from './Compontents/Event/EventDetailPage'
import ViviApp from './Compontents/AllClubs/Viva/ViviApp'
import StepApp from './Compontents/AllClubs/Step/StepApp'
import Test from './Compontents/Event/Test'
import BookingForm from './Compontents/Event/BookingForm'
import BasketBallApp from './Compontents/AllClubs/BasketBall/BasketBallApp'
import  TableTennisApp  from './Compontents/AllClubs/TableTennis/TableTennisApp'
import CricketApp from './Compontents/AllClubs/Cricket/CricketApp'
import ChessApp from './Compontents/AllClubs/Chess/ChessApp'
import { FeaturedClubs } from './Compontents/DashBoardCompo/DashBoard/FeaturedClub'
import { Announcement } from './Compontents/DashBoardCompo/DashBoard/Announcement/Announcement'
import { ChatbotApp } from './Compontents/ChatBot/ChatbotApp'
import { DashboardClubLeadApp } from './Compontents/DashboardClubLead/DashboardClubLeadApp'



function App() {



  const router = createBrowserRouter([
    {
      path:"/" ,
      element:<HomePg></HomePg>,
      errorElement:<NotFound/>,
      children:[
        {
          path:"/",
          element:<Body/>
        },
        {
          path:"/about",
          element:<AboutUs/>
        },
        {
          path:"/contact",
          element:<ContactUs/>
        },
        {
          path:"/feature",
          element:<Features/>,
          children:[
            {
              path:"/feature",
              element:<Features/>
            }
          ]
        }
      ]
    },

    {
      path:"/auth",
      element:<AuthPage/>
    },
    {
      path:"/club-leaddashboard",
      element:<DashboardClubLeadApp/>,
    },

    {
      path:"/studentdashboard",
      element:<StudentDashBoard/>,
      children:[
        {
          path:"/studentdashboard",
          element:<FeaturedClubs/>,
        },
        {
          path:"/studentdashboard/announcement",
          element:<Announcement/>
        },
        {
          path:"/studentdashboard/ai_assistant",
          element:<ChatbotApp/>
        },
        
        
      ]
      
    },
    {
      path:"/clubs",
      element:<ClubGrid/>,  
      
    },
    {
      path:"/euphoney",
      element:<EuphoneyApp/>
    },
    {
        path:"/dracula",
        element:<DraculaApp/>
    },
    {
      
        path:"/literati",
        element:<LiteratiApp/>
    
    },
    {
      path:"/grobotics",
      element:<GroboticsApp/>
    },
    {
      path:"/gfg",
      element:<GfgApp/>
    },
    {
      path:"/decoder",
      element:<DecoderApp/>
    },
    {
      path:"/viva",
      element:<ViviApp/>
    },
    {
      path:"/step",
      element:<StepApp/>
    },
    {
      path:"/basketball",
      element:<BasketBallApp/>
    },
    {
      path:"/tabletennis",
      element:<TableTennisApp/>
    },
    {
      path:"/cricket",
      element:<CricketApp/>
    },
    {
      path:"/chess",
      element:<ChessApp/>
    },
    {
      path:"/adminpanel",
      element:<AdminPanel/>
    },
    {
      path:"/clubleaddashboard",
      element:<ClubLeadDashBoard/>
    },
    {
      path:"/event",
      element:<EventApp/>
    },
    {
      path:"/event/:id",
      element:<EventDetails/>
    },
    {
      path:"/bookingform/:eventId",
      element: <BookingForm/>

    },
    {
      path:"/addEvent",
      element: <Test></Test>
    }

  ])
  return (
    <>
      
    <RouterProvider router={router}></RouterProvider>
      
 
        
    </>
  )
}

export default App
