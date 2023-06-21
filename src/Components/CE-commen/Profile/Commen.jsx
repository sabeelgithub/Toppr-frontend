import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import jwt from 'jwt-decode'
import { getClientProfile } from '../../../Axios/Services/ClientServices'
import { getExpertProfile } from '../../../Axios/Services/ExpertService'
import { HiUsers } from 'react-icons/hi'
import { FaPowerOff } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";


import { BiEdit, BiCategory } from "react-icons/bi";
import { useNavigate } from 'react-router-dom'
import Dashboard from './DashBoard'
import MyDomains from './Client/MyDomains'
import MyMentors from './Client/MyMentors'
import ClientEditModal from './Client/ClientEditModal'
import MyStudents from './Expert/MyStudents'
import ExpertEditModal from './Expert/ExpertEditModal'




function Commen() {
  const token_client = useSelector((state) => state.ClientReducer.accessToken)
  const token_expert = useSelector((state) => state.ExpertReducer.accessToken)

  const [Client, setClient] = useState('')
  const [Domains, setDomains] = useState([])
  const [MyTeachers, setMyTeachers] = useState([])
  const [Expert, setExpert] = useState('')
  const [Students, setStudents] = useState([])

  const [Options, setOptions] = useState(false)

  const [Component,setComponent] = useState('dashboard')
  const [ClientEdit,setClientEdit] = useState(false)
  const [ExpertEdit,setExpertEdit] = useState(false)
  const [Refresh,setRefresh] = useState(false)
  useEffect(() => {
    try {
      if (token_client) {
        const client = jwt(token_client)
        const clientProfile = async () => {
          const response = await getClientProfile(token_client, client?.user_id)
          if (response) {
            if (response?.MyDomains && response?.MyTeachers) {
              setClient(response?.payload)
              setDomains(response?.MyDomains)
              setMyTeachers(response?.MyTeachers)
            } else if (response?.MyDomains) {
              setClient(response?.payload)
              setDomains(response?.MyDomains)
            }

          }

        }
        clientProfile()

      } else if (token_expert) {
        const expert = jwt(token_expert)
        const expertProfile = async () => {
          const response = await getExpertProfile(token_expert, expert?.user_id)
          if (response) {
            if (response?.MyStudents) {
              setExpert(response?.payload)
              setStudents(response?.MyStudents)
            } else {
              setExpert(response?.payload)
            }
          }
        }
        expertProfile()

      }

    }
    catch (error) {
      console.log(error)
    }

  }, [Refresh])




  return (
    <>


       {ClientEdit ? <ClientEditModal Client={Client} setClientEdit={setClientEdit} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
       {ExpertEdit ? <ExpertEditModal Expert={Expert} setExpertEdit={setExpertEdit} Refresh={Refresh} setRefresh={setRefresh} /> : ''}
       <div className="h-full bg-gray-200 ">
        <div className="bg-black  shadow-xl pb-8">

          <div className="w-full  h-52 bg-emerald-400">

          </div>
          <div className="flex flex-col items-center -mt-20">

            {Expert && (
              <img src={`http://127.0.0.1:8000/${Expert.profile_poto}`} className="w-40 h-40 object-cover border-4 border-white rounded-full" alt="Expert Profile" />
            )}
            {Client && (
              <img src={Client?.profile_poto ? `http://127.0.0.1:8000/${Client.profile_poto}` : 'https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'} className="w-40 border-4 h-40 object-cover border-white rounded-full" alt="Client Profile" />
            )}

            <div className="flex items-center space-x-2 mt-2">
              {(Client || Expert) && (
                <p className="text-2xl text-white uppercase">
                  {Client?.username || Expert?.username}
                </p>
              )}
              <span className="bg-blue-500 rounded-full p-1" title="Verified">
                <svg xmlns="http://www.w3.org/2000/svg" className="text-gray-100 h-2.5 w-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                </svg>
              </span>
            </div>

            {Options && Expert ?
              <div className="bg-white absolute right-8 w-40  mt-64 border border-gray-200 shadow-2xl" >
                <div className="py-2 border-b">
                  <button onClick={()=>{
                    setComponent('dashboard')
                    localStorage.setItem('Component', 'dashboard');
                    setOptions(false)

                }} className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                    <CgProfile/>
                    <span className="text-sm text-gray-700">profile</span>
                  </button>
                  <button onClick={()=>{
                    setComponent('mystudents')
                    localStorage.setItem('Component', 'mystudents');
                    setOptions(false)

                }} className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                  <HiUsers />
                  <span className="text-sm text-gray-700">My Students</span>
                </button>
                  <button onClick={()=>{
                    setExpertEdit(!ExpertEdit)
                    setOptions(false)

                  }} className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                    <BiEdit />
                    <span className="text-sm text-gray-700">Edit profile</span>
                  </button>
                </div>
              </div> : ''}
            {Options && Client ?

              <div className="bg-white absolute right-8 w-40 py-2 mt-64 border border-gray-200 shadow-2xl" >
                <div className="py-2 ">
                    <button onClick={()=>{
                        setComponent('dashboard')
                        localStorage.setItem('Component', 'dashboard');
                        setOptions(false)
                    }} className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                    <CgProfile/>
                    <span className="text-sm text-gray-700">profile</span>
                </button>
                  <button onClick={()=>{
                    setComponent('mydomains')
                    localStorage.setItem('Component', 'mydomains');
                    setOptions(false)  
                  }} className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                    <BiCategory />
                    <span  className="text-sm text-gray-700">My Domains</span>
                  </button>
                  <button onClick={()=>{
                    setComponent('mymentors')
                    localStorage.setItem('Component', 'mymentors');
                    setOptions(false)  

                  }} className="w-full flex items-center py-1.5 px-6 space-x-2 hover:bg-gray-200">
                    <HiUsers />
                    <span className="text-sm text-gray-700">My Mentors</span>
                  </button>
                  <button onClick={()=>{
                    setClientEdit(!ClientEdit)
                    setOptions(false)
                  }} className="w-full flex items-center px-6 py-1.5 space-x-2 hover:bg-gray-200">
                    <BiEdit />
                    <span className="text-sm text-gray-700">Edit profile</span>
                  </button>
                </div>

              </div>
              : ''}

            {Expert && <p className=" text-white">{Expert.domain} Expert</p>}
          </div>

          <div className="flex-1 flex flex-col items-center lg:items-end justify-end px-8 mt-2">
            <div className="flex items-center space-x-4 mt-2">
              <button onClick={() => {
                setOptions(!Options)
              }} className="flex items-center bg-blue-600 hover:bg-blue-700 text-gray-100 px-4 py-2 rounded text-sm space-x-2 transition duration-100">

                <span>View More</span>
              </button>
            </div>
          </div>
        </div>
        
        {localStorage.getItem('Component')==='dashboard' ? <Dashboard Expert={Expert} Client={Client}/>:''}
        {localStorage.getItem('Component')==='mydomains' ? <MyDomains Domains={Domains} />:''}
        {localStorage.getItem('Component')==='mymentors' ? <MyMentors MyTeachers={MyTeachers} />:''}
        {localStorage.getItem('Component')==='mystudents' ? <MyStudents Students={Students} />:''}
        

      </div>
    </>

  )
}

export default Commen