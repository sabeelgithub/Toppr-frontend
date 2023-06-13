import React, { useState } from 'react'
import Header from '../../Components/Header'
import Cbar from '../../Components/Cbar'
import Footer from '../../Components/Footer'
import DomainView from '../../Components/Client/DomainView'

function DomainViewPage() {
  const [Title,setTitle] = useState('')
  return (
   <>
   <Header />
   <Cbar text={Title} />
   <DomainView setTitle={setTitle} />
    
   <Footer/>
   </>
  )
}

export default DomainViewPage