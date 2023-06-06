import React from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import ClientList from '../../Components/Admin/ClientList/ClientList'

function ClientListPage() {
  return (
    <>
        <Layout>
          <ClientList/>
        </Layout>
    </>
  )
}

export default ClientListPage