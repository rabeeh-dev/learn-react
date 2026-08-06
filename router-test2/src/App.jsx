import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home'
import Login from './pages/login'
import Users  from './pages/users'
import UserDetails from './pages/userdeatils'
import Dashboard from './pages/dashboard'


function App(){
  return (
    <>
    <nav>
      <Link to={'/'}>Home</Link> &nbsp;
      <Link to={'/login'}>Login</Link> &nbsp;
       <Link to={'/users'}>Users</Link>
    </nav>
    {/* //Route  */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path='/users/:id' element={<UserDetails/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App
