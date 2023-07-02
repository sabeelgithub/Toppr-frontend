import React, { useEffect, useState } from 'react'
import { getExpertsList, handleExpertStatus } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import ExpertBlockAndUnblock from './ExpertBlockAndUnblock'
import SearchBar from '../SearchBar'


function ExpertList() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [BUModal, setBUModal] = useState(false)
    const [Refresh, setRefresh] = useState(false)
    const [Username, setUsername] = useState('')
    const [Status, setStatus] = useState('')
    const [Id, setId] = useState('')


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

    function searchExperts(e) {
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
            const fetchExperts = async () => {
                const response = await getExpertsList(token)
                if(response){
                    setData(response?.payload)
                    setAllData(response?.payload)

                }

            }
            fetchExperts()
        } catch (error) {
            console.log(error)
        }

    }, [Refresh])



    function StatusChange(id, status, username) {
        setUsername(username)
        setStatus(status)
        setId(id)

    }

    return (
        <div className='bg-stone-900 h-full px-20 py-20'>
            {BUModal ? <ExpertBlockAndUnblock setBUModal={setBUModal} Username={Username} Status={Status} Id={Id} setRefresh={setRefresh} Refresh={Refresh} /> : ""}

            <p className='text-center font-serif font-semibold text-xl text-white'>Experts</p>
            {allData?.length !== 0 ?
                <div className='mb-3'>
                    <SearchBar search={searchExperts} />
                </div>
                : ''}

            <div className=" bg-black flex flex-col overflow-x-auto">
                {Data?.length === 0 ? <div className='bg-stone-900 text-center font-extrabold'><p className='text-white'>No Records</p></div> :
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
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Expert In</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Status</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records?.length !== 0 && records?.map((item, index) => {
                                            return (
                                                <tr className="border-b dark:border-neutral-500">
                                                    <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.username}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.email}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.phone}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.domain}</td>
                                                    {item.status ? <td className="text-white whitespace-nowrap px-6 py-4">blocked</td> : <td className="text-white whitespace-nowrap px-6 py-4">Not blocked</td>}
                                                    {item.status ? <td className="text-white whitespace-nowrap px-6 py-4">
                                                        <button onClick={() => {
                                                            setBUModal(!BUModal)
                                                            StatusChange(item.user_id, item.status, item.username)


                                                        }} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Unblock</button>
                                                    </td> : <td className="text-white whitespace-nowrap px-6 py-4">
                                                        <button onClick={() => {
                                                            setBUModal(!BUModal)
                                                            StatusChange(item.user_id, item.status, item.username)

                                                        }} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Block</button>
                                                    </td>}

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
export default ExpertList
