import { axiosClientInstance } from "../Instances/Instance";

// Registration
export const Register = async(values) =>{
    try {
        const config = {
            headers:{
                // "Content-type":"application/json",
                "Content-type":"multipart/formdata"
            }
        }
        const response = await axiosClientInstance.post('accounts/register/',values,config)
        return response.data
    }catch (error){
        console.log(error)
        console.log('some error occured')
    }
}

// Login
export const Login = async(values) =>{
    try {
        const config = {
            headers:{
                "Content-type":"application/json",
                
            }
        }
        const response = await axiosClientInstance.post('accounts/login/',values,config)
        return response.data
    }catch (error){
        console.log(error)
        console.log('some error occured')
    }
}

// getDomins
export const getDomains = async ()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosClientInstance.get('commen/domains/',config)
        return response.data

    }
    catch (error){
        console.log(error.message)
    }

}

// get experts
export const getExperts = async ()=>{
    try{
        const config ={
            headers:{
                "Content-type":"application/json"
            }
        }
        const response = await axiosClientInstance.get('commen/experts/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

export const getTutorials = async ()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"

            }
        }
        const response = await axiosClientInstance.get('commen/tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}

// sub-tutorial

export const getSubTutorials = async ()=>{
    try{
        const config = {
            headers:{
                "Content-type":"application/json"

            }
        }
        const response = await axiosClientInstance.get('commen/sub-tutorials/',config)
        return response.data

    }
    catch (error){
        console.log(error)
    }
}