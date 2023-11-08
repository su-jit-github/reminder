import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landingpage from './allpages/Landingpage'
import Login from './allpages/Login'
import SignUp from './allpages/SignUp'
import Logout from './allpages/Logout'
import Userwelcome from './allpages/UserWelcome'
import Setreminder from './allpages/Setreminder'
import Modifyreminder from './allpages/Modifyreminder'
import Disablereminder from './allpages/Disablereminder'
import Deletereminder from './allpages/Deletereminder'
import Enablereminder from './allpages/Enablereminder'
import Viewreminder from './allpages/Viewreminder'
import UserNavbar from './UserNavbar'
const NavigationRoute = () => {
  return (
    <>
    
    <Routes>
    <Route path='/' element={<Landingpage/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/signup' element={<SignUp/>}></Route>
    <Route path='/userwelcome' element={<Userwelcome/>}></Route>
    <Route path='/logout' element={<Logout/>}></Route>
    <Route path='/setreminder' element={<Setreminder/>}></Route>
    <Route path='/modifyreminder' element={<Modifyreminder/>}></Route>
    <Route path='/disablereminder' element={<Disablereminder/>}></Route>
    <Route path='/deletereminder' element={<Deletereminder/>}></Route>
    <Route path='/enablereminder' element={<Enablereminder/>}></Route>
    <Route path='/viewreminder' element={<Viewreminder/>}></Route>
</Routes>
    </>
  )
}

export default NavigationRoute