
import './user.css'
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react'
import { Navigate, Outlet } from "react-router-dom"
import { useLocation } from "react-router-dom"
import FullSpinner from "../headerNav/FullSpinner"
import {fetchCurrentUser} from './userSlice'

const SecureApp = () => {
    console.log("in secure")
    let location = useLocation();
    console.log(location)
    const dispatch = useDispatch()
    const current_user = useSelector(state => state.user.current_user)


    // useEffect(()=>{
    //     if(localStorage.getItem("token") && current_user.username===null)
    //         dispatch(fetchCurrentUser())
    // }, [])


    // if(current_user.status === 'loading' 
    //     || (localStorage.getItem("token") && current_user.username===null)
    // )
    //     return <FullSpinner />
        
    if(
        // current_user.status === 'idle' || current_user.username === null || 
        current_user.status === 'failed'
    ){
        return (
            <Navigate to="../user/signin"
            state = {{'from': location.pathname}}
            />
        )
    }
    return(
        <Outlet />
    )
}
export default SecureApp