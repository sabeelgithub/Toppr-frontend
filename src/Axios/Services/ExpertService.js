import { axiosExpertInstance } from "../Instances/Instance";


// expert profile
export const getExpertProfile = async (token,id)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            params:{
                id:id,
                person:'expert'
            }
        }
        const response = await axiosExpertInstance.get('profile/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// update profile
export const editExpertProfile = async (token,data)=>{
   
    try{
        const config = {
            headers:{
                "Content-type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
    
            },
            
        }
    const response = await axiosExpertInstance.patch('profile/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// add slots
export const expertAddSlots = async (token,data)=>{
   
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            
        }
    const response = await axiosExpertInstance.post('slots/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// get booked slot details


export const getBookedSlotDetails = async (token,id)=>{
   
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            params:{
                id:id,
            }
            
        }
    const response = await axiosExpertInstance.get('slots/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}
