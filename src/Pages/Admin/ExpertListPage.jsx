import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import ExpertList from '../../Components/Admin/ExpertList/ExpertList'
import Loader from '../../Components/Loader/Loader'

function ExpertListPage() {
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
            <ExpertList />
          </Layout>
        </>}
    </>
  )
}

export default ExpertListPage