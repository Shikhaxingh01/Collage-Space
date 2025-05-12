import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

export const useUser=()=>{
   
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

   useEffect(
    ()=>{
        
       
       async function fetchUser(){
           try{
            const res = await axios(`${import.meta.env.VITE_BASE_URL}/protected-route`,
                {
                    headers:{
                        Authorization:`Bearer ${localStorage.getItem('authToken')}`
                    }
                }
            );
           console.log("hook",res.data.user)
           setUser(res.data.user);  
          
        }
        catch(err){
           setError(err);
        }
        finally{
           setLoading(false);
        }}

        fetchUser();
       
    },[])

    return { user, loading , error }
}