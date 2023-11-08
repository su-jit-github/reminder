import React from 'react'
import { useState,useEffect } from 'react'
import UserNavbar from '../UserNavbar'


const Userwelcome = () => {

  const [userName,setUsername]=useState({})
  const [day,setDay]=useState("")
  const [currentDate,setCurrentDate]=useState("")
  const [month,setMonth]=useState("")
  const daylist=["sunday","monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const months=["Jan", "Feb", "Mar", "Apr", "May","jun", "Jul", "aug", "sep", "oct", "nov", "dec"]

    const getCurrentUser= async()=>{
        let user=await fetch("http://localhost:3000/activeUser")
        let data=await user.json()
        setUsername(data)

        let d1=new Date()
        setDay(d1.getDay())
        setCurrentDate(d1.getDate())
        setMonth(d1.getMonth())




    }
    useEffect(()=>{
        getCurrentUser()
    })

  return (
    
    <div>
    <UserNavbar/>
    
        <h2>Welcome to the Reminder application<h1>{userName.name}</h1> </h2>
        <h2>today is {daylist[day]} , {currentDate} of {months[month]}</h2>
    </div>
  )
}

export default Userwelcome