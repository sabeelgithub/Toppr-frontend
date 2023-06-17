import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import DashboradPage from '../Pages/Admin/DashboradPage'
import ClientListPage from '../Pages/Admin/ClientListPage'
import ExpertListPage from '../Pages/Admin/ExpertListPage'
import NotificationPage from '../Pages/Admin/NotificationPage'
import NotificationViewPage from '../Pages/Admin/NotificationViewPage'
import DomainListPage from '../Pages/Admin/DomainListPage'
import TutorialListPage from '../Pages/Admin/TutorialListPage'
import SubTutorialPage from '../Pages/Admin/SubTutorialPage'
import { useSelector } from 'react-redux'
import DomainPurchaseListPage from '../Pages/Admin/DomainPurchaseListPage'
import SubscriptionListPage from '../Pages/Admin/SubscriptionListPage'
import RatingPage from '../Pages/Admin/RatingPage'


function AdminRoutes() {
  const isAuth = useSelector(state=>state.AdminReducer.accessToken)
 
 
  return (
    <>
      <Routes>


          <Route path="/dashboard" element={isAuth ? <DashboradPage/> : <Navigate to="/login"/>} />
          <Route path="/clients" element={ isAuth ? <ClientListPage/>:  <Navigate to="/login"/>} />
          <Route path="/experts" element={ isAuth ? <ExpertListPage/>: <Navigate to="/login"/>} />
          <Route path="/notifications" element={ isAuth ? <NotificationPage/>: <Navigate to="/login"/> } />
          <Route path="/notification-view/:id" element={ isAuth ? <NotificationViewPage/> : <Navigate to="/login"/> } />
          <Route path="/domains" element={ isAuth ? <DomainListPage/> : <Navigate to="/login"/>} />
          <Route path="/tutorials" element={ isAuth ? <TutorialListPage/> : <Navigate to="/login"/>} />
          <Route path="/sub-tutorials" element={ isAuth ? <SubTutorialPage/> : <Navigate to="/login"/>} />
          <Route path="/rating" element={ isAuth ? <RatingPage/> : <Navigate to="/login"/>} />
          <Route path="/domain-purchase" element={ isAuth ? <DomainPurchaseListPage/> : <Navigate to="/login"/>} />
          <Route path="/subscriptions" element={ isAuth ? <SubscriptionListPage/> : <Navigate to="/login"/>} />
      </Routes> 
    </>
  )
}

export default AdminRoutes