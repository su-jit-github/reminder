import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserNavbar from '../UserNavbar'
const  Deletereminder= () => {
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


    const delRem=async()=>{
        RemData.map(async(e)=>{
        if(e.remName==remName)
        {
            let res=await fetch(`http://localhost:3000/reminderList/${e.id}`,{
                method: "DELETE"
                
            })
        }
        })
        nav("/userwelcome")
    }
  return (
    <>
    <UserNavbar/>
    <h1>delete reminder</h1>
        <input type="date" placeholder='select a date'/>
        <label>select a subject</label>
    <select onChange={(e)=>{setSubject(e.target.value)}}>
    <option>select a subject</option>
        {
            RemData.map((e)=>{
                
                return <option value={e.subject}>{e.subject}</option>
            })
        }
    </select>
    <label>select a reminder name</label>
    <select onChange={(e)=>{setRemName(e.target.value)}}>
    <option>select a name</option>
        {
            RemData.map((e)=>{
                
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
    <button onClick={delRem}>DELETE</button>
    </>
  )
}
export default Deletereminder