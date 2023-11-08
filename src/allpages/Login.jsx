import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [loginEmail,setLoginEmail]=useState("")
    const [loginPass,setLoginPassword]=useState("")
    const [totaluserArr,getTotalUserArr]=useState([])
    let flag=false
    let nav=useNavigate()
    const getAlluser=async() =>{
        let totalUser=await fetch("http://localhost:3000/userData")
        let data=await totalUser.json()
        getTotalUserArr(data)
    }
    const loginUser=async()=>{
        for(let i=0;i<totaluserArr.length;i++){
           
            if(totaluserArr[i].email ==loginEmail && totaluserArr[i].pass ==loginPass){
                flag=true
                let loginObj=await fetch("http://localhost:3000/activeUser",{
                    method: "PUT",
                    headers:{"Content-Type": "application/json"},
                    body: JSON.stringify({
                        ...totaluserArr[i],
                        isCurrentUser:true
                    })
                })
            }
            
        }
        flag?nav("/userwelcome"):alert("please enter valid input...!!")
        console.log(totaluserArr);
        console.log(loginEmail,loginPass)
    }
    useEffect(()=>{
        getAlluser()
    },[])



  return (
    <div><h1>Login</h1>
    <label>Email id</label>
    <input type='text' placeholder='enter email ' onChange={(e)=>{setLoginEmail(e.target.value)}}/>
    <br></br>
    <label>Password</label>
    <input type='text' placeholder='enter password ' onChange={(e)=>{setLoginPassword(e.target.value)}}/>
    <br></br>
    <button onClick={loginUser}>Login</button></div>
  )
}

export default Login