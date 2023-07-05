import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import Subscription from '../../Components/Admin/Subscription/Subscription'
import Loader from '../../Components/Loader/Loader'

function SubscriptionListPage() {
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
            <Subscription />
          </Layout>
        </>}
    </>
  )
}

export default SubscriptionListPage