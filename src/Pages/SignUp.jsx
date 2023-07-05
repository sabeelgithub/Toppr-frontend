import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import SignupForm from '../Components/SignupForm'
import Loader from '../Components/Loader/Loader'

function Signup() {
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
    <Cbar text={'Register Here'}/>
    <SignupForm/>
    <Footer/>
    </>}

    
    </>
  )
}

export default Signup