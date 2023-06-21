import axios from "axios";

export const axiosClientInstance = axios.create({baseURL:'http://localhost:8000/'})
export const axiosAdminInstance = axios.create({baseURL:'http://localhost:8000/adminpanel/'})
export const axiosExpertInstance = axios.create({baseURL:'http://localhost:8000/expert/'})
