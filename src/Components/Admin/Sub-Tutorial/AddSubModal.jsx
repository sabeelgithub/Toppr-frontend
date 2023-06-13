
import { Fragment,  useEffect,  useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {AddSubTutorial, getDomains } from "../../../Axios/Services/AdminServices";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import { getTutorial } from "../../../Axios/Services/AdminServices";
import { AddSubTutorialSchema } from "../../../Validations/Sub-Tutorial/AddSubTutorial";
import { useSelector } from "react-redux";



function AddSubModal({setAddModal,Refresh,setRefresh}) {
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
    const [Domain,setDomain] = useState([])
    const [Tutorial,setTutorial] = useState([])

    
    const token = useSelector(state=>state.AdminReducer.accessToken)
   
    useEffect(()=>{
        try{
            const fetchDomains = async()=>{
                const response = await getDomains(token)
                setDomain(response.payload)
            }
            fetchDomains()
            const fetchTutorials = async()=>{
                    const response = await getTutorial(token)
                    setTutorial(response.payload)
                }
            fetchTutorials()
    


        }
        catch (error){
            console.log(error)
        }  
    },[])

    const onSubmit = async()=>{ 
        try{
            const response = await AddSubTutorial(token,values)
            console.log(response)
            if(response?.status===200){
                setAddModal(false)
                setRefresh(!Refresh)
                toast.success(response.message)
            } else if(response?.error?.non_field_errors && response?.error?.non_field_errors[0] === 'The fields sub_tutorial_name, tutorial must make a unique set.'){
                toast.warning('Sub Tutorial With This Tutorial Already Exists')
            } else{
                toast.error('something went wrong')
            }

        }
        catch (error){
            console.log(error)
        }
    }

   
    //formik
    const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues:{
            sub_tutorial_name:"",
            description:"",
            tutorial:"",
            domain:"",
        },
        validationSchema:AddSubTutorialSchema,
        onSubmit
    })


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
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <button onClick={()=>{
                                    setAddModal(false)
                                }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <p className='font-extrabold text-2xl'>Add New Sub tutorial</p>
                                        <form className="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit} encType="multipart/form-data">
            
                                            <div>
                                                <label htmlFor="domain_name" className="block mb-2 text-sm font-medium text-black ">Enter Sub-Tutorial name</label>
                                                <input type="text" name="sub_tutorial_name"  
                                                value={values.sub_tutorial_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} id="domain_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="django" />
                                                {errors.sub_tutorial_name && touched.sub_tutorial_name && (
                                                    <p className="text-red-600">{errors.sub_tutorial_name}</p>
                                                  )}
                                            </div>
                                            <div>
                                            <label htmlFor="description" className="block mb-2 text-sm font-medium text-black">Description</label>
                                            <textarea type="text" name="description" 
                                             id="description"
                                             value={values.description}
                                             onChange={handleChange}
                                             onBlur={handleBlur}
                                            placeholder="description" className="bg-gray-50 border border-gray-300  text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                            {errors.description && touched.description && (
                                                <p className="text-red-600">{errors.description}</p>
                                              )}

                                        </div>
                                            <div className='mb-10'>
                                            <select 
                                            name="tutorial"
                                            value={values.tutorial}
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                            type="number"


                                            className="select w-full rounded-lg"  >
                                              <option value=''  selected >Choose Tutorial</option>
                                              {Tutorial.length !==0 && Tutorial.map((item)=>{
                                                return(
                                                    <option value={item.id} >{item.tutorial_name}</option>
                                                )

                                              })}
                                             
                                             
                                            </select>
                                            {errors.tutorial && touched.tutorial && (
                                                <p className="text-red-600">{errors.tutorial}</p>
                                              )}

                                          </div>
                                          <div className='mb-10'>
                                          <select 
                                          name="domain"
                                          value={values.domain}
                                          onChange={handleChange}
                                          onBlur={handleBlur}
                                          type="number" 

                                          className="select w-full rounded-lg"  >
                                            <option value=''  selected >Choose Domain</option>
                                            {Domain.length !==0 && Domain.map((item)=>{
                                              return(
                                                  <option value={item.id} >{item.domain_name}</option>
                                              )

                                            })}
                                           
                                           
                                          </select>
                                          {errors.domain && touched.domain && (
                                              <p className="text-red-600">{errors.domain}</p>
                                            )}

                                        </div>
                                           
                                            
                                           

                                            <button  type="submit" className="w-full text-black bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add</button>

                                            <div className="flex items-center justify-between">



                                            </div>
                                        </form>
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

export default AddSubModal
