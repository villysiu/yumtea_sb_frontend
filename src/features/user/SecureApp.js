
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
    const dispatch = useDispatch()
    const current_user_status = useSelector(state => state.user.current_user.status)
    const user_token_status = useSelector(state => state.user.token.status)
    
    if(current_user_status !== 'succeeded'){
        if(user_token_status === 'succeeded')  
            return null
    
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