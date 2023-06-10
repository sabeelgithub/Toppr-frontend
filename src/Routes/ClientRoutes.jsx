import React from 'react'
import { Routes, Route, Navigate,} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/SignUp';
import DomainPage from '../Pages/DomainPage';
import ExpertsPage from '../Pages/ExpertsPage';
import { useSelector } from 'react-redux';
import DashboradPage from '../Pages/Admin/DashboradPage';



function ClientRoutes() {
  const isAuth = useSelector(state=>state.AdminReducer.token)
  const isCAuth = useSelector(state=>state.ClientReducer.token)


  return (
    <>
        <Routes>
    
            {/*admin*/}
            <Route path="/" element={isAuth ? <DashboradPage/> : <Home/>}/>
            {/*  <Route path="/login" element={isAuth ? <DashboradPage/> : <Login/>} />
                 <Route path="/register"  element={isAuth ? <DashboradPage/> : <Signup/>} />
          */}
            <Route path="/domains"  element={isAuth ? <DashboradPage/> : <DomainPage/>} />
            <Route path="/experts"  element={isAuth ? <DashboradPage/> : <ExpertsPage/>} />
              
            {/*client and admin*/} 
            <Route path="/login" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : <Login/>)} />
            <Route path="/register" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : <Signup/>)} />
          
        </Routes>
        
    </>
    
  )
}

export default ClientRoutes