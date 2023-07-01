import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

import BarChart from "./Components/BarChart"

import Doughnut from "./Components/Doughnut";
import { getDashboardDetails } from "../../../Axios/Services/AdminServices";


const Dashboard = () => {
  // const [data, setData] = useState()
  // const [pieData, setPieData] = useState();
  // const [error, setError] = useState();
  // const token = useSelector((state) => state.adminLogin.token);
  // let count
  // let earning
  // if(pieData){

  //     count= pieData.reduce((acc,curr)=>{
  //         if(curr._id=="Driver_Canceled"){
  //          acc.cancelled=curr.count
  //         }
  //         else if(curr._id=="Completed"){
  //             acc.completed=curr.count
  //            }
  //            return acc
  //     },{cancelled:0,completed:0})
  // }
  // if(data){

  //     earning= data.reduce((acc,curr)=>acc+=curr.totalPrice,0)
  // }




  // const fetchGraphData = async (token) => {
  //     try {
  //       const response = await AxiosInstance.get(`/admin/salesProject`, { headers: { Authorization: `Bearer ${token}` } },{
  //         params: {
  //           from: "2020-01-11",
  //           to:moment(new Date()).format('YYYY-MM-DD'),
  //           filter:"%m"
  //         }});
  //       return response;
  //     } catch (error) {
  //       return error.response;
  //     }
  //   };
  // const fetchData = async () => {
  //     const response = await fetchGraphData(token);
  //     if (response.status === 200) return setData(response.data.saleReport);
  //     if (response.status === 500) return setError("Try again after some time");
  //   };
  //   const fetchGraphPie = async (token) => {
  //     try {
  //       const response = await AxiosInstance.get(`/admin/graph`, { headers: { Authorization: `Bearer ${token}` } },{
  //         params: {
  //           from: "2020-01-11",
  //           to:moment(new Date()).format('YYYY-MM-DD'),
  //           filter:"%m"
  //         }});
  //       return response;
  //     } catch (error) {
  //       return error.response;
  //     }
  //   };
  // const fetchpie = async () => {
  //     const response = await fetchGraphPie(token);
  //     if (response.status === 200) return setPieData(response.data.saleReport);
  //     if (response.status === 500) return setError("Try again after some time");
  //   };
  // useEffect(() => {
  //     fetchData();
  //     fetchpie();

  //   }, []);
  const token = useSelector(state => state.AdminReducer.accessToken)

  useEffect(()=>{
    try{
      const fetchDashboardDetails = async()=>{
        const response = await getDashboardDetails(token)
        console.log(response)
      }
      fetchDashboardDetails()

    } catch (error){
      console.log(error)
    }


  },[])


  return (
    <div>
      <fieldset classname="grid grid-cols-4 gap-6 p-6 mb-4 rounded-md shadow-sm bg-regal-blue">
        <div classname="space-y-2 col-span-full lg:col-span-1">
          <p classname="font-extrabold text-lg text-real-orange">
            Dashboard
          </p>
        </div>
      </fieldset>
      <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-real-blue">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10 intro-y">
              </div>
              <div className="grid grid-cols-12 gap-6 mt-5">
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 5665</div>
                        <div className="mt-1 text-base text-gray-600">Total Earnings</div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 9898</div>
                        <div className="mt-1 text-base text-gray-600">Total profit</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 5665</div>
                        <div className="mt-1 text-base text-gray-600">Total Domain Purchase</div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 9898</div>
                        <div className="mt-1 text-base text-gray-600">Total Domain Purhase profit</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                      <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 5665</div>
                        <div className="mt-1 text-base text-gray-600">Total Subscription </div>
                      </div>
                    </div>
                  </div>
                </a>
                
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                      <div className="bg-red-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs 9898</div>
                        <div className="mt-1 text-base text-gray-600">Total Subscription profit</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                      <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">7</div>
                        <div className="mt-1 text-base text-gray-600">Clients</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                      </svg>
                      <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">7</div>
                        <div className="mt-1 text-base text-gray-600">Experts</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                      </svg>
                      <div className="bg-blue-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">90</div>
                        <div className="mt-1 text-base text-gray-600">Cancelled RIdes</div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-12 mt-5">
        <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
          {/*
*/}
          <div className="bg-white shadow-lg mr-3 ml-3 rounded-lg" id="chartline"><BarChart /></div>
          <div class="bg-white shadow-lg flex ml-3 pl-20 mr-3 rounded-lg" id="chartpie" style={{ height: '300px' }}><Doughnut /></div>

        </div>
      </div>
    </div>
 
  )
}


export default Dashboard