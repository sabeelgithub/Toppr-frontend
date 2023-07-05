import React, { useEffect, useState } from 'react'
import { getPendingExperts } from '../../../Axios/Services/AdminServices'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar'

function Notification() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])



    const page = localStorage.getItem('page')
    const [CurrentPage, setCurrentPage] = useState(page ?? 1)
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


    function searchPendingExpertd(e) {
        const key = e.target.value;
        const regex = new RegExp(`^${key}`, 'i')
        const filteredDomain = allData?.filter((item) => regex.test(item?.username))
        if (!key) {
            setData(allData)
        } else {
            setData(filteredDomain)
        }
    }

    const token = useSelector(state => state.AdminReducer.accessToken)
    useEffect(() => {
        try {
            const fetchPending = async () => {
                const response = await getPendingExperts(token)
                if (response) {
                    setData(response?.payload)
                    setAllData(response.payload)

                }

            }
            fetchPending()

        }
        catch (error) {
            console.log(error)
        }

    }, [])
    return (
        <div className='bg-stone-900  h-full px-40 py-20'>



            <p className='text-center font-serif font-semibold text-xl text-white'>Pending experts</p>

            {allData?.length !== 0 ?
                <div className='mb-3'>
                    <SearchBar search={searchPendingExpertd} />
                </div>
                : ''}

            <div className=" bg-black flex flex-col overflow-x-auto">

                {Data?.length === 0 ? <div className='bg-stone-900  text-center font-extrabold'><p className='text-white'>No Records</p></div> :
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">s no</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Username</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Email</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Mobile</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Domain Looking for</th>

                                            <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data?.length !== 0 && Data?.map((item, index) => {
                                            return (<tr className="border-b dark:border-neutral-500">
                                                <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.username}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.email}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.phone}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.domain}</td>

                                                <td className="text-white whitespace-nowrap px-6 py-4">
                                                    <Link to={`/admin/notification-view/${item.user_id}`} className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">   View
                                                    </Link>

                                                </td>

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
                                    }} href="#" className={CurrentPage == n ? "px-3 py-2 leading-tight text-gray-500 bg-blue-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" : "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"}>{n}</a>
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

export default Notification