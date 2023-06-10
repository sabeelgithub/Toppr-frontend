import React, { useEffect, useState } from 'react'
import { getDomains } from '../../../Axios/Services/CommenServices'

export default function Domain() {
    const [Domain,setDomain] = useState([])
    useEffect(()=>{
        try{
            const fetchDomains = async()=>{
                const response = await getDomains()
                console.log(response)
                setDomain(response.payload)
            }
            fetchDomains()


        }
        catch (error){
            console.log(error)
        }

    },[])
  return (
    <div className="flex items-center flex-wrap justify-center h-full pt-16 pb-16 bg-black">
    {Domain.length !== 0 ? Domain.map((item)=>{
        return (
            <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className=" rounded-t-lg w-[380px] h-[380px] " src={`http://127.0.0.1:8000/${item.image}`} alt="product image" />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{item.domain_name}</h5>
      </a>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{item.price}</span>
        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
      </div>
    </div>
  </div>

        )
    }) :   <div className='bg-black text-white text-center w-full font-extrabold text-3xl'>Currently No Domains Availabe, we will Update Soon </div> }

    </div>
  )
}
