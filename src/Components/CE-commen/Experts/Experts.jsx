import React, { useEffect, useState } from 'react'
import { getExperts } from '../../../Axios/Services/CommenServices'
import dummyprofile from '../../../../src/Assets/profile4.jpg'
import { axiosInstance } from '../../../Axios/Instances/Instance';

export default function Experts() {
  const [Expert,setExpert] = useState([])
  useEffect(()=>{
    try{
      const fetchExperts = async ()=>{
        const response = await getExperts()
        if(response){
          setExpert(response?.payload)
        }
        
      }
      fetchExperts()

    }
    catch (error){
      console.log(error)
    }

  },[])
  return (
    <div className=" h-full pt-16 pb-16 bg-black flex justify-around flex-wrap">
    {Expert?.length !== 0 ? Expert?.map((item)=>{
      return (
        <div className='m-4' >
        <div className='w-60 h-60 '>
          <img className='w-60 h-60 object-cover rounded-2xl'  src={`${axiosInstance}${item.profile_poto}`}   alt="profile_poto" />
        </div>
        <div className='w-60'>
          <h5 className="mt-2 text-center mb-1 text-xl font-medium uppercase text-white dark:text-white">{item.username}</h5>
          <p className="text-center text-sm text-gray-500 dark:text-gray-400">{item.domain}</p> 
        </div>
      </div>

      )
    }): 
    <div className="flex justify-around flex-wrap">
    <div className='m-6' >
    <div className='w-60 h-60 '>
      <img className='w-60 h-60 object-cover rounded-2xl'  src={dummyprofile}  alt="profile_poto" />
    </div>
    <div className='w-60'>
      <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p> 
    </div>
  </div>

  <div className='m-6' >
    <div className='w-60 h-60 '>
      <img className='w-60 h-60 object-cover rounded-2xl'  src={dummyprofile}  alt="profile_poto" />
    </div>
    <div className='w-60'>
      <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p> 
    </div>
  </div>

  <div className='m-6' >
    <div className='w-60 h-60 '>
      <img className='w-60 h-60 object-cover rounded-2xl'  src={dummyprofile}  alt="profile_poto" />
    </div>
    <div className='w-60'>
      <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p> 
    </div>
  </div>

  <div className='m-6' >
    <div className='w-60 h-60 '>
      <img className='w-60 h-60 object-cover rounded-2xl'  src={dummyprofile}  alt="profile_poto" />
    </div>
    <div className='w-60'>
      <h5 className="mt-2 text-center mb-1 text-xl font-medium text-white dark:text-white">Sabeel</h5>
      <p className="text-center text-sm text-gray-500 dark:text-gray-400">Data Sciene</p> 
    </div>
  </div>

    </div>     }
     
    


    </div>
  )
}
