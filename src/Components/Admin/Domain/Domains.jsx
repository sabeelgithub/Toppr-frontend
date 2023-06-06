import React, { useEffect, useState } from 'react'
import DeleteDomainModal from './DeleteDomainModal'
import AddDomainModal from './AddDomainModal'
import { getDomains } from '../../../Axios/Services/AdminServices'

function Domains() {
    const [Data, setData] = useState([])
    const [DeleteModal,setDeleteModal] = useState(false)
    const [AddModal,setAddModal] = useState(false)
    const [Id,setID] = useState('')
    const [Name,setName] = useState('')
    const [Refresh,setRefresh] = useState(false)

     
    console.log(Data)
    useEffect(()=>{
        try{
            const fetchDomains = async()=>{
                const response = await getDomains()
                console.log(response)
                setData(response.payload)
            }
            fetchDomains()
           
        }
        catch (error){
            console.log(error)
        }
    },[Refresh])

    console.log(DeleteModal)
    const deleteDomain = (id,name)=>{
        setID(id)
        setName(name)

    }
  return (
    <div className='bg-white h-full px-20 py-20'>
    {DeleteModal ? <DeleteDomainModal setDeleteModal={setDeleteModal} Id={Id} name={Name} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
    {AddModal ? <AddDomainModal  setAddModal={setAddModal} /> : ''}
    { Data.length !==0 ?  <div className='w-full flex justify-end'><button  onClick={()=>{setAddModal(true)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded'>ADD</button></div> : "" }
    <div className=" flex flex-col overflow-x-auto">
        {Data.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-white text-center w-full font-extrabold'>No Records </div> <button  onClick={()=>{setAddModal(true)}} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 mt-4 px-4 mb-2 rounded'>ADD</button> </div> :
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
                                {Data.length !== 0 && Data.map((item, index) => {
                                    return (<tr className="border-b dark:border-neutral-500">
                                        <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.domain_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.price}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.created_at}</td>
                                       <td className="text-white whitespace-nowrap px-6 py-4">
                                            <button  className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                                            <button onClick={()=>{
                                                setDeleteModal(!DeleteModal)
                                                deleteDomain(item.id,item.domain_name)
                                            }}  className='bg-red-500 ml-4 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
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
</div>
  )
}

export default Domains