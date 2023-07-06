import React, { useEffect, useState } from "react";
import Mathspoto from '../../../Assets/Mahematics.avif'
import Biopoto from '../../../Assets/Biology.jpg'
import Statipoto from '../../../Assets/statistics.jpg'
import { getDomains } from "../../../Axios/Services/CommenServices";
import DomainModal from "../Domain/DomainModal";
import Experts from "../Experts/Experts";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import DomainSuccessModal from "../Domain/DomainSuccessModal";
import { axiosInstance } from '../../../Axios/Instances/Instance';




export default function Dark() {
  const [Domain, setDomain] = useState([])
  const [ShowDomainModal,setShowDomainModal] = useState(false)
  const [FindItem,setFindItem] = useState('')
  const [ShowDomainSuccessModal,setShowDomainSuccessModal] = useState(false)
  

  const client_token = useSelector(state => state.ClientReducer.accessToken)
  const expert_token = useSelector(state => state.ExpertReducer.accessToken)
  const navigate = useNavigate()

  const purchasedDomains = useSelector(state=>state.ClientReducer.purchased_domains)

  useEffect(() => {
    try {
      const fetchDomains = async() => {
        const response = await getDomains()
        console.log(response,'checkinh')

        if(response){
          setDomain(response?.payload)

        }

      }
      fetchDomains()

    }
    catch (error) {
      console.log(error)
    }
  }, [])

  const fetch = (id)=>{
    const selectedItem = Domain?.find((item)=>item.id==id)
    setFindItem(selectedItem)

  }
  return (

    <>
      <div>
        <div className="flex justify-center bg-black p-9">
        {ShowDomainModal ? <DomainModal setShowDomainModal={setShowDomainModal} FindItem={FindItem} setShowDomainSuccessModal={setShowDomainSuccessModal} /> : ''}
        {ShowDomainSuccessModal ? <DomainSuccessModal FindItem={FindItem} setShowDomainSuccessModal={setShowDomainSuccessModal}  /> : ''}
       
        {Domain?.length !== 0 ?  <h1 className="text-white font-extrabold text-4xl mt-5">Domains we offers</h1> :  <h1 className="text-white font-extrabold text-4xl mt-5">Coming Soon</h1>}
         
        </div>
      </div>
      <div className="w-full bg-black p-5  flex flex-nowrap justify-around overflow-x-scroll   pb-20 no-scrollbar">

        
        {Domain?.length !== 0 ? Domain?.map((item) => {
          const isFound = purchasedDomains?.find(obj => obj.domain_id === item?.id);
            
          if(isFound){

            return (
              <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className=" rounded-t-lg w-[380px] h-[380px]" src={`${axiosInstance}${item.image}`}  alt="product image" />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{item.domain_name}</h5>
                  </a>
  
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{item.price}</span>
                    <button onClick={()=>{
                      if(client_token){
                        fetch(item.id)
                        navigate(`/domain/${item.domain_name}`)
                      } else if (expert_token){
                        toast.warning('You cant Purchase Domain,because your are an Expert')
                        navigate('/')
                      } else {
                        toast.warning('Login Required')
                        navigate('/login')
                      } 
                      
                    }} href="#" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">View</button>
                  </div>
                </div>
              </div>
            )

          }
          else{
            return (
              <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img className=" rounded-t-lg w-[380px] h-[380px] " src={`http://127.0.0.1:8000/${item.image}`} alt="product image" />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">{item.domain_name}</h5>
                  </a>
  
                  <div className="flex items-center justify-between mt-5">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{item.price}</span>
                    <button onClick={()=>{
                      if(client_token){
                        fetch(item.id)
                        setShowDomainModal(!ShowDomainModal)
                      } else if (expert_token){
                        toast.warning('You cant Purchase Domain,because your are a Expert')
                        navigate('/')
                      } else {
                        toast.warning('Login Required')
                        navigate('/login')
                      } 
                      
                    }} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</button>
                  </div>
                </div>
              </div>
            )

          }
        

        }) : <div className="flex">
           <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className=" rounded-t-lg w-[380px] h-[380px] " src={Mathspoto} alt="product image" />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">Mathematics</h5>
      </a>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹299</span>
        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
      </div>
    </div>
  </div>
  <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className=" rounded-t-lg w-[380px] h-[380px] " src={Biopoto} alt="product image" />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">Biology</h5>
      </a>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹299</span>
        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
      </div>
    </div>
  </div>
  <div className="min-w-[380px] bg-white border m-8 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img className=" rounded-t-lg w-[380px] h-[380px] " src={Statipoto} alt="product image" />
    </a>
    <div className="px-5 pb-5">
      <a href="#">
        <h5 className="mt-4 text-xl font-semibold tracking-tight text-gray-900 dark:text-white truncate">Statistics</h5>
      </a>

      <div className="flex items-center justify-between mt-5">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">₹299</span>
        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</a>
      </div>
    </div>
  </div>
        </div>}

      </div>
     
      <div className="flex justify-center bg-black">
      <p className=" text-white font-extrabold text-4xl">Experts</p>
      </div> 

      {<Experts/>}

    </>
  );
}