import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../UserNavbar'
const Modifyreminder = () => {
    const [rDate,setDate]=useState("")
    const [subject,setSubject]=useState("")
    const [desc,setDesc]=useState("")
    const [email,setEmail]=useState("")
    const [contact,setContact]=useState("")
    const [sms,setSms]=useState("")
    const [rnext,setRNext]=useState("")
    const [remName,setRemName]=useState("")
    let nav=useNavigate()
    const [RemData,setRemData]=useState([])
    const getReminder = async() =>{
        let remData=await fetch('http://localhost:3000/reminderList')
        let data=await remData.json()
        setRemData(data)
       
    }
    useEffect(()=>{
        getReminder()
    },[])

    const ModifyReminder=async()=>{
      RemData.map(async(e)=>
       {
        if(e.remName ==remName)
        {
            let res=await fetch(`http://localhost:3000/reminderList/${e.id}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body:JSON.stringify({
                    rDate: rDate,
                    subject:subject,
                    desc:desc,
                    email:email,
                    contact:contact,
                    sms:sms,
                    rnext:rnext,
                    remName:remName
    
                
                })
            })
    
        }
       })
        
        console.log(rDate,subject,desc,email,contact,sms,rnext,remName)
    }

  return (
    <>
    <UserNavbar/>
    <div>
    <h1>
        Modify Reminder
    </h1>
    <label>select a new date</label>
    <input type="date" placeholder='select a new date' onChange={(e)=>{setDate(e.target.value)}}/>
    <label>select a subject</label>
    <select onChange={(e)=>{setSubject(e.target.value)}}>
    <option>select a subject</option>
        <option value='birthday'>BirthDay</option>
        <option value='anniversary'>Annivaersary</option>
        <option value='socialmediapost'>SocialMediaPost</option>
        <option value='meeting'>Meeting</option>
    </select>
    <label>select a reminder name</label>
    <select onChange={(e)=>{setRemName(e.target.value)}}>
    <option>select a name</option>
        {
            RemData.map((e)=>{
                if(e.isActive==true)
                return <option value={e.remName}>{e.remName}</option>
            })
        }
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
    
    <button onClick={ModifyReminder}>Confirm</button>
        </div>
        </>
  )
}

export default Modifyreminder