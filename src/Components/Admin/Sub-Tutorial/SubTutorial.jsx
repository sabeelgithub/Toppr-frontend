import React, { useEffect, useState } from 'react'
import { getSubTutorials } from '../../../Axios/Services/AdminServices'
import DeleteSubModal from './DeleteSubModal'
import AddSubModal from './AddSubModal'
import EditSubModal from './EditSubModal'
import { useSelector } from 'react-redux'
import SearchBar from '../SearchBar'

function SubTutorial() {
    const [Data, setData] = useState([])
    const [allData, setAllData] = useState([])
    const [DeleteModal, setDeleteModal] = useState(false)
    const [AddModal, setAddModal] = useState(false)
    const [EditModal, setEditModal] = useState(false)
    const [Refresh, setRefresh] = useState(false)
    const [FindItem, setFindItem] = useState('')


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







    function searchSubTutorials(e) {
        const key = e.target.value;
        const regex = new RegExp(`^${key}`, 'i')
        const filteredDomain = allData?.filter((item) => regex.test(item?.sub_tutorial_name))
        if (!key) {
            setData(allData)
        } else {
            setData(filteredDomain)
        }
    }



    const token = useSelector(state => state.AdminReducer.accessToken)

    useEffect(() => {
        try {
            const fetchSubTutorials = async () => {
                const response = await getSubTutorials(token)
                if (response) {
                    setData(response?.payload)
                    setAllData(response?.payload)

                }

            }
            fetchSubTutorials()


        }
        catch (error) {
            console.log(error)
        }
    }, [Refresh])

    const FetchingMatch = (id) => {
        const selectedItem = Data?.find((item) => item.id === id)
        setFindItem(selectedItem)
    }

    return (
        <>
            <div className='bg-stone-900 h-full px-20 py-20'>
                {DeleteModal ? <DeleteSubModal setDeleteModal={setDeleteModal} Refresh={Refresh} setRefresh={setRefresh} FindItem={FindItem} /> : ''}
                {AddModal ? <AddSubModal setAddModal={setAddModal} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
                {EditModal ? <EditSubModal setEditModal={setEditModal} Refresh={Refresh} setRefresh={setRefresh} FindItem={FindItem} /> : ""}

                <p className='text-center font-serif font-semibold text-xl text-white'>Sub totorials</p>

                {allData.length !== 0 ?
                    <div>
                        <SearchBar search={searchSubTutorials} />
                    </div>
                    : ''}

                {Data?.length !== 0 ? <div className='w-full flex justify-end'><button onClick={() => {
                    setAddModal(true)
                }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded'>ADD</button></div> : ""}
                <div className=" flex flex-col overflow-x-auto">
                    {Data?.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-stone-900 text-center w-full font-extrabold'><p className='text-white'>No Records</p> </div> <button onClick={() => {
                        setAddModal(true)
                    }} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 mb-2 rounded'>ADD</button> </div> :
                        <div className="sm:-mx-6 lg:-mx-8">
                            <div className="bg-black inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left text-sm font-light">
                                        <thead className="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" className="text-yellow-400 px-6 py-4">S no</th>
                                                <th scope="col" className="text-yellow-400 px-6 py-4">Sub tutorial name</th>
                                                <th scope="col" className="text-yellow-400 px-6 py-4">Tutorial name</th>
                                                <th scope="col" className="text-yellow-400 px-6 py-4">Domain</th>
                                                <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {records?.length !== 0 && records?.map((item, index) => {
                                                return (<tr className="border-b dark:border-neutral-500">
                                                    <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.sub_tutorial_name}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.tutorial}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">{item.domain}</td>
                                                    <td className="text-white whitespace-nowrap px-6 py-4">
                                                        <button onClick={() => {
                                                            setEditModal(!EditModal)
                                                            FetchingMatch(item.id)
                                                        }}

                                                            className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                                                        <button onClick={() => {
                                                            setDeleteModal(!DeleteModal)
                                                            FetchingMatch(item.id)
                                                        }} className='bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
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

        </>
    )
}

export default SubTutorial