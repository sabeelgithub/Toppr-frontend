import axios from "axios";

export const axiosClientInstance = axios.create({baseURL:'https://topprbackend.onrender.com/'})
export const axiosAdminInstance = axios.create({baseURL:'https://topprbackend.onrender.com/adminpanel/'})
export const axiosExpertInstance = axios.create({baseURL:'https://topprbackend.onrender.com/expert/'})

export const axiosInstance = 'https://topprbackend.onrender.com/'

