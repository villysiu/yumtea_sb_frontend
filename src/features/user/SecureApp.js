
import './user.css'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import FullSpinner from "./FullSpinner"
import {fetchCurrentUser} from './userSlice'

const SecureApp = () => {
    console.log("SECURE")
    let location = useLocation();
    console.log(location)

    const {currentUser} = useSelector(state => state.user)

    if(currentUser === null){
        return (
            <Navigate to="../user/signin"
            state = {location.pathname}
            />
        )
    }
    return(
        <Outlet />
    )
}
export default SecureApp