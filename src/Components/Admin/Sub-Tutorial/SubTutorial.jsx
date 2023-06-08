import React, { useEffect, useState } from 'react'
import { getSubTutorials } from '../../../Axios/Services/AdminServices'
import DeleteSubModal from './DeleteSubModal'
import AddSubModal from './AddSubModal'
import EditSubModal from './EditSubModal'

function SubTutorial() {
  const [Data,setData]=useState([])
  const [DeleteModal,setDeleteModal] = useState(false)
  const [AddModal,setAddModal] = useState(false)
  const [EditModal,setEditModal] = useState(false)
  const [Refresh,setRefresh]= useState(false)
  const [FindItem,setFindItem]= useState('')

  useEffect(()=>{
    try{
        const  fetchSubTutorials = async ()=>{
            const response = await getSubTutorials()
            setData(response.payload)
        }  
        fetchSubTutorials()


    }
    catch (error){
        console.log(error)
    }
  },[Refresh])

  const FetchingMatch = (id)=>{
    const selectedItem = Data.find((item)=>item.id === id)
    setFindItem(selectedItem)
    console.log(selectedItem)
    } 

  return (
    <>
    <div className='bg-white h-full px-20 py-20'>
    {DeleteModal ? <DeleteSubModal setDeleteModal={setDeleteModal}  Refresh={Refresh} setRefresh={setRefresh} FindItem={FindItem} /> : ''}
    {AddModal ? <AddSubModal setAddModal={setAddModal} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
    {EditModal ? <EditSubModal setEditModal={setEditModal} Refresh={Refresh} setRefresh={setRefresh} FindItem={FindItem} /> : ""}
    { Data.length !==0 ?  <div className='w-full flex justify-end'><button onClick={()=>{
        setAddModal(true)
    }}  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mb-2 rounded'>ADD</button></div> : "" }
    <div className=" flex flex-col overflow-x-auto">
        {Data.length === 0 ? <div className='flex justify-center flex-wrap'> <div className='bg-white text-center w-full font-extrabold'>No Records </div> <button onClick={()=>{
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
                                {Data.length !== 0 && Data.map((item, index) => {
                                    return (<tr className="border-b dark:border-neutral-500">
                                        <td className="text-white whitespace-nowrap px-6 py-4 font-medium ">{index + 1}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.sub_tutorial_name}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.tutorial}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">{item.domain}</td>
                                        <td className="text-white whitespace-nowrap px-6 py-4">
                                        <button  onClick={()=>{
                                            setEditModal(!EditModal)
                                            FetchingMatch(item.id)
                                        }}
                                       
                                         className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
                                        <button onClick={()=>{
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
</div>
      
    </>
  )
}

export default SubTutorial