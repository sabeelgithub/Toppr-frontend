import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import NotificationView from '../../Components/Admin/Notifications/NotificationView'
import Loader from '../../Components/Loader/Loader'

function NotificationViewPage() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500);
  }, [])
  return (
    <>
      {loader ? <Loader /> :
        <>
          <Layout>
            <NotificationView />
          </Layout>
        </>}
    </>
  )
}

export default NotificationViewPage