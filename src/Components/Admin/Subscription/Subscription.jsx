import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getSubscription } from '../../../Axios/Services/AdminServices'
import SearchBar from '../SearchBar'

function Subscription() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])

    // pagination
    const page = localStorage.getItem('page')
    const [CurrentPage, setCurrentPage] = useState(page ?? 1)
    const recordsPerPage = 4
    const lastIndex = CurrentPage * recordsPerPage
    const firstIndex = lastIndex - recordsPerPage
    const records = Data.slice(firstIndex,lastIndex)
    const nPage = Math.ceil(Data.length/recordsPerPage)
    const numbers = [...Array(nPage+1).keys()].slice(1)


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
    




    const token = useSelector(state => state.AdminReducer.accessToken)

    function searchSubscription(e) {
        const key = e.target.value;
        const regex = new RegExp(`^${key}`, 'i')
        const filteredDomain = allData?.filter((item) => regex.test(item?.order_id))
        if (!key) {
            setData(allData)
        } else {
            setData(filteredDomain)
        }
    }

    useEffect(() => {
        try {
            const fetchSubscription = async () => {
                const response = await getSubscription(token)
                if (response) {
                    setData(response.payload)
                    setAllData(response.payload)
                }
            }
            fetchSubscription()

        }
        catch (error) {
            console.log(error)
        }

    }, [])

   



    return (
        <div className='bg-stone-900 h-full pl-10 pr-20 py-20 '>
            <div className=" flex flex-col overflow-x-hidden">
                <p className='font-serif font-semibold text-xl mb-4 text-white'>Subscription</p>

                {allData.length !== 0 ?
                    <div className='mb-2'>
                        <SearchBar search={searchSubscription} />
                    </div>
                    : ''}

                {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-stone-900 text-center w-full font-extrabold'><p className='text-white'>No Records</p> </div></div> :
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="md:w-3/4 w-full overflow-x-auto">
                                <table className="bg-black  text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">S no</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Order Id</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Expert</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Client</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Domain</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Duration</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Status</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Amount</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Expert Share</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Admin Share</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Subscribed On</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Expire On</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Terminated</th>



                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records?.length !== 0 && records?.map((item, index) => {
                                            return (<tr className="border-b dark:border-neutral-500">
                                                <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.order_id}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.expert_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.client_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.duration} months</td>
                                                {item.status === true ? <td className="text-green-500 whitespace-nowrap px-6 py-4">Active</td> : <td className="text-red-600 whitespace-nowrap px-6 py-4">Expired</td>}

                                                <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.amount}</td>
                                                {item.terminated ? <td className="text-white whitespace-nowrap px-6 py-4"><strike>  ₹ {item.expert_share} </strike></td> : <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.expert_share}</td>}

                                                <td className="text-white whitespace-nowrap px-6 py-4">₹ {item.admin_share}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.subscription_date}</td>
                                                {item.status === true ? <td className="text-yellow-300 whitespace-nowrap px-6 py-4">{item.expire_on}</td> : <td className="text-red-500 whitespace-nowrap px-6 py-4">-------</td>}
                                                {item.terminated === true ? <td className="text-yellow-300 whitespace-nowrap px-6 py-4">Yes</td> : <td className="text-red-500 whitespace-nowrap px-6 py-4">-------</td>}


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

export default Subscription