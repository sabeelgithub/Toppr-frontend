import React, { useEffect, useState } from 'react'
import { getDomains } from '../../../Axios/Services/CommenServices'
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DomainModal from './DomainModal';
import DomainSuccessModal from './DomainSuccessModal';

export default function Domain() {
    const [Domain,setDomain] = useState([])
    const [ShowDomainModal,setShowDomainModal] = useState(false)
    const [FindItem,setFindItem] = useState('')
    const [ShowDomainSuccessModal,setShowDomainSuccessModal] = useState(false)
    const navigate = useNavigate()

    const token = useSelector(state => state.ClientReducer.accessToken)
    useEffect(()=>{
        try{
            const fetchDomains = async()=>{
                const response = await getDomains()
                if(response){
                  setDomain(response?.payload)
                }
                
            }
            fetchDomains()


        }
        catch (error){
            console.log(error)
        }

    },[])

    const fetch = (id)=>{
      const selectedItem = Domain?.find((item)=>item.id==id)
      console.log(selectedItem)
      setFindItem(selectedItem)
    }

  return (
    <div className="flex items-center flex-wrap justify-center h-full pt-16 pb-16 bg-black">
    {ShowDomainModal ? <DomainModal setShowDomainModal={setShowDomainModal} FindItem={FindItem} setShowDomainSuccessModal={setShowDomainSuccessModal} /> : ''}
    {ShowDomainSuccessModal ? <DomainSuccessModal FindItem={FindItem} setShowDomainSuccessModal={setShowDomainSuccessModal}  /> : ''}
    {Domain?.length !== 0 ? Domain?.map((item)=>{
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
          if(token){
            setShowDomainModal(!ShowDomainModal)
            // setShowDomainSuccessModal(!ShowDomainSuccessModal)
            fetch(item.id)
          } else {
            toast.warning('Login Required')
            navigate('/login')
         

          } 
          
        }} href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Buy now</button>
      </div>
    </div>
  </div>

        )
    }) :   <div className='bg-black text-white text-center w-full font-extrabold text-3xl'>Currently No Domains Availabe, we will Update Soon </div> }

    </div>
  )
}
