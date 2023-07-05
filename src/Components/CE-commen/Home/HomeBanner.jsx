import React, { useEffect, useState } from 'react'
import './HomeBanner.css'



function HomeBanner() {
 
  return (
    <>

    <div className="relative isolate px-6 pt-14 h-[650px] lg:px-8 py-8 bg-black banner">
    <div
      className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        className=""
       
      />
    </div>
    <div className="mx-auto max-w-2xl  sm:py-10 lg:py-20">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
       
      </div>
      <div className="text-center">
       
       
        <div className="mt-10 flex items-center justify-center gap-x-6">
         
          
        </div>
      </div>
    </div>
    <div
      className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        className=""
    
      />
    </div>
  </div>

    </>
  )
}

export default HomeBanner