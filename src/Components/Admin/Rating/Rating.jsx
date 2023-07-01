import React, { useEffect, useState } from 'react'
import { getRating } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar'

function Rating() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])

    const [CurrentPage, setCurrentPage] = useState(1)
    const recordsPerPage = 4
    const lastIndex = CurrentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = Data.slice(firstIndex, lastIndex)
    const nPage = Math.ceil(Data.length / recordsPerPage)
    const numbers = [...Array(nPage + 1).keys()].slice(1)


    function nextPage() {
        if (CurrentPage !== nPage) {
            localStorage.setItem('page', CurrentPage + 1)
            setCurrentPage(CurrentPage + 1)
        }

    }
    function changeCPage(id) {
        setCurrentPage(id)
        localStorage.setItem('page', id)

    }
    function prePage() {
        if (CurrentPage !== 1) {
            localStorage.setItem('page', CurrentPage - 1)
            setCurrentPage(CurrentPage - 1)
        }

    }
    function preSPage() {
        if (CurrentPage !== 1) {
            setCurrentPage(CurrentPage - 1)
        }

    }
    if (records.length === 0 && CurrentPage > 1 && allData.length !== 0) {
        preSPage()
    }


    function searchRating(e) {
        const key = e.target.value;
        const regex = new RegExp(`^${key}`, 'i')
        const filteredDomain = allData?.filter((item) => regex.test(item?.domain_name))
        if (!key) {
            setData(allData)
        } else {
            setData(filteredDomain)
        }
    }

    const token = useSelector(state => state.AdminReducer.accessToken)
    useEffect(() => {
        try {
            const fetchRating = async () => {
                const response = await getRating(token)
                if (response) {
                    setData(response?.payload)
                    setAllData(response?.payload)
                }
            }
            fetchRating()

        }
        catch (error) {
            console.log(error)
        }

    }, [])

    return (
        <div className='bg-stone-900 h-full px-20 py-20'>
            <div className=" flex flex-col overflow-x-auto">
                <p className='text-center font-serif font-semibold text-xl text-white'>Rating</p>

                {allData.length !== 0 ?
                    <div className='mb-3'>
                        <SearchBar search={searchRating} />
                    </div>
                    : ''}

                {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-stone-900 text-center w-full font-extrabold'><p className='text-white'>No Records </p> </div></div> :
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="bg-black inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">S no</th>

                                            <th scope="col" className="text-yellow-400 px-6 py-4">Expert name</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Domain name</th>

                                            <th scope="col" className="text-yellow-400 px-6 py-4">Rating</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records?.length !== 0 && records?.map((item, index) => {
                                            let star = [];
                                            for (let i = 1; i <= item.count; i++) {
                                                star.push(<svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>)
                                            }
                                            return (<tr className="border-b dark:border-neutral-500">
                                                <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.expert_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4 flex">{star}</td>



                                            </tr>

                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>}
            </div>
            {Data.length ?
                <nav aria-label="Page navigation example" className='mt-4'>
                    <ul className="inline-flex -space-x-px">
                        <li >
                            <a href="#" onClick={prePage} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                        </li>
                        {numbers.length && numbers.map((n, i) => {
                            return (

                                <li key={i}>
                                    <a onClick={() => {
                                        changeCPage(n)
                                    }} href="#" className={CurrentPage === n ? "px-3 py-2 leading-tight text-gray-500 bg-blue-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{n}</a>
                                </li>

                            )

                        })}

                        <li>
                            <a onClick={nextPage} href="#" className="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
                        </li>
                    </ul>
                </nav>
                : ""}
        </div>
    )
}

export default Rating