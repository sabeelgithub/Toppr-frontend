import React from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import Domain from '../Components/CE-commen/Domain/Domain'

function DomainPage() {
  return (
    <>
    <Header/>
    <Cbar text={'Domains'}/>
    <Domain/>
    <Footer/>
    </>
  )
}

export default DomainPage