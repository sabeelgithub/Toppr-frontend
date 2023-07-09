import axios from "axios";

export const axiosClientInstance = axios.create({baseURL:'https://topprbackend.onrender.com/'})
export const axiosAdminInstance = axios.create({baseURL:'https://topprbackend.onrender.com/adminpanel/'})
export const axiosExpertInstance = axios.create({baseURL:'https://topprbackend.onrender.com/expert/'})

export const axiosInstance = 'https://topprbackend.onrender.com'

// export const axiosClientInstance = axios.create({baseURL:'http://127.0.0.1:8000/'})
// export const axiosAdminInstance = axios.create({baseURL:'http://127.0.0.1:8000/adminpanel/'})
// export const axiosExpertInstance = axios.create({baseURL:'http://127.0.0.1:8000/expert/'})

// export const axiosInstance = 'http://127.0.0.1:8000'

