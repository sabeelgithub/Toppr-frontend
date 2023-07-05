import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import Dashboard from '../../Components/Admin/DashBoard/Dashboard'
import Loader from '../../Components/Loader/Loader'





function DashboradPage() {
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
            <Dashboard />
          </Layout>
        </>}
    </>




  )
}


export default DashboradPage