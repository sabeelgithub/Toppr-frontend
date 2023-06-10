import React, { useEffect, useRef, useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Components/LoginForm.css'
import { registrationSchema } from '../Validations/registrationValidation';
import { useFormik } from 'formik';
import { Register, getDomains } from '../Axios/Services/CommenServices';
import { toast } from 'react-toastify';





function SignupForm() {
  const [Domain,setDomain] = useState([])

  const [RegisterPerson, setRegisterPerson] = useState('client')

  const refDomain = useRef()

  const navigate = useNavigate()

  useEffect(()=>{
    try{
      const fetchDomain = async ()=>{
        const response = await getDomains()
        setDomain(response.payload)

      }
      fetchDomain()

    }
    catch (error){
      console.log(error)
    }
  },[])
 

  const onSubmit = async () => {

    const form = new FormData()
    form.append('phone',values.phone)
    form.append('email',values.email)
    form.append('username',values.username)
    form.append('password',values.password)
    form.append('confirmPassword',values.confirmPassword)
    form.append('person',RegisterPerson)
    if (RegisterPerson==='expert'){
      form.append('profile_poto',values.profile_poto)
      form.append('certificate',values.certificate)
      form.append('domain',refDomain.current.value)
    } 
    
   
    // form.forEach((value, key) => {
    //   console.log(value,key)
    // });

   
    try {
      if (RegisterPerson === 'expert') {
        
        const response = await Register(form)
        if (response.status === 200) {
          toast.success('success you can login')
           navigate('/login')
        } else if (response.error?.email && response.error.email[0]==="user with this email address already exists.") {
          toast.error('This Email is Already Registered')  
        } else if (response.error?.phone && response.error.phone[0]==="user with this phone already exists."){
          toast.error('This Mobile is Already Registered')
        }  else {
          toast.error('Something went wrong!')
        }
        
      } else {
        
        const response = await Register(form)
        if (response.status === 200) {
          toast.success('success you can login')
           navigate('/login')
        } else if (response.error?.email && response.error.email[0]==="user with this email address already exists.") {
          toast.error('This Email is Already Registered')     
        } else if (response.error?.phone && response.error.phone[0]==="user with this phone already exists."){
          toast.error('This Mobile is Already Registered')
        }  else {
          toast.error('Something went wrong!')
        }

      }

    } catch (error) {
      console.log(error)
    }
  }


  // formik 
  const { values, errors, touched, handleBlur, handleChange, handleSubmit, setFieldValue } =
    useFormik({
      initialValues: {
        phone: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        profile_poto:"",
        certificate: "",
     
      },
      validationSchema: registrationSchema,
      onSubmit,
    })



  return (
    <div className="flex items-center justify-center h-full pt-16 pb-16 bg-black">
      <div className="w-3/4 bg-stone-900 shadow-xl rounded-lg registerform">
        <div className="p-6 space-y-4">
          <div className=" flex justify-between flex-wrap">
            <Link onClick={() => {
              setRegisterPerson('client')

            }} className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-green-500 hover:bg-green-600">
              Register Client
            </Link>

            <Link onClick={() => {
              setRegisterPerson('expert')


            }} className="text-sm font-semibold leading-6 text-white py-2 px-3 rounded-md bg-green-500 hover:bg-green-600">
              Register Expert
            </Link>
          </div>
          <h1 className='text-center mt-2 md:font-medium text-rose-800'>Register as {RegisterPerson}</h1>



          <form className="space-y-4" onSubmit={handleSubmit} encType="multipart/form-data">


            <div>
              <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-white">
                Your Mobile
              </label>
              <input
                type="tel"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your mobile number"

              />
              {errors.phone && touched.phone && (
                <p className="text-red-600">{errors.phone}</p>
              )}
            </div>



            <div>
              <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-white">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                id="email"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your email"

              />
              {errors.email && touched.email && (
                <p className="text-red-600">{errors.email}</p>
              )}
            </div>




            <div>
              <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-white">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
                id="username"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter your username"
              // required
              />
              {errors.username && touched.username && (
                <p className="text-red-600">{errors.username}</p>
              )}
            </div>
            {RegisterPerson === 'expert' ? <div className='md:flex justify-between flex-wrap' >


              <div className='mb-10'>
                <select 
                ref={refDomain} className="select w-full rounded-lg" required >
                  <option value='' selected>Choose Domain</option>
                  {Domain.length !==0 && Domain.map((item)=>{
                    return (
                      <option value={item.id} >{item.domain_name}</option>

                    )
                  })}
                 
                </select>
              </div>

              <div className='mt-5 md:mt-0'>

                <input name="profile_poto" required 
                  id="profile_poto" accept='image/*'  onChange={(evt)=>setFieldValue('profile_poto',evt.target.files[0])} className="block  text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file" />

              </div>
              <div className='mt-5 md:mt-0'>

                <input name='certificate' id="cerertificate"  accept='image/*'  onChange={(evt)=>setFieldValue('certificate',evt.target.files[0])}   required className="block text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" type="file" />

              </div>
            </div> : ''}

            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input


                type="password"
                name="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                id="password"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"

              />
              {errors.password && touched.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                id="confirmPassword"
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="••••••••"

              />
              {errors.confirmPassword && touched.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full  text-black bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Sign Up
            </button>

            <div className="flex items-center justify-between">
              <p className="text-sm font-light text-white">
                Already have an account?{' '}
                <Link to="/login" className="font-medium text-primary-600 hover:underline">
                  Login Here
                </Link>
              </p>

            </div>
          </form>




        </div>
      </div>
    </div>
  );
}

export default SignupForm;
