import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import Rating from '../../Components/Admin/Rating/Rating'
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
          <Layout>
            <Rating />
          </Layout>
        </>}

    </>
  )
}

export default RatingPage