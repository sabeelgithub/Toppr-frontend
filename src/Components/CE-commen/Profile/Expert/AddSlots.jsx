import React, { useState } from 'react'
import { useFormik } from 'formik'
import { isAfter } from 'date-fns';
import { SlotSchema } from '../../../../Validations/Slots/Slotvalidation'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import { expertAddSlots } from '../../../../Axios/Services/ExpertService'
import SlotInfoModal from './SlotInfoModal';

function AddSlots({ Students, expert_id, Slots, setRefresh, Refresh }) {
    const [ShowInfoModal,setShowInfoModal] = useState(false)
    const [FindItem,setFindItem] = useState('')
    const filter = Students.filter((item) => item.status === true)
    const count = filter?.length
    const token = useSelector((state) => state.ExpertReducer.accessToken)

    const onSubmit = async () => {
        // Split the start time and end time into hours and minutes
        const [startHour, startMinute] = values.startTime.split(':');
        const [endHour, endMinute] = values.endTime.split(':');
        // Create Date objects for the start time and end time
        const startDate = new Date();
        startDate.setHours(startHour, startMinute, 0, 0);
        const endDate = new Date();
        endDate.setHours(endHour, endMinute, 0, 0);
        // Calculate the difference in milliseconds
        const durationInMilliseconds = endDate - startDate;
        // Convert the duration to minutes
        const durationInMinutes = Math.floor(durationInMilliseconds / 60000);
        const diff = Math.floor(durationInMinutes / values.duration)

        if (diff >= count) {

            let slots = []
            let [startHour, startMinute] = values.startTime?.split(':');


            for (let i = 1; i <= diff; i++) {

                const startDate = new Date();
                startDate.setHours(startHour, startMinute, 0, 0);

                const endDate = new Date();
                let totalMinutesEnd = startDate.getMinutes() + +values.duration;

                if (totalMinutesEnd > 60) {
                    const extraHours = Math.floor(+totalMinutesEnd / 60);
                    const remainingMinutes = +totalMinutesEnd % 60;
                    const endHour = startDate.getHours() + +extraHours
                    const endMinute = remainingMinutes
                    endDate.setHours(endHour, endMinute, 0, 0);
                } else {
                    const endHour = startDate.getHours()
                    const endMinute = totalMinutesEnd
                    endDate.setHours(endHour, endMinute, 0, 0);
                }
                const formattedStartDate = `${startDate.getHours()}:${startDate.getMinutes() < 10 ? '0' : ''}${startDate.getMinutes()}`;
                const formattedEndDate = `${endDate.getHours()}:${endDate.getMinutes() < 10 ? '0' : ''}${endDate.getMinutes()}`;

                slots.push({
                    start_time: formattedStartDate,
                    end_time: formattedEndDate,
                    booked: false,
                    expert: expert_id,
                    duration: values.duration


                })
                startHour = endDate.getHours()
                startMinute = endDate.getMinutes()

            }

            const data = {
                array: slots
            }
            const response = await expertAddSlots(token, data)
            if (response) {
                setRefresh(!Refresh)
                toast.success(response?.message)
            } else {
                toast.error('something went wrong')
            }

        } else {
            toast.error(`This time is not enough for your ${count} students`)
        }
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
        useFormik({
            initialValues: {
                duration: "",
                startTime: "",
                endTime: ""

            },
            validationSchema: SlotSchema,
            onSubmit,
        })

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

    const slotFilter = (id)=>{
        const filter = Slots?.find((item)=>item.id === id)
        console.log(filter)
        setFindItem(filter)
    }

    return (
        <>
        {ShowInfoModal ? <SlotInfoModal FindItem={FindItem} setShowInfoModal={setShowInfoModal} expert_id={expert_id} /> : ''}
            <div className="mt-1 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className="w-full flex  flex-col  bg-black">
                    <div className="flex justify-center bg-black  shadow-xl p-8">
                        {Slots?.length === 0 && <form className='bg-emerald-400 rounded-2xl w-full md:w-1/3 pb-4' onSubmit={handleSubmit}>

                            <label className="mb-1 font-extrabold text-xl mt-5 block text-center text-black sm:text-xl">
                                MANAGE TOKENS
                            </label>
                            <p className='text-center text-gray-500'>(only can add slots once in a day)</p>
                            <p className='text-center mt-2 text-yellow-500 p-3'>It will automatically create number of tokens as per the time period and duration</p>
                            <div className="mb-5 pt-3 mt-1 flex justify-center">
                                <div className="-mx-3 md:p-0 w-3/5 md:w-full p-5 flex flex-wrap justify-center">
                                    <div className='px-3'>

                                        <div className=" ">
                                            <label
                                                for="time"
                                                className="mb-1 block text-base font-medium text-black"
                                            >
                                                Duration
                                            </label>
                                            <select
                                                className="select form-control rounded-lg w-40"
                                                name="duration"
                                                value={values.duration}
                                                onChange={handleChange}
                                                onBlur={handleBlur}

                                            ><option value=""></option>
                                                <option value="15">15 min</option>
                                                <option value="30">30 min</option>
                                                <option value="45">45 min</option>
                                                <option value="60">1 hr</option>
                                            </select>
                                            {errors.duration && touched.duration && (
                                                <p className="text-red-600">{errors.duration}</p>
                                            )}

                                        </div>


                                    </div>

                                    <div className='md:flex'>
                                        <div className=" px-3 mt-2">
                                            <div className=" ">

                                                <label
                                                    for="time"
                                                    className="mb-1 block text-base font-medium text-black"
                                                >
                                                    Start Time
                                                </label>
                                                <input
                                                    type="time"
                                                    name="startTime"
                                                    value={values.startTime}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    id="time"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] appearance-none outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                                {errors.startTime && touched.startTime && (
                                                    <p className="text-red-600">{errors.startTime}</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className=" px-3 mt-2 ">
                                            <div className="">

                                                <label
                                                    for="time"
                                                    className="mb-1 block text-base font-medium text-black"
                                                >
                                                    End Time
                                                </label>
                                                <input
                                                    type="time"
                                                    name="endTime"
                                                    value={values.endTime}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    id="time"
                                                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] appearance-none outline-none focus:border-[#6A64F1] focus:shadow-md"
                                                />
                                                {errors.endTime && touched.endTime && (
                                                    <p className="text-red-600">{errors.endTime}</p>
                                                )}
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div className='mb-3 w-full flex justify-center'>
                                <button
                                    type="submit"

                                    className="hover:shadow-form  rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                                    Submit
                                </button>
                            </div>
                        </form>}


                    </div>

                    {Slots.length === 0 ? <p className='text-center text-white mb-3 font-extrabold text-xl'>No slots for today</p> : <p className='text-center text-white mb-3 font-extrabold text-xl'>Available slots</p>}
                    <div className=' mb-6 flex justify-center flex-wrap '>
                        {Slots?.length === 0 ? <div><p className='text-center text-white mb-3 font-extrabold text-xl'>Add slots</p></div> :
                            Slots?.map((item) => {
                                return (
                                    <div>
                                        <div className={(item.booked && (expireHandle(item.end_time))) ? "bg-gray-500 h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold  pt-2 pb-3" : (item.booked && (!expireHandle(item.end_time))) ?  "bg-green-400 h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold pt-2 pb-3": (expireHandle(item.end_time) ? "bg-white h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold pt-2 pb-3" : "bg-red-400 h-9 w-36 m-5 mb-1 rounded-lg flex justify-center font-semibold pt-2 pb-3")}  
                                        onClick={() => {
                                            if (expireHandle(item.end_time) && item.booked === true) {
                                                setShowInfoModal(!ShowInfoModal)
                                                slotFilter(item.id)
                                            }
                                          }}
                                        ><p >{item.start_time.slice(0, 5)} - {item.end_time.slice(0, 5)}</p></div>
                                        {(item.booked && (expireHandle(item.end_time))) ? <p className='text-white text-center text-sm'>Booked</p> : (item.booked && (!expireHandle(item.end_time))) ? <p className='text-white text-center text-sm'>completed</p> : (expireHandle(item.end_time) ? <p className='text-white text-center text-sm'>Active</p> : <p className='text-white text-center text-sm'>Expired</p>)}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>


        </>
    )
}

export default AddSlots