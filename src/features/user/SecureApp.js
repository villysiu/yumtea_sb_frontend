
import './user.css'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import FullSpinner from "./FullSpinner"
import {fetchCurrentUser} from './userSlice'

const SecureApp = () => {
    console.log("in secure")
    let location = useLocation();
    console.log(location)

    const {login_status} = useSelector(state => state.user)

    if(login_status !== 'succeeded'){
        return (
            <Navigate to="../user/signin"
            state = {location.state}
            />
        )
    }
    return(
        <Outlet />
    )
}
export default SecureApp