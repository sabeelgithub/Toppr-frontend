import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboradPage from '../Pages/Admin/DashboradPage'
import ClientListPage from '../Pages/Admin/ClientListPage'
import ExpertListPage from '../Pages/Admin/ExpertListPage'
import NotificationPage from '../Pages/Admin/NotificationPage'
import NotificationViewPage from '../Pages/Admin/NotificationViewPage'


function AdminRoutes() {
  return (
    <>
    <Routes>
        <Route path="/dashboard" Component={DashboradPage} />
        <Route path="/clients" Component={ClientListPage} />
        <Route path="/experts" Component={ExpertListPage} />
        <Route path="/notifications" Component={NotificationPage} />
        <Route path="/notification-view/:id" Component={NotificationViewPage} />
       
    </Routes>

    </>
  )
}

export default AdminRoutes