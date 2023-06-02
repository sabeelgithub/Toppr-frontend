import axios from "axios";

export const axiosClientInstance = axios.create({baseURL:'http://localhost:8000/'})
