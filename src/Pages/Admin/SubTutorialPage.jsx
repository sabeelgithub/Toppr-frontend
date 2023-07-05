import React, { useEffect, useState } from 'react'
import Layout from '../../Components/Admin/SideBarComponents/components/Layout'
import SubTutorial from '../../Components/Admin/Sub-Tutorial/SubTutorial'
import Loader from '../../Components/Loader/Loader'

function SubTutorialPage() {
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
            <SubTutorial />
          </Layout>
        </>
      }
    </>
  )
}

export default SubTutorialPage