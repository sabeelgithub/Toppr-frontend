import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSubscription } from '../../../Axios/Services/AdminServices'

function Subscription() {
    const [Data,setData] = useState([])

    const token = useSelector(state=>state.AdminReducer.accessToken)

    useEffect(()=>{
        try{
            const fetchSubscription = async ()=>{
                const response = await getSubscription(token)
                if(response){
                    setData(response.payload)
                }
            }
            fetchSubscription()

        }
        catch(error){
            console.log(error)
        }

    },[])
  return (
    <div className='bg-white h-full pl-10 pr-20 py-20 '>
    <div className=" flex flex-col overflow-x-hidden">

        {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-white text-center w-full font-extrabold'>No Records </div></div> :
            <div className="sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="md:w-3/4 w-full overflow-x-auto">
                        <table className="bg-black  text-left text-sm font-light">
                            <thead className="border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">S no</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Order Id</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Expert</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Client</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Domain</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Duration</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Status</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Amount</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Expert Share</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Admin Share</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Subscribed On</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Expire On</th>
                                    <th scope="col" className="text-yellow-400 px-6 py-4">Terminated</th>
                                    
                                 

                                </tr>
                            </thead>
                            <tbody>
                                {Data?.length !== 0 && Data?.map((item, index) => {
                                    return (<tr className="border-b dark:border-neutral-500">
                                        <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.order_id}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.expert_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.client_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.duration} months</td>
                                        {item.status === true ? <td className="text-green-500 whitespace-nowrap px-6 py-4">Active</td> : <td className="text-red-600 whitespace-nowrap px-6 py-4">Expired</td> }
                                        
                                        <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.amount}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.expert_share}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.admin_share}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.subscription_date}</td>
                                        {item.status === true ? <td className="text-yellow-300 whitespace-nowrap px-6 py-4">{item.expire_on}</td> : <td className="text-red-500 whitespace-nowrap px-6 py-4">-------</td>}
                                        {item.terminated === true ? <td className="text-yellow-300 whitespace-nowrap px-6 py-4">Yes</td> : <td className="text-red-500 whitespace-nowrap px-6 py-4">-------</td>  }
                                       
                                       
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

export default Subscription