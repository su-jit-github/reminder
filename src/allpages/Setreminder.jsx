import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../UserNavbar'

const Setreminder = () => {
    const [rDate,setDate]=useState("")
    const [subject,setSubject]=useState("")
    const [desc,setDesc]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [sms,setSms]=useState("")
    const [rnext,setRNext]=useState("")
    const [remName,setRemName]=useState("")
    let nav=useNavigate()
const setReminder=async()=>{
    let reminderList=await fetch("http://localhost:3000/reminderList",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            rDate,subject,desc,email,contact,sms,rnext,
            remName,
            isActive:true
        })
    })
    nav("/userwelcome")

    console.log(rDate,subject,desc,email,contact,sms,rnext)
}

  return (
    <>
    <UserNavbar/>
<div>
<h1>
    set New Reminder
</h1>
<label>select a new date</label>
<input type="date" placeholder='select a new date' onChange={(e)=>{setDate(e.target.value)}}/>
<label>select reminder name</label>
<input type="text" placeholder="select reminder name" onChange={(e)=>{setRemName(e.target.value)}}/>
<label>select a subject</label>
<select onChange={(e)=>{setSubject(e.target.value)}}>
<option>select a subject</option>
    <option value='birthday'>BirthDay</option>
    <option value='anniversary'>Annivaersary</option>
    <option value='socialmediapost'>SocialMediaPost</option>
    <option value='meeting'>Meeting</option>
</select>
<label>add description</label>
<textarea onChange={(e)=>{setDesc(e.target.value)}}></textarea>
<label>email</label>
<input type="text" placeholder='enter email' required onChange={(e)=>{setEmail(e.target.value)}}/>
<label>contact</label>
<input type="text" placeholder='enter contact' required onChange={(e)=>{setContact(e.target.value)}}/>
<label>sms number</label>
<input type="text" placeholder='enter email' onChange={(e)=>{setSms(e.target.value)}}/>
<label>recur for next</label>
<input type="radio" value={"7"} onChange={(e)=>{setRNext(e.target.value)}}/>
7
<input type="radio" value={"5"} onChange={(e)=>{setRNext(e.target.value)}}/>
5
<input type="radio" value={"3"} onChange={(e)=>{setRNext(e.target.value)}}/>
3
<input type="radio" value={"2"} onChange={(e)=>{setRNext(e.target.value)}}/>
2

<button onClick={setReminder}>Confirm</button>
    </div>
    </>
    
  )
}

export default Setreminder