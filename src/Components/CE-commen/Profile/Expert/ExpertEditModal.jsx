
import { Fragment,  useEffect,  useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from 'react-toastify';
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { ClientEditSchema } from "../../../../Validations/ClientEdit/ClientEdit";
import { editExpertProfile } from "../../../../Axios/Services/ExpertService";




function ExpertEditModal({setExpertEdit,Expert,Refresh,setRefresh}) {
    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
 
    const token = useSelector(state=>state.ExpertReducer.accessToken)
   
   

    const onSubmit = async()=>{       
        try{

            const form = new FormData()
            form.append('id',Expert.id)
            form.append('user',Expert.user_id)
            form.append('username',values.username)
            form.append('email',values.email)
            form.append('phone',values.phone)  
            form.append('profile_poto',values.profile_poto)
            
            const response = await editExpertProfile(token,form)
            if(response){
                if(response?.status===200){
                    setExpertEdit(false)
                    toast.success(response?.message)
                    setRefresh(!Refresh)

                } else{
                    toast.error('something went wrong')
                }
            }

        }
        catch (error){
            console.log(error)
        }
    }

   
    //formik
    const {values, errors, touched, handleBlur, handleChange, handleSubmit,setFieldValue} = useFormik({
        initialValues:{
            username:Expert?.username,
            email:Expert?.email,
            phone:Expert?.phone,
            profile_poto:null
            
           
        },
        validationSchema:ClientEditSchema,
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
                                    setExpertEdit(false)
                                }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <p className='font-extrabold text-2xl'>Edit profile</p>
                                        <form className="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit} encType="multipart/form-data">
            
                                            <div>
                                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-black ">Enter username</label>
                                                <input type="text" name="username"  
                                                value={values.username}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                 id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {errors.username && touched.username && (
                                                            <p className="text-red-600">{errors.username}</p>
                                                        )}
                                                    
                                            </div>
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-black ">Email</label>
                                                <input type="email" name="email"  
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                 id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {errors.email && touched.email && (
                                                            <p className="text-red-600">{errors.email}</p>
                                                        )}
                                                    
                                            </div>
                                            <div>
                                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-black ">Mobile</label>
                                                <input type="phone" name="phone"  
                                                value={values.phone}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                 id="username"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {errors.phone && touched.phone && (
                                                            <p className="text-red-600">{errors.phone}</p>
                                                        )}
                                                    
                                            </div>

                                            <div>
                                            <label htmlFor="profile_poto" className="block mb-2 text-sm font-medium text-black ">Choose profile poto</label>
                                            <input
                                            onChange={(evt)=>setFieldValue('profile_poto',evt.target.files[0])}
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            aria-describedby="user_avatar_help"
                                            name="profile_poto"
                                            id="profile_poto"
                                            type="file">
                                            </input>
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

export default ExpertEditModal
