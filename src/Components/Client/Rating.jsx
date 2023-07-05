import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { submitRating } from '../../Axios/Services/ClientServices'
import { toast } from 'react-toastify'

function Rating() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [first, setFirst] = useState(false)
    const [second, setSecond] = useState(false)
    const [third, setThird] = useState(false)
    const [four, setFour] = useState(false)
    const [five, setFive] = useState(false)

    const token = useSelector(state => state.ClientReducer.accessToken)

    const rating = async (count) => {
        localStorage.setItem('rating', 0)
        const response = await submitRating(token, count, id)
        if (response) {
            if (response?.status === 200) {
                toast.success(response?.message)
                navigate(`/single-expert/${id}`)
            }
        }
    }
    useEffect(() => {
        console.log(localStorage.getItem('rating'), 'ghjk')
        if (localStorage.getItem('rating') == 1) {
            setFirst(true)
        } else if (localStorage.getItem('rating') == 2) {
            setSecond(true)
            setFirst(true)
        } else if (localStorage.getItem('rating') == 3) {
            setThird(true)
            setSecond(true)
            setFirst(true)
        } else if (localStorage.getItem('rating') == 4) {
            setFour(true)
            setThird(true)
            setSecond(true)
            setFirst(true)
        } else if (localStorage.getItem('rating') == 5) {
            setFive(true)
            setFour(true)
            setThird(true)
            setSecond(true)
            setFirst(true)
        }


    }, [])
    return (
        <>
            <div class="p-6 text-center bg-black">
                <div className="py-4 sm:max-w-xl sm:mx-auto">
                    <div className="bg-white min-w-1xl flex flex-col rounded-xl shadow-lg">
                        <div className="px-8 py-3">
                            <h2 className="text-gray-800 text-3xl font-semibold">Your opinion matters to us!</h2>
                        </div>
                        <div className="bg-emerald-400 w-full flex flex-col items-center">
                            <div className="flex flex-col items-center py-6 space-y-3">
                                <span className="text-lg text-gray-800">How was your expert?</span>
                                <div className="flex space-x-3">
                                    <svg className={first ? "w-12 h-12 text-yellow-300" : "w-12 h-12 text-white"} onClick={() => {
                                        if (!first) {

                                            setFirst(true)
                                            localStorage.setItem('rating', 1)
                                        } else {
                                            if (second) {
                                                localStorage.setItem('rating', 1)
                                                setFive(false)
                                                setFour(false)
                                                setThird(false)
                                                setSecond(false)

                                            }

                                        }
                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className={second ? "w-12 h-12 text-yellow-300" : "w-12 h-12 text-white"} onClick={() => {
                                        if (!second) {
                                            localStorage.setItem('rating', 2)
                                            setSecond(true)
                                            setTimeout(setFirst(true), 3000);
                                        } else {
                                            if (third) {

                                                localStorage.setItem('rating', 2)
                                                setFive(false)
                                                setFour(false)
                                                setThird(false)
                                            }


                                        }

                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className={third ? "w-12 h-12 text-yellow-300" : "w-12 h-12 text-white"} onClick={() => {

                                        if (!third) {
                                            localStorage.setItem('rating', 3)
                                            setThird(true)
                                            setTimeout(setFirst(true), 3000)
                                            setTimeout(setSecond(true), 3000)
                                        } else {
                                            if (four) {
                                                localStorage.setItem('rating', 3)
                                                setFive(false)
                                                setFour(false)

                                            }

                                        }

                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className={four ? "w-12 h-12 text-yellow-300" : "w-12 h-12 text-white"} onClick={() => {
                                        if (!four) {
                                            localStorage.setItem('rating', 4)
                                            setFour(true)
                                            setTimeout(setFirst(true), 3000)
                                            setTimeout(setSecond(true), 3000)
                                            setTimeout(setThird(true), 3000)
                                        } else {
                                            if (five) {
                                                localStorage.setItem('rating', 4)
                                                setFive(false)


                                            }

                                        }
                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className={five ? "w-12 h-12 text-yellow-300" : "w-12 h-12 text-white"} onClick={() => {
                                        if (!five) {

                                            localStorage.setItem('rating', 5)
                                            setFive(true)
                                            setTimeout(setFirst(true), 3000)
                                            setTimeout(setSecond(true), 3000)
                                            setTimeout(setThird(true), 3000)
                                            setTimeout(setFour(true), 3000)
                                        }


                                    }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z  style={{ fill: 'white' }}" />
                                    </svg>
                                </div>
                            </div>
                            <div className="w-3/4 flex flex-col ">

                                <button onClick={() => {
                                    if (five) {

                                        rating(5)
                                    } else if (four) {

                                        rating(4)
                                    } else if (third) {

                                        rating(3)
                                    } else if (second) {
                                        rating(2)
                                    } else if (first) {
                                        rating(1)
                                    }
                                }} className="py-3 my-8 text-lg bg-blue-600 hover:bg-blue-800 rounded-xl text-white ">Rate now</button>
                            </div>
                        </div>
                        <div onClick={() => {
                            localStorage.setItem('rating', 0)
                            navigate(`/single-expert/${id}`)
                        }} className="h-14 flex items-center justify-center bg-white hover:bg-gray-300 rounded-lg">
                            <a className="text-gray-600 cursor-pointer">Maybe later</a>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Rating