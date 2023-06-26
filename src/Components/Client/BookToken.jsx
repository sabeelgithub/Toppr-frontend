
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";

import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import jwt from 'jwt-decode'
import { TokenBooking } from "../../Axios/Services/ClientServices";



function BookToken({setShowBookToken,FindItem,setRefresh,Refresh}) {

    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)

    const navigate = useNavigate()
    const token = useSelector(state=>state.ClientReducer.accessToken)
    const user = jwt(token)

    
    const proceed = async(id)=>{
        console.log(id)
        const data = {
            id:id,
            user_id:user.user_id

        }
        const response = await TokenBooking(token,data)
        console.log(response,'ethi')
        if (response){
            if (response?.status===200){
                toast.success(response?.message)
                setShowBookToken(false)
                setRefresh(!Refresh)

            } else {
                toast.error('something went wrong')
            }
        }

    }
    

    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg ">
                                    <div class="relative w-full max-h-full ">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700 ">
                                            <button onClick={()=>{
                                                setShowBookToken(false)
                                            }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                            <div class="p-6 text-center ">
                                                
                                                <h3 class="mb-5 text-2xl font-extrabold text-green-400 dark:text-gray-400">Slot booking</h3>
                                                <p className="text-lg">Are you sure want to Book this slot</p>
                                                <div className="bg-yellow-400 h-9 w-36 m-5 mb-3 rounded-lg flex justify-center font-semibold mx-auto pt-2"><p >{FindItem.start_time.slice(0, 5)} - {FindItem.end_time.slice(0, 5)}</p> </div>
                                                <button onClick={()=>{
                                                    proceed(FindItem.id)
                                                }}
                                                data-modal-hide="popup-modal" type="button"  className ="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none mt-3 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                    Proceed 
                                                </button>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>

        </>
    )
}

export default BookToken
