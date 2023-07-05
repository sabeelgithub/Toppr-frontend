import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Cbar from '../../Components/Cbar'
import Footer from '../../Components/Footer'
import SingleExpert from '../../Components/Client/SingleExpert'
import Loader from '../../Components/Loader/Loader'

function SingleExpertProfilePage() {
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
    <Cbar text={'Expert Details'} />
    <SingleExpert/>
    <Footer/>
    </>}
    </>
  )
}

export default SingleExpertProfilePage