import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { fetchCurrentUser } from "./userSlice"

const UserApp = () =>{
    console.log("in user app?")
    const dispatch = useDispatch()
    const {currentUser, fetchUserStatus} = useSelector(state => state.user)

    useEffect(()=>{
        if(!currentUser && fetchUserStatus==='idle')
            dispatch(fetchCurrentUser())
    }, [fetchUserStatus, dispatch])


    return null
}
export default UserApp