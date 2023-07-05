import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Cbar from '../../Components/Cbar'
import Footer from '../../Components/Footer'
import Rating from '../../Components/Client/Rating'
import Loader from '../../Components/Loader/Loader'

function RatingPage() {
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
          <Cbar text={'Rating'} />
          <Rating />
          <Footer />
        </>
      }
    </>
  )
}

export default RatingPage