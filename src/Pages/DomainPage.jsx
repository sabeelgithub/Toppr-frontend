import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import Domain from '../Components/CE-commen/Domain/Domain'
import Loader from '../Components/Loader/Loader'

function DomainPage() {
  const [loader, setLoader] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoader(false)
    }, 500);
  }, [])
  return (
    <>
    {loader ? <Loader />:
    <>
    <Header/>
    <Cbar text={'Domains'}/>
    <Domain/>
    <Footer/>
    </>}

    </>
  )
}

export default DomainPage