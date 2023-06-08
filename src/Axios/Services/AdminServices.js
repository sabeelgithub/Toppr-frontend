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


// add expert and reject expert
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

// get domain list
export const getDomains = async()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        
        const response = await axiosAdminInstance.get('domains/',config)
        return response.data


    }
    catch (error) {
        console.log(error)

    }
}

// delete Domain
export const DeleteDomains = async(id)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const data = {
            id:id
        }
        const response = await axiosAdminInstance.delete('domains/',{data},config)
        return response.data

    }
    catch (error){
        console.log(error)

    }
}

//add domain
export const AddDomain = async (data)=>{
    try{
        const config = {
            headers:{
              "Content-type":"multipart/formdata",
            }
        }
        const response = await axiosAdminInstance.post('domains/',data,config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

export const editDomains = async (data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"multipart/formdata",
            }
        }
        const response = await axiosAdminInstance.patch('domains/',data,config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
   
}

// get tutorials

export const getTutorial = async()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.get('tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }

}

// delete tutorial
export const DeleteTutorials = async(id)=>{

    try{
 
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
     
        const data = {
            id:id,
        }
        const response = await axiosAdminInstance.delete('tutorials/',{data},config)
        return response.data

    }
    catch (error){
        console.log(error.message,'message')
        
    }

}

export const AddTutorial = async (data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        
        const response = await axiosAdminInstance.post('tutorials/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// edit tutorial
export const EditTutorial = async (data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.patch('tutorials/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)

    }
}

// get sub-tutorials
export const getSubTutorials = async()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.get('sub-tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }

}

// delete sub-tutorial
export const DeleteSubTutorial = async(data)=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.delete('sub-tutorials/',{data},config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}

// add sub-tutorial
export const AddSubTutorial = async (data)=>{
    try{
        const config = {
            headers:{

            }
        }
        const response = await axiosAdminInstance.post('sub-tutorials/',data,config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

export const EditSubTutorial = async (data)=>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosAdminInstance.patch('sub-tutorials/',data,config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }
}
