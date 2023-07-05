import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import DomainPurchase from '../../Components/Admin/DomainPurchase/DomainPurchase'
import Loader from '../../Components/Loader/Loader'

function DomainPurchaseListPage() {
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
            <DomainPurchase />
          </Layout>
        </>}
    </>
  )
}

export default DomainPurchaseListPage