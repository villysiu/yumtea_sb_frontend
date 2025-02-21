
import './user.css'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import {Navigate, Outlet, useNavigate} from "react-router-dom"
import { useLocation } from "react-router-dom"
import FullSpinner from "./FullSpinner"
import {fetchCurrentUser} from './userSlice'
import {current} from "@reduxjs/toolkit";
import {homeLink} from "../../app/global";

const SecureApp = () => {
    console.log("SECURE")
    let location = useLocation();
    console.log(location)
    const navigate = useNavigate();

    const {currentUser} = useSelector(state => state.user)
    useEffect(()=>{
        if(currentUser === null)
            navigate('/user/signin', {state: location.pathname})

    }, [currentUser])

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