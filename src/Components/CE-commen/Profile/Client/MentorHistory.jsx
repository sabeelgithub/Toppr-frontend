import React from 'react'
import poto from '../../../../Assets/profile4.jpg'
import { useNavigate } from 'react-router-dom'
import { axiosInstance } from '../../../../Axios/Instances/Instance'

function MentorHistory({ MyTeachers }) {
    const navigate = useNavigate()
    return (
        <>
            <div className="mt-1 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex flex-col 2xl:w-1/3">
                    <div className="flex-1 bg-black  shadow-xl p-8">
                        {MyTeachers.length !== 0 && <p className='text-center text-white font-extrabold text-2xl mb-3'>Mentors History</p>}
                        <section className="bg-black">
                            <div className="container">
                                <div className="flex flex-wrap -mx-4">
                                    <div className="w-full px-4">
                                        <div className="max-w-full overflow-x-auto">
                                            {MyTeachers.length === 0 ? <div><p className='text-white text-center text-2xl font-semibold'>No Records</p>
                                                <div className='flex justify-center mt-2'>   <button onClick={() => {
                                                    navigate('/')
                                                }} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-8 py-2 rounded text-sm space-x-2 transition duration-100">

                                                    <span>Buy</span>
                                                </button> </div>

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
                                                                Mentor
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
                                                                Domain
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
                                                                Amount
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
                                                                Subscribed On
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
                                                        {MyTeachers?.length !== 0 && MyTeachers?.map((item, index) => {
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
                                                                        <img onClick={() => {
                                                                            navigate(`/single-expert/${item.expert_id}`)
                                                                        }} src={`${axiosInstance}${item?.expert_poto}`} className="w-36 border-4 h-36 object-cover rounded-full" alt="Expert Profile" />
                                                                    </td>
                                                                    <td onClick={() => {
                                                                        navigate(`/single-expert/${item.expert_id}`)
                                                                    }} className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    cursor-pointer
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        {item.expert_name}
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
                                                                        {item.domain_name}
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
                                                                        {item.duration} months
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
                                                                        <strike>   ₹ {item.amount} </strike>

                                                                    </td> : <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    
                                                                    ">
                                                                        ₹ {item.amount}
                                                                    </td>}






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

                                                                    <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
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
                                                                    {item.terminated ? <td className="
                                                                    text-center text-dark
                                                                    font-medium
                                                                    text-base
                                                                    py-5
                                                                    px-2
                                                                    bg-[#F3F6FF]
                                                                    border-b border-[#E8E8E8]
                                                                    ">
                                                                        Yes,Admin Blocked mentor Due to some Perfomance issue,
                                                                        your Money is retuned to your wallet
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

export default MentorHistory