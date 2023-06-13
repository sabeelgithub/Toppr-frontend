
import { Fragment,  useEffect,  useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { EditTutorial, getDomains } from "../../../Axios/Services/AdminServices";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import { EditTutorialSchema } from "../../../Validations/Tutorial/EditTutorial";
import { useSelector } from "react-redux";


function EditTutorialModal({setEditModal,FindItem,Refresh,setRefresh}) {

    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
    const [Data,setData] = useState([])

    
    const token = useSelector(state=>state.AdminReducer.accessToken)
 

  
   
    
   
    useEffect(()=>{
        try{
            const fetchDomains = async()=>{
                const response = await getDomains(token)
                if(response){
                    const filtered_data = response.payload.filter((item)=>item.id !== FindItem.domain_id)
                    setData(filtered_data)

                }
                
            }
            fetchDomains()

        }
        catch (error){
            console.log(error)
        }  
    },[])

    const onSubmit = async()=>{
   
        try{
            const response = await EditTutorial(token,values)
            
            if(response?.status===200){
                setEditModal(false)
                setRefresh(!Refresh)
                toast.success(response.message)
            } else if(response?.error?.non_field_errors && response?.error?.non_field_errors[0] === 'The fields tutorial_name, domain must make a unique set.'){
                toast.warning('Tutorial With This Domain Already Exists')
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
            tutorial_name:FindItem.tutorial_name,
            domain:FindItem.domain_id ,
            id:FindItem.id,

        },
        validationSchema:EditTutorialSchema,
        onSubmit,
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
                                    setEditModal(false)
                                }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <p className='font-extrabold text-2xl'>Edit {FindItem.tutorial_name}</p>
                                        <form className="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit} encType="multipart/form-data">
            
                                            <div>
                                                <label htmlFor="domain_name" className="block mb-2 text-sm font-medium text-black ">Enter Tutorial name</label>
                                                <input type="text" name="tutorial_name"  
                                                value={values.tutorial_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} id="domain_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Python full-stack" />
                                                {errors.tutorial_name && touched.tutorial_name && (
                                                    <p className="text-red-600">{errors.tutorial_name}</p>
                                                  )}
                                            </div>
                                            
                                            <div className='mb-10'>
                                            <select 
                                            name="domain"
                                            
                                            
                                            onChange={handleChange}
                                            onBlur={handleBlur} 
                                           
                                            className="select w-full rounded-lg"  >
                                            
                                              <option value={FindItem.domain_id} selected>{FindItem.domain} </option>
                                              {Data.length !==0 && Data.map((item)=>{
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

export default EditTutorialModal
