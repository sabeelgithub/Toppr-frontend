import React from 'react'
import { Routes, Route, Navigate,} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Signup from '../Pages/SignUp';
import DomainPage from '../Pages/DomainPage';
import ExpertsPage from '../Pages/ExpertsPage';
import { useSelector } from 'react-redux';
import DashboradPage from '../Pages/Admin/DashboradPage';
import DomainViewPage from '../Pages/Client/DomainViewPage';



function ClientRoutes() {
  const isAuth = useSelector(state=>state.AdminReducer.accessToken)
  const isCAuth = useSelector(state=>state.ClientReducer.accessToken)


  return (
    <>
        <Routes>
 
            <Route path="/" element={isAuth ? <DashboradPage/> : <Home/>}/>
            {/*  <Route path="/login" element={isAuth ? <DashboradPage/> : <Login/>} />
                 <Route path="/register"  element={isAuth ? <DashboradPage/> : <Signup/>} />
          */}
            <Route path="/domains"  element={isAuth ? <DashboradPage/> : <DomainPage/>} />
            <Route path="/experts"  element={isAuth ? <DashboradPage/> : <ExpertsPage/>} />
              

            <Route path="/login" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : <Login/>)} />
            <Route path="/register" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : <Signup/>)} />
            <Route path="/domain/:domain_name" element={isCAuth ? <DomainViewPage/> : <Navigate to="/login"/> } />

        </Routes>
        
    </>
    
  )
}

export default ClientRoutes