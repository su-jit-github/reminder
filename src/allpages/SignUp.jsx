import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const [name,setName]=useState("")
  const [email,setEmail] = useState("")
  const [pass,setPass]=useState("")
  const [conPass,setconPass]=useState("")
  const [phone,setPhone]=useState("")
  let nav=useNavigate()
  const sendSignup = async() =>{
    let signUpData=await fetch('http://localhost:3000/userData',{
      method: 'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({
        name,email,phone,pass
      })
    })
    let data=await signUpData.json() 
    alert("signUp successful")
    nav("/login")

    console.log(name,email,pass,conPass)
  }
  return (
    <div>
      <div className='signupform'><h1>Signup</h1>
    <label>enter name</label>
    <input type="text" placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}}/>
    <label>enter email</label>
    <input type="text" placeholder="enter your email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <label>enter phone</label>
    <input type="text" placeholder="enter your phone no" onChange={(e)=>{setPhone(e.target.value)}}/>
    <label>enter password</label>
    <input type="text" placeholder="enter your password" onChange={(e)=>{setPass(e.target.value)}}/>
    <label>enter confirm password</label>
    <input type='text' placeholder='reenter password'  onChange={(e)=>{setconPass(e.target.value)}}/>
    </div>
    <button onClick={sendSignup}>Signup</button>
    </div>
  )
}

export default SignUp