import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../UserNavbar'
const Enablereminder = () => {
    const [remName,setRemName]=useState("")
    const [subject,setSubject]=useState("")
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


    const enRem=async()=>{
        RemData.map(async(e)=>{
        if(e.remName==remName)
        {
            let res=await fetch(`http://localhost:3000/reminderList/${e.id}`,{
                method: "PATCH",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    isActive:true
                })
            })
        }
        })
        nav("/userwelcome")
    }
  return (
    <>
    <UserNavbar/>
    <h1>enableReminder</h1>
        <input type="date" placeholder='select a date'/>
        <label>select a subject</label>
    <select onChange={(e)=>{setSubject(e.target.value)}}>
    <option>select a subject</option>
        {
            RemData.map((e)=>{
                if(e.isActive==false)
                return <option value={e.subject}>{e.subject}</option>
            })
        }
    </select>
    <label>select a reminder name</label>
    <select onChange={(e)=>{setRemName(e.target.value)}}>
    <option>select a name</option>
        {
            RemData.map((e)=>{
                if(e.isActive==false)
                return <option value={e.remName}>{e.remName}</option>
            })
        }
    </select>
    {
            RemData.map((e)=>{
                if(e.isActive==true)
                return <textarea value={e.desc}></textarea>
            })
        }
    <button onClick={enRem}>Enable</button>
    </>
  )
}



export default Enablereminder