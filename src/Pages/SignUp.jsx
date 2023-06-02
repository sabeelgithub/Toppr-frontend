import React from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import Footer from '../Components/Footer'
import SignupForm from '../Components/SignupForm'

function Signup() {
  return (
    <>
    <Header/>
    <Cbar text={'Register Here'}/>
    <SignupForm/>
    <Footer/>

    
    </>
  )
}

export default Signup