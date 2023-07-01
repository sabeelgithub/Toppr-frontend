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
import SingleExpertProfilePage from '../Pages/Client/SingleExpertProfilePage';
import Profile from '../Pages/CE-commen/Profile';
import Room from '../screens/Room';







function ClientRoutes() {
  const isAuth = useSelector(state=>state.AdminReducer.accessToken)
  const isCAuth = useSelector(state=>state.ClientReducer.accessToken)
  const isEAuth = useSelector(state=>state.ExpertReducer.accessToken)


  return (
    <>
        <Routes>
 
            <Route path="/" element={isAuth ? <DashboradPage/> : <Home/>}/>
            <Route path="/domains"  element={isAuth ? <DashboradPage/> : <DomainPage/>} />
            <Route path="/experts"  element={isAuth ? <DashboradPage/> : <ExpertsPage/>} />

            <Route path="/login" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : (isEAuth ? <Home/> : <Login/>))} />
            <Route path="/register" element={isCAuth ? <Home/> : (isAuth ? <DashboradPage/> : (isEAuth ? <Home/> : <Signup/>))} />
            <Route path="/domain/:domain_name" element={isCAuth ? <DomainViewPage/> : <Navigate to="/login"/> } />
            <Route path="/single-expert/:id" element={isCAuth ? <SingleExpertProfilePage/> : <Navigate to="/login"/> } />
            
            <Route path="/profile" element={isCAuth ? <Profile/> : (isEAuth ? <Profile/> :  <Navigate to="/login"/>)} />
          
            <Route path="/room/:expert_id" element={isCAuth ? <Room/> : (isEAuth ? <Room/> :  <Navigate to="/login"/>)} />

            
        
        </Routes>
        
    </>
    
  )
}

export default ClientRoutes