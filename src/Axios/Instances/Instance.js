import axios from "axios";

export const axiosClientInstance = axios.create({baseURL:'http://localhost:8000/'})
export const axiosAdminInstance = axios.create({baseURL:'http://localhost:8000/adminpanel/'})
