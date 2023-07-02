import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import BarChart from "./Components/BarChart"
import Doughnut from "./Components/Doughnut";
import { getDashboardDetails, getRoundedgraphDetails, getbargraphDetails } from "../../../Axios/Services/AdminServices";
import { GiTeacher } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";


const Dashboard = () => {
  const [data, setData] = useState()
  const [months, setMonths] = useState([])
  const [earnings, setEarnings] = useState([])
  const [profits, setProfits] = useState([])
  const [count,setCount] = useState([])

  const token = useSelector(state => state.AdminReducer.accessToken)

  useEffect(() => {
    try {
      const fetchDashboardDetails = async () => {
        const response = await getDashboardDetails(token)
        if (response) {
          setData(response)

        }
      }
      fetchDashboardDetails()
      const fetchBargraphDetails = async () => {
        const response = await getbargraphDetails(token)
        if (response) {
          setMonths(response?.months)
          setEarnings(response?.earnings)
          setProfits(response?.profits)

        }
      }
      fetchBargraphDetails()
      const fetchRoundedgraphDetails = async ()=>{
        const response = await getRoundedgraphDetails(token)
        if(response){
          setCount(response?.count)

        }
      }
      fetchRoundedgraphDetails()


    } catch (error) {
      console.log(error)
    }


  }, [])
  return (
    <div>
      <div className="grid mb-4 pb-10 px-8 mx-4 mt-2 rounded-3xl bg-gray-100 border-4 border-real-blue">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">

              <div className="grid grid-cols-12 gap-6 mt-5">
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                      </svg>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.total_earnings}</div>
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

                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.total_profilt}</div>
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
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.total_domain_amount}</div>
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
                      <div className="bg-green-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">100%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.total_domain_amount}</div>
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

                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.total_subscription_amount}</div>
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
                      <div className="bg-yellow-500 rounded-full h-6 px-2 flex justify-items-center text-white font-semibold text-sm">
                        <span className="flex items-center">30%</span>
                      </div>
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">Rs {data?.subscriptions_profilt}</div>
                        <div className="mt-1 text-base text-gray-600">Total Subscription profit</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <HiUsers className="h-7 w-7 text-pink-600" />

                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">{data?.clients ?? 0}</div>
                        <div className="mt-1 text-base text-gray-600">Clients</div>
                      </div>
                    </div>
                  </div>
                </a>
                <a className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white" href="#">
                  <div className="p-5">
                    <div className="flex justify-between">
                      <GiTeacher className="h-7 w-7 text-pink-600" />
                    </div>
                    <div className="ml-2 w-full flex-1">
                      <div>
                        <div className="mt-3 text-3xl font-bold leading-8">{data?.experts ?? 0}</div>
                        <div className="mt-1 text-base text-gray-600">Experts</div>
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

          <div className="bg-white shadow-lg mr-3 ml-3 rounded-lg" id="chartline"><BarChart months={months} earnings={earnings} profits={profits} /></div>
          <div class="bg-white shadow-lg flex ml-3 pl-20 mr-3 rounded-lg" id="chartpie" style={{ height: '300px' }}><Doughnut count={count} /></div>

        </div>
      </div>
    </div>

  )
}


export default Dashboard