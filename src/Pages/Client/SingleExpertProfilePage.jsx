import React from 'react'
import Header from '../../Components/Header'
import Cbar from '../../Components/Cbar'
import Footer from '../../Components/Footer'
import SingleExpert from '../../Components/Client/SingleExpert'

function SingleExpertProfilePage() {
  return (
    <>
    <Header />
    <Cbar text={'Expert Details'} />
    <SingleExpert/>
    <Footer/>
    </>
  )
}

export default SingleExpertProfilePage