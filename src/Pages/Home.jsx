import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import HomeBanner from '../Components/CE-commen/Home/HomeBanner'
import Footer from '../Components/Footer'
import Dark from '../Components/CE-commen/Home/Dark'
import Loader from '../Components/Loader/Loader'



function Home() {
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
          <Header />
          <HomeBanner />
          <Dark />
          <Footer />
        </>
      }
    </>



  )
}

export default Home