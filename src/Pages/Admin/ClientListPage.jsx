import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import ClientList from '../../Components/Admin/ClientList/ClientList'
import Loader from '../../Components/Loader/Loader'

function ClientListPage() {
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
            <ClientList />
          </Layout>
        </>
      }
    </>
  )
}

export default ClientListPage