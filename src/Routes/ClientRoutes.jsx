import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/SignUp';


function ClientRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Signup} />
          
        </Routes>
        
    </>
    
  )
}

export default ClientRoutes