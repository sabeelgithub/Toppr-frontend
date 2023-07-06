import React from 'react'
import { useNavigate } from 'react-router-dom'


function MyDomains({ Domains }) {
  const navigate = useNavigate()
  return (
    <>
      <div className="mt-1 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
        <div className="w-full flex flex-col ">
          <div className="flex-1 bg-black  shadow-xl p-8">
          {Domains.length!==0 && <p className='text-center text-white font-extrabold text-2xl mb-3'>My Domains</p>}
          

            <section className="bg-black">
              <div className="container">
                <div className="flex flex-wrap -mx-4">
                  <div className="w-full px-4">
                    <div className="max-w-full overflow-x-auto">
                      {Domains.length === 0 ? <div><p className='text-white text-center text-2xl font-semibold'>No Records</p>
                        <div className='flex justify-center mt-2'>   <button onClick={() => {
                          navigate('/')
                        }} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-8 py-2 rounded text-sm space-x-2 transition duration-100">

                          <span>Buy</span>
                        </button> </div>

                      </div> :
                        <table className="table-auto w-full">
                          <thead>
                            <tr className="bg-emerald-500 text-center">
                              <th className="
                    
                    w-1/6
                    min-w-[160px]
                    text-lg
                    font-semibold
                    text-white
                    py-3
                    lg:py-3
                    px-3
                    lg:px-4
                    border-l border-transparent
                    ">
                                Sl no
                              </th>
                              <th className="
                    w-1/6
                    min-w-[160px]
                    text-lg
                    font-semibold
                    text-white
                    py-3
                    lg:py-3
                    px-3
                    lg:px-4
                    ">
                                Domain
                              </th>
                              <th className="
                    w-1/6
                    min-w-[160px]
                    text-lg
                    font-semibold
                    text-white
                    py-3
                    lg:py-3
                    px-3
                    lg:px-4
                    ">
                                Price
                              </th>
                              <th className="
                    w-1/6
                    min-w-[160px]
                    text-lg
                    font-semibold
                    text-white
                    py-3
                    lg:py-3
                    px-3
                    lg:px-4
                    ">
                                Purchased On
                              </th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            {Domains?.length !== 0 && Domains?.map((item, index) => {
                              return (
                                <tr>
                                  <td className="
                  text-center text-dark
                  font-medium
                  text-base
                  py-5
                  px-2
                  bg-[#F3F6FF]
                  border-b border-l border-[#E8E8E8]
                  ">
                                    {index + 1}
                                  </td>
                                  <td onClick={() => {
                                    navigate(`/domain/${item.domain_name}`)
                                  }} className="
                  cursor-pointer
                  text-center text-dark
                  font-medium
                  text-base
                  py-5
                  px-2
                  bg-white
                  border-b border-[#E8E8E8]
                  ">
                                    {item.domain_name}
                                  </td>
                                  <td className="
                  text-center text-dark
                  font-medium
                  text-base
                  py-5
                  px-2
                  bg-[#F3F6FF]
                  border-b border-[#E8E8E8]
                  ">
                                    ₹ {item.price}
                                  </td>
                                  <td className="
                  text-center text-dark
                  font-medium
                  text-base
                  py-5
                  px-2
                  bg-white
                  border-b border-[#E8E8E8]
                  ">
                                    {item.created_at}
                                  </td>
                                 


                                </tr>

                              )
                            })}



                          </tbody>
                        </table>
                      }

                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>
      </div>
    </>
  )
}

export default MyDomains