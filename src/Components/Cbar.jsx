import React from 'react'

function Cbar({text}) {
  return (
    <div className='bg-emerald-400 w-full h-52 flex justify-center items-center'>
         <h1 className='text-5xl font-extrabold'>{text}</h1>
    </div>
    
  )
}

export default Cbar