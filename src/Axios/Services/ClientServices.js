import { axiosClientInstance } from "../Instances/Instance";

export const getTutorials = async (token)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,

            }
        }
        const response = await axiosClientInstance.get('client/tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

// sub-tutorial

export const getSubTutorials = async (token)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,

            }
        }
        const response = await axiosClientInstance.get('client/sub-tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

export const domain_purchase = async (token,data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,


            }
        }
        const response = await axiosClientInstance.post('client/domain-purchase/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// get peticular domain with name for domain view page
export const getSingleDomain = async (token,domain_name)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,

            },
            params: {
                domain_name: domain_name,
            },

        }
        const response = await axiosClientInstance.get('client/single-domain/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}


// get experts to perticular domain

export const getExpertsToPerticularDomain = async(token,domain_name)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            params: {
                domain_name: domain_name,
            },
        }
        const response = await axiosClientInstance.get('client/domain-experts/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }

}

// get single experts details 

export const getSingleExpertDetails = async(token,id,user_id)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            params: {
                id: id,
                user_id:user_id
            },
        }
        const response = await axiosClientInstance('client/single-experts/',config)
        return response.data

        }
    catch (error){
        console.log(error.message)
    }
}


// subscribing experts
export const Subscribe = async (token,data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            }
        }
        const response = await axiosClientInstance.post('client/subscribe/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// client profile
export const getClientProfile = async (token,id)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            params:{
                id:id,
                person:'client'
            }
        }
        const response = await axiosClientInstance.get('client/profile/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// client profile
export const editClientProfile = async (token,data)=>{
   
    try{
        const config = {
            headers:{
                "Content-type": "multipart/formdata",
                Authorization: `Bearer ${token}`,
    
            },
            
        }
    const response = await axiosClientInstance.patch('client/profile/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}
// Token booking
export const TokenBooking = async (token,data)=>{
   
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            
        }
    const response = await axiosClientInstance.patch('client/slot-booking/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}
// rating
export const submitRating = async (token,count,id)=>{
    
   
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
                Authorization: `Bearer ${token}`,
    
            },
            
        }
        const data = {
          count:count,
          expert:id
        }
    const response = await axiosClientInstance.post('client/submit-rating/',data,config)
    return response.data

    }
    catch (error){
        console.log(error.message)
    }
}




