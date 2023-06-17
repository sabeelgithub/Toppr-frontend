import React, { useEffect, useState } from 'react'
import {getRating } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'

function Rating() {
    const [Data,setData] = useState([])

    const token = useSelector(state=>state.AdminReducer.accessToken)

    useEffect(()=>{
        try{
            const fetchRating = async ()=>{
                const response = await getRating(token)
                if(response){
                    setData(response?.payload)
                }
            }
            fetchRating()

        }
        catch(error){
            console.log(error)
        }

    },[])
    
  return (
    <div className='bg-white h-full px-20 py-20'>
    <div className=" flex flex-col overflow-x-auto">

        {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-white text-center w-full font-extrabold'>No Records </div></div> :
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="bg-black inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">S no</th>
                                    
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Expert name</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Domain name</th>

                                    <th scope="col" className="text-yellow-400 px-6 py-4">Rating</th>
                                 

                                </tr>
                            </thead>
                            <tbody>
                                {Data?.length !== 0 && Data?.map((item, index) => {
                                    let star = [];
                                    for (let i = 1; i <= item.count; i++) {
                                    star.push(<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)
                                    }
                                    return (<tr className="border-b dark:border-neutral-500">
                                        <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.expert_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4 flex">{star}</td>
                                       

                                       
                                    </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>}

    </div>
    </div>
  )
}

export default Rating