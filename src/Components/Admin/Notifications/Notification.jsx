import React, { useEffect, useState } from 'react'
import { getPendingExperts } from '../../../Axios/Services/AdminServices'
import { Link } from 'react-router-dom'

function Notification() {
    const [Data,setData] = useState([])

    useEffect(()=>{
        try{
            const fetchPending = async ()=> {
                const response = await getPendingExperts()
                setData(response.payload)
            }
            fetchPending()

        }
        catch(error){
            console.log(error)
        }

    },[])
  return (
    <div className='bg-white  h-full px-40 py-20'>
         
    <h1 className='text-black text-center mb-5 font-bold'>Pending Experts</h1>

    <div className=" bg-black flex flex-col overflow-x-auto">
    {Data.length === 0 ? <div className='bg-white text-center font-extrabold'>No Records</div> :
        <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-left text-sm font-light">
                        <thead className="border-b font-medium dark:border-neutral-500">
                            <tr>
                                <th scope="col" className="text-yellow-400 px-6 py-4">s no</th>
                                <th scope="col" className="text-yellow-400 px-6 py-4">Username</th>
                                <th scope="col" className="text-yellow-400 px-6 py-4">Email</th>
                                <th scope="col" className="text-yellow-400 px-6 py-4">Mobile</th>
                                <th scope="col" className="text-yellow-400 px-6 py-4">Domain Looking for</th>
                                
                                <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {Data.length !== 0 && Data.map((item, index) => {
                                return (<tr className="border-b dark:border-neutral-500">
                                    <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.username}</td>
                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.email}</td>
                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.phone}</td>
                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.domain}</td>
                                   
                                    <td className="text-white whitespace-nowrap px-6 py-4">
                                    <Link to={`/admin/notification-view/${item.id}`} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">   View 
                                    </Link>
                                       
                                    </td>
                                  
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

export default Notification