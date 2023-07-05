import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import Domains from '../../Components/Admin/Domain/Domains'
import Loader from '../../Components/Loader/Loader'

function DomainListPage() {
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
            <Domains />
          </Layout>
        </>}

    </>
  )
}

export default DomainListPage