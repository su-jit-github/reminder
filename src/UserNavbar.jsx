import React from 'react'
import { useState,useEffect } from 'react'
const UserNavbar = () => {
    const [isLogin,setIslogin]=useState({})
    const activeUser=async()=>{
      let user=await fetch("http://localhost:3000/activeUser")
      let data=await user.json()
      setIslogin(data)
    }
  
    useEffect(()=>{
      activeUser()
    },[])
  return (
    <div>
     
       
        <a href='/setreminder'>set Reminder</a>
       <a href='/modifyreminder'>modifyReminder</a>
       <a href='/disablereminder'>disableReminder</a>
       <a href='/deletereminder'>deleteReminder</a>
       <a href='/enablereminder'>enableReminder</a>
       <a href='/viewreminder'>viewReminder</a>
       <a href='/logout'>logout</a>
        
      
    </div>
  )
}

export default UserNavbar