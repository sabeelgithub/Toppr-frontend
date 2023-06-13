import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSinglePendingExpert, handleAddExpertAndRejectExpert } from '../../../Axios/Services/AdminServices'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux'






export default function NotificationView() {
    const [Data, setData] = useState()


    const { id } = useParams()
    const navigate = useNavigate()
    const token = useSelector(state=>state.AdminReducer.accessToken) 

    useEffect(() => {
        try {
            const fetchSinglePending = async () => {
                const response = await getSinglePendingExpert(token,id)
                if(response){
                    setData(response.payload)

                }
                
            }
            fetchSinglePending()

        }
        catch (error) {
            console.log(error)
        }

    }, [])
     
    
    const Verify = async(id,type)=>{
        const data = {
            type:type
        }
        const response = await handleAddExpertAndRejectExpert(token,id,data)
        console.log(response)
        if (response.status == 250){
            toast.success(response.message)
            navigate('/admin/experts')
        } else if (response.status == 500){
            toast.success(response.message)
            navigate('/admin/notifications')
        } else {
            toast.error('something went wrong')
        }


    }

    return (

        <div className='flex justify-around p-10'>


            <div className="bg-black rounded-lg pb-5 max-w-2xl px-4 pt-5 sm:px-6 flex md:flex-nowrap  flex-wrap justify-around" >




                <div className="py-10  lg:pb-16 lg:pr-8 lg:pt-6">
                    {/* Description and details */}
                    <div>
                        <div >
                            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{Data?.username}</h1>
                        </div>
                        <div className="space-y-6">
                            <p className="text-base text-gray-400">{Data?.email}</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <h3 className="text-sm font-medium text-white">Mob no</h3>

                        <div className="mt-2">
                            <ul role="list" className="list-disc space-y-2 pl-4 text-sm">

                                <li key="" className="text-gray-400">
                                    <span className="text-gray-400">{Data?.phone}</span>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="mt-3">
                        <h2 className="text-sm font-medium text-white">Domain Looking for</h2>

                        <div className="mt-2 space-y-6">
                            <p className="text-sm text-gray-400">{Data?.domain}</p>
                        </div>
                    </div>
                </div>
                <div >


                    <div  >
                        <img
                            src={`http://127.0.0.1:8000/${Data?.certificate}`} alt="" className="h-80 w-full object-cover object-center" ></img>
                    </div>
                    <button
                        type="button"


                        className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-green-400 px-8 py-3 text-base font-medium text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={()=>Verify(Data.id,'add')} >
                        Add to Expets
                    </button>
                    <button
                        type="submit"
                        onClick={()=>Verify(Data.id,'delete')}
                        className="mt-3 flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-8 py-3 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Reject
                    </button>
                </div>
            </div>
        </div>









    )
}
