import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

const BASE_URL = apiUrl;
const axiosConfig = axios.create({
    baseURL: BASE_URL,
})

const token = apiKey; 
axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${token}`;

axiosConfig.defaults.headers.common["Content-Type"] = "application/json"
axiosConfig.defaults.headers.Accept = "application/json"
export { axiosConfig }