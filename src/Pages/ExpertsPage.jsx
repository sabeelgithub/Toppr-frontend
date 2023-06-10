import React from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import Experts from '../Components/CE-commen/Experts/Experts'

function ExpertsPage() {
  return (
    <>
    <Header/>
    <Cbar text={'Experts'}/>
    <Experts/>
    <Footer/>
    </>
  )
}

export default ExpertsPage