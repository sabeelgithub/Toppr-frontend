import React, { useEffect, useState } from 'react'

import AddDomainModal from './AddDomainModal'
import EditDomainModal from './EditDomainModal'
import { getDomains } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'
import BlockAndUnblockModal from './BlockAndUnblockModal'
import SearchBar from '../SearchBar'


function Domains() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [BUModal, setBUModal] = useState(false)
    const [AddModal, setAddModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [Id, setID] = useState('')  // for delete
    const [Name, setName] = useState('') // for delete
    const [Status, setStatus] = useState('') // for delete
    const [Refresh, setRefresh] = useState(false)
    const [FindItem, setFindItem] = useState('') // for edit

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
            localStorage.setItem('page',CurrentPage+1)
            setCurrentPage(CurrentPage + 1)
        }

    }
    function changeCPage(id) {
        setCurrentPage(id)
        localStorage.setItem('page',id)

    }
    function prePage() {
        if (CurrentPage !== 1) {
            localStorage.setItem('page',CurrentPage-1)
            setCurrentPage(CurrentPage - 1)
        }

    }
    function preSPage() {
        if (CurrentPage !== 1 ) {
            setCurrentPage(CurrentPage - 1)
        }

    }
    if (records.length === 0 && CurrentPage > 1 && allData.length!==0) {
        preSPage()
   }
   


    function searchDomain(e) {
        const key = e.target.value;
        const regex = new RegExp(`^${key}`, 'i')
        const filteredDomain = allData?.filter((dom) => regex.test(dom?.domain_name))
        if (!key) {
            setData(allData)
        } else {
            setData(filteredDomain)
        }
    }


    const token = useSelector(state => state.AdminReducer.accessToken)
    useEffect(() => {
        try {
            const fetchDomains = async () => {
                const response = await getDomains(token)
                if (response) {
                    setAllData(response?.payload)
                    setData(response?.payload)

                }

            }
            fetchDomains()

        }
        catch (error) {
            console.log(error)
        }
    }, [Refresh])

    // delete button 
    const deleteDomain = (id, name, status) => {
        setID(id)
        setName(name)
        setStatus(status)

    }

    // edit button
    const editDomain = async (id) => {
        setID(id)
        const selectedItem = Data?.find((item) => item.id === id)
        setFindItem(selectedItem)

    }
    return (
        <div className='bg-stone-900 h-full px-20 py-20'>
            {BUModal ? <BlockAndUnblockModal setBUModal={setBUModal} Id={Id} name={Name} Refresh={Refresh} setRefresh={setRefresh} Status={Status} /> : ''}
            {AddModal ? <AddDomainModal setAddModal={setAddModal} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
            {EditModal ? <EditDomainModal setEditModal={setEditModal} FindItem={FindItem} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
            <p className='text-center font-serif font-semibold text-xl text-white'>Domains</p>

            {allData.length !== 0 ?
                <div>
                    <SearchBar search={searchDomain} />
                </div>
                : ''}



            {Data?.length !== 0 ? <div className='w-full flex justify-end'><button onClick={() => { setAddModal(!AddModal) }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded'>ADD</button></div> : ""}
            <div className=" flex flex-col overflow-x-auto">
                {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-stone-900 text-center w-full font-extrabold'><p className='text-white'>No Records </p></div> <button onClick={() => { setAddModal(!AddModal) }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 mb-2 rounded'>ADD</button> </div> :
                    <div className="sm:-mx-6 lg:-mx-8">
                        <div className="bg-black inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full text-left text-sm font-light">
                                    <thead className="border-b font-medium dark:border-neutral-500">
                                        <tr>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">s no</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">domain name</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">price</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">created_at</th>
                                            <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {records?.length !== 0 && records?.map((item, index) => {
                                            return (<tr className="border-b dark:border-neutral-500">
                                                <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.price}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">{item.created_at}</td>
                                                <td className="text-white whitespace-nowrap px-6 py-4">
                                                    <button onClick={() => {
                                                        setEditModal(!EditModal)
                                                        editDomain(item.id)

                                                    }} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                                                    {item.blocked ? <button onClick={() => {
                                                        setBUModal(!BUModal)
                                                        deleteDomain(item.id, item.domain_name, item.blocked)
                                                    }} className='bg-green-500 ml-4 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Unblock</button> : <button onClick={() => {
                                                        setBUModal(!BUModal)
                                                        deleteDomain(item.id, item.domain_name, item.blocked)
                                                    }} className='bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Block</button>}

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
                            <a href="#" onClick={()=>{
                                prePage()                    
                            }} className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
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

export default Domains