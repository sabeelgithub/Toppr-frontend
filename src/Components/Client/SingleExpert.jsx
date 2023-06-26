import React, { useEffect, useState } from 'react'
import dummyprofile from '../../Assets/profile4.jpg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getSingleExpertDetails } from '../../Axios/Services/ClientServices'
import SubscriptionModal from './SubscriptionModal'
import { FaVideo } from 'react-icons/fa'
import { isAfter } from 'date-fns';
import BookToken from './BookToken'
import jwt from 'jwt-decode'

function SingleExpert() {
  const [Expert, setExpert] = useState('')
  const [Rating, setRating] = useState('')
  const [ShowSubscriptionModal, setShowSubscriptionModal] = useState(false)
  const [Slots, setSlots] = useState([])


  const [ShowBookToken, setShowBookToken] = useState(false) // for booking token
  const [FindItem, setFindItem] = useState('')
  const [Refresh, setRefresh] = useState(false)

  const [Client_Already_Booked_Slot, setClient_Already_Booked_Slot] = useState([])

  const currentTime = new Date();

  const currentHourAndMinute = `${currentTime.getHours()}:${currentTime.getMinutes() < 10 ? '0' : ''}${currentTime.getMinutes()}`





  const { id } = useParams()
  const token = useSelector(state => state.ClientReducer.accessToken)
  const alreadySubscribed = useSelector(state => state.ClientReducer.subscription)
  const user = jwt(token)







  useEffect(() => {

    const fetchSigleExpert = async () => {
      const response = await getSingleExpertDetails(token, id, user.user_id)
      if (response) {
        if (response?.slots && response?.client_already_booked_slot) {
          setExpert(response?.payload)
          setRating(response?.rating)
          setSlots(response?.slots)
          const filtered_client_Booked_slots = response?.client_already_booked_slot?.filter((item) => item.end_time.slice(0, 5) >= currentHourAndMinute)
          setClient_Already_Booked_Slot(filtered_client_Booked_slots)

        } else if (response?.slots) {
          setExpert(response?.payload)
          setRating(response?.rating)
          setSlots(response?.slots)
        }
        else {
          setExpert(response?.payload)
          setRating(response?.rating)
        }


      }
    }
    fetchSigleExpert()


  }, [Refresh])







  // rating
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

  // expire / active / booked handle
  const expireHandle = (end_time) => {

    // Split the time string into hours, minutes, and seconds
    const [hours, minutes, seconds] = end_time.split(':');

    // Create a new Date object with the current date and the desired time
    const EndDate = new Date();
    EndDate.setHours(hours);
    EndDate.setMinutes(minutes);
    EndDate.setSeconds(seconds);
    return isAfter(EndDate, new Date())
  }

  const slotFilter = (id) => {
    const filter = Slots.find((item) => item.id === id)
    setFindItem(filter)

  }

  return (
    <>
      {ShowSubscriptionModal ? <SubscriptionModal expertID={id} domainID={Expert?.domain_id} domain_name={Expert.domain} expert_name={Expert?.username} setShowSubscriptionModal={setShowSubscriptionModal} /> : ''}

      {ShowBookToken ? <BookToken setShowBookToken={setShowBookToken} FindItem={FindItem} setRefresh={setRefresh} Refresh={Refresh} /> : ''}
      <div className='h-full pt-16 pb-16 bg-black '>
        <div className='flex justify-center'>
          <div className='grid md:grid-cols-2  sm:grid-cols-1  w-3/4 bg-slate-500  h-full'>

            <div className=' h-96'>
              <img className='object-cover w-full h-full ' src={`http://127.0.0.1:8000/${Expert?.profile_poto}`} alt="profile_poto" />
            </div>
            <div className='bg-stone-900 shadow-xl  h-96 items-center pt-7 pb-7'>
              <div className='p-5'>
                <p className='text-center text-white font-extrabold text-3xl uppercase mt-3'>{Expert?.username}</p>
                <h2 className='text-center text-yellow-400  font-semibold mt-2'>{Expert?.domain} expert</h2>
                <h3 className='text-center text-white break-words  font-serif mt-2'>{Expert?.email}</h3>


                <div className="flex items-center justify-center mt-3 ">{stars}</div>

                <p className='text-center text-xl text-white mt-3'>For your carrier support make  connection </p>
                <div className='flex justify-center sm:mt-2 md:mt-4'>
                  {alreadySubscribed?.length !== 0 && alreadySubscribed?.find((item) => item.expert_id == Expert?.id) ? <div> 
                  
                    {Client_Already_Booked_Slot.length && (Client_Already_Booked_Slot[0].start_time.slice(0,5) <= currentHourAndMinute && Client_Already_Booked_Slot[0].end_time.slice(0,5) >= currentHourAndMinute )? 
                  <button  className="bg-green-500 w-28 hover:bg-green-700 text-white font-bold h-14 py-2 px-3 rounded-lg ml-8">
                   <FaVideo className="mx-auto w-8 h-8"/>
                   
                  </button> :
                  <button  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-5 rounded-lg ml-8">
                    Book slot
                  </button> }
                 


                    {Client_Already_Booked_Slot.length && Client_Already_Booked_Slot.map((item) => {
                      return (
                        <div className="bg-gray-500 h-9 w-36 m-4 mb-1 rounded-lg flex justify-center font-semibold  pt-2 pb-3"> <p >{item.start_time.slice(0, 5)} - {item.end_time.slice(0, 5)}</p> </div>
                      )
                    })}

                  </div> : <button onClick={() => {
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
      {/*slots*/}
      {alreadySubscribed?.length !== 0 && alreadySubscribed?.find((item) => item.expert_id == Expert.id) ?
        <> {Slots?.length ? <p className='text-center  bg-black text-white font-extrabold text-2xl '>Available Slots for today</p> : <p className='text-center  bg-black text-white font-extrabold text-2xl pb-8' >No available slots</p>} </>

        : ''}

      <div className=' flex justify-center flex-wrap bg-black w-full pb-8'  >
        {alreadySubscribed?.length !== 0 && alreadySubscribed?.find((item) => item.expert_id == Expert.id) ? <div className=' flex justify-center flex-wrap bg-black w-full'>
          {Slots?.length !== 0 && Slots?.map((item) => {
            return (
              <div>
                <div className={item.booked ? "bg-gray-500 h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold  pt-2 pb-3" : (expireHandle(item.end_time) ? "bg-white h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold pt-2 pb-3" : "bg-red-400 h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold pt-2 pb-3")} 
                  onClick={() => {
                  if (expireHandle(item.end_time) && item.booked === false && !Client_Already_Booked_Slot.length) {
                    setShowBookToken(!ShowBookToken)
                    slotFilter(item.id)
                  }
                }} ><p >{item.start_time.slice(0, 5)} - {item.end_time.slice(0, 5)}</p> </div>
                {item.booked ? <p className='text-white text-center text-sm'>Booked</p> : (expireHandle(item.end_time) ? <p className='text-white text-center text-sm'>Active</p> : <p className='text-white text-center text-sm'>Expired</p>)}
              </div>
            )
          })}
        </div> : ''}
      </div>
    </>
  )
}

export default SingleExpert