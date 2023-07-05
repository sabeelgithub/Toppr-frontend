import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header'
import Cbar from '../../Components/Cbar'
import Footer from '../../Components/Footer'
import DomainView from '../../Components/Client/DomainView'
import Loader from '../../Components/Loader/Loader'

function DomainViewPage() {
  const [Title,setTitle] = useState('')
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
   <Header />
   <Cbar text={Title} />
   <DomainView setTitle={setTitle} />
   <Footer/>
   </>}

   </>
  )
}

export default DomainViewPage