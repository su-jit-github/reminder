import React, { useEffect, useState } from 'react'
import UserNavbar from '../UserNavbar'
import { useNavigate } from 'react-router-dom'


const Viewreminder = () => {
    const [remData,setData]=useState([])
    const [id,setId]=useState("")
    let nav=useNavigate()
    const getRem=async() => {
        let res=await fetch('http://localhost:3000/reminderList')
        let data=await res.json()
        setData(data)
    }
    useEffect(()=>{
        getRem()
    },[])

    const Deletereminder=()=>{
        nav("/deletereminder")
    }
    const Modifyreminder=()=>{
        nav("/modifyreminder")
    }
    const Disablereminder=()=>{
        nav("/disablereminder")
    }
  return (
    <>
    <UserNavbar/>
        <label>select from Date</label>
        <input type='date' />
        <label>select from Date</label>
        <input type='date' />
        <label>select subject</label>
        <select>
        <option>select subject</option>
            {
                remData.map((e)=>{
                    return <option value={e.subject}>{e.subject}</option>
                })
            }
        </select>
        <table>
            <tr>
                <th>REMINDER NAME</th>
                <th>REMINDER SUBJECT</th>
                <th>REMINDER DESC</th>
                <th>EMAIL</th>
                <th>CONTACT</th>
                <th>SMS NO</th>
                <th>STATUS</th>
                <th>RECURANCE FREQUENCY</th>
                <th>CHECKBOXES</th>
            </tr>
            {
                remData.map((e)=>{
                    return (
                        <tr>
                            <th>{e.remName}</th>
                            <th>{e.subject}</th>
                            <th>{e.desc}</th>
                            <th>{e.email}</th>
                            <th>{e.contact}</th>
                            <th>{e.sms}</th>
                            <th>{e.isActive==true?'active':'inactive'}</th>
                            <th></th>
                            <th><input type='radio' onClick={()=>{setId(e.id)}}/></th>
                        </tr>
                    )
                })
            }
        </table>





       
        <button onClick={()=>{
            Deletereminder()
        }}>Delete</button>
        <button onClick={()=>{
Disablereminder()
        }}>Disable</button>
        <button onClick={()=>{
Modifyreminder()
        }}>Modify</button>

    </>
  )
}

export default Viewreminder