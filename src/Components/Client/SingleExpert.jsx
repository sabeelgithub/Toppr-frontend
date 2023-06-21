import React, { useEffect, useState } from 'react'
import dummyprofile from '../../Assets/profile4.jpg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSingleExpertDetails } from '../../Axios/Services/ClientServices'
import SubscriptionModal from './SubscriptionModal'
import {FaVideo} from 'react-icons/fa'

function SingleExpert() {
  const [Expert,setExpert] = useState('')
  const [Rating,setRating] = useState('')
  const [ShowSubscriptionModal,setShowSubscriptionModal] = useState(false)
 


  const { id } = useParams()
  const token = useSelector(state=>state.ClientReducer.accessToken)
  const alreadySubscribed = useSelector(state=>state.ClientReducer.subscription)

  
  
  useEffect(()=>{

    const fetchSigleExpert = async ()=>{
      const response = await getSingleExpertDetails(token,id)
      if(response){
        setExpert(response?.payload)
        setRating(response?.rating)


      }
    } 
    fetchSigleExpert()


  },[])

  const stars = [];

  for (let i = 1; i <= Rating?.count; i++) {
    stars.push(
      <svg
        key={i}
        aria-hidden="true"
        className="w-5 h-5 text-yellow-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }


  return (
    <>
    {ShowSubscriptionModal ? <SubscriptionModal expertID={id} domainID={Expert?.domain_id} domain_name={Expert.domain} expert_name={Expert?.username} setShowSubscriptionModal={setShowSubscriptionModal} />: ''}
      <div className='h-full pt-16 pb-16 bg-black '>
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-2  sm:grid-cols-1  w-3/4 bg-slate-500  h-full'>

            <div className=' h-96'>
              <img className='object-cover w-full h-full ' src={`http://127.0.0.1:8000/${Expert.profile_poto}`} alt="profile_poto" />
            </div>
            <div className='bg-stone-900 shadow-xl  h-96 items-center pt-7 pb-7'>
              <div className='p-5'>
                <p className='text-center text-white font-extrabold text-3xl uppercase mt-3'>{Expert?.username}</p>
                <h2 className='text-center text-yellow-400  font-semibold mt-2'>{Expert?.domain} expert</h2>
                <h3 className='text-center text-white break-words  font-serif mt-2'>{Expert?.email}</h3>


                <div className="flex items-center justify-center mt-3 ">{stars}</div>

                <p className='text-center text-xl text-white mt-4'>For your carrier support make  connection </p>
                <div className='flex justify-center mt-5'>
               {alreadySubscribed?.length !==0 && alreadySubscribed?.find((item)=>item.expert_id==Expert.id) ?  <button onClick={()=>{
                
              }} className="bg-green-500 hover:bg-green-700 text-white font-bold py-4 px-7 rounded-lg ">
              <div class="text-2xl">
              <FaVideo />
            </div>
                
              </button> :  <button onClick={()=>{
                setShowSubscriptionModal(!ShowSubscriptionModal)
              }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-lg ">
                Subscribe
              </button>}
                
                </div>

              </div>


            </div>
          </div>


        </div>
      </div>
    </>
  )
}

export default SingleExpert