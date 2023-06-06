import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboradPage from '../Pages/Admin/DashboradPage'
import ClientListPage from '../Pages/Admin/ClientListPage'
import ExpertListPage from '../Pages/Admin/ExpertListPage'
import NotificationPage from '../Pages/Admin/NotificationPage'
import NotificationViewPage from '../Pages/Admin/NotificationViewPage'
import DomainListPage from '../Pages/Admin/DomainListPage'
import TutorialListPage from '../Pages/Admin/TutorialListPage'
import SubTutorialPage from '../Pages/Admin/SubTutorialPage'


function AdminRoutes() {
  return (
    <>
      <Routes>
          <Route path="/dashboard" Component={DashboradPage} />
          <Route path="/clients" Component={ClientListPage} />
          <Route path="/experts" Component={ExpertListPage} />
          <Route path="/notifications" Component={NotificationPage} />
          <Route path="/notification-view/:id" Component={NotificationViewPage} />
          <Route path="/domains" Component={DomainListPage} />
          <Route path="/tutorials" Component={TutorialListPage} />
          <Route path="/sub-tutorials" Component={SubTutorialPage} />
      </Routes> 
    </>
  )
}

export default AdminRoutes