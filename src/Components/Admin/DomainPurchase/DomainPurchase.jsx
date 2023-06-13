import React, { useEffect, useState } from 'react'
import { getOrders } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'

function DomainPurchase() {
    const [Data,setData] = useState([])

    const token = useSelector(state=>state.AdminReducer.accessToken)

    useEffect(()=>{
        try{
            const fetchOrders = async ()=>{
                const response = await getOrders(token)
                if(response){
                    setData(response.payload)
                }
            }
            fetchOrders()

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
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Order Id</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Domain name</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Price</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Client</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Created_at</th>
                                 

                                </tr>
                            </thead>
                            <tbody>
                                {Data?.length !== 0 && Data?.map((item, index) => {
                                    return (<tr className="border-b dark:border-neutral-500">
                                        <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.order_id}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.price}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.user_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.created_at}</td>
                                       
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

export default DomainPurchase