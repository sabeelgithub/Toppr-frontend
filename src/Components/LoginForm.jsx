import React, { useState } from 'react'
import './LoginForm.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { LoginSchema } from '../Validations/loginvalidation'
import { Login } from '../Axios/Services/CommenServices'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { ClientLogin } from '../Redux/ClientSlice'
import { ExpertLogin } from '../Redux/ExpertSlice'
import { AdminLogin } from '../Redux/AdminSlice'



function LoginForm() {

  const navigate = useNavigate()

  const dispatch = useDispatch()




  const onSubmit = async () => {
    try {
      const response = await Login(values)
      if (response.status === 200) {
        toast.success(response.message)
        if (response.person === 'client') {
          dispatch(ClientLogin({ refreshToken: response.refresh, accessToken: response.access, client: { username: response.username, person: response.person } }))
          localStorage.setItem('Component','dashboard')
          navigate('/')
          if (response?.domains && response?.subscribed) {
            dispatch(ClientLogin({ refreshToken: response.refresh, accessToken: response.access, purchased_domains: response.domains, subscription: response.subscribed, client: { username: response.username, person: response.person } }))
          } else if (response?.domains) {
            dispatch(ClientLogin({ refreshToken: response.refresh, accessToken: response.access, purchased_domains: response.domains, client: { username: response.username, person: response.person } }))
          }

        } else if (response.person === 'expert') {
          dispatch(ExpertLogin({ refreshToken: response.refresh, accessToken: response.access, expert: { username: response.username, person: response.person } }))
          localStorage.setItem('Component','dashboard')
          navigate('/')

        } else if (response.person === 'admin') {
          dispatch(AdminLogin({ refreshToken: response.refresh, accessToken: response.access, admin: { username: response.username, person: response.person } }))
          navigate('/admin/dashboard')
        }

      } else if (response.status === 600) {
        toast.warning(response.message)
      } else if (response.status === 500) {
        toast.warning(response.message)
      } else if (response.status === 700) {
        toast.error(response.message)
      } else if (response.status === 800) {
        toast.error(response.message)
      } else if (response.status === 404) {
        toast.error(response.message)
      } else {
        toast.error('something went wrong')
      }


    } catch (error) {
      console.log(error)

    }
  }


  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: LoginSchema,
      onSubmit,
    })
  return (
    <div>
      <section className="bg-black dark:bg-gray-900 py-14">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-full lg:py-0">

          <div className="w-full bg-stone-900 shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 loginform">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

              <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit} encType="multipart/form-data">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-white dark:text-white">Your email</label>
                  <input type="email" name="email" id="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                  {errors.email && touched.email && (
                    <p className="text-red-600">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-white dark:text-white">Password</label>
                  <input type="password" name="password" id="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                  {errors.password && touched.password && (
                    <p className="text-red-600">{errors.password}</p>
                  )}
                </div>

                <button type="submit" className="w-full text-black bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>

                <div className="flex items-center justify-between">
                  <p className="text-sm font-light text-white dark:text-gray-400">
                    Don’t have an account yet? <Link to='/register' href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                  </p>

                  <a href="#" className="text-sm font-medium text-white hover:underline dark:text-primary-500">Forgot password?</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default LoginForm