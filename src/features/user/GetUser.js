import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const GetUser = ({setSpinner}) =>{
    console.log("in user app?")
    const dispatch = useDispatch()
    const {currentUser, fetchUserStatus} = useSelector(state => state.user)

    useEffect(()=>{
        if(!currentUser && fetchUserStatus==='idle')
            dispatch(fetchCurrentUser());

        if(fetchUserStatus === 'loading')
            setSpinner(true);

        else
            setSpinner(false);
    }, [fetchUserStatus, dispatch])


    return null
}
export default GetUser