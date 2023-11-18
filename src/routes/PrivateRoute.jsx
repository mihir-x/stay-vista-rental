/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/Shared/Loader";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()

    if(loading){
        return <Loader></Loader>
    }
    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate> //replace dile login kore desired location a dhokar por abar back button dile login page a ashbe na
    }
    return children
};

export default PrivateRoute;