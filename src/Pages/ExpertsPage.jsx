import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import Experts from '../Components/CE-commen/Experts/Experts'
import Loader from '../Components/Loader/Loader'

function ExpertsPage() {
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
    <Cbar text={'Experts'}/>
    <Experts/>
    <Footer/>
    </>}
    </>
  )
}

export default ExpertsPage