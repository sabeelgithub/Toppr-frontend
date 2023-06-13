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


