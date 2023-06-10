
import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PaperClipIcon } from '@heroicons/react/20/solid'
import { toast } from 'react-toastify';
import { getSubTutorials, getTutorials } from "../../../Axios/Services/CommenServices";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { button } from "@material-tailwind/react";


function DomainModal({ setShowDomainModal, FindItem }) {

    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
    const [Tutorials,setTutorials] = useState([])
    const [SubTutorial,setSubTutorial] = useState([])
    console.log(Tutorials,'cheeeeeeeeeek')
    console.log(SubTutorial,'aaayo')

    useEffect(()=>{
        try{
            const fetchTutorials = async()=>{
                const response = await getTutorials()
                console.log(response,'tutttttttttorials')
                const filter = response.payload.filter((item)=>item.domain_id===FindItem.id)
                setTutorials(filter)

            
            }
            fetchTutorials()
            const fetchSubTutorials = async()=>{
                const response = await getSubTutorials()
                console.log(response,'sub tutoooorial')
                const filter = response.payload.filter((item)=>item.domain_id===FindItem.id)
                setSubTutorial(filter)

            
            }
            fetchSubTutorials()

        }
        catch (error){
            console.log(error)
        }

    },[])



    return (
        <>

            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className=" relative z-10"
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
                        <div className=" fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className=" fixed inset-0 z-10 overflow-y-auto">
                        <div className=" flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="md:w-[800px] relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full ">
                                    <div class=" relative w-full max-h-full">
                                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                                            <button onClick={() => {
                                                setShowDomainModal(false)
                                            }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                                <span class="sr-only">Close modal</span>
                                            </button>
                                            <div class=" p-6 text-center">
                                                {/*  <div className="mt-5 border border-rose-800 rounded-lg"><p class="mb-3 text-gray-500 dark:text-gray-400">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                                            <p class="text-gray-500 dark:text-gray-400">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                                            </div>*/}




                                                <div className="px-4 sm:px-0">
                                                    <h3 className="text-base font-semibold leading-7 text-gray-900">{FindItem.domain_name} Information</h3>

                                                </div>
                                                <div className="mt-6 border-t border-gray-100">
                                                    <dl className="divide-y divide-gray-100">
                                                        <div className="px-4 py-6 sm:gap-4 sm:px-0 ">

                                                            <p className="mt-1 text-sm  leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                                                {FindItem.description}

                                                            </p>
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Tutorials coming under this</dt>
                                                            <div className="md:flex ">
                                                            {Tutorials.length !==0 ? Tutorials.map((item)=>{
                                                                return (
                                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{item.tutorial_name} ,</dd>

                                                                )
                                                            }) : <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">No Tutorials</dd>}
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                            <dt className="text-sm font-medium leading-6 text-gray-900">Sub Tutorial coming uder this</dt>
                                                            <div className="md:flex ">
                                                            {SubTutorial.length !==0 ? SubTutorial.map((item)=>{
                                                                return (
                                                                    <dd className="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 sm:mt-0">{item.sub_tutorial_name} ,</dd>

                                                                )
                                                            }): <dd className="mt-1 text-sm leading-6 text-gray-700 md:col-span-2 sm:mt-0">No Sub Tutorials</dd>}
                                                            </div>
                                                           
                                                        </div>
                                                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                                        <dt className="text-sm font-medium leading-6 text-gray-900">price</dt>
                                                        <div className="md:flex ">
                                                       
                                                                <dd className="mt-1  leading-6 text-green-500 md:col-span-2 sm:mt-0 font-extrabold text-2xl">₹{FindItem.price}</dd>

                                                          
                                                        </div>
                                                       
                                                    </div>




                                                    </dl>
                                                </div>
                                                  
                                                {SubTutorial.length !==0 ? <div className=" mt-5  flex justify-center">
                                                <PayPalScriptProvider options={{"client-id":"AT1Ktl9NZX0bdIVhIFfvOjqfKDW5TvuaFxVO5lVaTdnSar8jCMdbbW6ZEDCGdNznqKdAUO1LCQO5B3Az"}}>
                                                <PayPalButtons style={{ layout: "vertical" }} className="w-2/5"  
                                                createOrder={(data,actions)=>{
                                                     return actions.order.create({
                                                        purchase_units:[
                                                            {
                                                                amount:{
                                                                    value:FindItem.price    
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }} 
                                                onApprove={(data,actions)=>{
                                                    return actions.order.capture().then((response)=>{
                                                        alert('success')
                                                        console.log(response)

                                                    })
                                                 }
                                                
                                                }/>
                                                </PayPalScriptProvider>
                                                </div> : <div class="flex flex-col items-center justify-center h-full">
                                                <p className="font-extrabold text-gray-400 text-center">Insuffient Sub tutorials</p>
                                                <button onClick={()=>{
                                                    setShowDomainModal(false)
                                                }} data-modal-hide="popup-modal" type="button" className="text-white mt-3 bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                                                    Go Back
                                                </button>
                                              
                                              </div>}
                                               
                                                
                                                
                            
                                               


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

export default DomainModal
