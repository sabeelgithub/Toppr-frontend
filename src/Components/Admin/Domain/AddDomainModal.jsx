
import { Fragment,  useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AddDomainSchema } from "../../../Validations/Domain/AddDomain";
import { AddDomain } from "../../../Axios/Services/AdminServices";
import { toast } from 'react-toastify';
import { useFormik } from "formik";


function AddDomainModal({setAddModal,Refresh,setRefresh}) {

    const cancelButtonRef = useRef(null);
    const [open, setOpen] = useState(true)
    const onSubmit = async()=>{
        console.log('eneted')
        console.log(values)
        const form = new FormData()
        form.append('domain_name',values.domain_name)
        form.append('description',values.description)
        form.append('price',values.price)
        form.append('image',values.image)

        try{
            const response = await AddDomain(form)
            console.log(response)
            if(response.status===200){
                setAddModal(false)
                setRefresh(!Refresh)
                toast.success(response.message)

            } else if(response.status===300){
                toast.warning('domain with this domain name already exists.')
            } else{
                toast.error('something went wrong')
            }

        }
        catch (error){
            console.log(error)
        }
    }

   
    //formik
    const {values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } = useFormik({
        initialValues:{
            domain_name:"",
            description:"",
            price:"",
            image:""
        },
        validationSchema:AddDomainSchema,
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
                                    setAddModal(false)
                                }} type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="popup-modal">
                                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <p className='font-extrabold text-2xl'>Add New Domain</p>
                                        <form className="space-y-4 md:space-y-6" action="#"  onSubmit={handleSubmit} encType="multipart/form-data">
            
                                            <div>
                                                <label htmlFor="domain_name" className="block mb-2 text-sm font-medium text-black ">Enter Domain name</label>
                                                <input type="text" name="domain_name"  
                                                value={values.domain_name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} id="domain_name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Data science" />
                                                {errors.domain_name && touched.domain_name && (
                                                    <p className="text-red-600">{errors.domain_name}</p>
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
                                            <div>
                                                <label htmlFor="price" className="block mb-2 text-sm font-medium text-black">Price</label>
                                                <input type="number" name="price"
                                                value={values.price}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                id="price"
                                                placeholder="999" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                                {errors.price && touched.price && (
                                                    <p className="text-red-600">{errors.price}</p>
                                                  )}


                                            </div>
                                            <div>
                                            <input
                                            onChange={(evt)=>setFieldValue('image',evt.target.files[0])}
                                            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                            aria-describedby="user_avatar_help"
                                            name="image"
                                            id="image"
                                            type="file"
                                            required
                                          ></input>
                        
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

export default AddDomainModal
