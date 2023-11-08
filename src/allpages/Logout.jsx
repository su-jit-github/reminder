import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    let nav=useNavigate()
    const logout=async() => {
    let activeUser=await fetch("http://localhost:3000/activeUser",{
        method:'PUT',
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            isCurrentUser: false
        })
    })
    nav("/")
    }
    useEffect(() => {
        logout()
    },[])

  return (
<></>
  )
}

export default Logout