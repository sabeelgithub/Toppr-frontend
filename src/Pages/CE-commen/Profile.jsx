import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Commen from '../../Components/CE-commen/Profile/Commen'
import Loader from '../../Components/Loader/Loader'

function Profile() {
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
    <Header/>
    <Commen/>
    <Footer/>
    </>}
    </>
  )
}

export default Profile