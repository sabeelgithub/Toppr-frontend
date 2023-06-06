import { axiosAdminInstance } from "../Instances/Instance";

// get client list
export const getClientsList = async() =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
               
            }
        }
        const response = await axiosAdminInstance.get('clients/',config)
        return response.data
    }catch (error){
        console.log(error)
        console.log('some error occured')
    }
}

// get experts list
export const getExpertsList = async() =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
               
            }
        }
        const response = await axiosAdminInstance.get('experts/',config)
        return response.data
    }catch (error){
        console.log(error)
        console.log('some error occured')
    }
}

// blocking and unblocking experts
export const handleExpertStatus = async(values)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json", 
            }
        }
        const response = await axiosAdminInstance.patch('experts/',values,config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

// blocking and unblocking clients
export const handleClientStatus = async(values)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json", 
            }
        }
        const response = await axiosAdminInstance.patch('clients/',values,config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

// Pending Experts Apporoving
export const getPendingExperts = async()=>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
                
            }
        }
        const response = await axiosAdminInstance.get('pending-experts/',config)
        return response.data
        
    } catch (error) {
        console.log(error)
        
    }
}

// taking single pending expert
export const getSinglePendingExpert = async(id)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json",
            }
        }
        const response = await axiosAdminInstance.get(`single-pending-expert/${id}/`,config)
        return response.data

    }
    catch (error){
        console.log(error)

    }
}


// add expert an reject expert
export const handleAddExpertAndRejectExpert = async(id,data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.patch(`single-pending-expert/${id}/`,data,config)
        return response.data

    } 
    catch (error){
        console.log(error)
    }
}