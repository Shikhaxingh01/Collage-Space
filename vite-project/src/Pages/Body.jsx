import { Button } from '@/components/ui/button'

import { Hero } from './HomePage/Hero'
import { Features } from './HomePage/Feature'
import { Footer } from './HomePage/Footer'
import { Events } from './HomePage/Events'
import  Applayout  from './ClubCarusel/Applayout'

function Body() {

  return (
    <>
       <div className="min-h-screen bg-gray-900">
      
       <main>
        <Hero />
         <Applayout/>

         <Features />
         <Events></Events>
        </main>
       <Footer />
      </div>
      
 
        
    </>
  )
}

export default Body
