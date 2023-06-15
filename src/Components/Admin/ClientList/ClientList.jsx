import React, { useEffect, useState } from 'react'
import { getClientsList, handleClientStatus } from '../../../Axios/Services/AdminServices'
import { useSelector } from 'react-redux'

function ClientList() {
  const [Data, setData] = useState([])
  const [Refresh, setRefresh] = useState(false)
  const token = useSelector(state=>state.AdminReducer.accessToken)

  useEffect(() => {
    try {
      const fetchClients = async () => {
        const response = await getClientsList(token)
        if(response){
          setData(response?.payload)

        }
        
      }
      fetchClients()

    } catch (error) {
      console.log(error)
    }
  }, [Refresh])


  // blocking mechanism
  async function StatusChange(id, status) {
    try {
      const data = {
        id: id,
        status: status
      }
      const response = await handleClientStatus(token,data)
      setRefresh(!Refresh)
    }
    catch (error) {
      console.log(error)
    }
  }


  return (
    <div className='bg-white h-full px-20 py-20'>

      <div className=" bg-black flex flex-col overflow-x-auto">

        {Data?.length === 0 ? <div className='bg-white text-center font-extrabold'>No Records</div> :
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
                      <th scope="col" className="text-yellow-400 px-6 py-4">Status</th>
                      <th scope="col" className="text-yellow-400 px-6 py-4">Actions</th>

                    </tr>
                  </thead>
                  <tbody>


                    {Data?.length !== 0 && Data?.map((item, index) => {
                      return (

                        <tr className="border-b dark:border-neutral-500">
                          <td className="text-white whitespace-nowrap px-6 py-4 font-medium">{index + 1}</td>
                          <td className="text-white whitespace-nowrap px-6 py-4">{item.username}</td>
                          <td className="text-white whitespace-nowrap px-6 py-4">{item.email}</td>
                          <td className="text-white whitespace-nowrap px-6 py-4">{item.phone}</td>
                          {item.status ? <td className="text-white whitespace-nowrap px-6 py-4">blocked</td> : <td className="text-white whitespace-nowrap px-6 py-4">Not blocked</td>}
                          {item.status ? <td className="text-white whitespace-nowrap px-6 py-4">
                            <button onClick={() => {
                              StatusChange(item.id, item.status)

                            }} className='bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded'>Unblock</button>
                          </td> : <td className="text-white whitespace-nowrap px-6 py-4">
                            <button onClick={() => {
                              StatusChange(item.id, item.status)

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
    </div>
  )
}

export default ClientList