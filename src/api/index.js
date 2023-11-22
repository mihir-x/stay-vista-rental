import axios from "axios";
import { clearCookie } from "./Auth";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
})

//intercept response and check for unauthorized responses
axiosSecure.interceptors.response.use((response) => response, async(error) =>{
    console.log('intercepted error ', error.response)
    if(error.response && (error.response.status === 401 || error.response.status === 403)){
        await clearCookie()
        window.location.replace('/login')     //you cant use navigate in normal js file
    }
    return Promise.reject(error)
})

export default axiosSecure;