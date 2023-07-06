import React from 'react'
import { axiosInstance } from '../../../../Axios/Instances/Instance'

function StudentHistory({Students}) {
  return (
    <>
    <div className="mt-1 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col ">
                    <div className="flex-1 bg-black  shadow-xl p-8">
                    {Students.length!==0 && <p className='text-center text-white font-extrabold text-2xl mb-3'>Students History</p>}
                        <section className="bg-black">
                            <div className="container">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full px-4">
                                        <div className="max-w-full overflow-x-auto">
                                            {Students.length === 0 ? <div><p className='text-white text-center text-2xl font-semibold'>No Records</p>
                                            </div> :
                                                <table className="table-auto w-full">
                                                    <thead>
                                                        <tr className="bg-emerald-500 text-center">
                                                            <th className=" w-1/6
                                                                    min-w-[160px] text-lg
                                                                    font-semibold
                                                                    text-white
                                                                    py-3
                                                                    lg:py-3
                                                                    px-3
                                                                    lg:px-4
                                                                    border-l border-transparent
                                                                    ">
                                                                Sl no
                                                            </th>
                                                            <th className="
                                                                    w-1/6
                                                                    min-w-[160px]
                                                                    text-lg
                                                                    font-semibold
                                                                    text-white
                                                                    py-3
                                                                    lg:py-3
                                                                    px-3
                                                                    lg:px-4
                                                                    ">
                                                                Poto
                                                            </th>
                                                              <th className="
                                                                w-1/6
                                                                min-w-[160px]
                                                                text-lg
                                                                font-semibold
                                                                text-white
                                                                py-3
                                                                lg:py-3
                                                                px-3
                                                                lg:px-4
                                                                ">
                                                                Student
                                                            </th>
                                                     
                                                           
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                                Duration
                                                            </th>
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                               My share
                                                            </th>
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                                Status
                                                            </th>
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                                Subscribed on
                                                            </th>
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                                Expire On
                                                            </th>
                                                            <th className="
                                                            w-1/6
                                                            min-w-[160px]
                                                            text-lg
                                                            font-semibold
                                                            text-white
                                                            py-3
                                                            lg:py-3
                                                            px-3
                                                            lg:px-4
                                                            ">
                                                               Terminated
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {Students?.length !== 0 && Students?.map((item, index) => {
                                                            return (
                                                                <tr>
                                                                    <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-l border-[#E8E8E8]
                                                                    ">
                                                                        {index + 1}
                                                                    </td>
                                                                  
                                                                 
                                                                     <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">

                                                                    <img src={item?.client_poto ? `${axiosInstance}${item?.client_poto}` : 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png' } className="w-36 border-4 h-36 object-cover rounded-full" alt="Client Profile" />
                                                                    </td>
                                                                     <td  className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    cursor-pointer
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        {item.client_name}
                                                                    </td>
                                                                    
                                                                    <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        {item.duration}
                                                                    </td>
                                                                    {item.terminated ? <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    
                                                                    ">
                                                                    <strike>   ₹ {item.expert_share} </strike>
                                                                       
                                                                    </td>:  <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    
                                                                    ">
                                                                    ₹ {item.expert_share}  
                                                                    </td> }
                                                                   

                                                                    {item.status ? <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        <p className='text-green-600'> Active</p>
                                                                    </td> : <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        <p className='text-red-600'> Expired</p>
                                                                    </td>}
                                                                    <td  className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    cursor-pointer
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        {item.subscription_date}
                                                                    </td>
                                                                    {item.status ? <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">              
                                                                    <p className='text-yellow-600'> {item.expire_on}</p> 

                                                                    </td> : <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        -----
                                                                    </td>}
                                                                    
                                                                    {item.terminated ?  <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        Yes,This is Subscription is Expired Due to your perfomance issue,
                                                                        your Wage is credited to your wallet
                                                                    </td>  :  <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        ______
                                                                    </td> }

                                                                </tr>

                                                            )
                                                        })}



                                                    </tbody>
                                                </table>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
    </>
  )
}

export default StudentHistory