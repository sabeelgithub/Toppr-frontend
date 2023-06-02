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