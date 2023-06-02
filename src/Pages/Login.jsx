import React from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import LoginForm from '../Components/LoginForm'
import Footer from '../Components/Footer'


function Login() {
  return (
    <>
    <Header/>
    <Cbar text={'Login Here'}/>
    <LoginForm/>
    <Footer/>

   
    </>
  )
}

export default Login