import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import Notification from '../../Components/Admin/Notifications/Notification'
import Loader from '../../Components/Loader/Loader'

function NotificationPage() {
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
            <Notification />
          </Layout>
        </>}
    </>
  )
}

export default NotificationPage