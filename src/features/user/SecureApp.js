
import './user.css'
import { useSelector } from "react-redux"
import { useEffect } from 'react'
import {Navigate, Outlet, useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom"


const SecureApp = () => {
    console.log("SECURE")
    let location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const {currentUser} = useSelector(state => state.user);

    useEffect(()=>{
        if(currentUser === null)
            navigate('/user/signin', {state: location.pathname})

    }, [currentUser, location.pathname, navigate])

    if(currentUser === null){
        return (
            <Navigate to="/user/signin"
            state = {location.pathname}
            />
        )
    }
    return(
        <Outlet />
    )
}
export default SecureApp