import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import Cbar from '../Components/Cbar'
import LoginForm from '../Components/LoginForm'
import Footer from '../Components/Footer'
import Loader from '../Components/Loader/Loader'


function Login() {
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
    <Cbar text={'Login Here'}/>
    <LoginForm/>
    <Footer/></>}

   
    </>
  )
}

export default Login